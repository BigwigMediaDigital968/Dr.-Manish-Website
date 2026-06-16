import cloudinary, { uploadToCloudinary } from "@/app/lib/cloudinary";
import Blog from "@/app/lib/models/Blog";
import { connectDB } from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";



// POST /api/blogs — accepts multipart/form-data
export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();

    // Parse JSON fields
    const title         = formData.get("title") as string;
    const slug          = formData.get("slug") as string;
    const excerpt       = formData.get("excerpt") as string;
    const content       = formData.get("content") as string;
    const author        = formData.get("author") as string;
    const category      = formData.get("category") as string;
    const status        = (formData.get("status") as string) || "draft";
    const featured      = formData.get("featured") === "true";
    const tags          = JSON.parse((formData.get("tags") as string) || "[]");
    const metaTitle     = formData.get("metaTitle") as string;
    const metaDesc      = formData.get("metaDescription") as string;
    const metaKeywords  = JSON.parse((formData.get("metaKeywords") as string) || "[]");
    const structuredData = formData.get("structuredData") as string;
    const imageAlt      = (formData.get("featuredImageAlt") as string) || title;

    // Required field check
    if (!title || !excerpt || !content || !author || !category) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Auto-generate slug if not provided
    const finalSlug = slug
      ? slug.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-")
      : title.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

    // Handle cover image upload
    let featuredImage = { url: "", alt: "" };
    const coverFile = formData.get("featuredImage") as File | null;

    if (coverFile && coverFile.size > 0) {
      const result = await uploadToCloudinary(coverFile, "blogs/covers");
      featuredImage = { url: result.secure_url, alt: imageAlt };
    }

    const blogData = {
      title,
      slug: finalSlug,
      excerpt,
      content,
      author,
      category,
      status,
      featured,
      tags,
      featuredImage,
      metaTitle,
      metaDescription: metaDesc,
      metaKeywords,
      structuredData,
      ...(status === "published" && { publishedAt: new Date() }),
    };

    const blog = await Blog.create(blogData);
    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, message: "Slug already exists" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}