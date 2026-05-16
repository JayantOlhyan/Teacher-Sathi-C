"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Button } from "./ui/Button";

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "hi" : "en";
    if (!pathname) return;
    
    // Safely replace the locale prefix in the pathname
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.replace(newPath);
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
