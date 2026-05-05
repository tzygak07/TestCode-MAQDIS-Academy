"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import PromoSidebar from "./components/PromoSidebar";
import Streak from "./components/Streak";
import Progress from "./components/Progress";
import ProgramCards from "./components/ProgramCards";

export default function Tugas3Dashboard() {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
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

            <ProgramCards onSelectProgram={setSelectedProgram} />

          </section>

          <PromoSidebar />

        </main>
      </div>

      <div 
        className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ease-in-out ${
          selectedProgram ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div 
          className={`absolute inset-0 bg-[#191c1d]/40 backdrop-blur-sm transition-opacity duration-300 ${
            selectedProgram ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setSelectedProgram(null)}
        />
        
        <aside 
          className={`relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
            selectedProgram ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 lg:p-8 pb-6 border-b border-[#edeeef] flex justify-between items-center bg-[#fdf7f2]">
            <h3 className="font-bold text-[#191c1d] text-lg tracking-tight">Detail Program</h3>
            <button 
              onClick={() => setSelectedProgram(null)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-500 hover:text-red-500 shadow-sm transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          <div className="p-6 lg:p-8 flex-1 overflow-y-auto">
            <div className={`w-20 h-20 rounded-3xl ${selectedProgram?.bgColor || 'bg-gray-200'} flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-6`}>
              {selectedProgram?.icon}
            </div>
            <h2 className="text-2xl font-black text-[#191c1d] mb-4 leading-tight tracking-tight">{selectedProgram?.title}</h2>
            {selectedProgram && (
              <div className="inline-flex items-center px-4 py-2 bg-[#ff8a3d]/10 text-[#9a4600] font-bold text-sm rounded-full mb-6">
                <span className="mr-2">💰</span> {selectedProgram.harga}
              </div>
            )}
            
            <p className="text-sm lg:text-base text-[#564338] leading-relaxed">
              {selectedProgram?.deskripsi}
            </p>

            <div className="mt-8 lg:mt-10 space-y-5 flex-1">
              <h4 className="font-bold text-[#191c1d] tracking-wide uppercase text-xs lg:text-sm">Benefit Program:</h4>
              <ul className="space-y-4">
                <li className="flex text-sm text-[#564338]"><span className="text-emerald-500 mr-3 text-lg font-bold">✓</span> Evaluasi hafalan komprehensif oleh ustadz/ustadzah tersertifikasi.</li>
                <li className="flex text-sm text-[#564338]"><span className="text-emerald-500 mr-3 text-lg font-bold">✓</span> Bimbingan tajwid dasar dan perbaikan makhraj huruf (Tahsin).</li>
                <li className="flex text-sm text-[#564338]"><span className="text-emerald-500 mr-3 text-lg font-bold">✓</span> Akses materi & audio irama Maqdis seumur hidup.</li>
              </ul>
            </div>
          </div>
          
          <div className="p-6 lg:p-8 pb-8 lg:pb-10 border-t border-[#edeeef] bg-white">
            <button className="w-full bg-[#ff8a3d] hover:bg-[#e67a36] text-white font-bold h-12 lg:h-14 rounded-2xl shadow-lg hover:shadow-xl transition-all tracking-wide hover:-translate-y-1">
              Daftar Program Sekarang
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}