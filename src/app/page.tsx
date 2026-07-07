"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, FileText, Download, Play, MessageCircle, Home as HomeIcon, Building2, Factory, Hammer, ClipboardList, LineChart } from "lucide-react";
import ServicesSlider from "@/components/ServicesSlider";
import CoverflowCarousel from "@/components/CoverflowCarousel";
import LatestUpdatesMarquee from "@/components/LatestUpdatesMarquee";

export default function Home() {
  return (
    <div className="bg-white text-[#0f172a] font-sans">
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] w-full bg-white overflow-hidden">
        <Image
          src="/hero-image.jpg"
          alt="A&T Buildcon"
          fill
          className="object-cover"
          priority
        />
        {/* Navigation overlay dark gradient for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/40 z-0" />
        
        <div className="absolute bottom-0 left-0 z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-end max-w-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight font-heading">
            Step Into The World of A&T Buildcon
          </h1>
          <p className="text-xs md:text-sm text-gray-200 mb-6 font-light">
            A diverse portfolio of world-class real estate developments, sustainable communities, and premium corporate spaces.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-[#1A1A1A] hover:bg-gray-100 px-5 py-2.5 rounded-none font-bold tracking-wide transition-colors flex items-center gap-2 text-xs uppercase">
              Explore Portfolio <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>


      </section>

      {/* 2. Intro Section */}
      <section className="py-16 md:py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight font-heading">
            Live Life to the Fullest with A&T Buildcon
          </h2>
          <div className="text-gray-600 space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              As a premier real estate developer, we are deeply committed to creating vibrant communities, sustainable corporate infrastructures, and architectural landmarks that define modern living.
            </p>
            <p>
              Our approach merges structural precision with elegant aesthetics, ensuring that every project not only meets but exceeds the expectations of our stakeholders and residents.
            </p>
          </div>
        </div>
      </section>



      {/* 4. About A & T Buildcon Banner */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/About.jpg"
          alt="About A & T Buildcon"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        
        <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            About A & T Buildcon
          </h2>
          <p className="text-gray-200 max-w-xl mb-8 leading-relaxed">
            For over a decade, AT Buildcon has defined structural excellence, translating our clients&apos; grand visions into residential milestones. By maintaining absolute control over detailing, incorporating sustainable building frameworks, and prioritizing client aspirations, we create spaces that elevate everyday living into an elegant art.
          </p>
          <Link href="/about" className="bg-transparent border border-white text-white hover:bg-white hover:text-[#0f172a] px-8 py-3 rounded-none font-bold uppercase tracking-wider text-sm transition-colors w-fit">
            Explore More
          </Link>
        </div>
      </section>

      {/* 5. Latest Launches (Offset) */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <h3 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-16 font-heading">Our Latest Launches</h3>
        
        <div className="relative flex flex-col md:block items-center justify-center gap-4 md:gap-0 h-auto md:h-[550px]">
          {/* Card 1 (Left) */}
          <div className="bg-white border border-gray-200 shadow-xl p-8 z-10 w-full md:w-[55%] md:absolute md:left-10 md:top-10 flex gap-6">
             <div className="flex-1">
               <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest block mb-2">Residential</span>
               <h4 className="text-2xl font-bold text-[#1A1A1A] mb-4 font-heading">Sohamdhwani Smart Living</h4>
               <Link href="/projects" className="inline-flex items-center text-xs font-bold text-[#1A1A1A] uppercase tracking-wider hover:underline">
                 Learn More <ArrowRight className="w-3 h-3 ml-1" />
               </Link>
             </div>
             <div className="w-1/2 h-32 relative hidden sm:block">
               <Image src="/projects/Sohamdhwani.png" alt="Sohamdhwani" fill className="object-cover" />
             </div>
          </div>
          
          {/* Card 2 (Right) */}
          <div className="bg-white text-[#0f172a] border border-gray-200 shadow-xl p-8 z-20 w-full md:w-[55%] md:absolute md:right-10 md:top-[160px] flex gap-6">
            <div className="flex-1">
               <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest block mb-2">Premium Estate</span>
               <h4 className="text-2xl font-bold text-[#0f172a] mb-4 font-heading">Audumbar Residences</h4>
               <Link href="/projects" className="inline-flex items-center text-xs font-bold text-[#0f172a] uppercase tracking-wider hover:underline">
                 Learn More <ArrowRight className="w-3 h-3 ml-1" />
               </Link>
             </div>
             <div className="w-1/2 h-32 relative hidden sm:block">
               <Image src="/projects/Audumbar.png" alt="Audumbar" fill className="object-cover" />
             </div>
          </div>

          {/* Card 3 (Left) */}
          <div className="bg-white border border-gray-200 shadow-xl p-8 z-30 w-full md:w-[55%] md:absolute md:left-10 md:bottom-10 flex gap-6">
             <div className="flex-1">
               <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest block mb-2">Luxury Apartments</span>
               <h4 className="text-2xl font-bold text-[#1A1A1A] mb-4 font-heading">Tuljai Imperials</h4>
               <Link href="/projects" className="inline-flex items-center text-xs font-bold text-[#1A1A1A] uppercase tracking-wider hover:underline">
                 Learn More <ArrowRight className="w-3 h-3 ml-1" />
               </Link>
             </div>
             <div className="w-1/2 h-32 relative hidden sm:block">
               <Image src="/projects/Tuljai.png" alt="Tuljai" fill className="object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* 6. We are more than what you know */}
      <CoverflowCarousel />

      {/* 7. Our Services */}
      <ServicesSlider />



      {/* 9. What's New */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-8">
         <div className="flex justify-between items-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] font-heading">What&apos;s New at A&T Buildcon</h3>
         </div>
         
         <div className="relative h-[400px] w-full">
           <Image src="/projects/Tuljai.png" alt="New Launch" fill className="object-cover" />
           <div className="absolute inset-0 bg-black/20" />
           
           <div className="absolute -bottom-8 left-8 right-8 sm:right-auto sm:w-[450px] bg-white p-8 shadow-xl border border-gray-200">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block mb-4">Press Release</span>
              <h4 className="text-2xl font-bold text-[#1A1A1A] mb-6 font-heading leading-snug">A&T Buildcon announces the launch of Tuljai Imperials Phase II</h4>
              <Link href="/" className="inline-flex items-center text-[10px] font-bold text-orange-500 uppercase tracking-widest">
                 Read More <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
           </div>
         </div>
      </section>

      {/* 10. Latest Updates Marquee */}
      <LatestUpdatesMarquee />
    </div>
  );
}
