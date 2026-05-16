import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Play, CheckSquare, FileText, Download, BarChart, BookOpen, GraduationCap, Sparkles } from "lucide-react";

export default function Home() {
  const t = useTranslations("Hero");

  const features = [
    { title: "Lesson Planning", icon: FileText, desc: "Prepare comprehensive lessons in minutes." },
    { title: "Student Analytics", icon: BarChart, desc: "Detailed growth and performance tracking." },
    { title: "Interactive Quizzes", icon: CheckSquare, desc: "Engage students with AI-generated quizzes." },
    { title: "Smart Assessment", icon: BookOpen, desc: "Automated grading and personalized feedback." },
    { title: "Homework Management", icon: GraduationCap, desc: "Assign and track homework seamlessly." },
    { title: "Phonemic Awareness", icon: Sparkles, desc: "Specialized tools for early literacy." },
    { title: "NCERT Solutions", icon: BookOpen, desc: "Verified solutions for all chapters." },
    { title: "Resource Library", icon: Download, desc: "Access curated teaching materials." },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0B1121] text-white overflow-hidden">

      <main className="flex-1 flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 py-16 px-4 sm:px-12 max-w-[1400px] mx-auto">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance leading-tight">
              {t('title')}
            </h1>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              {t('subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-[#1D4ED8] hover:bg-blue-600 text-white px-8 py-6 rounded-xl text-lg font-bold">
                <Link href="/signup">
                  {t('cta_primary')}
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 hover:bg-white/10 px-8 py-6 rounded-xl text-lg font-bold">
                <Link href="/#how-it-works">
                  {t('cta_secondary')}
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex-1 relative w-full h-[400px] flex items-center justify-center">
            {/* Visuals - Mind Map */}
            <div className="absolute top-10 left-0 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl z-10 w-[240px] transform -rotate-2">
              <div className="flex items-center justify-center h-[120px]">
                <Image src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=300&auto=format&fit=crop" alt="Mind map placeholder" width={200} height={100} className="rounded-md object-cover opacity-80" />
              </div>
            </div>

            {/* Visuals - MCQ Quiz */}
            <div className="absolute top-0 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl z-20 w-[240px]">
              <h3 className="text-sm font-semibold mb-3 text-white/80">Class 10: Life Processes</h3>
              <div className="space-y-2">
                <p className="text-[10px] text-white/60 mb-2">Q: Which of the following is an autotroph?</p>
                <div className="bg-white/5 border border-white/10 p-2 rounded-md text-xs flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border border-white/40"></div>
                  Fungi
                </div>
                <div className="bg-green-500/20 border border-green-500 p-2 rounded-md text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    Green Plants
                  </div>
                  <CheckSquare className="w-3 h-3 text-green-500" />
                </div>
                <div className="bg-white/5 border border-white/10 p-2 rounded-md text-xs flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full border border-white/40"></div>
                  Human beings
                </div>
              </div>
            </div>

            {/* Visuals - Video */}
            <div className="absolute bottom-10 right-0 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-2xl z-30 w-[260px] transform rotate-2">
              <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center">
                 <Image src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400&auto=format&fit=crop" alt="Video placeholder" width={260} height={140} className="opacity-70 object-cover" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                       <Play className="w-5 h-5 text-white ml-1" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Yellow Banner Strip */}
        <div className="w-full bg-[#FBBF24] py-3 overflow-hidden flex whitespace-nowrap">
          <div className="animate-marquee flex gap-8 items-center text-black font-bold text-2xl tracking-wide">
            <span>✦ Class 6 Science</span>
            <span>✦ Class 7 Maths</span>
            <span>✦ Class 8 Social Science</span>
            <span>✦ Class 9 English</span>
            <span>✦ Class 10 Hindi</span>
            <span>✦ Class 6 Science</span>
            <span>✦ Class 7 Maths</span>
            <span>✦ Class 8 Social Science</span>
            <span>✦ Class 9 English</span>
            <span>✦ Class 10 Hindi</span>
          </div>
        </div>

        {/* Feature Grid Section */}
        <section className="w-full py-16 px-4 sm:px-8 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-[#1A233A] border border-white/5 rounded-xl p-5 flex items-start gap-4 hover:bg-[#1E293B] transition-colors">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-[#FBBF24]" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 text-white/90">{feature.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join Now CTA */}
        <section className="w-full max-w-[1200px] mx-auto px-4 mb-16">
          <div className="bg-[#1D4ED8] rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl font-bold max-w-xl text-center md:text-left">
              Empower your teaching with AI-powered NCERT resources today!
            </h2>
            <Button asChild className="bg-[#FBBF24] text-black hover:bg-[#F59E0B] rounded-xl px-10 py-6 text-xl font-bold">
              <Link href="/signup">
                Join Now
              </Link>
            </Button>
          </div>
        </section>

      </main>
    </div>
  );
}
