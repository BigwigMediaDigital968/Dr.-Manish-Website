"use client";

// ─── RichTextEditor.tsx ───────────────────────────────────────────────────────
// A fully-featured standalone rich-text editor built on Tiptap.
// Supports: text styles (P / H1-H6), font sizes, font family, bold, italic,
// underline, strikethrough, highlight (multi-color), text color, inline code,
// code block, subscript, superscript, alignment, bullet/ordered lists, blockquote,
// HR, link, image (via prop callback), undo/redo, word/char count.
//
// Props:
//   content       – HTML string (controlled)
//   onChange      – called with new HTML on every change
//   onImageClick  – called when the image toolbar button is clicked
//   onLinkClick   – called when the link toolbar button is clicked
//   placeholder   – editor placeholder text

import { useCallback, useEffect, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import CharacterCount from "@tiptap/extension-character-count";
import FontFamily from "@tiptap/extension-font-family";
import { Extension } from "@tiptap/core";

// ─── FontSize extension (Tiptap doesn't ship one, so we roll a small one) ────
const FontSize = Extension.create({
    name: "fontSize",
    addOptions() {
        return { types: ["textStyle"] };
    },
    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default: null,
                        parseHTML: (el) => el.style.fontSize || null,
                        renderHTML: (attrs) =>
                            attrs.fontSize ? { style: `font-size:${attrs.fontSize}` } : {},
                    },
                },
            },
        ];
    },
    addCommands() {
        return {
            setFontSize:
                (size: string) =>
                    ({ chain }: any) =>
                        chain().setMark("textStyle", { fontSize: size }).run(),
            unsetFontSize:
                () =>
                    ({ chain }: any) =>
                        chain().setMark("textStyle", { fontSize: null }).run(),
        } as any;
    },
});

// ─── Types ────────────────────────────────────────────────────────────────────
export interface RichTextEditorHandle {
    getHTML: () => string;
    setContent: (html: string) => void;
    editor: ReturnType<typeof useEditor>;
}

