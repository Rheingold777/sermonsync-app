"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Upload, 
  FileText, 
  Users, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/upload", label: "Upload Sermon", icon: Upload },
  { href: "/dashboard/sermons", label: "Sermons", icon: FileText },
  { href: "/dashboard/contacts", label: "Contacts", icon: Users },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      {/* Mobile header */}
      <header className="lg:hidden bg-navy text-cream px-4 py-3 flex justify-between items-center">
        <Link href="/dashboard" className="font-serif text-xl">
          SermonSync
        </Link>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-50 
          w-64 bg-navy text-cream transform transition-transform
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
          <div className="p-6">
            <Link href="/dashboard" className="font-serif text-2xl">
              SermonSync
            </Link>
          </div>

          <nav className="px-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                    ${isActive 
                      ? "bg-gold text-navy" 
                      : "text-cream/70 hover:bg-navy-500 hover:text-cream"
                    }
                  `}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon size={20} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <Link
              href="/login"
              className="flex items-center gap-3 px-4 py-3 text-cream/70 hover:text-cream transition-colors"
            >
              <LogOut size={20} />
              Sign Out
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 lg:p-8 min-h-screen">
          {children}
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
