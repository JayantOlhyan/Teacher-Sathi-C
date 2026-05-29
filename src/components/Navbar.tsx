"use client";

import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { Menu, X, User, LogOut, Settings, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { LanguageToggle } from "./LanguageToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Hidden on focused routes
  const hideNavbarRoutes = ["/video", "/test", "/quiz", "/admin", "/dashboard"];
  const shouldHide = hideNavbarRoutes.some((route) => pathname?.includes(route));

  useEffect(() => {
    if (!supabase) {
      setIsAuthenticated(false);
      return;
    }

    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsProfileOpen(false);
  }, [pathname]);

  if (shouldHide) return null;

  const handleSignOut = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1D4ED8] text-white shadow-md backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <Link href={isAuthenticated ? "/dashboard" : "/"} className="flex items-center gap-2 font-bold text-xl tracking-tight">
              <div className="bg-white text-[#1D4ED8] w-8 h-8 rounded flex items-center justify-center">🎓</div>
              TeacherSathi
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isAuthenticated ? (
              // Authenticated Links
              <>
                <Link href="/dashboard" className={`hover:text-blue-200 transition-colors ${pathname === "/dashboard" ? "font-bold border-b-2 border-white pb-1" : ""}`}>Dashboard</Link>
                <Link href="/content/class-10" className={`hover:text-blue-200 transition-colors ${pathname?.includes("/content") ? "font-bold border-b-2 border-white pb-1" : ""}`}>Content Library</Link>
                <Link href="/dashboard/classes" className="hover:text-blue-200 transition-colors">My Classes</Link>
                <Link href="/dashboard/reports" className="hover:text-blue-200 transition-colors">Reports</Link>
              </>
            ) : (
              // Public Links
              <>
                <Link href="/#features" className="hover:text-blue-200 transition-colors">Features</Link>
                <Link href="/pricing" className={`hover:text-blue-200 transition-colors ${pathname === "/pricing" ? "font-bold border-b-2 border-white pb-1" : ""}`}>Pricing</Link>
                <Link href="/#mission" className="hover:text-blue-200 transition-colors">Mission</Link>
              </>
            )}
          </div>

          {/* Right Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            
            {isAuthenticated ? (
              <div className="relative">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 p-1.5 pr-3 rounded-full transition-colors"
                >
                  <div className="w-7 h-7 bg-white text-[#1D4ED8] rounded-full flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">Profile</span>
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 border border-gray-100 text-gray-800">
                    <Link href="/dashboard/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm">
                      <Settings className="w-4 h-4 text-gray-500" /> Account Settings
                    </Link>
                    <Link href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm">
                      <HelpCircle className="w-4 h-4 text-gray-500" /> Help & Support
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button onClick={handleSignOut} className="w-full flex items-center gap-2 px-4 py-2 hover:bg-red-50 text-red-600 text-sm font-medium transition-colors">
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="bg-white text-[#1D4ED8] hover:bg-blue-50 px-5 py-2 rounded-lg font-bold text-sm shadow-sm transition-colors">
                Login / Sign Up
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="md:hidden bg-[#1E3A8A] border-t border-white/10 overflow-hidden"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {isAuthenticated ? (
              <>
                <Link href="/dashboard" className="block px-3 py-3 rounded-md hover:bg-white/10 font-medium">Dashboard</Link>
                <Link href="/content/class-10" className="block px-3 py-3 rounded-md hover:bg-white/10 font-medium">Content Library</Link>
                <Link href="/dashboard/classes" className="block px-3 py-3 rounded-md hover:bg-white/10 font-medium">My Classes</Link>
                <Link href="/dashboard/reports" className="block px-3 py-3 rounded-md hover:bg-white/10 font-medium">Reports</Link>
                <div className="border-t border-white/10 my-2 pt-2">
                  <Link href="/dashboard/profile" className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-white/10 font-medium">
                    <User className="w-5 h-5 opacity-70" /> Profile Settings
                  </Link>
                  <button onClick={handleSignOut} className="w-full flex items-center gap-3 px-3 py-3 rounded-md hover:bg-red-500/20 text-red-300 font-medium text-left">
                    <LogOut className="w-5 h-5 opacity-70" /> Sign Out
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link href="/#features" className="block px-3 py-3 rounded-md hover:bg-white/10 font-medium">Features</Link>
                <Link href="/pricing" className="block px-3 py-3 rounded-md hover:bg-white/10 font-medium">Pricing</Link>
                <Link href="/#mission" className="block px-3 py-3 rounded-md hover:bg-white/10 font-medium">Mission</Link>
                <div className="pt-4 mt-2 border-t border-white/10 space-y-3">
                  <LanguageToggle />
                  <Link href="/login" className="block w-full text-center bg-white text-[#1D4ED8] px-4 py-3 rounded-lg font-bold">
                    Login / Sign Up
                  </Link>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
}
