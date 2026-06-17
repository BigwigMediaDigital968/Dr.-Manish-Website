import Blog from "@/app/lib/models/Blog";
import { connectDB } from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

// GET /api/blogs/related?slug=current-blog-slug&limit=3
//
// Strategy:
// 1. Exclude the current blog itself (by slug)
// 2. Only return published posts
// 3. Score by relevance: same category = stronger match, shared tags = weaker match
// 4. Rank: (category match) first, tie-broken by number of shared tags, then most recent
//
// Optional query params (if you want to call it without an existing post,
// e.g. from a category listing page):
//   category=SEO
//   tags=seo,marketing   (comma separated)
export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const slug     = searchParams.get("slug");
    const limit    = parseInt(searchParams.get("limit") || "3");

    let category = searchParams.get("category");
    let tags: string[] = (searchParams.get("tags") || "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    // If a slug is provided, derive category/tags from that blog
    let currentId = null;
    if (slug) {
      const current = await Blog.findOne({ slug }).select("category tags _id");
      if (!current) {
        return NextResponse.json(
          { success: false, message: "Reference blog not found" },
          { status: 404 }
        );
      }
      category = category || current.category;
      tags = tags.length ? tags : current.tags;
      currentId = current._id;
    }

    if (!category && tags.length === 0) {
      return NextResponse.json(
        { success: false, message: "Provide slug, category, or tags" },
        { status: 400 }
      );
    }

    const baseQuery: any = {
      status: "published",
      ...(currentId && { _id: { $ne: currentId } }),
      ...(slug && !currentId ? {} : {}),
    };
    if (slug) baseQuery.slug = { $ne: slug };

    // Build an $or so we catch category matches OR tag overlaps,
    // then rank in application code (Mongo text scoring would need a
    // text index across category+tags which isn't worth it here).
    const orConditions: any[] = [];
    if (category) orConditions.push({ category });
    if (tags.length) orConditions.push({ tags: { $in: tags } });

    const candidates = await Blog.find({
      ...baseQuery,
      $or: orConditions,
    })
      .select("title slug excerpt featuredImage category tags author createdAt publishedAt")
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(limit * 4) // pull extra so we can re-rank, then trim
      .lean();

    // Re-rank: category match wins, then by number of overlapping tags
    const ranked = candidates
      .map((b: any) => {
        const sharedTags = tags.length
          ? b.tags.filter((t: string) => tags.includes(t)).length
          : 0;
        const categoryMatch = category && b.category === category ? 1 : 0;
        return { ...b, _score: categoryMatch * 10 + sharedTags };
      })
      .sort((a, b) => b._score - a._score)
      .slice(0, limit);

    return NextResponse.json({ success: true, data: ranked });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}