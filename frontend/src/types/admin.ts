export interface ContactQuery {
  id: string;
  name: string;
  company: string | null;
  email: string;
  service: string | null;
  message: string | null;
  status: "new" | "read" | "archived";
  created_at: string;
}

export interface AdminUser {
  id: string;
  email: string;
  created_at: string;
  last_sign_in_at: string | null;
}