interface RichTextEditorProps {
    content?: string;
    onChange?: (html: string) => void;
    onImageClick?: () => void;
    onLinkClick?: () => void;
    placeholder?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const FONT_SIZES = ["10px", "11px", "12px", "13px", "14px", "15px", "16px", "18px", "20px", "22px", "24px", "28px", "32px", "36px", "42px", "48px", "56px", "64px", "72px"];
const FONT_FAMILIES = [
    { label: "Default", value: "" },
    { label: "Sans-serif", value: "ui-sans-serif, system-ui, sans-serif" },
    { label: "Serif", value: "Georgia, serif" },
    { label: "Mono", value: "ui-monospace, monospace" },
    { label: "Arial", value: "Arial, sans-serif" },
    { label: "Times New Roman", value: "'Times New Roman', serif" },
    { label: "Courier New", value: "'Courier New', monospace" },
];

const TEXT_STYLES = [
    { label: "Paragraph", tag: "p" as const, level: undefined },
    { label: "Heading 1", tag: "h" as const, level: 1 },
    { label: "Heading 2", tag: "h" as const, level: 2 },
    { label: "Heading 3", tag: "h" as const, level: 3 },
    { label: "Heading 4", tag: "h" as const, level: 4 },
    { label: "Heading 5", tag: "h" as const, level: 5 },
    { label: "Heading 6", tag: "h" as const, level: 6 },
];

// ─── Toolbar sub-components ───────────────────────────────────────────────────
function ToolBtn({
    onClick, active, title, disabled, children,
}: {
    onClick: () => void; active?: boolean; title: string; disabled?: boolean; children: React.ReactNode;
}) {
    return (
        <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); onClick(); }}
            disabled={disabled}
            title={title}
            className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm transition-colors disabled:opacity-40 ${active ? "bg-[#1fa8e8] text-white" : "text-slate-600 hover:bg-slate-100"
                }`}
        >
            {children}
        </button>
    );
}

function Divider() {
    return <div className="w-px h-5 bg-slate-200 mx-0.5 flex-shrink-0" />;
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const Icons = {
    Bold: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M6 4h8a4 4 0 0 1 0 8H6zM6 12h9a4 4 0 0 1 0 8H6z" /></svg>,
    Italic: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M10 4v2h2.5l-3 12H7v2h7v-2h-2.5l3-12H17V4z" /></svg>,
    Underline: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M5 21h14v-2H5v2zM12 17a6 6 0 0 0 6-6V3h-2v8a4 4 0 0 1-8 0V3H6v8a6 6 0 0 0 6 6z" /></svg>,
    Strike: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M17.154 14c.23.516.346 1.09.346 1.72 0 1.342-.524 2.392-1.571 3.147C14.88 19.622 13.433 20 11.586 20c-1.64 0-3.263-.381-4.87-1.144V16.6c1.52.877 3.075 1.316 4.666 1.316 2.551 0 3.83-.732 3.839-2.197a2.21 2.21 0 0 0-.648-1.603l-.12-.116H3v-2h18v2h-3.846zM11.26 5c-0.927 0-1.66.243-2.197.73-.538.486-.806 1.144-.806 1.974 0 .64.161 1.173.484 1.6.323.428.805.77 1.446 1.026l2.86 1.092c.1-.022.203-.044.305-.069H20v2H3v-2H4.5a6.9 6.9 0 0 1-.362-.606C3.713 10.17 3.5 9.375 3.5 8.5c0-1.457.548-2.61 1.645-3.46C6.242 4.192 7.647 3.8 9.36 3.8c1.455 0 2.916.39 4.38 1.17l-1.08 1.7c-1.19-.583-2.267-.87-3.4-.87z" /></svg>,
    Code: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /></svg>,
    CodeBlock: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M20 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H4V5h16v14zM6.293 15.707l1.414 1.414L12 12.828l-4.293-4.293-1.414 1.414L9.172 12l-2.879 2.879zm5.707.293h6v-2h-6v2z" /></svg>,
    BulletList: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zM8 6h12v2H8zm0 5h12v2H8zm0 5h12v2H8z" /></svg>,
    OrderedList: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H8zm0 14h14v-2H8v2zm0-6h14v-2H8v2z" /></svg>,
    Blockquote: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" /></svg>,
    Hr: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M20 11H4v2h16z" /></svg>,
    AlignLeft: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M3 3h18v2H3zM3 7h12v2H3zM3 11h18v2H3zM3 15h12v2H3zM3 19h18v2H3z" /></svg>,
    AlignCenter: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M3 3h18v2H3zM6 7h12v2H6zM3 11h18v2H3zM6 15h12v2H6zM3 19h18v2H3z" /></svg>,
    AlignRight: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M3 3h18v2H3zM9 7h12v2H9zM3 11h18v2H3zM9 15h12v2H9zM3 19h18v2H3z" /></svg>,
    AlignJustify: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M3 3h18v2H3zM3 7h18v2H3zM3 11h18v2H3zM3 15h18v2H3zM3 19h18v2H3z" /></svg>,
    Link: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z" /></svg>,
    Image: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" /></svg>,
    Highlight: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.45 0-2.99.22-4.28.79C1.49 5.62 1 6.33 1 7.14v11.28c0 1.3 1.22 2.26 2.48 1.94.98-.25 2.02-.36 3.02-.36 1.56 0 3.22.26 4.56.92.6.3 1.28.3 1.87 0 1.34-.67 3-.92 4.56-.92 1 0 2.04.11 3.02.36C21.78 20.68 23 19.72 23 18.42V7.14c0-.81-.49-1.52-1.22-1.85-1.28-.57-2.82-.79-4.28-.79z" /></svg>,
    Subscript: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M20 18h-2v1h3v1h-4v-2.5c0-.28.22-.5.5-.5h2v-1h-2.5v-1H20c.28 0 .5.22.5.5V15c0 .28-.22.5-.5.5zm-8.37-3L5.96 3H8.3l4.03 7.76L16.36 3h2.34L12.99 12l3.69 7H14.3l-4.42-8.38L5.42 19H3.09z" /></svg>,
    Superscript: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M20 8h-2v1h3v1h-4V7.5c0-.28.22-.5.5-.5h2v-1h-2.5V5H20c.28 0 .5.22.5.5V6c0 .28-.22.5-.5.5zm-8.37 7L5.96 3H8.3l4.03 7.76L16.36 3h2.34L12.99 12l3.69 7H14.3l-4.42-8.38L5.42 19H3.09z" /></svg>,
    Undo: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62C8.72 11.36 10.53 10.5 12.5 10.5c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" /></svg>,
    Redo: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.4 10.6C16.55 9 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z" /></svg>,
    ClearFormat: () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.93L16.73 21 18 19.73 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z" /></svg>,
    ChevronDown: () => <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor"><path d="M7 10l5 5 5-5z" /></svg>,
};

// ─── Highlight Colors ─────────────────────────────────────────────────────────
const HIGHLIGHT_COLORS = [
    "#fef08a", "#bbf7d0", "#bfdbfe", "#fecaca", "#f5d0fe",
    "#fed7aa", "#e0e7ff", "#ccfbf1", "#fce7f3", "#ffffff",
];

// ─── Toolbar ──────────────────────────────────────────────────────────────────
function Toolbar({
    editor,
    onImageClick,
    onLinkClick,
}: {
    editor: ReturnType<typeof useEditor>;
    onImageClick: () => void;
    onLinkClick: () => void;
}) {
    if (!editor) return null;

    // Determine active text style label
    const activeStyle = TEXT_STYLES.find((s) =>
        s.level
            ? editor.isActive("heading", { level: s.level })
            : editor.isActive("paragraph")
    );

    // Determine active font size
    const activeFontSize = editor.getAttributes("textStyle").fontSize || "";

    // Determine active font family
    const activeFontFamily = editor.getAttributes("textStyle").fontFamily || "";
    const activeFontLabel =
        FONT_FAMILIES.find((f) => f.value === activeFontFamily)?.label || "Font";

    const applyStyle = (s: (typeof TEXT_STYLES)[0]) => {
        if (s.level) {
            editor.chain().focus().toggleHeading({ level: s.level as any }).run();
        } else {
            editor.chain().focus().setParagraph().run();
        }
    };

    return (
        <div className="rte-toolbar border-b border-slate-200 bg-slate-50 rounded-t-2xl">
            {/* Row 1: Style / Font / Size / Colors */}
            <div className="flex flex-wrap items-center gap-0.5 px-2 py-1.5 border-b border-slate-100">
                {/* Text style dropdown */}
                <div className="relative group">
                    <button
                        type="button"
                        className="flex items-center gap-1 px-2 h-8 rounded-lg text-sm text-slate-600 hover:bg-slate-100 whitespace-nowrap min-w-[110px]"
                        title="Text style"
                    >
                        <span className="flex-1 text-left text-xs font-medium">
                            {activeStyle?.label || "Paragraph"}
                        </span>
                        <Icons.ChevronDown />
                    </button>
                    <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-50 min-w-[150px] py-1 hidden group-hover:block">
                        {TEXT_STYLES.map((s) => (
                            <button
                                key={s.label}
                                type="button"
                                onMouseDown={(e) => { e.preventDefault(); applyStyle(s); }}
                                className={`w-full text-left px-3 py-1.5 text-sm hover:bg-slate-50 transition-colors ${(s.level
                                        ? editor.isActive("heading", { level: s.level })
                                        : editor.isActive("paragraph"))
                                        ? "text-[#1fa8e8] font-medium"
                                        : "text-slate-700"
                                    }`}
                                style={
                                    s.level
                                        ? { fontSize: `${Math.max(0.75, 1.4 - (s.level - 1) * 0.15)}rem`, fontWeight: 700 }
                                        : {}
                                }
                            >
                                {s.label}
                            </button>
                        ))}
                    </div>
                </div>

                <Divider />

                {/* Font family dropdown */}
                <div className="relative group">
                    <button
                        type="button"
                        className="flex items-center gap-1 px-2 h-8 rounded-lg text-sm text-slate-600 hover:bg-slate-100 whitespace-nowrap min-w-[90px]"
                        title="Font family"
                    >
                        <span className="flex-1 text-left text-xs">{activeFontLabel}</span>
                        <Icons.ChevronDown />
                    </button>
                    <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-50 min-w-[170px] py-1 hidden group-hover:block">
                        {FONT_FAMILIES.map((f) => (
                            <button
                                key={f.label}
                                type="button"
                                onMouseDown={(e) => {
                                    e.preventDefault();
                                    f.value
                                        ? editor.chain().focus().setFontFamily(f.value).run()
                                        : editor.chain().focus().unsetFontFamily().run();
                                }}
                                className={`w-full text-left px-3 py-1.5 text-sm hover:bg-slate-50 transition-colors ${activeFontFamily === f.value ? "text-[#1fa8e8] font-medium" : "text-slate-700"
                                    }`}
                                style={{ fontFamily: f.value || "inherit" }}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                <Divider />

                {/* Font size dropdown */}
                <div className="relative group">
                    <button
                        type="button"
                        className="flex items-center gap-1 px-2 h-8 rounded-lg text-sm text-slate-600 hover:bg-slate-100"
                        title="Font size"
                    >
                        <span className="text-xs min-w-[30px] text-left">{activeFontSize || "Size"}</span>
                        <Icons.ChevronDown />
                    </button>
                    <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-50 min-w-[80px] py-1 hidden group-hover:block max-h-60 overflow-y-auto">
                        <button
                            type="button"
                            onMouseDown={(e) => { e.preventDefault(); (editor.chain().focus() as any).unsetFontSize().run(); }}
                            className="w-full text-left px-3 py-1.5 text-xs text-slate-400 hover:bg-slate-50"
                        >
                            Default
                        </button>
                        {FONT_SIZES.map((size) => (
                            <button
                                key={size}
                                type="button"
                                onMouseDown={(e) => { e.preventDefault(); (editor.chain().focus() as any).setFontSize(size).run(); }}
                                className={`w-full text-left px-3 py-1.5 text-xs hover:bg-slate-50 ${activeFontSize === size ? "text-[#1fa8e8] font-medium" : "text-slate-700"
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <Divider />

                {/* Text color */}
                <div className="flex items-center gap-1 px-1" title="Text color">
                    <span className="text-xs font-bold text-slate-600">A</span>
                    <input
                        type="color"
                        className="w-5 h-5 cursor-pointer rounded border-0 p-0 bg-transparent"
                        value={editor.getAttributes("textStyle").color || "#000000"}
                        onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
                        title="Text color"
                    />
                </div>

                {/* Highlight colors */}
                <div className="relative group">
                    <button
                        type="button"
                        className={`flex items-center gap-0.5 w-8 h-8 justify-center rounded-lg transition-colors ${editor.isActive("highlight") ? "bg-[#1fa8e8] text-white" : "text-slate-600 hover:bg-slate-100"
                            }`}
                        title="Highlight color"
                    >
                        <Icons.Highlight />
                    </button>
                    <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg z-50 p-2 hidden group-hover:block">
                        <div className="grid grid-cols-5 gap-1">
                            {HIGHLIGHT_COLORS.map((color) => (
                                <button
                                    key={color}
                                    type="button"
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                        editor.chain().focus().toggleHighlight({ color }).run();
                                    }}
                                    className="w-5 h-5 rounded border border-slate-200 hover:scale-110 transition-transform"
                                    style={{ background: color }}
                                    title={color}
                                />
                            ))}
                        </div>
                        <button
                            type="button"
                            onMouseDown={(e) => { e.preventDefault(); editor.chain().focus().unsetHighlight().run(); }}
                            className="mt-1 w-full text-xs text-slate-400 hover:text-slate-600 text-center"
                        >
                            None
                        </button>
                    </div>
                </div>

                <Divider />

                {/* Clear formatting */}
                <ToolBtn title="Clear formatting" onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}>
                    <Icons.ClearFormat />
                </ToolBtn>
            </div>

            {/* Row 2: Inline / Structure / Align / Media */}
            <div className="flex flex-wrap items-center gap-0.5 px-2 py-1.5">
                {/* Undo / Redo */}
                <ToolBtn title="Undo (Ctrl+Z)" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
                    <Icons.Undo />
                </ToolBtn>
                <ToolBtn title="Redo (Ctrl+Y)" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
                    <Icons.Redo />
                </ToolBtn>

                <Divider />

                {/* Inline formatting */}
                <ToolBtn title="Bold (Ctrl+B)" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
                    <Icons.Bold />
                </ToolBtn>
                <ToolBtn title="Italic (Ctrl+I)" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
                    <Icons.Italic />
                </ToolBtn>
                <ToolBtn title="Underline (Ctrl+U)" active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}>
                    <Icons.Underline />
                </ToolBtn>
                <ToolBtn title="Strikethrough" active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()}>
                    <Icons.Strike />
                </ToolBtn>
                <ToolBtn title="Inline code" active={editor.isActive("code")} onClick={() => editor.chain().focus().toggleCode().run()}>
                    <Icons.Code />
                </ToolBtn>
                <ToolBtn title="Subscript" active={editor.isActive("subscript")} onClick={() => editor.chain().focus().toggleSubscript().run()}>
                    <Icons.Subscript />
                </ToolBtn>
                <ToolBtn title="Superscript" active={editor.isActive("superscript")} onClick={() => editor.chain().focus().toggleSuperscript().run()}>
                    <Icons.Superscript />
                </ToolBtn>

                <Divider />

                {/* Alignment */}
                <ToolBtn title="Align left" active={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()}>
                    <Icons.AlignLeft />
                </ToolBtn>
                <ToolBtn title="Align center" active={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()}>
                    <Icons.AlignCenter />
                </ToolBtn>
                <ToolBtn title="Align right" active={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()}>
                    <Icons.AlignRight />
                </ToolBtn>
                <ToolBtn title="Justify" active={editor.isActive({ textAlign: "justify" })} onClick={() => editor.chain().focus().setTextAlign("justify").run()}>
                    <Icons.AlignJustify />
                </ToolBtn>

                <Divider />

                {/* Lists & structure */}
                <ToolBtn title="Bullet list" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>
                    <Icons.BulletList />
                </ToolBtn>
                <ToolBtn title="Numbered list" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
                    <Icons.OrderedList />
                </ToolBtn>
                <ToolBtn title="Blockquote" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
                    <Icons.Blockquote />
                </ToolBtn>
                <ToolBtn title="Code block" active={editor.isActive("codeBlock")} onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
                    <Icons.CodeBlock />
                </ToolBtn>
                <ToolBtn title="Horizontal rule" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                    <Icons.Hr />
                </ToolBtn>

                <Divider />

                {/* Link & Image */}
                <ToolBtn title="Insert / edit link" active={editor.isActive("link")} onClick={onLinkClick}>
                    <Icons.Link />
                </ToolBtn>
                <ToolBtn title="Insert image" onClick={onImageClick}>
                    <Icons.Image />
                </ToolBtn>
            </div>
        </div>
    );
}

