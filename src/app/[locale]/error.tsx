'use client';

import { useEffect } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-[clamp(20px,5vw,48px)] py-12 relative overflow-hidden bg-[#F7F9F4]">
      {/* Soft background blurs */}
      <div className="absolute pointer-events-none z-0 rounded-full w-[400px] h-[400px] top-[-100px] right-[-100px] bg-[radial-gradient(circle,rgba(220,38,38,0.06)_0%,transparent_70%)] blur-[10px]" />
      <div className="absolute pointer-events-none z-0 rounded-full w-[500px] h-[500px] bottom-[-150px] left-[-150px] bg-[radial-gradient(circle,rgba(234,179,8,0.06)_0%,transparent_70%)] blur-[10px]" />

      <div className="relative flex items-center justify-center w-full max-w-lg aspect-[2/1] z-10 mb-6 sm:mb-8">
        <p 
          className="font-black text-[clamp(140px,22vw,240px)] leading-none select-none tracking-wider text-[#FBFCF8] drop-shadow-[0_14px_26px_rgba(22,101,52,0.12)]"
          style={{ WebkitTextStroke: '2.5px #DC2626' }}
        >
          500
        </p>
        <img 
          className="absolute top-1/2 left-1/2 w-[clamp(150px,22vw,240px)] h-auto transform -translate-x-1/2 -translate-y-1/2 animate-bounce drop-shadow-[0_22px_30px_rgba(28,43,28,0.22)]"
          src="/assets/owl-mascot-green.png" 
          alt="TeacherSathi owl mascot experiencing an error" 
        />
      </div>

      <div className="relative z-10 mt-2 max-w-[620px] bg-white border border-[#DCE4D7] rounded-3xl shadow-[0_1px_3px_rgba(28,43,28,0.07),0_4px_12px_rgba(28,43,28,0.05)] p-8 sm:p-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C2B1C] leading-snug">
          Oops! Our servers are taking a short break.
          
        </h2>
        <p className="mt-4 text-[#5E6C5A] text-base sm:text-lg max-w-md mx-auto">
          We encountered an unexpected glitch. Don&apos;t worry, our tech team has been notified and is fixing the wires!
        </p>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-md justify-center">
        <button 
          onClick={() => reset()}
          className="inline-flex items-center justify-center gap-2 font-bold text-base px-8 py-4 bg-[#16A34A] hover:bg-[#128A3E] text-white rounded-full transition-all duration-200 shadow-[0_10px_28px_rgba(22,101,52,0.22)] hover:-translate-y-0.5 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
          Try Again
        </button>
        <a 
          href="/" 
          className="inline-flex items-center justify-center gap-2 font-bold text-base px-8 py-4 bg-white border-2 border-[#166534] text-[#166534] rounded-full hover:bg-[#EDF7EF] transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9.5 12 3l9 6.5"/>
            <path d="M5 10v10h14V10"/>
          </svg>
          Back to Home
        </a>
      </div>
    </div>
  );
}
