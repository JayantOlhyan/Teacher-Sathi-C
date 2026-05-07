"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Button } from "./ui/Button";

export function LanguageToggle() {
  const router = useRouter();
  const locale = useLocale();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "hi" : "en";
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <Button variant="outline" onClick={toggleLanguage} className="rounded-full px-4">
      {locale === "en" ? "हिं" : "EN"}
    </Button>
  );
}
