"use server";

import { revalidatePath } from "next/cache";
import { requireAuth } from "@/lib/admin-auth";
import { getPool } from "@/lib/db";
import type { AdminUser } from "@/types/admin";

export async function getAdminUsers(): Promise<AdminUser[]> {
  await requireAuth();
  const pool = getPool();
  const { rows } = await pool.query<AdminUser>(
    `SELECT id, email, created_at, last_sign_in_at
     FROM auth.users
     ORDER BY created_at DESC`
  );
  return rows;
}

export async function createAdminUser(formData: FormData) {
  await requireAuth();

  const email = (formData.get("email") as string)?.trim().toLowerCase();
  const password = formData.get("password") as string;

  if (!email || !password) return { error: "Email and password are required" };
  if (password.length < 6) return { error: "Password must be at least 6 characters" };

  const pool = getPool();

  const existing = await pool.query(
    "SELECT id FROM auth.users WHERE email = $1",
    [email]
  );
  if (existing.rows.length > 0) {
    return { error: "A user with this email already exists" };
  }

  try {
    const userId = crypto.randomUUID();

    await pool.query(
      `INSERT INTO auth.users (
        id, instance_id, aud, role, email, encrypted_password,
        email_confirmed_at, raw_app_meta_data, raw_user_meta_data,
        created_at, updated_at,
        confirmation_token, email_change, email_change_token_new, recovery_token
      ) VALUES (
        $1,
        '00000000-0000-0000-0000-000000000000',
        'authenticated', 'authenticated',
        $2, crypt($3, gen_salt('bf')),
        NOW(),
        '{"provider":"email","providers":["email"]}',
        '{"role":"admin"}',
        NOW(), NOW(), '', '', '', ''
      )`,
      [userId, email, password]
    );

    await pool.query(
      `INSERT INTO auth.identities (
        id, user_id, identity_data, provider, provider_id,
        last_sign_in_at, created_at, updated_at
      ) VALUES (
        $1, $1,
        format('{"sub":"%s","email":"%s"}', $1::text, $2)::jsonb,
        'email', $1::text,
        NOW(), NOW(), NOW()
      )`,
      [userId, email]
    );
  } catch {
    return { error: "Failed to create admin user" };
  }

  revalidatePath("/admin/users");
  return { success: true };
}

export async function updateAdminPassword(formData: FormData) {
  await requireAuth();

  const id = formData.get("id") as string;
  const password = formData.get("password") as string;

  if (!id || !password) return { error: "User ID and password are required" };
  if (password.length < 6) return { error: "Password must be at least 6 characters" };

  const pool = getPool();

  try {
    await pool.query(
      `UPDATE auth.users SET encrypted_password = crypt($1, gen_salt('bf')), updated_at = NOW() WHERE id = $2`,
      [password, id]
    );
  } catch {
    return { error: "Failed to update password" };
  }

  revalidatePath("/admin/users");
  return { success: true };
}

export async function deleteAdminUser(id: string) {
  const { user } = await requireAuth();

  if (user.id === id) {
    return { error: "You cannot delete your own account while logged in" };
  }

  const pool = getPool();

  try {
    await pool.query("DELETE FROM auth.identities WHERE user_id = $1", [id]);
    await pool.query("DELETE FROM auth.users WHERE id = $1", [id]);
  } catch {
    return { error: "Failed to delete admin user" };
  }

  revalidatePath("/admin/users");
  return { success: true };
}
