import { getAllCategoriesWithMembers } from "@/lib/team";
import TeamAdminPanel from "@/components/admin/TeamAdminPanel";

export default async function AdminTeamPage() {
  const categories = await getAllCategoriesWithMembers();

  return <TeamAdminPanel categories={categories} />;
}
