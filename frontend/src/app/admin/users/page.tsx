import { getAdminUsers } from "@/app/admin/users/actions";
import AdminUsersPanel from "@/components/admin/AdminUsersPanel";

export default async function AdminUsersPage() {
  const users = await getAdminUsers();
  return <AdminUsersPanel users={users} />;
}
