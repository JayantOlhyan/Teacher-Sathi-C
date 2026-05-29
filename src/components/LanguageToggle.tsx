"use client";

import * as React from "react";
import { useRouter, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { Button } from "./ui/Button";

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "hi" : "en";
    
    // Set the cookie directly
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    
    // Force a full page reload to ensure the middleware processes the cookie
    window.location.reload();
  };

  return (
    <Button 
      variant="outline" 
      onClick={toggleLanguage} 
      className="rounded-full px-4 h-9 min-w-[4rem]"
      aria-label={locale === "en" ? "Switch to Hindi" : "Switch to English"}
    >
      {locale === "en" ? "हिंदी" : "EN"}
    </Button>
  );
}
