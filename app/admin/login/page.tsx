"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, LogIn } from "lucide-react";

const ADMIN_EMAIL = "admin@clinic.com";
const ADMIN_PASSWORD = "Admin@123";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("admin-auth", "true");

      router.replace("/admin/dashboard");
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white border border-slate-200 shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] flex items-center justify-center">
            <Lock className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900">
            Admin Login
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Delhi Lung & Bronchoscopy Center
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <User className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 pl-12 pr-4 py-3 outline-none focus:border-[#1fa8e8]"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 pl-12 pr-4 py-3 outline-none focus:border-[#1fa8e8]"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-2xl py-3 font-bold text-white bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] hover:opacity-90 transition-all flex justify-center items-center gap-2 cursor-pointer"
          >
            Login
            <LogIn className="w-4 h-4" />
          </button>
        </form>
      </div>
    </main>
  );
}
