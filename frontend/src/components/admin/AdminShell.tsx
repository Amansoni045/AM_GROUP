"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, MessageSquare, Users, Shield, LogOut } from "lucide-react";
import { signOut } from "@/app/admin/actions";

const navItems = [
  { href: "/admin/queries", label: "Queries", icon: MessageSquare },
  { href: "/admin/team", label: "Team", icon: Users },
  { href: "/admin/users", label: "Admin Users", icon: Shield },
];

export default function AdminShell({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  async function handleSignOut() {
    await signOut();
    router.push("/admin/login");
    router.refresh();
  }

  function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
    return (
      <nav className="flex flex-col gap-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={onNavigate}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? "bg-[#B4975A] text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#f4f3ee]">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-[#0F172A] text-white shrink-0">
        <div className="px-6 py-6 border-b border-white/10">
          <p className="font-heading font-bold text-lg">AM Group</p>
          <p className="text-xs text-white/50 mt-0.5">Admin Panel</p>
        </div>
        <div className="flex-1 px-4 py-6">
          <NavLinks />
        </div>
        <div className="px-4 py-6 border-t border-white/10">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="absolute left-0 top-0 bottom-0 w-72 bg-[#0F172A] text-white flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div>
                <p className="font-heading font-bold text-lg">AM Group</p>
                <p className="text-xs text-white/50">Admin Panel</p>
              </div>
              <button onClick={() => setSidebarOpen(false)} aria-label="Close menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 px-4 py-6">
              <NavLinks onNavigate={() => setSidebarOpen(false)} />
            </div>
            <div className="px-4 py-6 border-t border-white/10">
              <button
                onClick={handleSignOut}
                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm text-white/70 hover:bg-white/10"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-[#e6e4dc] px-4 sm:px-6 py-4 flex items-center gap-4">
          <button
            className="lg:hidden p-2 rounded-lg border border-[#e6e4dc] hover:border-[#B4975A]"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-xl font-heading font-bold text-[#0F172A] truncate">
              {title}
            </h1>
            {description && (
              <p className="text-xs sm:text-sm text-[#64748B] truncate">{description}</p>
            )}
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-auto">{children}</main>
      </div>
    </div>
  );
}
