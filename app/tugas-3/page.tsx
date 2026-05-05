"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import PromoSidebar from "./components/PromoSidebar";
import Streak from "./components/Streak";
import Progress from "./components/Progress";
import ProgramCards from "./components/ProgramCards";

export default function Tugas3Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#191c1d] flex overflow-x-hidden">
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 lg:ml-64 flex flex-col w-full min-h-screen overflow-y-auto">
        <Topbar onMenuToggle={() => setIsMobileMenuOpen(true)} />

        <main className="p-4 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 w-full max-w-[100vw]">
          
          <section className="flex-1 space-y-6 lg:space-y-8 w-full max-w-full overflow-hidden">
            
            <Streak />

            <Progress />

            <ProgramCards />

          </section>

          <PromoSidebar />

        </main>
      </div>
    </div>
  );
}