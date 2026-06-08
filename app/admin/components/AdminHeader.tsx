"use client";

import { usePathname } from "next/navigation";

export default function AdminHeader() {
  const pathname = usePathname();

  const pageTitles: Record<string, string> = {
    "/admin/dashboard": "Dashboard",
    "/admin/leads": "Lead Management",
    "/admin/blogs": "Blog Management",
  };

  const title = pageTitles[pathname] || "Admin Panel";

  return (
    <div className="h-20 px-6 flex items-center justify-between bg-white">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
        <p className="text-xs text-slate-400 mt-0.5">
          Delhi Lung & Sleep Centre
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] flex items-center justify-center text-white font-bold">
          A
        </div>

        <div>
          <p className="font-semibold text-slate-700">Administrator</p>
          <p className="text-xs text-slate-400">admin@clinic.com</p>
        </div>
      </div>
    </div>
  );
}
