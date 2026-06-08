"use client";

import { useState } from "react";
import { Upload, X } from "lucide-react";

export default function MultiImageUpload() {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    setImages((prev) => [...prev, ...files]);

    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...urls]);
  };

  const removeImage = (index: number) => {
    URL.revokeObjectURL(previews[index]);

    setImages(images.filter((_, i) => i !== index));
    setPreviews(previews.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-5">
      {/* Upload Area */}
      <label className="group flex flex-col items-center justify-center border-2 border-dashed border-[#1fa8e8]/30 rounded-3xl p-8 cursor-pointer bg-white hover:border-[#1fa8e8] hover:bg-sky-50/50 transition-all duration-300">
        <Upload className="w-10 h-10 text-[#1fa8e8] mb-3 group-hover:scale-110 transition-transform" />

        <h3 className="font-bold text-slate-800">Upload Product Images</h3>

        <p className="text-sm text-slate-500 mt-1">
          Click or drag multiple images here
        </p>

        <input
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </label>

      {/* Preview Grid */}
      {previews.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {previews.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={src}
                alt={`Preview ${index}`}
                className="w-full h-40 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

              {/* Remove Button */}
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-slate-400">
        {previews.length} image(s) selected
      </p>
    </div>
  );
}
