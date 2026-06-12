"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchLeads = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/leads");

      if (!res.ok) {
        throw new Error("Failed to fetch leads");
      }

      const json = await res.json();

      if (json.success) {
        setLeads(json.data);
      } else {
        throw new Error(json.message || "Failed to load leads");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong while fetching leads");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const stats = [
    {
      title: "Total Leads",
      value: loading ? "..." : leads.length.toString(),
    },
    {
      title: "Published Blogs",
      value: "0",
    },
  ];

  return (
    <div>
      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-red-600">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-slate-500">{item.title}</p>

            <h3 className="mt-3 bg-gradient-to-r from-[#1fa8e8] to-[#6dbb45] bg-clip-text text-5xl font-extrabold text-transparent">
              {item.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}