"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Users, FileText, LogOut } from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const menu = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Lead Management",
      href: "/admin/leads",
      icon: Users,
    },
    {
      title: "Blog Management",
      href: "/admin/blogs",
      icon: FileText,
    },
  ];

  const logout = () => {
    localStorage.removeItem("admin-auth");
    router.push("/admin/login");
  };

  return (
    <aside className="h-screen w-full bg-slate-900 text-white flex flex-col">
      {/* Logo */}

      <div className="h-16 flex items-center flex-col px-6 border-b border-slate-800">
        <h2 className="font-bold text-xl">Delhi Lung & Sleep Centre</h2>
        <p>Admin Console</p>
      </div>

      {/* Menu */}

      <div className="flex-1 p-4 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                active
                  ? "bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] text-white"
                  : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.title}</span>
            </Link>
          );
        })}
      </div>

      {/* Logout */}

      <div className="p-4 border-t border-slate-800">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/20 text-red-400 transition-all cursor-pointer"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}
