import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | AM Group",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f4f3ee] text-[#0F172A]">{children}</div>
  );
}
