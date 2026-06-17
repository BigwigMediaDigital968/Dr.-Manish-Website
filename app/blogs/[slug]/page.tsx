// app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import BlogDetailsPage from "./BlogDetailsPage";
import Navbar from "@/app/component/website/Navbar";
import Footer from "@/app/component/website/Footer";

async function getPost(slug: string) {
    console.log("a")
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs/${slug}`);
    // console.log(res)
    if (!res.ok) {
        return null;
    }

    return res.json();
}

export default async function page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    // console.log(slug)

    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="">
                <BlogDetailsPage post={post.data} />
            </main>
            <Footer />
        </>
    );
}