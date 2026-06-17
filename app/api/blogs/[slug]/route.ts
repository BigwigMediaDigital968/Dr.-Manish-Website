import cloudinary, { uploadToCloudinary } from "@/app/lib/cloudinary";
import Blog from "@/app/lib/models/Blog";
import { connectDB } from "@/app/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: Promise<{ slug: string }>;
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    await connectDB();

    const blog = await Blog.findOne({ slug: slug });

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}

// PUT /api/blogs/[slug] — Update blog
// PUT /api/blogs/[slug] — accepts multipart/form-data
export async function PUT(req: NextRequest, { params }: Params) {
  try {
    await connectDB();
    const { slug } = await params;


    const existing = await Blog.findOne({ slug: slug });
    if (!existing) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    const formData = await req.formData();

    // Parse fields (only override if provided)
    const getRaw = (key: string) => formData.get(key) as string | null;

    const updates: any = {};

    if (getRaw("title")) updates.title = getRaw("title");
    if (getRaw("slug")) updates.slug = getRaw("slug")!.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
    if (getRaw("excerpt")) updates.excerpt = getRaw("excerpt");
    if (getRaw("content")) updates.content = getRaw("content");
    if (getRaw("author")) updates.author = getRaw("author");
    if (getRaw("category")) updates.category = getRaw("category");
    if (getRaw("status")) updates.status = getRaw("status");
    if (getRaw("featured")) updates.featured = getRaw("featured") === "true";
    if (getRaw("tags")) updates.tags = JSON.parse(getRaw("tags") || "[]");
    if (getRaw("metaTitle")) updates.metaTitle = getRaw("metaTitle");
    if (getRaw("metaDescription")) updates.metaDescription = getRaw("metaDescription");
    if (getRaw("metaKeywords")) updates.metaKeywords = JSON.parse(getRaw("metaKeywords") || "[]");
    if (getRaw("structuredData")) updates.structuredData = getRaw("structuredData");

    const faqs = getRaw("faqs");
    if (faqs) {
      updates.faqs = JSON.parse(faqs);
    }
    console.log(updates);

    // Set publishedAt when draft → published
    if (updates.status === "published" && existing.status === "draft") {
      updates.publishedAt = new Date();
    }

    // Handle cover image replacement
    const coverFile = formData.get("featuredImage") as File | null;
    if (coverFile && coverFile.size > 0) {

      // Delete old image from Cloudinary
      if (existing.featuredImage?.url) {
        const urlParts = existing.featuredImage.url.split("/");
        const fileName = urlParts[urlParts.length - 1].split(".")[0];
        await cloudinary.uploader.destroy(`blogs/covers/${fileName}`).catch(() => { });
      }

      // Upload new cover
      const result = await uploadToCloudinary(coverFile, "blogs/covers");
      const imageAlt = getRaw("featuredImageAlt") || updates.title || existing.title;
      updates.featuredImage = { url: result.secure_url, alt: imageAlt };
    }

    const updated = await Blog.findOneAndUpdate(
      { slug: slug },
      { $set: updates },
      { returnDocument: 'after', runValidators: true }
    );

    return NextResponse.json({ success: true, data: updated });
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

// DELETE /api/blogs/[slug] — Delete blog + remove image from Cloudinary
export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    await connectDB();
    const { slug } = await params;
    const blog = await Blog.findOne({ slug: slug });
    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    // Delete image from Cloudinary if exists
    if (blog.featuredImage?.url) {
      // Extract public_id from URL: .../blogs/filename → blogs/filename
      const urlParts = blog.featuredImage.url.split("/");
      const fileName = urlParts[urlParts.length - 1].split(".")[0];
      const public_id = `blogs/${fileName}`;
      await cloudinary.uploader.destroy(public_id).catch(() => { });
    }

    await Blog.findOneAndDelete({ slug: slug });

    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}