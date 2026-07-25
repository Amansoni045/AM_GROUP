"use client";

import { useState, useTransition, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AdminShell from "@/components/admin/AdminShell";
import type { TeamCategory, TeamMember } from "@/types/team";
import {
  createCategory,
  updateCategory,
  deleteCategory,
  createMember,
  updateMember,
  deleteMember,
} from "@/app/admin/team/actions";

type CategoryWithMembers = TeamCategory & { members: TeamMember[] };

interface Props {
  categories: CategoryWithMembers[];
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TeamAdminPanel({ categories: initialCategories }: Props) {
  const router = useRouter();
  const [categories, setCategories] = useState(initialCategories);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    initialCategories[0]?.id ?? null
  );
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<TeamCategory | null>(null);
  const [showMemberForm, setShowMemberForm] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setCategories(initialCategories);
  }, [initialCategories]);

  const selectedCategory = categories.find((c) => c.id === selectedCategoryId);

  function refresh() {
    router.refresh();
  }

  return (
    <AdminShell title="Team Management" description="Manage categories and team members">
        {error && (
          <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-2.5">
            {error}
          </p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-[#e6e4dc] p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Categories</h2>
              <button
                onClick={() => {
                  setEditingCategory(null);
                  setShowCategoryForm(true);
                }}
                className="text-sm px-3 py-1.5 rounded-lg bg-[#B4975A] text-white hover:bg-[#CBB279] transition-colors"
              >
                + Add
              </button>
            </div>

            <div className="space-y-2">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedCategoryId === cat.id
                      ? "border-[#B4975A] bg-[rgba(180,151,90,0.08)]"
                      : "border-[#e6e4dc] hover:border-[#B4975A]/50"
                  }`}
                  onClick={() => setSelectedCategoryId(cat.id)}
                >
                  <div>
                    <p className="font-medium text-sm">{cat.name}</p>
                    <p className="text-xs text-[#64748B]">
                      {cat.is_leadership ? "Leadership" : "Department"} · {cat.members.length} members
                    </p>
                  </div>
                  <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => {
                        setEditingCategory(cat);
                        setShowCategoryForm(true);
                      }}
                      className="text-xs px-2 py-1 rounded border border-[#d5d3ca] hover:border-[#B4975A]"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        if (!confirm(`Delete "${cat.name}" and all its members?`)) return;
                        startTransition(async () => {
                          const result = await deleteCategory(cat.id);
                          if (result.error) setError(result.error);
                          else refresh();
                        });
                      }}
                      disabled={isPending}
                      className="text-xs px-2 py-1 rounded border border-red-200 text-red-600 hover:bg-red-50"
                    >
                      Del
                    </button>
                  </div>
                </div>
              ))}

              {categories.length === 0 && (
                <p className="text-sm text-[#64748B] text-center py-4">No categories yet</p>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl border border-[#e6e4dc] p-6">
            {selectedCategory ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-bold">{selectedCategory.name}</h2>
                    <p className="text-sm text-[#64748B]">
                      {selectedCategory.is_leadership ? "Leadership section" : "Department tab"}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setEditingMember(null);
                      setShowMemberForm(true);
                    }}
                    className="text-sm px-4 py-2 rounded-lg bg-[#0F172A] text-white hover:bg-[#1E293B] transition-colors"
                  >
                    + Add Member
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedCategory.members.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center gap-4 p-4 rounded-xl border border-[#e6e4dc]"
                    >
                      {member.profile_image_url ? (
                        <Image
                          src={member.profile_image_url}
                          alt={member.name}
                          width={56}
                          height={56}
                          className="w-14 h-14 rounded-full object-cover shrink-0"
                        />
                      ) : (
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                          style={{
                            background: selectedCategory.is_leadership
                              ? "#0F172A"
                              : "rgba(180, 151, 90, 0.1)",
                            color: selectedCategory.is_leadership ? "#fff" : "#B4975A",
                            border: selectedCategory.is_leadership
                              ? "2px solid #0F172A"
                              : "2px solid #B4975A",
                          }}
                        >
                          {getInitials(member.name)}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{member.name}</p>
                        <p className="text-sm text-[#64748B] truncate">{member.role}</p>
                      </div>
                      <div className="flex flex-col gap-1 shrink-0">
                        <button
                          onClick={() => {
                            setEditingMember(member);
                            setShowMemberForm(true);
                          }}
                          className="text-xs px-2 py-1 rounded border border-[#d5d3ca] hover:border-[#B4975A]"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            if (!confirm(`Delete ${member.name}?`)) return;
                            startTransition(async () => {
                              const result = await deleteMember(member.id);
                              if (result.error) setError(result.error);
                              else refresh();
                            });
                          }}
                          disabled={isPending}
                          className="text-xs px-2 py-1 rounded border border-red-200 text-red-600 hover:bg-red-50"
                        >
                          Del
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedCategory.members.length === 0 && (
                  <p className="text-sm text-[#64748B] text-center py-12">
                    No members in this category yet
                  </p>
                )}
              </>
            ) : (
              <p className="text-sm text-[#64748B] text-center py-12">
                Select a category or create one to get started
              </p>
            )}
          </div>
        </div>

      {showCategoryForm && (
        <CategoryFormModal
          category={editingCategory}
          onClose={() => {
            setShowCategoryForm(false);
            setEditingCategory(null);
          }}
          onSaved={() => {
            setShowCategoryForm(false);
            setEditingCategory(null);
            refresh();
          }}
          onError={setError}
        />
      )}

      {showMemberForm && selectedCategory && (
        <MemberFormModal
          member={editingMember}
          categoryId={selectedCategory.id}
          isLeadership={selectedCategory.is_leadership}
          onClose={() => {
            setShowMemberForm(false);
            setEditingMember(null);
          }}
          onSaved={() => {
            setShowMemberForm(false);
            setEditingMember(null);
            refresh();
          }}
          onError={setError}
        />
      )}
    </AdminShell>
  );
}

function CategoryFormModal({
  category,
  onClose,
  onSaved,
  onError,
}: {
  category: TeamCategory | null;
  onClose: () => void;
  onSaved: () => void;
  onError: (msg: string) => void;
}) {
  const [name, setName] = useState(category?.name ?? "");
  const [isLeadership, setIsLeadership] = useState(category?.is_leadership ?? false);
  const [sortOrder, setSortOrder] = useState(category?.sort_order ?? 0);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    onError("");

    const formData = new FormData();
    if (category) formData.set("id", category.id);
    formData.set("name", name);
    formData.set("is_leadership", String(isLeadership));
    formData.set("sort_order", String(sortOrder));

    const result = category
      ? await updateCategory(formData)
      : await createCategory(formData);

    setLoading(false);

    if (result.error) {
      onError(result.error);
      return;
    }

    onSaved();
  }

  return (
    <ModalOverlay onClose={onClose}>
      <h3 className="text-lg font-bold mb-4">
        {category ? "Edit Category" : "Add Category"}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Name">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={inputClass}
            placeholder="AM Consulting"
          />
        </Field>
        <Field label="Sort Order">
          <input
            type="number"
            value={sortOrder}
            onChange={(e) => setSortOrder(parseInt(e.target.value) || 0)}
            className={inputClass}
          />
        </Field>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={isLeadership}
            onChange={(e) => setIsLeadership(e.target.checked)}
            className="rounded"
          />
          Leadership category (shown at top, not in tabs)
        </label>
        <div className="flex gap-3 pt-2">
          <button type="button" onClick={onClose} className={cancelBtnClass}>
            Cancel
          </button>
          <button type="submit" disabled={loading} className={submitBtnClass}>
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </ModalOverlay>
  );
}

function MemberFormModal({
  member,
  categoryId,
  isLeadership,
  onClose,
  onSaved,
  onError,
}: {
  member: TeamMember | null;
  categoryId: string;
  isLeadership: boolean;
  onClose: () => void;
  onSaved: () => void;
  onError: (msg: string) => void;
}) {
  const [name, setName] = useState(member?.name ?? "");
  const [role, setRole] = useState(member?.role ?? "");
  const [sortOrder, setSortOrder] = useState(member?.sort_order ?? 0);
  const [profileImageUrl, setProfileImageUrl] = useState(member?.profile_image_url ?? "");
  const [cloudinaryPublicId, setCloudinaryPublicId] = useState(
    member?.cloudinary_public_id ?? ""
  );
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    onError("");

    const formData = new FormData();
    formData.set("file", file);

    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) {
        onError(data.error ?? "Upload failed");
        return;
      }
      setProfileImageUrl(data.url);
      setCloudinaryPublicId(data.publicId);
    } catch {
      onError("Upload failed");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    onError("");

    const formData = new FormData();
    if (member) formData.set("id", member.id);
    formData.set("category_id", categoryId);
    formData.set("name", name);
    formData.set("role", role);
    formData.set("sort_order", String(sortOrder));
    formData.set("profile_image_url", profileImageUrl);
    formData.set("cloudinary_public_id", cloudinaryPublicId);

    const result = member ? await updateMember(formData) : await createMember(formData);

    setLoading(false);

    if (result.error) {
      onError(result.error);
      return;
    }

    onSaved();
  }

  return (
    <ModalOverlay onClose={onClose}>
      <h3 className="text-lg font-bold mb-4">
        {member ? "Edit Member" : "Add Member"}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center gap-4">
          {profileImageUrl ? (
            <Image
              src={profileImageUrl}
              alt="Preview"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold"
              style={{
                background: isLeadership ? "#0F172A" : "rgba(180, 151, 90, 0.1)",
                color: isLeadership ? "#fff" : "#B4975A",
              }}
            >
              {name ? getInitials(name) : "?"}
            </div>
          )}
          <div>
            <label className="text-sm font-medium text-[#475569] block mb-1">
              Profile Photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              disabled={uploading}
              className="text-sm"
            />
            {uploading && <p className="text-xs text-[#64748B] mt-1">Uploading...</p>}
          </div>
        </div>

        <Field label="Name">
          <input value={name} onChange={(e) => setName(e.target.value)} required className={inputClass} />
        </Field>
        <Field label="Role">
          <input value={role} onChange={(e) => setRole(e.target.value)} required className={inputClass} />
        </Field>
        <Field label="Sort Order">
          <input
            type="number"
            value={sortOrder}
            onChange={(e) => setSortOrder(parseInt(e.target.value) || 0)}
            className={inputClass}
          />
        </Field>

        <div className="flex gap-3 pt-2">
          <button type="button" onClick={onClose} className={cancelBtnClass}>
            Cancel
          </button>
          <button type="submit" disabled={loading || uploading} className={submitBtnClass}>
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </ModalOverlay>
  );
}

function ModalOverlay({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
      <div className="bg-white rounded-2xl border border-[#e6e4dc] p-6 w-full max-w-md shadow-xl relative z-10">
        {children}
      </div>
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 -z-0 cursor-default"
        onClick={onClose}
      />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#475569] mb-1.5">{label}</label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-[#d5d3ca] bg-white text-[#0F172A] focus:outline-none focus:border-[#B4975A] focus:ring-1 focus:ring-[#B4975A]";

const cancelBtnClass =
  "flex-1 py-2.5 rounded-lg border border-[#d5d3ca] text-[#475569] hover:border-[#B4975A] transition-colors";

const submitBtnClass =
  "flex-1 py-2.5 rounded-lg bg-[#0F172A] text-white hover:bg-[#1E293B] transition-colors disabled:opacity-60";
