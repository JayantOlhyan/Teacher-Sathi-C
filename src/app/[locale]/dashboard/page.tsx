import { Link } from "@/i18n/routing";
import { Bell, UserCheck, BookOpen, Presentation, Play, PlusCircle, Search, MessageCircle } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      
      {/* "Got a Doubt?" Section */}
      <section className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-white flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Got a Doubt? 🤔</h2>
          <p className="text-gray-600">Ask Saathi Genie anything about your lessons or syllabus.</p>
        </div>
        <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md flex items-center gap-2 transition-transform transform hover:scale-105">
          <MessageCircle className="w-5 h-5" />
          Ask Saathi Genie
        </button>
      </section>

      {/* Quick-Access Toolbar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: "Attention Bell", icon: Bell, color: "bg-amber-100 text-amber-700" },
          { name: "Roll Call", icon: UserCheck, color: "bg-blue-100 text-blue-700" },
          { name: "User Guide", icon: BookOpen, color: "bg-purple-100 text-purple-700" },
          { name: "White Board", icon: Presentation, color: "bg-emerald-100 text-emerald-700" },
        ].map((tool) => (
          <button 
            key={tool.name} 
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow group"
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${tool.color}`}>
              <tool.icon className="w-6 h-6" />
            </div>
            <span className="font-semibold text-gray-700">{tool.name}</span>
          </button>
        ))}
      </section>

      {/* Action Cards */}
      <section>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <Link href="/dashboard/play" className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white shadow-lg shadow-blue-500/20 hover:-translate-y-1 transition-transform">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <Play className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-1">Play</h4>
            <p className="text-blue-100 text-sm">Start an interactive session or quiz.</p>
          </Link>

          <Link href="/dashboard/create" className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl text-white shadow-lg shadow-purple-500/20 hover:-translate-y-1 transition-transform">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <PlusCircle className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-1">Create</h4>
            <p className="text-purple-100 text-sm">Build new assessments and content.</p>
          </Link>

          <Link href="/dashboard/discover" className="bg-gradient-to-br from-amber-500 to-orange-500 p-6 rounded-2xl text-white shadow-lg shadow-amber-500/20 hover:-translate-y-1 transition-transform">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-1">Discover</h4>
            <p className="text-amber-100 text-sm">Explore NCERT-aligned resources.</p>
          </Link>

          <Link href="/dashboard/engage" className="bg-gradient-to-br from-emerald-500 to-teal-500 p-6 rounded-2xl text-white shadow-lg shadow-emerald-500/20 hover:-translate-y-1 transition-transform">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-1">Engage</h4>
            <p className="text-emerald-100 text-sm">Monitor student participation.</p>
          </Link>

        </div>
      </section>

    </div>
  );
}
