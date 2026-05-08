"use client";

import { Link, usePathname } from "@/i18n/routing";
import { Home, Activity, Users, BarChart2 } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Activity", href: "/dashboard/activity", icon: Activity },
    { name: "My Class", href: "/dashboard/classes", icon: Users },
    { name: "Report", href: "/dashboard/reports", icon: BarChart2 },
  ];

  return (
    <aside className="w-64 bg-[#14532D] text-white flex flex-col min-h-screen shrink-0 shadow-xl z-10 relative">
      <div className="p-6 flex items-center gap-3 font-bold text-xl mb-6 border-b border-white/10">
        <div className="w-8 h-8 bg-white text-[#14532D] rounded flex items-center justify-center">🎓</div>
        TeacherSathi
      </div>

      <nav className="flex-1 px-4 space-y-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname?.startsWith(item.href) && item.href !== "/dashboard");
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                isActive 
                  ? "bg-white text-[#14532D] shadow-sm" 
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <item.icon className="w-5 h-5" /> {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
