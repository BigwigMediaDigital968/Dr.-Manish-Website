"use client";

// Usage:
//   <BlogFormPage />              → Add new blog
//   <BlogFormPage slug="my-post" /> → Edit existing blog

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { RichTextEditor, RichTextEditorHandle } from "./Richtexteditor";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BlogForm {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string;
  status: "draft" | "published";
  featured: boolean;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  structuredData: string;
  faqs: { id: string; question: string; answer: string }[];
}

type ImageModalTab = "url" | "upload";

// ─── Constants ────────────────────────────────────────────────────────────────

const CATEGORIES = ["SEO", "Content", "Social", "PPC", "Technology", "Health", "Lifestyle"];

const EMPTY_FORM: BlogForm = {
  title: "", slug: "", excerpt: "", author: "", category: "SEO",
  tags: "", status: "draft", featured: false, metaTitle: "",
  metaDescription: "", metaKeywords: "", structuredData: "",
  faqs: [],
};

function toSlug(str: string) {
  return str.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const UploadIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z" /></svg>;
const CloseIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>;

// ─── Image Insert Modal ───────────────────────────────────────────────────────

function ImageModal({
  onClose,
  onInsert,
}: {
  onClose: () => void;
  onInsert: (url: string, alt: string) => void;
}) {
  const [tab, setTab] = useState<ImageModalTab>("upload");
  const [urlInput, setUrlInput] = useState("");
  const [altText, setAltText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setError("");
  };

  const handleInsert = async () => {
    setError("");
    if (tab === "url") {
      if (!urlInput.trim()) { setError("Please enter an image URL."); return; }
      onInsert(urlInput.trim(), altText.trim());
      return;
    }
    if (!file) { setError("Please select an image file."); return; }
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      console.log("fd", fd)
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Upload failed");
      onInsert(data.url, altText.trim() || file.name);
    } catch (err: any) {
      console.log(err);
      setError(err.message || "Upload failed. Try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <h3 className="text-sm font-medium text-slate-800">Insert image</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 cursor-pointer"><CloseIcon /></button>
        </div>

        <div className="flex border-b border-slate-100">
          {(["upload", "url"] as ImageModalTab[]).map((t) => (
            <button
              key={t}
              onClick={() => { setTab(t); setError(""); }}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors cursor-pointer ${tab === t ? "text-[#1fa8e8] border-b-2 border-[#1fa8e8]" : "text-slate-500 hover:text-slate-700"
                }`}
            >
              {t === "upload" ? "Upload from device" : "Image URL"}
            </button>
          ))}
        </div>

        <div className="p-5 space-y-4">
          {tab === "upload" ? (
            <>
              <div
                onClick={() => fileRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${preview ? "border-[#1fa8e8]" : "border-slate-200 hover:border-[#1fa8e8]"
                  }`}
              >
                {preview ? (
                  <img src={preview} alt="preview" className="max-h-40 mx-auto rounded-lg object-contain" />
                ) : (
                  <div className="space-y-2">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                      <UploadIcon />
                    </div>
                    <p className="text-sm text-slate-500">Click to choose an image</p>
                    <p className="text-xs text-slate-400">PNG, JPG, GIF, WebP</p>
                  </div>
                )}
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
              </div>
              {file && <p className="text-xs text-slate-400 truncate">{file.name}</p>}
            </>
          ) : (
            <div>
              <label className="block text-xs text-slate-500 mb-1">Image URL</label>
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
              />
              {urlInput && (
                <img src={urlInput} alt="preview" className="mt-3 max-h-32 rounded-lg object-contain mx-auto" onError={(e) => (e.currentTarget.style.display = "none")} />
              )}
            </div>
          )}

          <div>
            <label className="block text-xs text-slate-500 mb-1">Alt text</label>
            <input
              type="text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Describe the image for accessibility"
              className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
            />
          </div>

          {error && <p className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg">{error}</p>}
        </div>

        <div className="flex justify-end gap-3 px-5 py-4 border-t border-slate-100">
          <button onClick={onClose} className="px-4 py-2 rounded-xl text-sm border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer">
            Cancel
          </button>
          <button
            onClick={handleInsert}
            disabled={uploading}
            className="px-5 py-2 rounded-xl text-sm font-medium text-white disabled:opacity-60 cursor-pointer"
            style={{ background: "linear-gradient(90deg,#1fa8e8,#6dbb45)" }}
          >
            {uploading ? "Uploading…" : "Insert image"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Link Modal ───────────────────────────────────────────────────────────────

function LinkModal({
  initial,
  onClose,
  onInsert,
  onRemove,
}: {
  initial: string;
  onClose: () => void;
  onInsert: (url: string) => void;
  onRemove: () => void;
}) {
  const [url, setUrl] = useState(initial);
  return (
    <div
      className="fixed inset-0 bg-black/40 z-[60] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5">
        <h3 className="text-sm font-medium text-slate-800 mb-4">Insert link</h3>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          autoFocus
          className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
        />
        <div className="flex justify-between gap-2">
          {initial && (
            <button onClick={onRemove} className="px-3 py-2 rounded-xl text-sm text-red-500 border border-red-200 hover:bg-red-50 cursor-pointer">
              Remove
            </button>
          )}
          <div className="flex gap-2 ml-auto">
            <button onClick={onClose} className="px-4 py-2 rounded-xl text-sm border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer">Cancel</button>
            <button
              onClick={() => url && onInsert(url)}
              className="px-4 py-2 rounded-xl text-sm font-medium text-white cursor-pointer"
              style={{ background: "linear-gradient(90deg,#1fa8e8,#6dbb45)" }}
            >
              Insert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

interface BlogFormPageProps {
  slug?: string;
}


// ─── FAQ Editor ───────────────────────────────────────────────────────────────

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

function FAQList({
  faqs,
  onChange,
}: {
  faqs: FaqItem[];
  onChange: (faqs: FaqItem[]) => void;
}) {
  const [collapsed, setCollapsed] = useState(true);

  const addFaq = () => {
    onChange([...faqs, { id: crypto.randomUUID(), question: "", answer: "" }]);
    setCollapsed(false);
  };

  const updateFaq = (id: string, field: "question" | "answer", value: string) => {
    onChange(faqs.map((f) => (f.id === id ? { ...f, [field]: value } : f)));
  };

  const removeFaq = (id: string) => {
    onChange(faqs.filter((f) => f.id !== id));
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
      <button
        type="button"
        onClick={() => setCollapsed((c) => !c)}
        className="w-full flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-medium text-slate-700">FAQs</h2>
          {faqs.length > 0 && (
            <span className="text-xs text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">
              {faqs.length}
            </span>
          )}
        </div>
        <svg
          viewBox="0 0 24 24"
          className={`w-4 h-4 text-slate-400 transition-transform ${collapsed ? "" : "rotate-180"}`}
          fill="currentColor"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>

      {!collapsed && (
        <div className="mt-4 space-y-3">
          {faqs.length === 0 && (
            <p className="text-xs text-slate-400">No FAQs yet. Add one below.</p>
          )}
          {faqs.map((faq, i) => (
            <div key={faq.id} className="border border-slate-200 rounded-xl p-3 space-y-2 relative">
              <button
                type="button"
                onClick={() => removeFaq(faq.id)}
                className="absolute top-2 right-2 text-slate-300 hover:text-red-500 cursor-pointer"
                title="Remove FAQ"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
              <label className="block text-xs text-slate-400">Question {i + 1}</label>
              <input
                value={faq.question}
                onChange={(e) => updateFaq(faq.id, "question", e.target.value)}
                placeholder="e.g. How long does this take?"
                className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
              />
              <textarea
                value={faq.answer}
                onChange={(e) => updateFaq(faq.id, "answer", e.target.value)}
                placeholder="Answer"
                rows={2}
                className="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
              />
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={addFaq}
        className="mt-3 w-full py-2 rounded-xl text-sm border border-dashed border-slate-200 text-slate-500 hover:border-[#1fa8e8] hover:text-[#1fa8e8] transition-colors cursor-pointer"
      >
        + Add FAQ
      </button>
    </div>
  );
}

export default function BlogFormPage({ slug }: BlogFormPageProps) {
  const router = useRouter();
  const isEdit = Boolean(slug);
  console.log("slug", isEdit, slug)

  const [form, setForm] = useState<BlogForm>(EMPTY_FORM);
  const [editorContent, setEditorContent] = useState("");   // HTML from RichTextEditor
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState("");
  const [fetchingBlog, setFetchingBlog] = useState(isEdit);
  const coverRef = useRef<HTMLInputElement>(null);

  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [linkModalOpen, setLinkModalOpen] = useState(false);
  const [currentLinkUrl, setCurrentLinkUrl] = useState("");
  const editorRef = useRef<RichTextEditorHandle>(null);

  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saved" | "error">("idle");

  // ── Fetch existing blog in edit mode ──
  useEffect(() => {
    if (!isEdit || !slug) return;
    (async () => {
      setFetchingBlog(true);
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        const data = await res.json();
        if (!data.success) throw new Error("Not found");
        const b = data.data;
        setForm({
          title: b.title ?? "",
          slug: b.slug ?? "",
          excerpt: b.excerpt ?? "",
          author: b.author ?? "",
          category: b.category ?? "SEO",
          tags: (b.tags ?? []).join(", "),
          status: b.status ?? "draft",
          featured: b.featured ?? false,
          metaTitle: b.metaTitle ?? "",
          metaDescription: b.metaDescription ?? "",
          metaKeywords: (b.metaKeywords ?? []).join(", "),
          structuredData: b.structuredData ?? "",
          faqs: (b.faqs ?? []).map((f: any) => ({
            id: f.id ?? crypto.randomUUID(),
            question: f.question ?? "",
            answer: f.answer ?? "",
          })),
        });
        if (b.content) setEditorContent(b.content);
        if (b.featuredImage?.url) setCoverPreview(b.featuredImage.url);
      } catch (err) {
        console.error("Failed to load blog:", err);
      } finally {
        setFetchingBlog(false);
      }
    })();
  }, [isEdit, slug]);

  // ── Form handlers ──
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setForm((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "title" ? { slug: toSlug(value) } : {}),
    }));
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setCoverFile(f);
    setCoverPreview(URL.createObjectURL(f));
  };

  // ── Submit ──
  const handleSubmit = async (status: "draft" | "published") => {
    if (!form.title.trim() || !form.excerpt.trim() || !form.author.trim()) {
      alert("Title, excerpt and author are required.");
      return;
    }
    setSaving(true);
    setSaveStatus("idle");
    try {
      const fd = new FormData();
      fd.append("title", form.title);
      fd.append("slug", form.slug || toSlug(form.title));
      fd.append("excerpt", form.excerpt);
      fd.append("content", editorContent);
      fd.append("author", form.author);
      fd.append("category", form.category);
      fd.append("status", status);
      fd.append("featured", String(form.featured));
      fd.append("tags", JSON.stringify(form.tags.split(",").map((t) => t.trim()).filter(Boolean)));
      fd.append("metaTitle", form.metaTitle);
      fd.append("metaDescription", form.metaDescription);
      fd.append("metaKeywords", JSON.stringify(form.metaKeywords.split(",").map((k) => k.trim()).filter(Boolean)));
      fd.append("structuredData", form.structuredData);
      fd.append("featuredImageAlt", form.title);
      fd.append(
        "faqs",
        JSON.stringify(
          form.faqs
            .filter((f) => f.question.trim() && f.answer.trim())
            .map(({ question, answer }) => ({ question, answer }))
        )
      );
      if (coverFile) fd.append("featuredImage", coverFile);

      const url = isEdit ? `/api/blogs/${slug}` : "/api/blogs";
      const method = isEdit ? "PUT" : "POST";
      const res = await fetch(url, { method, body: fd });
      const data = await res.json();

      if (data.success) {
        setSaveStatus("saved");
        setTimeout(() => router.push("/admin/blogs"), 1000);
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      console.error(err);
      setSaveStatus("error");
    } finally {
      setSaving(false);
    }
  };

  if (fetchingBlog) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-sm text-slate-400">Loading blog…</p>
      </div>
    );
  }

  return (
    <div className="max-w-8xl mx-auto py-6 px-4 space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-xl font-semibold text-slate-800">
            {isEdit ? "Edit blog" : "Add new blog"}
          </h1>
          <p className="text-sm text-slate-400 mt-0.5">
            {isEdit ? "Update the content and save your changes" : "Fill in all the details and publish when ready"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {saveStatus === "saved" && (
            <span className="text-sm text-green-600 bg-green-50 px-3 py-1.5 rounded-xl">
              {isEdit ? "Changes saved!" : "Published!"}
            </span>
          )}
          {saveStatus === "error" && (
            <span className="text-sm text-red-500 bg-red-50 px-3 py-1.5 rounded-xl">Something went wrong</span>
          )}
          <button
            onClick={() => handleSubmit("draft")}
            disabled={saving}
            className="px-4 py-2 cursor-pointer rounded-xl text-sm border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-50 "
          >
            {saving ? "Saving…" : "Save draft"}
          </button>
          <button
            onClick={() => handleSubmit("published")}
            disabled={saving}
            className="px-5 py-2 rounded-xl text-sm font-medium text-white disabled:opacity-60 cursor-pointer"
            style={{ background: "linear-gradient(90deg,#1fa8e8,#6dbb45)" }}
          >
            {saving ? "Saving…" : isEdit ? "Save changes" : "Publish"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
        {/* ── LEFT column ── */}
        <div className="space-y-5">

          {/* Title */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <label className="block text-xs text-slate-500 mb-1">
              Title <span className="text-red-400">*</span>
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter your blog title"
              className="w-full text-lg font-medium border-0 outline-none text-slate-800 placeholder:text-slate-300"
            />
            <div className="mt-3 pt-3 border-t border-slate-100">
              <label className="block text-xs text-slate-500 mb-1">Slug</label>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-slate-400">/blog/</span>
                <input
                  name="slug"
                  value={form.slug}
                  onChange={handleChange}
                  placeholder="auto-generated"
                  className="flex-1 font-mono text-slate-600 border-0 outline-none"
                />
              </div>
            </div>
          </div>

          {/* ── Rich Text Editor (separated component) ── */}
          <RichTextEditor
            ref={editorRef}
            content={editorContent}
            onChange={setEditorContent}
            placeholder="Start writing your blog content here…"
            onImageClick={() => setImageModalOpen(true)}
            onLinkClick={() => {
              setCurrentLinkUrl(editorRef.current?.getLinkUrl() ?? "");
              setLinkModalOpen(true);
            }}
          />

          {/* Excerpt */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <label className="block text-xs text-slate-500 mb-1">
              Excerpt <span className="text-red-400">*</span>
              <span className="ml-1 text-slate-300">({form.excerpt.length}/300)</span>
            </label>
            <textarea
              name="excerpt"
              value={form.excerpt}
              onChange={handleChange}
              maxLength={300}
              rows={3}
              placeholder="A short description shown in blog listings and SEO previews"
              className="w-full text-sm text-slate-700 border-0 outline-none resize-none placeholder:text-slate-300"
            />
          </div>

          {/* SEO */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
            <h2 className="text-sm font-medium text-slate-700">SEO settings</h2>
            <div>
              <label className="block text-xs text-slate-500 mb-1">
                Meta title <span className="ml-1 text-slate-300">({form.metaTitle.length}/60)</span>
              </label>
              <input
                name="metaTitle"
                value={form.metaTitle}
                onChange={handleChange}
                maxLength={60}
                placeholder="Defaults to blog title if empty"
                className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">
                Meta description <span className="ml-1 text-slate-300">({form.metaDescription.length}/160)</span>
              </label>
              <textarea
                name="metaDescription"
                value={form.metaDescription}
                onChange={handleChange}
                maxLength={160}
                rows={2}
                placeholder="Shown in search engine results"
                className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">Meta keywords (comma separated)</label>
              <input
                name="metaKeywords"
                value={form.metaKeywords}
                onChange={handleChange}
                placeholder="seo, blogging, marketing"
                className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">Structured data (JSON-LD)</label>
              <textarea
                name="structuredData"
                value={form.structuredData}
                onChange={handleChange}
                rows={4}
                placeholder={'{"@context":"https://schema.org","@type":"Article",...}'}
                className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm font-mono resize-y focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
              />
            </div>
          </div>
          <FAQList faqs={form.faqs} onChange={(faqs) => setForm((p) => ({ ...p, faqs }))} />

        </div>

        {/* ── RIGHT sidebar ── */}
        <div className="space-y-5">

          {/* Publish settings */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
            <h2 className="text-sm font-medium text-slate-700">Publishing</h2>
            <div>
              <label className="block text-xs text-slate-500 mb-1">Status</label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">Author <span className="text-red-400">*</span></label>
              <input
                name="author"
                value={form.author}
                onChange={handleChange}
                placeholder="Author name"
                className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
              />
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="featured"
                checked={form.featured}
                onChange={handleChange}
                className="w-4 h-4 accent-[#1fa8e8]"
              />
              <span className="text-sm text-slate-600">Mark as featured</span>
            </label>
          </div>

          {/* Category & Tags */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
            <h2 className="text-sm font-medium text-slate-700">Categorisation</h2>
            <div>
              <label className="block text-xs text-slate-500 mb-1">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
              >
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">Tags (comma separated)</label>
              <input
                name="tags"
                value={form.tags}
                onChange={handleChange}
                placeholder="seo, tips, marketing"
                className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1fa8e8]"
              />
              {form.tags && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {form.tags.split(",").filter((t) => t.trim()).map((tag) => (
                    <span key={tag} className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Cover image */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <h2 className="text-sm font-medium text-slate-700 mb-3">Cover image</h2>
            <div
              onClick={() => coverRef.current?.click()}
              className={`border-2 border-dashed rounded-xl cursor-pointer transition-colors overflow-hidden ${coverPreview ? "border-[#1fa8e8]" : "border-slate-200 hover:border-[#1fa8e8]"
                }`}
            >
              {coverPreview ? (
                <div className="relative group">
                  <img src={coverPreview} alt="Cover" className="w-full h-44 object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-medium">Change image</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 gap-2">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                    <UploadIcon />
                  </div>
                  <p className="text-sm text-slate-400">Click to upload cover</p>
                  <p className="text-xs text-slate-300">PNG, JPG, WebP — uploaded to Cloudinary</p>
                </div>
              )}
            </div>
            <input
              ref={coverRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleCoverChange}
            />
            {coverFile && <p className="text-xs text-slate-400 mt-2 truncate">{coverFile.name}</p>}
          </div>

          {/* Quick submit card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3">
            <button
              onClick={() => handleSubmit("published")}
              disabled={saving}
              className="w-full py-2.5 rounded-xl text-sm font-medium text-white disabled:opacity-60 cursor-pointer"
              style={{ background: "linear-gradient(90deg,#1fa8e8,#6dbb45)" }}
            >
              {saving ? "Saving…" : isEdit ? "Save changes" : "Publish now"}
            </button>
            <button
              onClick={() => handleSubmit("draft")}
              disabled={saving}
              className="w-full py-2.5 rounded-xl text-sm border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-50 cursor-pointer"
            >
              {isEdit ? "Save as draft" : "Save as draft"}
            </button>
          </div>
        </div>
      </div>

      {/* ── Modals ── */}
      {imageModalOpen && (
        <ImageModal
          onClose={() => setImageModalOpen(false)}
          onInsert={(url, alt) => {
            editorRef.current?.insertImage(url, alt);
            setImageModalOpen(false);
          }}
        />
      )}
      {linkModalOpen && (
        <LinkModal
          initial={currentLinkUrl}
          onClose={() => setLinkModalOpen(false)}
          onInsert={(url) => {
            editorRef.current?.setLink(url);
            setLinkModalOpen(false);
          }}
          onRemove={() => {
            editorRef.current?.unsetLink();
            setLinkModalOpen(false);
          }}
        />
      )}
    </div>
  );
}