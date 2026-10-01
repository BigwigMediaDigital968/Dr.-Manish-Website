import type { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";
import BlogDetailsPage from "./BlogDetailsPage";
import Navbar from "@/app/component/website/Navbar";
import Footer from "@/app/component/website/Footer";
import Blog from "@/app/lib/models/Blog";
import { connectDB } from "@/app/lib/mongodb";
import { BUSINESS, DOCTOR, SITE_URL } from "@/app/lib/constants/business";

type Props = {
    params: Promise<{ slug: string }>;
};

// Shared by generateMetadata and the page — React cache runs the query once per request
const getPost = cache(async (slug: string) => {
    await connectDB();
    const blog = await Blog.findOne({ slug, status: "published" }).lean();
    // Plain JSON so it can be passed to the client component
    return blog ? JSON.parse(JSON.stringify(blog)) : null;
});

const stripHtml = (html: string) =>
    html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

// Escape "<" so content can't close the <script> tag early
const toJsonLd = (data: unknown) =>
    JSON.stringify(data).replace(/</g, "\\u003c");

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return { title: "Blog not found", robots: { index: false } };

    const url = `${SITE_URL}/blogs/${post.slug}`;
    const title = post.metaTitle || `${post.title} | ${DOCTOR.name}`;
    const description = post.metaDescription || post.excerpt;
    const image = post.featuredImage?.url || `${SITE_URL}${BUSINESS.logo}`;
    const imageAlt = post.featuredImage?.alt || post.title;

    return {
        title,
        description,
        keywords: post.metaKeywords?.length ? post.metaKeywords : post.tags,
        authors: [{ name: post.author }],
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            siteName: BUSINESS.siteName,
            locale: BUSINESS.locale,
            type: "article",
            publishedTime: post.publishedAt || post.createdAt,
            modifiedTime: post.updatedAt,
            authors: [post.author],
            tags: post.tags,
            images: [{ url: image, alt: imageAlt }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}

export default async function page({ params }: Props) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    const url = `${SITE_URL}/blogs/${post.slug}`;
    const description = post.metaDescription || post.excerpt;
    const faqs: { question: string; answer: string }[] = post.faqs ?? [];

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": `${url}#article`,
                mainEntityOfPage: { "@type": "WebPage", "@id": url },
                headline: post.title,
                description,
                ...(post.featuredImage?.url && {
                    image: {
                        "@type": "ImageObject",
                        url: post.featuredImage.url,
                        caption: post.featuredImage.alt || post.title,
                    },
                }),
                datePublished: post.publishedAt || post.createdAt,
                dateModified: post.updatedAt,
                inLanguage: "en-IN",
                ...(post.tags?.length && { keywords: post.tags.join(", ") }),
                ...(post.tags?.length && { articleSection: post.tags[0] }),
                author: {
                    "@type": post.author === DOCTOR.name ? "Physician" : "Person",
                    name: post.author,
                    ...(post.author === DOCTOR.name && { url: `${SITE_URL}/about` }),
                },
                publisher: {
                    "@type": "MedicalOrganization",
                    name: BUSINESS.name,
                    url: SITE_URL,
                    logo: {
                        "@type": "ImageObject",
                        url: `${SITE_URL}${BUSINESS.logo}`,
                    },
                },
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${url}#breadcrumb`,
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE_URL}/blogs` },
                    { "@type": "ListItem", position: 3, name: post.title, item: url },
                ],
            },
            ...(faqs.length > 0
                ? [
                      {
                          "@type": "FAQPage",
                          "@id": `${url}#faq`,
                          mainEntity: faqs.map((faq) => ({
                              "@type": "Question",
                              name: stripHtml(faq.question),
                              acceptedAnswer: {
                                  "@type": "Answer",
                                  text: stripHtml(faq.answer),
                              },
                          })),
                      },
                  ]
                : []),
        ],
    };

    // Custom schema entered in the admin panel — skipped if it isn't valid JSON
    let customSchema: unknown = null;
    if (post.structuredData?.trim()) {
        try {
            customSchema = JSON.parse(post.structuredData);
        } catch {
            customSchema = null;
        }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }}
            />
            {customSchema !== null && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: toJsonLd(customSchema) }}
                />
            )}
            <Navbar />
            <main className="">
                <BlogDetailsPage post={post} />
            </main>
            <Footer />
        </>
    );
}
