"use client";

import { useEffect, useState } from "react";
import { Bell, RefreshCw, User } from "lucide-react";
import { supabase } from "@/lib/supabase";

export function Header() {
  const [displayName, setDisplayName] = useState("Teacher");

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user?.user_metadata?.full_name) {
        setDisplayName(user.user_metadata.full_name);
      } else if (user?.email) {
        setDisplayName(user.email.split("@")[0]);
      }
    });
  }, []);

  const firstName = displayName.split(" ")[0];

  return (
    <header className="flex items-center justify-between px-8 py-5 bg-white/50 backdrop-blur-md border-b border-white/20 sticky top-0 z-20">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800">{firstName}&apos;s Classroom</h1>
        <div className="text-sm text-gray-500 font-medium">Home / Dashboard</div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-sm text-green-700 font-medium bg-green-100 px-3 py-1.5 rounded-full">
          <RefreshCw className="w-4 h-4" />
          <span>Synced</span>
        </div>

        <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
        </button>

        <div className="flex items-center gap-3 bg-white pl-2 pr-4 py-1.5 rounded-full shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all">
          <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <span className="text-sm font-semibold text-gray-700">{firstName}</span>
        </div>
      </div>
    </header>
  );
}
