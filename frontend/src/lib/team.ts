import { createClient } from "@/lib/supabase/server";
import type { TeamCategory, TeamData, TeamMember } from "@/types/team";

export async function getTeamData(): Promise<TeamData> {
  const supabase = await createClient();

  const { data: categories, error: catError } = await supabase
    .from("team_categories")
    .select("*")
    .order("sort_order", { ascending: true });

  if (catError) throw catError;

  const { data: members, error: memError } = await supabase
    .from("team_members")
    .select("*")
    .order("sort_order", { ascending: true });

  if (memError) throw memError;

  const allCategories = (categories ?? []) as TeamCategory[];
  const allMembers = (members ?? []) as TeamMember[];

  const leadershipCategory = allCategories.find((c) => c.is_leadership);
  const leadership = leadershipCategory
    ? allMembers.filter((m) => m.category_id === leadershipCategory.id)
    : [];

  const departments = allCategories
    .filter((c) => !c.is_leadership)
    .map((cat) => ({
      ...cat,
      members: allMembers.filter((m) => m.category_id === cat.id),
    }));

  return { leadership, departments };
}

export async function getAllCategoriesWithMembers() {
  const supabase = await createClient();

  const { data: categories, error: catError } = await supabase
    .from("team_categories")
    .select("*")
    .order("sort_order", { ascending: true });

  if (catError) throw catError;

  const { data: members, error: memError } = await supabase
    .from("team_members")
    .select("*")
    .order("sort_order", { ascending: true });

  if (memError) throw memError;

  const allCategories = (categories ?? []) as TeamCategory[];
  const allMembers = (members ?? []) as TeamMember[];

  return allCategories.map((cat) => ({
    ...cat,
    members: allMembers.filter((m) => m.category_id === cat.id),
  }));
}
