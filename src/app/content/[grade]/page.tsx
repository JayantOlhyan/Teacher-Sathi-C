"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, Play } from "lucide-react";

export default function ClassContentPage({ params }: { params: { grade: string } }) {
  const [activeClass, setActiveClass] = useState("Class 8");

  const classes = ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"];
  
  const subjects = [
    { 
      name: "Science", hiName: "विज्ञान", color: "bg-[#258088]", text: "text-[#258088]",
      books: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    { 
      name: "Mathematics", hiName: "गणित", color: "bg-[#D95B2A]", text: "text-[#D95B2A]",
      books: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    { 
      name: "Social Science", hiName: "सामाजिक विज्ञान", color: "bg-[#6A8146]", text: "text-[#6A8146]",
      books: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    { 
      name: "English", hiName: "अंग्रेज़ी", color: "bg-[#1E3A5F]", text: "text-[#1E3A5F]",
      books: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    { 
      name: "Hindi", hiName: "हिंदी", color: "bg-[#D97706]", text: "text-[#D97706]",
      books: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto pt-16 px-4">
        
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-3xl sm:text-4xl font-serif text-[#4A3B2C]">
            Choose Your Chapter / <span className="font-sans font-medium text-[#4A3B2C]">अध्याय चुनें</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-6 text-[#4A3B2C]">
            {classes.map((cls) => (
              <button 
                key={cls}
                onClick={() => setActiveClass(cls)}
                className={`pb-1 text-lg transition-colors ${activeClass === cls ? "border-b-2 border-[#1D4ED8] font-semibold text-[#1D4ED8]" : "hover:text-[#1D4ED8]"}`}
              >
                {cls}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {subjects.map((subject, sIdx) => (
            <div key={sIdx} className="flex flex-col md:flex-row gap-8 items-end relative">
              <div className="w-48 shrink-0 pb-4">
                <h2 className={`text-2xl font-serif ${subject.text}`}>{subject.name}</h2>
                <h3 className={`text-xl font-sans font-medium ${subject.text}`}>{subject.hiName}</h3>
              </div>
              
              <div className="flex-1 relative pb-2 w-full overflow-x-auto">
                <div className="flex gap-[2px] items-end px-4 pb-2 min-w-max">
                  {subject.books.map((book, bIdx) => {
                    const isLocked = book > 8; // Mock locked state
                    const isLeaning = bIdx === 2 && sIdx === 0;
                    const isPulledOut = bIdx === 8 && sIdx === 1;

                    return (
                      <Link href={`/content/class-8/${subject.name.toLowerCase()}/chapter-${book}`} key={bIdx}>
                        <div 
                          className={`
                            w-14 h-32 rounded-sm relative flex flex-col justify-between p-1 border border-black/10 shadow-sm cursor-pointer hover:-translate-y-2 transition-transform
                            ${subject.color} ${isLocked ? "opacity-50" : "opacity-90 hover:opacity-100"}
                            ${isLeaning ? "transform rotate-12 origin-bottom-left" : ""}
                            ${isPulledOut ? "transform -translate-y-4" : ""}
                          `}
                        >
                          <span className="text-white/80 text-[10px] font-bold self-center">
                            {book.toString().padStart(2, '0')}
                          </span>
                          
                          <div className="flex-1 flex items-center justify-center">
                             {isLocked ? (
                               <Lock className="w-4 h-4 text-white/50" />
                             ) : (
                               <div className="w-full text-center truncate text-[10px] text-white/80 transform -rotate-90">
                                 Chapter
                               </div>
                             )}
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
                {/* The Shelf Layer */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-[#8B5A2B] to-[#5C3A21] rounded-sm shadow-md"></div>
              </div>

              <div className="shrink-0 pb-4 hidden lg:block">
                <button className="text-sm text-gray-600 hover:text-black flex items-center gap-1 font-medium">
                  Subject Overview <Play className="w-3 h-3 fill-current" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
