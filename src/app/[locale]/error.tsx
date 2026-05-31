'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4 font-sans">
      <div className="text-center space-y-6 max-w-md bg-white p-8 sm:p-10 border border-line rounded-3xl shadow-card">
        <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-ink">500 - Server Error / सर्वर त्रुटि</h2>
          <p className="text-ink-3">
            An unexpected error occurred. Please try refreshing the page.
            <br />
            एक अप्रत्याशित त्रुटि हुई। कृपया पृष्ठ को रीफ्रेश करने का प्रयास करें।
          </p>
          <div className="mt-6 p-4 bg-warm-sunken rounded-2xl border border-line text-sm text-ink-2">
            <p className="mb-1 font-bold text-ink">Need help? / मदद चाहिए?</p>
            <p>If the problem persists, please contact support:</p>
            <a href="mailto:support@teachersathi.in" className="text-brand font-semibold hover:underline block mt-1">
              support@teachersathi.in
            </a>
          </div>
        </div>
        <Button 
          onClick={() => reset()}
          className="bg-[#16A34A] hover:bg-cta-hover text-white px-8 py-6 rounded-xl text-lg font-bold shadow-brand w-full"
        >
          Try Again / पुनः प्रयास करें
        </Button>
      </div>
    </div>
  );
}