// ─── Editor Styles ────────────────────────────────────────────────────────────
// We inject a <style> tag because Tailwind's preflight / prose resets strip
// heading sizes. These selectors target only the .rte-content area.
const editorStyles = `
.rte-content:focus { outline: none; }
.rte-content {
  min-height: 400px;
  padding: 1.25rem;
  font-size: 1rem;
  line-height: 1.7;
  color: #1e293b;
}

/* ── Headings ── */
.rte-content h1 { font-size: 2rem;    font-weight: 700; line-height: 1.2; margin: 1rem 0 0.5rem; }
.rte-content h2 { font-size: 1.5rem;  font-weight: 700; line-height: 1.25; margin: 1rem 0 0.5rem; }
.rte-content h3 { font-size: 1.25rem; font-weight: 600; line-height: 1.3;  margin: 1rem 0 0.5rem; }
.rte-content h4 { font-size: 1.1rem;  font-weight: 600; line-height: 1.35; margin: 0.75rem 0 0.4rem; }
.rte-content h5 { font-size: 1rem;    font-weight: 600; line-height: 1.4;  margin: 0.75rem 0 0.4rem; }
.rte-content h6 { font-size: 0.875rem;font-weight: 600; line-height: 1.4;  margin: 0.75rem 0 0.4rem; color: #475569; }

/* ── Block elements ── */
.rte-content p  { margin: 0.5rem 0; }
.rte-content ul { list-style: disc;    padding-left: 1.5rem; margin: 0.5rem 0; }
.rte-content ol { list-style: decimal; padding-left: 1.5rem; margin: 0.5rem 0; }
.rte-content li { margin: 0.2rem 0; }
.rte-content blockquote {
  border-left: 3px solid #1fa8e8;
  padding: 0.5rem 1rem;
  margin: 0.75rem 0;
  color: #475569;
  background: #f8fafc;
  border-radius: 0 0.5rem 0.5rem 0;
}
.rte-content hr { border: none; border-top: 2px solid #e2e8f0; margin: 1rem 0; }
.rte-content pre {
  background: #1e293b;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 0.75rem 0;
  font-family: ui-monospace, monospace;
  font-size: 0.875rem;
}
.rte-content code:not(pre code) {
  background: #f1f5f9;
  color: #e11d48;
  padding: 0.1em 0.35em;
  border-radius: 0.25rem;
  font-family: ui-monospace, monospace;
  font-size: 0.875em;
}
.rte-content a { color: #1fa8e8; text-decoration: underline; }
.rte-content img { border-radius: 0.75rem; max-width: 100%; margin: 1rem auto; display: block; }
.rte-content mark { border-radius: 0.2em; padding: 0.05em 0.15em; }

/* ── Placeholder ── */
.rte-content p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  color: #cbd5e1;
  pointer-events: none;
  float: left;
  height: 0;
}

/* ── Toolbar dropdown hover fix ── */
.rte-toolbar .group:hover > div { display: block; }
`;

