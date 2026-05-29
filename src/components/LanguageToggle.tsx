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
    
    // next-intl's router will automatically set the NEXT_LOCALE cookie
    router.replace(pathname || "/", {locale: nextLocale});
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
