"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Eye, EyeOff, GraduationCap } from "lucide-react";

export default function LoginPage() {
  const [role, setRole] = useState<"teacher" | "student">("teacher");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex font-sans bg-[#F9F9F4]">
      {/* Left side - Illustration */}
      <div className="hidden lg:flex flex-1 relative bg-[#E1A140] flex-col justify-end p-12 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
           {/* Placeholder for classroom illustration from reference */}
           <Image 
             src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop" 
             alt="Classroom" 
             fill 
             className="object-cover mix-blend-multiply opacity-80"
           />
        </div>
        <div className="absolute top-8 left-8 flex items-center gap-2 text-white z-10 font-bold text-xl">
           <GraduationCap className="w-8 h-8" />
           TeacherSathi
        </div>
        <div className="relative z-10 max-w-md mx-auto text-center mt-auto">
          <p className="text-white font-medium text-2xl leading-relaxed tracking-wide italic font-serif">
            &apos;Built for my mother, <br/> a government school teacher&apos;
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 sm:p-16">
        <div className="w-full max-w-[400px] space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-serif text-[#4A3B2C]">
              नमस्ते! <span className="font-sans font-medium text-[#4A3B2C]">Welcome back.</span>
            </h1>
          </div>

          <div className="flex bg-white rounded-full p-1 border shadow-sm">
            <button 
              onClick={() => setRole("teacher")}
              className={`flex-1 flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-medium transition-colors ${role === "teacher" ? "bg-[#1D4ED8] text-white" : "text-gray-500 hover:text-gray-900"}`}
              role="tab"
              aria-selected={role === "teacher"}
            >
              I&apos;m a Teacher 📚
            </button>
            <button 
              onClick={() => setRole("student")}
              className={`flex-1 flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-medium transition-colors ${role === "student" ? "bg-[#1D4ED8] text-white" : "text-gray-500 hover:text-gray-900"}`}
              role="tab"
              aria-selected={role === "student"}
            >
              I&apos;m a Student 🎓
            </button>
          </div>

          <form className="space-y-4">
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] bg-transparent"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <Button className="w-full bg-[#1D4ED8] hover:bg-[#1e40af] text-white py-6 rounded-lg text-lg">
              Login
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#F9F9F4] text-gray-500">or</span>
            </div>
          </div>

          <Button variant="outline" className="w-full bg-white border-gray-200 hover:bg-gray-50 py-6 rounded-lg text-lg flex items-center justify-center gap-3">
            <Image src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width={24} height={24} />
            Google OAuth
          </Button>

          <p className="text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#1D4ED8] font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
