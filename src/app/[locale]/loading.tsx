export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1121]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white/60 font-medium animate-pulse">Loading TeacherSathi...</p>
      </div>
    </div>
  );
}
