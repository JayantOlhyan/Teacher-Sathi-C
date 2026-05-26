'use client';

// This file is required by next-intl to catch unmatched routes outside of the middleware
import Error from './[locale]/error';

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
          <div className="text-center space-y-6 max-w-md">
            <h1 className="text-9xl font-black text-gray-200">404</h1>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Page Not Found / पृष्ठ नहीं मिला</h2>
              <p className="text-gray-500">
                The page you are looking for doesn&apos;t exist or has been moved.
                <br />
                वह पृष्ठ जो आप ढूंढ रहे हैं वह मौजूद नहीं है या हटा दिया गया है।
              </p>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/" className="bg-[#1D4ED8] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold">
                Back to Home
              </a>
              <a href="/login" className="border border-gray-200 px-8 py-4 rounded-xl font-bold text-gray-700">
                Go to Login
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
