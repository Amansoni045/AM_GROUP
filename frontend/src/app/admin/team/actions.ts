"use server";

import { revalidatePath } from "next/cache";
import { deleteTeamImage } from "@/lib/cloudinary";
import { requireAuth } from "@/lib/admin-auth";

export async function createCategory(formData: FormData) {
  const { supabase } = await requireAuth();
  const name = (formData.get("name") as string)?.trim();
  const isLeadership = formData.get("is_leadership") === "true";
  const sortOrder = parseInt(formData.get("sort_order") as string) || 0;

  if (!name) return { error: "Name is required" };

  const { error } = await supabase.from("team_categories").insert({
    name,
    is_leadership: isLeadership,
    sort_order: sortOrder,
  });

  if (error) return { error: error.message };

  revalidatePath("/admin/team");
  revalidatePath("/about");
  return { success: true };
}

export async function updateCategory(formData: FormData) {
  const { supabase } = await requireAuth();
  const id = formData.get("id") as string;
  const name = (formData.get("name") as string)?.trim();
  const isLeadership = formData.get("is_leadership") === "true";
  const sortOrder = parseInt(formData.get("sort_order") as string) || 0;

  if (!id || !name) return { error: "ID and name are required" };

  const { error } = await supabase
    .from("team_categories")
    .update({ name, is_leadership: isLeadership, sort_order: sortOrder })
    .eq("id", id);

  if (error) return { error: error.message };

  revalidatePath("/admin/team");
  revalidatePath("/about");
  return { success: true };
}

export async function deleteCategory(id: string) {
  const { supabase } = await requireAuth();

  const { data: members } = await supabase
    .from("team_members")
    .select("cloudinary_public_id")
    .eq("category_id", id);

  const { error } = await supabase.from("team_categories").delete().eq("id", id);
  if (error) return { error: error.message };

  for (const m of members ?? []) {
    if (m.cloudinary_public_id) {
      try {
        await deleteTeamImage(m.cloudinary_public_id);
      } catch {
        // Non-blocking cleanup
      }
    }
  }

  revalidatePath("/admin/team");
  revalidatePath("/about");
  return { success: true };
}

export async function createMember(formData: FormData) {
  const { supabase } = await requireAuth();
  const categoryId = formData.get("category_id") as string;
  const name = (formData.get("name") as string)?.trim();
  const role = (formData.get("role") as string)?.trim();
  const profileImageUrl = (formData.get("profile_image_url") as string) || null;
  const cloudinaryPublicId =
    (formData.get("cloudinary_public_id") as string) || null;
  const sortOrder = parseInt(formData.get("sort_order") as string) || 0;

  if (!categoryId || !name || !role) return { error: "Category, name, and role are required" };

  const { error } = await supabase.from("team_members").insert({
    category_id: categoryId,
    name,
    role,
    profile_image_url: profileImageUrl,
    cloudinary_public_id: cloudinaryPublicId,
    sort_order: sortOrder,
  });

  if (error) return { error: error.message };

  revalidatePath("/admin/team");
  revalidatePath("/about");
  return { success: true };
}

export async function updateMember(formData: FormData) {
  const { supabase } = await requireAuth();
  const id = formData.get("id") as string;
  const name = (formData.get("name") as string)?.trim();
  const role = (formData.get("role") as string)?.trim();
  const profileImageUrl = (formData.get("profile_image_url") as string) || null;
  const cloudinaryPublicId =
    (formData.get("cloudinary_public_id") as string) || null;
  const sortOrder = parseInt(formData.get("sort_order") as string) || 0;

  if (!id || !name || !role) return { error: "ID, name, and role are required" };

  const { data: existing } = await supabase
    .from("team_members")
    .select("cloudinary_public_id")
    .eq("id", id)
    .single();

  const { error } = await supabase
    .from("team_members")
    .update({
      name,
      role,
      profile_image_url: profileImageUrl,
      cloudinary_public_id: cloudinaryPublicId,
      sort_order: sortOrder,
    })
    .eq("id", id);

  if (error) return { error: error.message };

  if (
    existing?.cloudinary_public_id &&
    cloudinaryPublicId &&
    existing.cloudinary_public_id !== cloudinaryPublicId
  ) {
    try {
      await deleteTeamImage(existing.cloudinary_public_id);
    } catch {
      // Non-blocking cleanup
    }
  }

  revalidatePath("/admin/team");
  revalidatePath("/about");
  return { success: true };
}

export async function deleteMember(id: string) {
  const { supabase } = await requireAuth();

  const { data: member } = await supabase
    .from("team_members")
    .select("cloudinary_public_id")
    .eq("id", id)
    .single();

  const { error } = await supabase.from("team_members").delete().eq("id", id);
  if (error) return { error: error.message };

  if (member?.cloudinary_public_id) {
    try {
      await deleteTeamImage(member.cloudinary_public_id);
    } catch {
      // Non-blocking cleanup
    }
  }

  revalidatePath("/admin/team");
  revalidatePath("/about");
  return { success: true };
}
