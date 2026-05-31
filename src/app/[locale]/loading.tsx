export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#166534] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-ink-3 font-semibold animate-pulse">Loading TeacherSathi...</p>
      </div>
    </div>
  );
}
