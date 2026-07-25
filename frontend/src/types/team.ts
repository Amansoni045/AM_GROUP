export interface TeamCategory {
  id: string;
  name: string;
  is_leadership: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  id: string;
  category_id: string;
  name: string;
  role: string;
  profile_image_url: string | null;
  cloudinary_public_id: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface TeamData {
  leadership: TeamMember[];
  departments: (TeamCategory & { members: TeamMember[] })[];
}
