import BlogFormPage from "@/app/admin/components/BlogFormPage";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <BlogFormPage slug={slug} />;
}