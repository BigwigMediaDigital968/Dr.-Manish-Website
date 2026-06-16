import mongoose, { Schema, Document, Model } from "mongoose";
export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: {
    url: string;
    alt: string;
  };
  author: string;
  category: string;
  tags: string[];
  status?: "draft" | "published" | string;
  featured: boolean;
  // SEO
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  // JSON-LD / Custom Schema
  structuredData?: string;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
const BlogSchema = new Schema<IBlog>(
  {
    // Content
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    excerpt: {
      type: String,
      required: true,
      maxlength: 300,
    },
    content: {
      type: String,
      required: true,
    },
    featuredImage: {
      url: {
        type: String,
        default: "",
      },
      alt: {
        type: String,
        default: "",
      },
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      index: true,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    // Publishing
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
      index: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
    },
    // SEO
    metaTitle: {
      type: String,
      maxlength: 60,
    },
    metaDescription: {
      type: String,
      maxlength: 160,
    },
    metaKeywords: [
      {
        type: String,
        trim: true,
      },
    ],
    // JSON-LD / Schema Markup
    structuredData: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
// Indexes
BlogSchema.index({ slug: 1 });
BlogSchema.index({ category: 1 });
BlogSchema.index({ tags: 1 });
BlogSchema.index({ publishedAt: -1 });
BlogSchema.index({ title: "text", excerpt: "text", content: "text" });
const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
export default Blog;