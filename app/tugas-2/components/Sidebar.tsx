"use client";

import Link from "next/link";
import { useState } from "react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [isAppOpen, setIsAppOpen] = useState(false);

  return (
    <>
      
      <aside className={`fixed left-0 top-0 h-full w-[280px] z-50 bg-white border-r border-[#edeeef] flex flex-col p-6 md:p-8 transition-transform duration-300 ease-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      } md:hidden shadow-2xl`}>
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-[#9a4600]">HAMIM</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a7266] font-bold mt-1">Admin Maqdis</p>
          </div>
          <button onClick={onClose} className="p-2 text-[#564338] hover:text-[#9a4600] rounded-xl hover:bg-[#f3f4f5] transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto custom-scrollbar pr-2">
          <Link href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl bg-[#9a4600] text-white shadow-sm transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            <span className="font-semibold text-sm">Dashboard</span>
          </Link>
          <Link href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl text-[#564338] hover:bg-[#f3f4f5] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
            <span className="font-medium text-sm">Statistik</span>
          </Link>
          <Link href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl text-[#564338] hover:bg-[#f3f4f5] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            <span className="font-medium text-sm">Setoran</span>
          </Link>
          
          <div className="pt-4">
            <button
              onClick={() => setIsAppOpen(!isAppOpen)}
              className={`w-full flex justify-between items-center px-4 py-2 hover:text-[#9a4600] transition-colors rounded-xl ${isAppOpen ? 'bg-[#f3f4f5] text-[#9a4600]' : 'text-[#564338]'}`}
            >
              <p className="text-[11px] font-bold uppercase tracking-wider">Apps & Content</p>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isAppOpen ? 'rotate-180 text-[#9a4600]' : 'text-[#8a7266]'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/>
              </svg>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isAppOpen ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
              <div className="space-y-1">
                {['Transaksi', 'Banner & Berita', 'Surat Al-Quran', 'User', 'Kode Aktivasi'].map((item) => (
                  <Link 
                    key={item} 
                    href="#" 
                    className="flex items-center gap-4 px-4 py-2 rounded-xl text-[#564338] hover:text-[#9a4600] hover:bg-[#f3f4f5] transition-all text-sm font-medium"
                  >
                    <span className="w-5"></span>
                    <span>{item}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </aside>

      <aside className="hidden md:flex fixed left-0 top-0 h-full w-[280px] z-50 bg-white border-r border-[#edeeef] flex-col p-8">
        <div className="mb-12">
          <h1 className="text-2xl font-extrabold tracking-tight text-[#9a4600]">HAMIM</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a7266] font-bold mt-1">Admin Maqdis</p>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto custom-scrollbar pr-2">
          <Link href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl bg-[#9a4600] text-white shadow-sm transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            <span className="font-semibold text-sm">Dashboard</span>
          </Link>
          <Link href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl text-[#564338] hover:bg-[#f3f4f5] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
            <span className="font-medium text-sm">Statistik</span>
          </Link>
          <Link href="#" className="flex items-center gap-4 px-4 py-3 rounded-xl text-[#564338] hover:bg-[#f3f4f5] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            <span className="font-medium text-sm">Setoran</span>
          </Link>
          
          <div className="pt-4">
            <button
              onClick={() => setIsAppOpen(!isAppOpen)}
              className={`w-full flex justify-between items-center px-4 py-2 hover:text-[#9a4600] transition-colors rounded-xl text-sm ${isAppOpen ? 'bg-[#f3f4f5] text-[#9a4600]' : 'text-[#564338]'}`}
            >
              <p className="text-[11px] font-bold uppercase tracking-wider">Apps & Content</p>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isAppOpen ? 'rotate-180 text-[#9a4600]' : 'text-[#8a7266]'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/>
              </svg>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isAppOpen ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
              <div className="space-y-1">
                {['Transaksi', 'Banner & Berita', 'Surat Al-Quran', 'User', 'Kode Aktivasi'].map((item) => (
                  <Link 
                    key={item} 
                    href="#" 
                    className="flex items-center gap-4 px-4 py-2 rounded-xl text-[#564338] hover:text-[#9a4600] hover:bg-[#f3f4f5] transition-all text-sm font-medium"
                  >
                    <span className="w-5"></span>
                    <span>{item}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}