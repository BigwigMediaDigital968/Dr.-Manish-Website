"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface Blog {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  featuredImage?: { url: string; alt: string };
  author: string;
  category: string;
  tags: string[];
  status: "draft" | "published";
  featured: boolean;
  metaTitle?: string;
  metaDescription?: string;
  createdAt?: string;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

const CATEGORIES = ["SEO", "Content", "Social", "PPC"];
const PER_PAGE = 8;

const emptyForm = {
  title: "",
  slug: "",
  excerpt: "",
  author: "",
  category: "SEO",
  tags: "",
  status: "draft" as "draft" | "published",
  featured: false,
  metaTitle: "",
  metaDescription: "",
};

function toSlug(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

export default function BlogManagement() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: PER_PAGE,
    total: 0,
    pages: 1,
  });
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [deletingBlog, setDeletingBlog] = useState<Blog | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [form, setForm] = useState(emptyForm);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  // Fetch blogs
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filterStatus) params.set("status", filterStatus);
      if (filterCategory) params.set("category", filterCategory);
      if (search) params.set("search", search);
      params.set("page", String(currentPage));
      params.set("limit", String(PER_PAGE));

      const res = await fetch(`/api/blogs?${params.toString()}`);
      const data = await res.json();
      console.log("blog")
      if (data.success) {
        setBlogs(data.data);
        setPagination(data.pagination);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterStatus, filterCategory, currentPage]);

  // Debounce search
  useEffect(() => {
    const t = setTimeout(() => {
      setCurrentPage(1);
      fetchBlogs();
    }, 400);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  // Form handlers
  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name === "title" && !editingBlog) {
      setForm((prev) => ({ ...prev, slug: toSlug(value) }));
    }
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverFile(file);
    setCoverPreview(URL.createObjectURL(file));
  };

  const openCreate = () => {
    setEditingBlog(null);
    setForm(emptyForm);
    setCoverFile(null);
    setCoverPreview("");
    setModalOpen(true);
  };

  const openEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setForm({
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      author: blog.author,
      category: blog.category,
      tags: blog.tags.join(", "),
      status: blog.status,
      featured: blog.featured,
      metaTitle: blog.metaTitle || "",
      metaDescription: blog.metaDescription || "",
    });
    setCoverFile(null);
    setCoverPreview(blog.featuredImage?.url || "");
    setModalOpen(true);
  };

  const openDelete = (blog: Blog) => {
    setDeletingBlog(blog);
    setDeleteModal(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setDeleteModal(false);
    setEditingBlog(null);
    setDeletingBlog(null);
  };

  const saveBlog = async () => {
    if (!form.title.trim()) return;
    setSaving(true);
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("slug", form.slug || toSlug(form.title));
      fd.append("excerpt", form.excerpt);
      fd.append("author", form.author);
      fd.append("category", form.category);
      fd.append("status", form.status);
      fd.append("featured", String(form.featured));
      fd.append("tags", JSON.stringify(form.tags.split(",").map((t) => t.trim()).filter(Boolean)));
      fd.append("metaTitle", form.metaTitle);
      fd.append("metaDescription", form.metaDescription);
      fd.append("metaKeywords", JSON.stringify([]));
      fd.append("featuredImageAlt", form.title);
      fd.append("content", ""); // editor content passed separately in full implementation
      if (coverFile) fd.append("featuredImage", coverFile);

      const url = editingBlog
        ? `/api/blogs/${editingBlog.slug}`
        : "/api/blogs";
      const method = editingBlog ? "PUT" : "POST";

      const res = await fetch(url, { method, body: fd });
      const data = await res.json();
      if (data.success) {
        closeModal();
        fetchBlogs();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const confirmDelete = async () => {
    if (!deletingBlog) return;
    setDeleting(true);
    try {
      await fetch(`/api/blogs/${deletingBlog.slug}`, { method: "DELETE" });
      closeModal();
      fetchBlogs();
    } catch (err) {
      console.error(err);
    } finally {
      setDeleting(false);
    }
  };

  const toggleStatus = async (blog: Blog) => {
    const newStatus = blog.status === "draft" ? "published" : "draft";
    const fd = new FormData();
    fd.append("status", newStatus);
    await fetch(`/api/blogs/${blog.slug}`, { method: "PUT", body: fd });
    fetchBlogs();
  };

  return (
    <div>
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h2 className="text-lg font-medium text-slate-800">Blog management</h2>
        
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div className="flex flex-wrap gap-3">
            <input
          type="text"
          placeholder="Search title or slug…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-slate-200 rounded-xl px-3 py-2 text-sm w-56 focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
        />
        <select
          value={filterStatus}
          onChange={(e) => { setFilterStatus(e.target.value); setCurrentPage(1); }}
          className="border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
        >
          <option value="">All status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
        <select
          value={filterCategory}
          onChange={(e) => { setFilterCategory(e.target.value); setCurrentPage(1); }}
          className="border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
        >
          <option value="">All categories</option>
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        </div>
        <Link
        //   onClick={openCreate}
        href={"blogs/add"}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white"
          style={{
            background: "linear-gradient(90deg, #1fa8e8, #6dbb45)",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          New blog
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide w-[28%]">Title</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide w-[20%]">Slug</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide w-[13%]">Category</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide w-[17%]">Status</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide w-[12%]">Date</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-slate-500 uppercase tracking-wide w-[10%]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={6} className="text-center py-10 text-slate-400">Loading…</td></tr>
              ) : blogs.length === 0 ? (
                <tr><td colSpan={6} className="text-center py-10 text-slate-400">No blogs found</td></tr>
              ) : (
                blogs.map((blog) => (
                  <tr key={blog._id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-medium text-slate-800 truncate max-w-[200px]">{blog.title}</p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-slate-400 font-mono text-xs truncate max-w-[150px]">/{blog.slug}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {blog.category}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                          blog.status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-slate-100 text-slate-500"
                        }`}>
                          {blog.status}
                        </span>
                        {blog.featured && (
                          <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">
                            featured
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-400">
                      {blog.createdAt ? blog.createdAt.slice(0, 10) : "—"}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        {/* Edit */}
                        <Link
                        href={`blogs/${blog.slug}/edit`}
                          // onClick={() => openEdit(blog)}
                          title="Edit"
                          className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 012.828 2.828L11.828 15.828a2 2 0 01-1.414.586H9v-2a2 2 0 01.586-1.414z" /></svg>
                        </Link>
                        {/* Toggle publish */}
                        <button
                          onClick={() => toggleStatus(blog)}
                          title={blog.status === "draft" ? "Publish" : "Unpublish"}
                          className="w-8 h-8 flex items-center cursor-pointer justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-green-50 hover:text-green-700 hover:border-green-200 transition-colors"
                        >
                          {blog.status === "draft" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88L6.59 6.59m7.532 7.532l3.29 3.29M3 3l18 18" /></svg>
                          )}
                        </button>
                        {/* Delete */}
                        <button
                          onClick={() => openDelete(blog)}
                          title="Delete"
                          className="w-8 h-8 flex items-center cursor-pointer justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100 flex-wrap gap-3">
            <span className="text-xs text-slate-400">{pagination.total} blog{pagination.total !== 1 ? "s" : ""}</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentPage((p) => p - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1.5 text-xs border border-slate-200 rounded-lg disabled:opacity-40 hover:bg-slate-50 cursor-pointer"
              >
                ←
              </button>
              {Array.from({ length: pagination.pages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1.5 text-xs border rounded-lg cursor-pointer ${
                    currentPage === i + 1
                      ? "text-white border-[#1fa8e8]"
                      : "border-slate-200 hover:bg-slate-50"
                  }`}
                  style={currentPage === i + 1 ? { background: "#1fa8e8" } : {}}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => p + 1)}
                disabled={currentPage === pagination.pages}
                className="px-3 py-1.5 text-xs border border-slate-200 rounded-lg disabled:opacity-40 hover:bg-slate-50 cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Create / Edit Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h3 className="text-base font-medium text-slate-800">
                {editingBlog ? "Edit blog" : "New blog"}
              </h3>
              <button onClick={closeModal} className="text-slate-400 hover:text-slate-600 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="px-6 py-5 space-y-4">
              {/* Title */}
              <div>
                <label className="block text-xs text-slate-500 mb-1">Title <span className="text-red-400">*</span></label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleFormChange}
                  placeholder="Blog title"
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
                />
              </div>

              {/* Slug */}
              <div>
                <label className="block text-xs text-slate-500 mb-1">Slug</label>
                <input
                  name="slug"
                  value={form.slug}
                  onChange={handleFormChange}
                  placeholder="auto-generated-from-title"
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
                />
              </div>

              {/* Category + Author */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Category</label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleFormChange}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
                  >
                    {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Author</label>
                  <input
                    name="author"
                    value={form.author}
                    onChange={handleFormChange}
                    placeholder="Author name"
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-xs text-slate-500 mb-1">Excerpt</label>
                <textarea
                  name="excerpt"
                  value={form.excerpt}
                  onChange={handleFormChange}
                  placeholder="Short description (max 300 chars)"
                  rows={3}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
                />
              </div>

              {/* Status + Tags */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Status</label>
                  <select
                    name="status"
                    value={form.status}
                    onChange={handleFormChange}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Tags (comma separated)</label>
                  <input
                    name="tags"
                    value={form.tags}
                    onChange={handleFormChange}
                    placeholder="seo, content, tips"
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
                  />
                </div>
              </div>

              {/* Featured toggle */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="featured"
                  checked={form.featured}
                  onChange={handleFormChange}
                  className="w-4 h-4 accent-[#1fa8e8]"
                />
                <span className="text-sm text-slate-600">Mark as featured</span>
              </label>

              {/* Cover image */}
              <div>
                <label className="block text-xs text-slate-500 mb-1">Cover image</label>
                <div
                  onClick={() => fileRef.current?.click()}
                  className="flex items-center gap-2 border border-dashed border-slate-300 rounded-xl px-4 py-3 cursor-pointer hover:border-[#1fa8e8] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                  <span className="text-sm text-slate-400">
                    {coverFile ? coverFile.name : "Choose cover image…"}
                  </span>
                </div>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleCoverChange}
                />
                {coverPreview && (
                  <img
                    src={coverPreview}
                    alt="Cover preview"
                    className="mt-2 w-full h-32 object-cover rounded-xl border border-slate-200"
                  />
                )}
              </div>

              {/* Meta */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Meta title</label>
                  <input
                    name="metaTitle"
                    value={form.metaTitle}
                    onChange={handleFormChange}
                    placeholder="SEO title (max 60)"
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">Meta description</label>
                  <input
                    name="metaDescription"
                    value={form.metaDescription}
                    onChange={handleFormChange}
                    placeholder="SEO description (max 160)"
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 px-6 py-4 border-t border-slate-100">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-xl text-sm border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={saveBlog}
                disabled={saving}
                className="px-5 py-2 rounded-xl text-sm font-medium text-white disabled:opacity-60 cursor-pointer"
                style={{ background: "linear-gradient(90deg,#1fa8e8,#6dbb45)" }}
              >
                {saving ? "Saving…" : editingBlog ? "Save changes" : "Create blog"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModal && deletingBlog && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </div>
            <h3 className="text-base font-medium text-slate-800 mb-1">Delete blog?</h3>
            <p className="text-sm text-slate-500 mb-5">
              &ldquo;{deletingBlog.title}&rdquo; will be permanently deleted along with its cover image from Cloudinary.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-xl text-sm border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleting}
                className="px-5 py-2 rounded-xl text-sm font-medium text-white bg-red-500 hover:bg-red-600 disabled:opacity-60 cursor-pointer"
              >
                {deleting ? "Deleting…" : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}