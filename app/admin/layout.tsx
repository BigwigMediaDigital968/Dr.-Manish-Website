// app/admin/layout.tsx

import type { ReactNode } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  UserRound,
  Settings,
  LogOut,
  Stethoscope,
} from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
}

const sidebarLinks = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Appointments",
    href: "/admin/appointments",
    icon: CalendarDays,
  },
  {
    label: "Doctors",
    href: "/admin/doctors",
    icon: Stethoscope,
  },
  {
    label: "Patients",
    href: "/admin/patients",
    icon: Users,
  },
  {
    label: "Profile",
    href: "/admin/profile",
    icon: UserRound,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-72 bg-white border-r border-slate-200 flex-col">
        {/* Logo */}
        <div className="h-20 border-b border-slate-200 px-6 flex items-center">
          <div>
            <h2 className="text-xl font-black text-slate-900">Delhi Lung</h2>
            <p className="text-xs text-slate-500 font-medium">Admin Panel</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {sidebarLinks.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-semibold text-sm">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-200">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all cursor-pointer">
            <LogOut className="w-5 h-5" />
            <span className="font-semibold text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Admin Dashboard
            </h1>
            <p className="text-sm text-slate-500">Welcome back</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative">
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
              🔔
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                A
              </div>

              <div className="hidden md:block">
                <p className="text-sm font-semibold text-slate-900">
                  Admin User
                </p>
                <p className="text-xs text-slate-500">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
