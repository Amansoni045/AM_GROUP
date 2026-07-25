"use client";

import { useState, useTransition } from "react";
import AdminShell from "@/components/admin/AdminShell";
import type { ContactQuery } from "@/types/admin";
import { updateQueryStatus, deleteQuery } from "@/app/actions/contact";

function formatDate(date: string) {
  return new Date(date).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function StatusBadge({ status }: { status: ContactQuery["status"] }) {
  const styles = {
    new: "bg-blue-50 text-blue-700 border-blue-200",
    read: "bg-amber-50 text-amber-700 border-amber-200",
    archived: "bg-gray-50 text-gray-500 border-gray-200",
  };
  return (
    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border capitalize ${styles[status]}`}>
      {status}
    </span>
  );
}

export default function QueriesPanel({ queries: initialQueries }: { queries: ContactQuery[] }) {
  const [queries, setQueries] = useState(initialQueries);
  const [selectedId, setSelectedId] = useState<string | null>(initialQueries[0]?.id ?? null);
  const [filter, setFilter] = useState<"all" | ContactQuery["status"]>("all");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const filtered = filter === "all" ? queries : queries.filter((q) => q.status === filter);
  const selected = queries.find((q) => q.id === selectedId) ?? null;
  const newCount = queries.filter((q) => q.status === "new").length;

  function handleStatusChange(id: string, status: ContactQuery["status"]) {
    startTransition(async () => {
      const result = await updateQueryStatus(id, status);
      if (result.error) {
        setError(result.error);
        return;
      }
      setQueries((prev) => prev.map((q) => (q.id === id ? { ...q, status } : q)));
    });
  }

  function handleDelete(id: string) {
    if (!confirm("Delete this query permanently?")) return;
    startTransition(async () => {
      const result = await deleteQuery(id);
      if (result.error) {
        setError(result.error);
        return;
      }
      setQueries((prev) => prev.filter((q) => q.id !== id));
      if (selectedId === id) setSelectedId(null);
    });
  }

  return (
    <AdminShell
      title="Form Queries"
      description={`${newCount} new submission${newCount !== 1 ? "s" : ""}`}
    >
      {error && (
        <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-2.5">
          {error}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {(["all", "new", "read", "archived"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === f
                ? "bg-[#0F172A] text-white"
                : "bg-white border border-[#e6e4dc] text-[#475569] hover:border-[#B4975A]"
            }`}
          >
            {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
            {f === "new" && newCount > 0 && (
              <span className="ml-1.5 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {newCount}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
        {/* Query list */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#e6e4dc] overflow-hidden">
          <div className="px-4 py-3 border-b border-[#e6e4dc] bg-[#faf9f6]">
            <p className="text-sm font-semibold text-[#475569]">
              {filtered.length} submission{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="divide-y divide-[#e6e4dc] max-h-[60vh] overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="text-sm text-[#64748B] text-center py-12">No queries yet</p>
            ) : (
              filtered.map((q) => (
                <button
                  key={q.id}
                  onClick={() => {
                    setSelectedId(q.id);
                    if (q.status === "new") handleStatusChange(q.id, "read");
                  }}
                  className={`w-full text-left px-4 py-4 hover:bg-[#faf9f6] transition-colors ${
                    selectedId === q.id ? "bg-[rgba(180,151,90,0.08)] border-l-2 border-l-[#B4975A]" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-medium text-sm truncate">{q.name}</p>
                      <p className="text-xs text-[#64748B] truncate">{q.email}</p>
                    </div>
                    <StatusBadge status={q.status} />
                  </div>
                  <p className="text-xs text-[#94A3B8] mt-1">{formatDate(q.created_at)}</p>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Query detail */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-[#e6e4dc] p-5 sm:p-6">
          {selected ? (
            <div className="space-y-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-heading font-bold">{selected.name}</h2>
                  <p className="text-sm text-[#64748B] mt-0.5">{formatDate(selected.created_at)}</p>
                </div>
                <StatusBadge status={selected.status} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <DetailField label="Email">
                  <a href={`mailto:${selected.email}`} className="text-[#B4975A] hover:underline break-all">
                    {selected.email}
                  </a>
                </DetailField>
                {selected.company && (
                  <DetailField label="Company">{selected.company}</DetailField>
                )}
                {selected.service && (
                  <DetailField label="Service">{selected.service}</DetailField>
                )}
              </div>

              {selected.message && (
                <DetailField label="Message">
                  <p className="text-sm text-[#475569] leading-relaxed whitespace-pre-wrap">
                    {selected.message}
                  </p>
                </DetailField>
              )}

              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#e6e4dc]">
                {selected.status !== "read" && (
                  <button
                    onClick={() => handleStatusChange(selected.id, "read")}
                    disabled={isPending}
                    className="text-sm px-4 py-2 rounded-lg border border-[#d5d3ca] hover:border-[#B4975A] transition-colors"
                  >
                    Mark Read
                  </button>
                )}
                {selected.status !== "archived" && (
                  <button
                    onClick={() => handleStatusChange(selected.id, "archived")}
                    disabled={isPending}
                    className="text-sm px-4 py-2 rounded-lg border border-[#d5d3ca] hover:border-[#B4975A] transition-colors"
                  >
                    Archive
                  </button>
                )}
                {selected.status !== "new" && (
                  <button
                    onClick={() => handleStatusChange(selected.id, "new")}
                    disabled={isPending}
                    className="text-sm px-4 py-2 rounded-lg border border-[#d5d3ca] hover:border-[#B4975A] transition-colors"
                  >
                    Mark New
                  </button>
                )}
                <button
                  onClick={() => handleDelete(selected.id)}
                  disabled={isPending}
                  className="text-sm px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors ml-auto"
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-48 text-sm text-[#64748B]">
              Select a query to view details
            </div>
          )}
        </div>
      </div>
    </AdminShell>
  );
}

function DetailField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1">{label}</p>
      <div className="text-sm text-[#0F172A]">{children}</div>
    </div>
  );
}
