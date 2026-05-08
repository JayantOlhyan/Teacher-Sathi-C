"use client";

import { Download, QrCode, Plus, Search, MoreVertical, Radio } from "lucide-react";
import Image from "next/image";

export default function MyClassPage() {
  const students = Array.from({ length: 24 }).map((_, i) => ({
    id: i + 1,
    name: `Student ${i + 1}`,
    avatar: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
    rollNo: 100 + i,
  }));

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            Class 10-A Science
            <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">Active</span>
          </h2>
          <p className="text-gray-500 mt-1">42 Students Registered • Physics, Chemistry, Biology</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-blue-50 border border-blue-100 px-4 py-2 rounded-xl flex items-center gap-3">
            <span className="text-blue-900 font-medium text-sm">Class Code:</span>
            <span className="text-blue-700 font-bold tracking-widest text-lg">X7K-9P2</span>
          </div>
          
          <button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-xl font-medium flex items-center gap-2 transition-colors">
            <QrCode className="w-4 h-4" /> QR Login
          </button>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search students by name or roll number..." 
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none bg-indigo-50 text-indigo-700 hover:bg-indigo-100 px-4 py-2.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors">
            <Radio className="w-4 h-4" /> Register Clickers
          </button>
          <button className="flex-1 sm:flex-none bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-4 py-2.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors">
            <Download className="w-4 h-4" /> Export CSV
          </button>
          <button className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors">
            <Plus className="w-4 h-4" /> Add Student
          </button>
        </div>
      </div>

      {/* Student Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {students.map((student) => (
          <div key={student.id} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative cursor-pointer">
            <button className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreVertical className="w-4 h-4" />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="relative w-16 h-16 mb-3">
                <Image 
                  src={student.avatar} 
                  alt={student.name} 
                  fill 
                  className="rounded-full object-cover border-2 border-gray-100"
                />
              </div>
              <h3 className="font-semibold text-gray-800 text-sm leading-tight mb-1">{student.name}</h3>
              <p className="text-xs text-gray-500 font-medium">Roll: {student.rollNo}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
