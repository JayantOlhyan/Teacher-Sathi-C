import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
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
          <Button asChild className="bg-[#1D4ED8] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold">
            <Link href="/">
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="px-8 py-4 rounded-xl font-bold text-gray-700">
            <Link href="/login">
              Go to Login
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
