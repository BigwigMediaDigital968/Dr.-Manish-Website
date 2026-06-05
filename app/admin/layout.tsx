"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pathname === "/admin/login") {
      setLoading(false);
      return;
    }

    const auth = localStorage.getItem("admin-auth");

    if (auth !== "true") {
      router.replace("/admin/login");
      return;
    }

    setLoading(false);
  }, [pathname, router]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (pathname === "/admin/login") {
    return children;
  }

  return (
    <div className="bg-slate-100">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 z-50">
        <AdminSidebar />
      </aside>

      {/* Right Section */}
      <div className="ml-64">
        {/* Header */}
        <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-slate-200 z-40">
          <AdminHeader />
        </header>

        {/* Main Content */}
        <main className="pt-24 p-6 min-h-screen">{children}</main>
      </div>
    </div>
  );
}