// ─── Main component ───────────────────────────────────────────────────────────
export function RichTextEditor({
    content = "",
    onChange,
    onImageClick,
    onLinkClick,
    placeholder = "Start writing here…",
}: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({ codeBlock: { HTMLAttributes: { class: "" } } }),
            Underline,
            TextAlign.configure({ types: ["heading", "paragraph"] }),
            Highlight.configure({ multicolor: true }),
            TextStyle,
            Color,
            FontFamily,
            FontSize,
            Subscript,
            Superscript,
            CharacterCount,
            Link.configure({
                openOnClick: false,
                HTMLAttributes: { class: "text-[#1fa8e8] underline" },
            }),
            Placeholder.configure({ placeholder }),
            Image.configure({
                inline: false,
                allowBase64: false,
                HTMLAttributes: { class: "rounded-xl max-w-full my-4 mx-auto block" },
            }),
        ],
        content,
        editorProps: {
            attributes: { class: "rte-content" },
        },
        onUpdate({ editor }) {
            onChange?.(editor.getHTML());
        },
    });

    // Sync external content changes (e.g. when loading a blog for editing)
    const prevContent = useRef(content);
    useEffect(() => {
        if (!editor || content === prevContent.current) return;
        if (editor.getHTML() !== content) {
            editor.commands.setContent(content, {
                emitUpdate: false,
            });
        }
        prevContent.current = content;
    }, [editor, content]);

    const wordCount = editor?.storage.characterCount.words() ?? 0;
    const charCount = editor?.storage.characterCount.characters() ?? 0;

    const handleImageClick = useCallback(() => onImageClick?.(), [onImageClick]);
    const handleLinkClick = useCallback(() => onLinkClick?.(), [onLinkClick]);

    useEffect(() => {
  const handler = (e: Event) => {
    const { url, alt } = (e as CustomEvent).detail;

    editor?.chain().focus().setImage({
      src: url,
      alt,
    }).run();
  };

  window.addEventListener("rte:insert-image", handler);

  return () => {
    window.removeEventListener("rte:insert-image", handler);
  };
}, [editor]);

    return (
        <>
            {/* Inject scoped editor styles once */}
            <style>{editorStyles}</style>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <Toolbar
                    editor={editor}
                    onImageClick={handleImageClick}
                    onLinkClick={handleLinkClick}
                />

                <EditorContent editor={editor} />

                {/* Word / char count */}
                <div className="flex items-center justify-end gap-4 px-5 py-2 border-t border-slate-100 bg-slate-50 rounded-b-2xl">
                    <span className="text-xs text-slate-400">{wordCount} words</span>
                    <span className="text-xs text-slate-400">{charCount} characters</span>
                </div>
            </div>
        </>
    );
}

// Export the editor instance accessor (for parent to call getHTML / setContent)
export function useRichEditorRef() {
    const ref = useRef<{ editor: ReturnType<typeof useEditor> | null }>({ editor: null });
    return ref;
}