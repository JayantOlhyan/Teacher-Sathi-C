import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, Users, Edit3, BarChart2, Folder, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans flex text-[#111827]">
      
      {/* Sidebar - Green */}
      <aside className="w-64 bg-[#14532D] text-white flex flex-col min-h-screen shrink-0 border-r-[8px] border-[#92400E]">
        <div className="p-6 flex items-center gap-3 font-bold text-xl mb-6">
          <div className="w-8 h-8 bg-white text-[#14532D] rounded flex items-center justify-center">🎓</div>
          TeacherSathi
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 bg-white text-[#14532D] px-4 py-3 rounded-xl font-medium shadow-sm">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/dashboard/classes" className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl font-medium transition-colors">
            <Users className="w-5 h-5" /> My Classes
          </Link>
          <Link href="/dashboard/tests" className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl font-medium transition-colors">
            <Edit3 className="w-5 h-5" /> Assign Test
          </Link>
          <Link href="/dashboard/reports" className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl font-medium transition-colors">
            <BarChart2 className="w-5 h-5" /> Reports
          </Link>
          <Link href="/content/class-10" className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl font-medium transition-colors">
            <Folder className="w-5 h-5" /> Content Library
          </Link>
          <Link href="/dashboard/profile" className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl font-medium transition-colors">
            <User className="w-5 h-5" /> Profile
          </Link>
        </nav>

        {/* User Profile Card */}
        <div className="p-4 mt-auto">
          <div className="bg-[#166534] rounded-xl p-4 relative border border-white/10">
            <div className="absolute -top-3 right-2 bg-yellow-400 text-[#14532D] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
              Pro <Sparkles className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-3">
              <Image src="https://i.pravatar.cc/100?img=5" alt="Kavita Sharma" width={40} height={40} className="rounded-full border-2 border-white/20" />
              <div>
                <div className="font-semibold text-sm">Mrs. Kavita Sharma</div>
                <div className="text-xs text-white/70">Govt. Girls School, Jaipur</div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 sm:p-12 overflow-y-auto">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2 text-[#4A3B2C]">नमस्ते, Kavita ji! 🌤️</h1>
          <p className="text-gray-600 font-medium">Today's date: 24th, May 2026</p>
          <p className="text-gray-500 text-sm italic mt-1">"The beautiful thing about learning is nobody can take it away from you."</p>
        </div>

        {/* Top Section: KPIs & Upcoming */}
        <div className="flex flex-col xl:flex-row gap-8 mb-12">
          
          {/* KPI Row (Sticky Notes) */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">KPI row</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Note 1 */}
              <div className="bg-[#FEF08A] p-4 rounded-sm shadow-sm relative transform -rotate-1 min-h-[140px] flex flex-col items-center justify-center text-center">
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-b-white border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent rounded-bl-sm transform rotate-90"></div>
                <div className="text-gray-700 text-sm font-medium mb-1">Total Students:</div>
                <div className="text-4xl font-bold text-gray-900">142</div>
              </div>

              {/* Note 2 */}
              <div className="bg-[#BAE6FD] p-4 rounded-sm shadow-sm relative transform rotate-1 min-h-[140px] flex flex-col items-center justify-center text-center">
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-b-white border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent rounded-bl-sm transform rotate-90"></div>
                <div className="text-gray-700 text-sm font-medium mb-1">Active Classes:</div>
                <div className="text-4xl font-bold text-gray-900">3</div>
              </div>

              {/* Note 3 */}
              <div className="bg-[#bbf7d0] p-4 rounded-sm shadow-sm relative transform -rotate-2 min-h-[140px] flex flex-col items-center justify-center text-center">
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-b-white border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent rounded-bl-sm transform rotate-90"></div>
                <div className="text-gray-700 text-sm font-medium mb-1">Tests This Week:</div>
                <div className="text-4xl font-bold text-gray-900">2</div>
              </div>

              {/* Note 4 */}
              <div className="bg-[#fbcfe8] p-4 rounded-sm shadow-sm relative transform rotate-2 min-h-[140px] flex flex-col items-center justify-center text-center">
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-b-white border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent rounded-bl-sm transform rotate-90"></div>
                <div className="text-gray-700 text-sm font-medium mb-1">Top Student:</div>
                <div className="text-xl font-bold text-gray-900 leading-tight">Priya Sharma <br/>🏆</div>
              </div>

            </div>
          </div>

          {/* Upcoming Tests */}
          <div className="w-full xl:w-72 shrink-0">
            <h2 className="text-xl font-bold mb-4">Upcoming Tests</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 space-y-5">
              <div>
                <div className="font-semibold text-gray-900 mb-1">Upcoming Test 1</div>
                <div className="text-xs text-gray-500 mb-2">2 Students completed</div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#14532D] w-3/4 h-full rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">Physics Test 2</div>
                <div className="text-xs text-gray-500 mb-2">2 Students completed</div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#14532D] w-1/4 h-full rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Classes Row */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">My Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Class Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex overflow-hidden">
              <div className="w-4 bg-[#B45309]"></div>
              <div className="p-5 flex-1">
                <h3 className="font-bold text-lg text-gray-900">Class English</h3>
                <p className="text-gray-500 text-sm mb-4">Grade 1</p>
                <div className="text-sm font-medium text-gray-800 mb-1">42 Students</div>
                <div className="text-xs text-gray-500 mb-6">Last activity: 2 days ago</div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 text-xs px-2 h-9 border-gray-300">View Reports</Button>
                  <Button className="flex-1 text-xs px-2 h-9 bg-[#14532D] hover:bg-[#166534]">Assign Test</Button>
                </div>
              </div>
            </div>

            {/* Class Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex overflow-hidden">
              <div className="w-4 bg-[#0369A1]"></div>
              <div className="p-5 flex-1">
                <h3 className="font-bold text-lg text-gray-900">Class Math</h3>
                <p className="text-gray-500 text-sm mb-4">Grade 2</p>
                <div className="text-sm font-medium text-gray-800 mb-1">10 Students</div>
                <div className="text-xs text-gray-500 mb-6">Last activity: 1 days ago</div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 text-xs px-2 h-9 border-gray-300">View Reports</Button>
                  <Button className="flex-1 text-xs px-2 h-9 bg-[#14532D] hover:bg-[#166534]">Assign Test</Button>
                </div>
              </div>
            </div>

            {/* Class Card 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex overflow-hidden">
              <div className="w-4 bg-[#9D174D]"></div>
              <div className="p-5 flex-1">
                <h3 className="font-bold text-lg text-gray-900">Class Board</h3>
                <p className="text-gray-500 text-sm mb-4">Grade 3</p>
                <div className="text-sm font-medium text-gray-800 mb-1">32 Students</div>
                <div className="text-xs text-gray-500 mb-6">Last activity: 7 today</div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 text-xs px-2 h-9 border-gray-300">View Reports</Button>
                  <Button className="flex-1 text-xs px-2 h-9 bg-[#14532D] hover:bg-[#166534]">Assign Test</Button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Activity Feed */}
        <div>
          <div className="relative pl-4 border-l-2 border-[#14532D]/20 space-y-6">
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#14532D]"></div>
              <p className="text-sm text-gray-700">Kavita Sharma feed consisted <span className="text-gray-500">4 days ago</span></p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#14532D]"></div>
              <p className="text-sm text-gray-700">Your Student in Mrs. Kavita Sharma.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#14532D]"></div>
              <p className="text-sm text-gray-700">Mrs. Kavita Sharma rrrorkned <span className="text-gray-500">3 days ago</span></p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#14532D]"></div>
              <p className="text-sm text-gray-700">Kavita fiudcated & stelted <span className="text-gray-500">5 days ago</span></p>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}
