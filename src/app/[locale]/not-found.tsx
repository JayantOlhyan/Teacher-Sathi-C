'use client';

import { Link } from "@/i18n/routing";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F9F4] text-[#1C2B1C] flex flex-col font-sans relative overflow-x-hidden antialiased w-full">
      <style>{`
        @keyframes bob {
          0%, 100% { transform: translate(-50%, -50%); }
          50%      { transform: translate(-50%, -42%); }
        }
        .animate-bob {
          animation: bob 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
      
      {/* Soft background ambient blurs */}
      <div className="fixed pointer-events-none z-0 rounded-full w-[520px] h-[520px] top-[-180px] right-[-140px] bg-[radial-gradient(circle,rgba(22,101,52,0.10)_0%,transparent_68%)] blur-[8px]" />
      <div className="fixed pointer-events-none z-0 rounded-full w-[560px] h-[560px] bottom-[-220px] left-[-160px] bg-[radial-gradient(circle,rgba(37,128,136,0.10)_0%,transparent_68%)] blur-[8px]" />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-[clamp(20px,5vw,48px)] py-16 gap-2 relative z-10">
        <div className="relative flex items-center justify-center w-full max-w-lg aspect-[2/1]">
          <p 
            className="font-black text-[clamp(150px,25vw,260px)] leading-none select-none tracking-wider text-[#FBFCF8] drop-shadow-[0_14px_26px_rgba(22,101,52,0.16)]"
            style={{ WebkitTextStroke: '3px #166534' }}
          >
            404
          </p>
          <img 
            className="absolute top-1/2 left-1/2 w-[clamp(160px,25vw,260px)] h-auto transform -translate-x-1/2 -translate-y-1/2 animate-bob drop-shadow-[0_22px_30px_rgba(28,43,28,0.22)]"
            src="/assets/owl-mascot-green.png" 
            alt="Confused TeacherSathi owl reading a map" 
          />
        </div>

        <div className="mt-4 max-w-[620px] bg-white border border-[#DCE4D7] rounded-3xl shadow-[0_1px_3px_rgba(28,43,28,0.07),0_4px_12px_rgba(28,43,28,0.05)] p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C2B1C] leading-snug">
            Oops! This page got lost in the school hallways.
            
          </h2>
          <p className="mt-4 text-[#5E6C5A] text-base sm:text-lg max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved to a new classroom.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-md justify-center">
          <Link 
            href="/dashboard" 
            className="inline-flex items-center justify-center gap-2 font-bold text-base px-8 py-4 bg-[#16A34A] hover:bg-[#128A3E] text-white rounded-full transition-all duration-200 shadow-[0_10px_28px_rgba(22,101,52,0.22)] hover:-translate-y-0.5 active:scale-95"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="9"/>
              <rect x="14" y="3" width="7" height="5"/>
              <rect x="14" y="12" width="7" height="9"/>
              <rect x="3" y="16" width="7" height="5"/>
            </svg>
            Go to Dashboard
          </Link>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center gap-2 font-bold text-base px-8 py-4 bg-white border-2 border-[#166534] text-[#166534] rounded-full hover:bg-[#EDF7EF] transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9.5 12 3l9 6.5"/>
              <path d="M5 10v10h14V10"/>
            </svg>
            Back to Home Page
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-[clamp(20px,5vw,48px)] py-5 bg-[#EEF2EA] border-t border-[#DCE4D7] w-full">
        <span className="font-extrabold text-lg text-[#166534]">TeacherSathi</span>
        <span className="text-xs text-[#5E6C5A] text-center sm:text-left">
          © 2026 TeacherSathi · Teachers ka Superpower
        </span>
        <nav className="flex gap-5 text-xs text-[#5E6C5A] font-semibold">
          <a href="#" className="hover:text-[#166534] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#166534] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#166534] transition-colors">Contact Us</a>
        </nav>
      </footer>
    </div>
  );
}
