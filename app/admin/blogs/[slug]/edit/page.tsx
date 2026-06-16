import BlogFormPage from "@/app/admin/components/BlogFormPage";

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogFormPage slug={params.slug} />;
}