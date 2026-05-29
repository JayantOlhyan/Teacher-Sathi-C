"use client";

import { Link, usePathname } from "@/i18n/routing";
import { Mail, Heart } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  const pathname = usePathname();
  const hideFooterRoutes = ["/video", "/test", "/quiz", "/admin", "/dashboard"];
  const shouldHide = hideFooterRoutes.some((route) => pathname?.includes(route));

  if (shouldHide) return null;

  return (
    <footer className="bg-[#0B1121] text-white border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo-dark.png" alt="TeacherSathi Logo" className="h-9 w-auto object-contain" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {t("tagline")}
            </p>
            <p className="text-white/40 text-xs">
              {t("made_in")} <Heart className="w-3 h-3 inline text-red-400 fill-red-400" />
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/80">{t("platform")}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#features" className="text-white/60 hover:text-white transition-colors">{tNav("features")}</Link></li>
              <li><Link href="/pricing" className="text-white/60 hover:text-white transition-colors">{tNav("pricing")}</Link></li>
              <li><Link href="/#how-it-works" className="text-white/60 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/login" className="text-white/60 hover:text-white transition-colors">{tNav("login")}</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/80">{t("resources")}</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-white/60">NCERT Class 6-10</span></li>
              <li><span className="text-white/60">AI Lesson Plans</span></li>
              <li><span className="text-white/60">Quiz Generator</span></li>
              <li><span className="text-white/60">Mind Maps</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/80">{t("contact")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:support@teachersathi.in" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> support@teachersathi.in
                </a>
              </li>
            </ul>
            <div className="flex gap-3 pt-2">
              <a href="https://twitter.com/teachersathi" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors text-white/70 hover:text-white text-sm font-bold">X</a>
              <a href="https://youtube.com/@teachersathi" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors text-white/70 hover:text-white text-sm font-bold">YT</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} {t("copyright")}</p>
          <p>{t("bottom_text")}</p>
        </div>
      </div>
    </footer>
  );
}
