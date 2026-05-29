"use client";

import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { Mail, Heart, Settings, X, Eye, Type, Volume2, Globe, Moon, Sun, Layout } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();
  const hideFooterRoutes = ["/video", "/test", "/quiz", "/admin", "/dashboard"];
  const shouldHide = hideFooterRoutes.some((route) => pathname?.includes(route));

  // Accessibility Panel States
  const [isAccessOpen, setIsAccessOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [isContrast, setIsContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isReadableFont, setIsReadableFont] = useState(false);
  const [isHighlightLinks, setIsHighlightLinks] = useState(false);
  const [isHoverSpeak, setIsHoverSpeak] = useState(false);

  // Sync state with DOM on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const getTheme = (cls: string) => document.documentElement.classList.contains(cls);
      setIsLight(getTheme("light-theme"));
      setIsContrast(getTheme("high-contrast-theme"));
      setIsLargeText(getTheme("large-text-theme"));
      setIsReadableFont(getTheme("readable-font-theme"));
      setIsHighlightLinks(getTheme("highlight-links-theme"));
      setIsHoverSpeak(localStorage.getItem("access-hover-speak") === "true");
    }
  }, []);

  // Handle TTS / Hover Speak
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const handleMouseOver = (e: MouseEvent) => {
      if (!isHoverSpeak) return;
      const target = e.target as HTMLElement;
      // Read headings and paragraphs
      if (["P", "H1", "H2", "H3", "H4", "H5", "H6", "SPAN", "A", "BUTTON"].includes(target.tagName)) {
        const text = target.innerText || target.textContent;
        if (text) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = locale === "hi" ? "hi-IN" : "en-US";
          window.speechSynthesis.speak(utterance);
        }
      }
    };

    if (isHoverSpeak) {
      document.addEventListener("mouseover", handleMouseOver);
      localStorage.setItem("access-hover-speak", "true");
    } else {
      document.removeEventListener("mouseover", handleMouseOver);
      localStorage.setItem("access-hover-speak", "false");
      window.speechSynthesis.cancel();
    }

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isHoverSpeak, locale]);

  // Generic togglers
  const toggleClass = (stateVar: boolean, setVar: React.Dispatch<React.SetStateAction<boolean>>, className: string) => {
    const newState = !stateVar;
    setVar(newState);
    if (newState) {
      document.documentElement.classList.add(className);
    } else {
      document.documentElement.classList.remove(className);
    }
  };

  // Language Toggler
  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "hi" : "en";
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload();
  };

  if (shouldHide) return null;

  return (
    <footer className="bg-[#0B1121] text-white border-t border-white/10 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

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
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <p>&copy; {new Date().getFullYear()} {t("copyright")}</p>
            <span className="text-white/20 hidden sm:inline">•</span>
            <button 
              onClick={() => setIsAccessOpen(true)}
              className="text-white/70 hover:text-white font-bold tracking-widest transition-colors uppercase text-[10px] sm:text-xs flex items-center gap-1.5 bg-white/5 border border-white/10 hover:bg-white/10 px-3 py-1 rounded"
              aria-label="Open Accessibility Tools"
            >
              ACCESSIBILITY
            </button>
          </div>
          <p>{t("bottom_text")}</p>
        </div>
      </div>

      {/* Modern, Beautiful Accessibility Overlay Modal */}
      {isAccessOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
          <div 
            className="w-full max-w-lg bg-[#0F172A] border border-white/15 rounded-2xl shadow-2xl p-6 relative text-white"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-400 animate-spin-slow" />
                <div>
                  <h2 className="text-lg font-bold tracking-wider uppercase">Accessibility Tools</h2>
                  <p className="text-[10px] text-white/50">अभिगम्यता उपकरण एवं सेटिंग्स</p>
                </div>
              </div>
              <button 
                onClick={() => setIsAccessOpen(false)}
                className="p-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List of Toggles */}
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              
              {/* Theme Selector (Light/Dark) */}
              <div className="flex items-center justify-between bg-white/5 border border-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    {isLight ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Light Mode / लाइट मोड</h3>
                    <p className="text-[10px] text-white/50">Toggle from Dark to Light appearance</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleClass(isLight, setIsLight, "light-theme")}
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isLight ? 'bg-blue-600' : 'bg-gray-700'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isLight ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              {/* Language Switcher (EN/HI) */}
              <div className="flex items-center justify-between bg-white/5 border border-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Switch to {locale === "en" ? "Hindi (हिंदी)" : "English (अंग्रेज़ी)"}</h3>
                    <p className="text-[10px] text-white/50">Change website language / भाषा बदलें</p>
                  </div>
                </div>
                <button
                  onClick={toggleLanguage}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-3 py-1.5 rounded-lg text-xs tracking-wider uppercase transition-colors"
                >
                  {locale === "en" ? "हिंदी" : "EN"}
                </button>
              </div>

              {/* High Contrast */}
              <div className="flex items-center justify-between bg-white/5 border border-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Eye className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">High Contrast / उच्च कंट्रास्ट</h3>
                    <p className="text-[10px] text-white/50">Increase visual contrast and color sharpness</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleClass(isContrast, setIsContrast, "high-contrast-theme")}
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isContrast ? 'bg-blue-600' : 'bg-gray-700'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isContrast ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              {/* Increase Font Size */}
              <div className="flex items-center justify-between bg-white/5 border border-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Type className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Increase Text Size / बड़ा फ़ॉन्ट</h3>
                    <p className="text-[10px] text-white/50">Enlarge all typography on the screen by 15%</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleClass(isLargeText, setIsLargeText, "large-text-theme")}
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isLargeText ? 'bg-blue-600' : 'bg-gray-700'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isLargeText ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              {/* Readable Font */}
              <div className="flex items-center justify-between bg-white/5 border border-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Layout className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Readable Font / सुपाठ्य फ़ॉन्ट</h3>
                    <p className="text-[10px] text-white/50">Change to highly readable dyslexia-friendly font</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleClass(isReadableFont, setIsReadableFont, "readable-font-theme")}
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isReadableFont ? 'bg-blue-600' : 'bg-gray-700'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isReadableFont ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              {/* Highlight Links */}
              <div className="flex items-center justify-between bg-white/5 border border-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Eye className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Highlight Links / लिंक्स को हाइलाइट करें</h3>
                    <p className="text-[10px] text-white/50">Add underlines and contrast borders to all links</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleClass(isHighlightLinks, setIsHighlightLinks, "highlight-links-theme")}
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isHighlightLinks ? 'bg-blue-600' : 'bg-gray-700'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isHighlightLinks ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              {/* Speech Mode (Hover TTS) */}
              <div className="flex items-center justify-between bg-white/5 border border-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Volume2 className="w-4 h-4 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">Text-to-Speech / बोलकर पढ़ें</h3>
                    <p className="text-[10px] text-white/50">Hover over any text on screen to read it aloud</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsHoverSpeak(!isHoverSpeak)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isHoverSpeak ? 'bg-blue-600' : 'bg-gray-700'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isHoverSpeak ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

            </div>

            {/* Footer / Reset */}
            <div className="mt-6 border-t border-white/10 pt-4 flex justify-between items-center text-xs">
              <button 
                onClick={() => {
                  // Reset all classes
                  document.documentElement.classList.remove("light-theme", "high-contrast-theme", "large-text-theme", "readable-font-theme", "highlight-links-theme");
                  setIsLight(false);
                  setIsContrast(false);
                  setIsLargeText(false);
                  setIsReadableFont(false);
                  setIsHighlightLinks(false);
                  setIsHoverSpeak(false);
                }}
                className="text-red-400 hover:text-red-300 font-semibold transition-colors"
              >
                Reset Settings / रीसेट करें
              </button>
              <button 
                onClick={() => setIsAccessOpen(false)}
                className="bg-white/10 hover:bg-white/15 px-4 py-2 border border-white/10 rounded-xl transition-all font-semibold"
              >
                Done / संपन्न
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
