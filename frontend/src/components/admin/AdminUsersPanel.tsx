"use client";

import { useState, useTransition } from "react";
import AdminShell from "@/components/admin/AdminShell";
import type { AdminUser } from "@/types/admin";
import {
  createAdminUser,
  updateAdminPassword,
  deleteAdminUser,
} from "@/app/admin/users/actions";

function formatDate(date: string | null) {
  if (!date) return "Never";
  return new Date(date).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminUsersPanel({ users: initialUsers }: { users: AdminUser[] }) {
  const [users, setUsers] = useState(initialUsers);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [resetUserId, setResetUserId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();

  function clearMessages() {
    setError("");
    setSuccess("");
  }

  return (
    <AdminShell title="Admin Users" description="Create and manage admin credentials">
      {error && (
        <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-2.5">
          {error}
        </p>
      )}
      {success && (
        <p className="mb-4 text-sm text-green-700 bg-green-50 border border-green-100 rounded-lg px-4 py-2.5">
          {success}
        </p>
      )}

      <div className="flex justify-end mb-6">
        <button
          onClick={() => {
            clearMessages();
            setShowCreateForm(true);
          }}
          className="text-sm px-4 py-2.5 rounded-lg bg-[#0F172A] text-white hover:bg-[#1E293B] transition-colors"
        >
          + Add Admin User
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-[#e6e4dc] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[500px]">
            <thead>
              <tr className="bg-[#faf9f6] border-b border-[#e6e4dc]">
                <th className="text-left px-4 sm:px-6 py-3 font-semibold text-[#475569]">Email</th>
                <th className="text-left px-4 sm:px-6 py-3 font-semibold text-[#475569] hidden sm:table-cell">
                  Created
                </th>
                <th className="text-left px-4 sm:px-6 py-3 font-semibold text-[#475569] hidden md:table-cell">
                  Last Sign In
                </th>
                <th className="text-right px-4 sm:px-6 py-3 font-semibold text-[#475569]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e6e4dc]">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-[#faf9f6]">
                  <td className="px-4 sm:px-6 py-4">
                    <p className="font-medium break-all">{user.email}</p>
                    <p className="text-xs text-[#94A3B8] sm:hidden mt-0.5">
                      {formatDate(user.created_at)}
                    </p>
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-[#64748B] hidden sm:table-cell">
                    {formatDate(user.created_at)}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-[#64748B] hidden md:table-cell">
                    {formatDate(user.last_sign_in_at)}
                  </td>
                  <td className="px-4 sm:px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => {
                          clearMessages();
                          setResetUserId(user.id);
                        }}
                        className="text-xs px-3 py-1.5 rounded-lg border border-[#d5d3ca] hover:border-[#B4975A] whitespace-nowrap"
                      >
                        Reset Password
                      </button>
                      <button
                        onClick={() => {
                          if (!confirm(`Delete admin user ${user.email}?`)) return;
                          clearMessages();
                          startTransition(async () => {
                            const result = await deleteAdminUser(user.id);
                            if (result.error) setError(result.error);
                            else {
                              setUsers((prev) => prev.filter((u) => u.id !== user.id));
                              setSuccess("Admin user deleted");
                            }
                          });
                        }}
                        disabled={isPending}
                        className="text-xs px-3 py-1.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 whitespace-nowrap"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {users.length === 0 && (
          <p className="text-sm text-[#64748B] text-center py-12">No admin users found</p>
        )}
      </div>

      {showCreateForm && (
        <UserFormModal
          title="Add Admin User"
          onClose={() => setShowCreateForm(false)}
          onSubmit={async (email, password) => {
            const formData = new FormData();
            formData.set("email", email);
            formData.set("password", password);
            return createAdminUser(formData);
          }}
          onSuccess={(email) => {
            setShowCreateForm(false);
            setSuccess(`Admin user ${email} created`);
            window.location.reload();
          }}
          onError={setError}
        />
      )}

      {resetUserId && (
        <UserFormModal
          title="Reset Password"
          emailReadonly={users.find((u) => u.id === resetUserId)?.email}
          onClose={() => setResetUserId(null)}
          onSubmit={async (_email, password) => {
            const formData = new FormData();
            formData.set("id", resetUserId);
            formData.set("password", password);
            return updateAdminPassword(formData);
          }}
          onSuccess={() => {
            setResetUserId(null);
            setSuccess("Password updated successfully");
          }}
          onError={setError}
        />
      )}
    </AdminShell>
  );
}

function UserFormModal({
  title,
  emailReadonly,
  onClose,
  onSubmit,
  onSuccess,
  onError,
}: {
  title: string;
  emailReadonly?: string;
  onClose: () => void;
  onSubmit: (email: string, password: string) => Promise<{ error?: string; success?: boolean }>;
  onSuccess: (email: string) => void;
  onError: (msg: string) => void;
}) {
  const [email, setEmail] = useState(emailReadonly ?? "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onError("");

    if (password !== confirmPassword) {
      onError("Passwords do not match");
      return;
    }

    setLoading(true);
    const result = await onSubmit(email, password);
    setLoading(false);

    if (result.error) {
      onError(result.error);
      return;
    }

    onSuccess(email);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40">
      <div className="bg-white rounded-t-2xl sm:rounded-2xl border border-[#e6e4dc] p-6 w-full sm:max-w-md shadow-xl">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!emailReadonly && (
            <div>
              <label className="block text-sm font-medium text-[#475569] mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={inputClass}
                placeholder="admin@example.com"
              />
            </div>
          )}
          {emailReadonly && (
            <div>
              <label className="block text-sm font-medium text-[#475569] mb-1.5">Email</label>
              <p className="text-sm text-[#64748B]">{emailReadonly}</p>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-[#475569] mb-1.5">
              {emailReadonly ? "New Password" : "Password"}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className={inputClass}
              placeholder="Min. 6 characters"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#475569] mb-1.5">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
              className={inputClass}
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className={cancelBtnClass}>
              Cancel
            </button>
            <button type="submit" disabled={loading} className={submitBtnClass}>
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-[#d5d3ca] bg-white text-[#0F172A] focus:outline-none focus:border-[#B4975A] focus:ring-1 focus:ring-[#B4975A]";

const cancelBtnClass =
  "flex-1 py-2.5 rounded-lg border border-[#d5d3ca] text-[#475569] hover:border-[#B4975A] transition-colors";

const submitBtnClass =
  "flex-1 py-2.5 rounded-lg bg-[#0F172A] text-white hover:bg-[#1E293B] transition-colors disabled:opacity-60";
