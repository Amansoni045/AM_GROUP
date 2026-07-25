"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { requireAuth } from "@/lib/admin-auth";
import { getPool } from "@/lib/db";
import type { ContactQuery } from "@/types/admin";

export async function submitContactQuery(formData: FormData) {
  const name = (formData.get("name") as string)?.trim();
  const company = (formData.get("company") as string)?.trim() || null;
  const email = (formData.get("email") as string)?.trim();
  const service = (formData.get("service") as string)?.trim() || null;
  const message = (formData.get("message") as string)?.trim() || null;

  if (!name || !email) {
    return { error: "Name and email are required" };
  }

  try {
    const pool = getPool();
    await pool.query(
      `INSERT INTO contact_queries (name, company, email, service, message, status)
       VALUES ($1, $2, $3, $4, $5, 'new')`,
      [name, company, email, service, message]
    );
  } catch {
    return { error: "Failed to submit. Please try again." };
  }

  return { success: true };
}

export async function getContactQueries(): Promise<ContactQuery[]> {
  await requireAuth();
  const pool = getPool();
  const { rows } = await pool.query<ContactQuery>(
    `SELECT * FROM contact_queries ORDER BY created_at DESC`
  );
  return rows;
}

export async function updateQueryStatus(id: string, status: ContactQuery["status"]) {
  await requireAuth();
  const pool = getPool();

  try {
    await pool.query(
      `UPDATE contact_queries SET status = $1 WHERE id = $2`,
      [status, id]
    );
  } catch {
    return { error: "Failed to update status" };
  }

  revalidatePath("/admin/queries");
  return { success: true };
}

export async function deleteQuery(id: string) {
  await requireAuth();
  const pool = getPool();

  try {
    await pool.query(`DELETE FROM contact_queries WHERE id = $1`, [id]);
  } catch {
    return { error: "Failed to delete query" };
  }

  revalidatePath("/admin/queries");
  return { success: true };
}
