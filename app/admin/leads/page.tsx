"use client";

import React, { useEffect, useState } from "react";
import {
  Eye,
  Trash2,
  Search,
  FileText,
  Image as ImageIcon,
  File as FileIcon,
  Download,
  X,
  User,
  Phone,
  Mail,
  Calendar,
  Clock,
  ChevronDown,
} from "lucide-react";

interface Lead {
  _id: string;
  name: string;
  phone: string;
  email?: string;
  service: string;
  date: string;
  time: string;
  image?: string;
  message?: string;
  status: "new" | "contacted" | "rejected";
  createdAt: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "new" | "contacted" | "rejected">("all");

  // Modal State
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Fetch leads
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

  // Update Status
  const handleStatusChange = async (leadId: string, newStatus: "new" | "contacted" | "rejected") => {
    try {
      const res = await fetch(`/api/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) {
        throw new Error("Failed to update status");
      }

      const json = await res.json();
      if (json.success) {
        // Update local state
        setLeads((prevLeads) =>
          prevLeads.map((lead) =>
            lead._id === leadId ? { ...lead, status: newStatus } : lead
          )
        );
        // Update selected lead details if modal is open
        if (selectedLead && selectedLead._id === leadId) {
          setSelectedLead((prev) => prev ? { ...prev, status: newStatus } : null);
        }
      } else {
        throw new Error(json.message || "Failed to update status");
      }
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Could not update status. Please try again.");
    }
  };

  // Delete Lead
  const handleDeleteLead = async (leadId: string) => {
    if (!window.confirm("Are you sure you want to delete this lead? This action cannot be undone.")) {
      return;
    }

    try {
      const res = await fetch(`/api/leads/${leadId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete lead");
      }

      const json = await res.json();
      if (json.success) {
        setLeads((prevLeads) => prevLeads.filter((lead) => lead._id !== leadId));
        if (selectedLead && selectedLead._id === leadId) {
          setSelectedLead(null);
        }
      } else {
        throw new Error(json.message || "Failed to delete lead");
      }
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Could not delete lead. Please try again.");
    }
  };

  // Get file type and URL
  const parseDocument = (imageStr?: string) => {
    if (!imageStr) return { type: "none", url: "" };
    if (imageStr.startsWith("pdf:")) return { type: "pdf", url: imageStr.replace("pdf:", "") };
    if (imageStr.startsWith("image:")) return { type: "image", url: imageStr.replace("image:", "") };
    if (imageStr.startsWith("file:")) return { type: "file", url: imageStr.replace("file:", "") };
    // fallback if no prefix is set but it contains a secure URL
    if (imageStr.startsWith("http")) return { type: "file", url: imageStr };
    return { type: "none", url: "" };
  };

  // Filter leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery) ||
      (lead.email && lead.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
      lead.service.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Calculate statistics
  const totalCount = leads.length;
  console.log("leads", leads)
  const newCount = leads.filter((l) => l.status === "new").length;
  const contactedCount = leads.filter((l) => l.status === "contacted").length;
  const rejectedCount = leads.filter((l) => l.status === "rejected").length;

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total leads */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-black text-slate-800 mb-1">{totalCount}</h3>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Total Leads</p>

          </div>
        </div>

        {/* New Leads */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-black text-blue-600 mb-1">{newCount}</h3>
            <p className="text-blue-500 text-xs font-semibold uppercase tracking-wider">New Enquiries</p>

          </div>
        </div>

        {/* Contacted */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-black text-emerald-600 mb-1">{contactedCount}</h3>
            <p className="text-emerald-500 text-xs font-semibold uppercase tracking-wider">Contacted</p>
          </div>
        </div>

        {/* Rejected */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-black text-rose-600 mb-1">{rejectedCount}</h3>
            <p className="text-rose-500 text-xs font-semibold uppercase tracking-wider">Rejected</p>

          </div>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Filters and Search Bar */}
        <div className="p-5 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, phone, specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#1fa8e8] focus:ring-2 focus:ring-[#1fa8e8]/15 transition-all"
            />
          </div>

          {/* Status Filter Tab Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-50 border border-slate-200/60 rounded-xl">
            {(["all", "new", "contacted", "rejected"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setStatusFilter(filter)}
                className={`
                  px-4 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer
                  ${statusFilter === filter
                    ? "bg-white text-slate-800 shadow-sm border border-slate-200/60"
                    : "text-slate-500 hover:text-slate-800"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Leads Table */}
        {loading ? (
          <div className="py-20 text-center text-slate-400 text-sm">
            <div className="w-8 h-8 border-4 border-slate-200 border-t-[#1fa8e8] rounded-full animate-spin mx-auto mb-4" />
            Loading leads...
          </div>
        ) : error ? (
          <div className="py-20 text-center text-rose-500 text-sm">
            {error}
            <button
              onClick={fetchLeads}
              className="mt-4 block mx-auto px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
            >
              Try Again
            </button>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="py-20 text-center text-slate-400 text-sm">
            No leads found matching your criteria.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Date</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Patient</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Treatment</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Appt Slot</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Report</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">Status</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLeads.map((lead) => {
                  const doc = parseDocument(lead.image);
                  return (
                    <tr key={lead._id} className="hover:bg-slate-50/30 transition-colors">
                      {/* Created Date */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                        {new Date(lead.createdAt).toLocaleDateString(undefined, {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </td>

                      {/* Patient Details */}
                      <td className="px-6 py-4">
                        <div className="text-sm font-semibold text-slate-800">{lead.name}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{lead.phone}</div>
                        {lead.email && <div className="text-[11px] text-slate-400">{lead.email}</div>}
                      </td>

                      {/* Treatment (Specialty) */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/40">
                          {lead.service}
                        </span>
                      </td>

                      {/* Appointment date and slot */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-xs font-semibold text-slate-700">
                          {new Date(lead.date).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                            weekday: "short",
                          })}
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{lead.time}</div>
                      </td>

                      {/* Uploaded Report Badge */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        {doc.type !== "none" ? (
                          <a
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-[#1fa8e8]/10 text-[#0c7dc2] border border-[#1fa8e8]/20 hover:bg-[#1fa8e8]/20 transition-all cursor-pointer"
                          >
                            {doc.type === "pdf" ? (
                              <FileText className="w-3.5 h-3.5" />
                            ) : (
                              <ImageIcon className="w-3.5 h-3.5" />
                            )}
                            <span className="uppercase">{doc.type} Report</span>
                          </a>
                        ) : (
                          <span className="text-xs text-slate-400 font-medium">None</span>
                        )}
                      </td>

                      {/* Status Dropdown */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="relative inline-block">
                          <select
                            value={lead.status}
                            onChange={(e) =>
                              handleStatusChange(lead._id, e.target.value as any)
                            }
                            className={`
                              appearance-none pl-3 pr-8 py-1.5 rounded-lg text-xs font-bold border outline-none cursor-pointer transition-all
                              ${lead.status === "new" && "bg-blue-50 border-blue-200 text-blue-700 focus:ring-blue-100"}
                              ${lead.status === "contacted" && "bg-emerald-50 border-emerald-200 text-emerald-700 focus:ring-emerald-100"}
                              ${lead.status === "rejected" && "bg-rose-50 border-rose-200 text-rose-700 focus:ring-rose-100"}
                            `}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="rejected">Rejected</option>
                          </select>
                          <ChevronDown className={`
                            absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none
                            ${lead.status === "new" && "text-blue-500"}
                            ${lead.status === "contacted" && "text-emerald-500"}
                            ${lead.status === "rejected" && "text-rose-500"}
                          `} />
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          {/* View details */}
                          <button
                            onClick={() => setSelectedLead(lead)}
                            title="View Details"
                            className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer border border-slate-200/50"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          {/* Delete */}
                          <button
                            onClick={() => handleDeleteLead(lead._id)}
                            title="Delete Lead"
                            className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 hover:text-rose-700 flex items-center justify-center transition-all cursor-pointer border border-rose-200/50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Details Popup Modal */}
      {selectedLead && (
        <div className="fixed top-0 left-0 w-full h-screen px-6 py-4 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedLead(null)}
          />

          {/* Modal Container */}
          <div className="relative z-10 my-4 w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-[modalIn_0.35s_cubic-bezier(0.16,1,0.3,1)_both]">
            <style>{`
              @keyframes modalIn {
                from { opacity: 0; transform: translateY(24px) scale(0.97); }
                to   { opacity: 1; transform: translateY(0) scale(1); }
              }
            `}</style>

            {/* Header */}
            <div className="bg-gradient-to-r from-[#0c7dc2] to-[#6dbb45] px-6 py-5 flex items-center justify-between text-white">
              <div>
                <h3 className="text-lg font-bold">Consultation Details</h3>
                <p className="text-white/70 text-xs mt-0.5">
                  Lead ID: {selectedLead._id}
                </p>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent]">
              {/* Main Grid: Patient details & Appt Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Patient Information */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Patient Details
                  </h4>

                  <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <User className="w-4 h-4 text-slate-400" />
                      <div>
                        <div className="text-xs text-slate-400 leading-none">Name</div>
                        <div className="text-sm font-semibold text-slate-800 mt-1">{selectedLead.name}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <div>
                        <div className="text-xs text-slate-400 leading-none">Phone</div>
                        <div className="text-sm font-semibold text-slate-800 mt-1">{selectedLead.phone}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-slate-400" />
                      <div>
                        <div className="text-xs text-slate-400 leading-none">Email</div>
                        <div className="text-sm font-semibold text-slate-800 mt-1">
                          {selectedLead.email || <span className="text-slate-400 font-normal">Not Provided</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consultation Details */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Appointment Details
                  </h4>

                  <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div>
                      <div className="text-xs text-slate-400 leading-none">Selected Service</div>
                      <div className="text-sm font-bold text-[#0c7dc2] mt-1.5 inline-block bg-sky-50 border border-sky-100 px-3 py-1 rounded-lg">
                        {selectedLead.service}
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <div>
                        <div className="text-xs text-slate-400 leading-none">Date</div>
                        <div className="text-sm font-semibold text-slate-800 mt-1">
                          {new Date(selectedLead.date).toLocaleDateString(undefined, {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <div>
                        <div className="text-xs text-slate-400 leading-none">Slot</div>
                        <div className="text-sm font-semibold text-slate-800 mt-1">{selectedLead.time}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status and Submission date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-5">
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Lead Status</div>
                  <div className="relative inline-block w-full sm:w-48">
                    <select
                      value={selectedLead.status}
                      onChange={(e) =>
                        handleStatusChange(selectedLead._id, e.target.value as any)
                      }
                      className={`
                        w-full appearance-none pl-3 pr-10 py-2.5 rounded-xl text-sm font-bold border outline-none cursor-pointer transition-all
                        ${selectedLead.status === "new" && "bg-blue-50 border-blue-200 text-blue-700 focus:ring-blue-100"}
                        ${selectedLead.status === "contacted" && "bg-emerald-50 border-emerald-200 text-emerald-700 focus:ring-emerald-100"}
                        ${selectedLead.status === "rejected" && "bg-rose-50 border-rose-200 text-rose-700 focus:ring-rose-100"}
                      `}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="rejected">Rejected</option>
                    </select>
                    <ChevronDown className={`
                      absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none
                      ${selectedLead.status === "new" && "text-blue-500"}
                      ${selectedLead.status === "contacted" && "text-emerald-500"}
                      ${selectedLead.status === "rejected" && "text-rose-500"}
                    `} />
                  </div>
                </div>

                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Submitted On</div>
                  <div className="text-sm font-semibold text-slate-800 p-2.5 bg-slate-50 border border-slate-100 rounded-xl inline-block">
                    {new Date(selectedLead.createdAt).toLocaleString(undefined, {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </div>
                </div>
              </div>

              {/* Symptoms / Notes */}
              <div className="space-y-2 border-t border-slate-100 pt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Symptoms / Notes
                </h4>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-sm text-slate-700 leading-relaxed min-h-16">
                  {selectedLead.message ? (
                    selectedLead.message
                  ) : (
                    <span className="text-slate-400 italic">No notes provided by patient.</span>
                  )}
                </div>
              </div>

              {/* Uploaded Document Display */}
              <div className="space-y-3 border-t border-slate-100 pt-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Uploaded Medical Report
                  </h4>
                  {selectedLead.image && (
                    <a
                      href={parseDocument(selectedLead.image).url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#6dbb45]/10 border border-[#6dbb45]/20 hover:bg-[#6dbb45]/20 text-[#3a7a1a] rounded-lg text-xs font-bold transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download Original File
                    </a>
                  )}
                </div>

                <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden flex flex-col items-center justify-center p-4 min-h-[200px]">
                  {selectedLead.image ? (
                    (() => {
                      const doc = parseDocument(selectedLead.image);
                      if (doc.type === "pdf") {
                        return (
                          <div className="w-full h-[320px] flex flex-col">
                            <iframe
                              src={`${doc.url}#toolbar=0`}
                              className="w-full h-full border border-slate-200 rounded-xl"
                              title="PDF Preview"
                            />
                            <p className="text-[11px] text-slate-400 mt-2 text-center">
                              PDF documents may not preview in all mobile browsers. You can click "Download Original File" to view it.
                            </p>
                          </div>
                        );
                      } else if (doc.type === "image") {
                        return (
                          <div className="max-w-full max-h-[350px] overflow-hidden rounded-xl border border-slate-200">
                            <img
                              src={doc.url}
                              alt="Uploaded medical report preview"
                              className="w-full h-auto max-h-[350px] object-contain"
                            />
                          </div>
                        );
                      } else {
                        return (
                          <div className="text-center p-6">
                            <FileIcon className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                            <span className="text-xs text-slate-600 font-bold block mb-1">
                              Raw Document File
                            </span>
                            <a
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-[#0c7dc2] hover:underline"
                            >
                              Open file in new tab
                            </a>
                          </div>
                        );
                      }
                    })()
                  ) : (
                    <div className="text-center text-slate-400 text-xs py-8">
                      No reports were uploaded for this appointment request.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-slate-100 bg-slate-50 px-6 py-4 flex items-center justify-between">
              <button
                onClick={() => handleDeleteLead(selectedLead._id)}
                className="px-4 py-2 border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Delete Lead
              </button>

              <button
                onClick={() => setSelectedLead(null)}
                className="px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
