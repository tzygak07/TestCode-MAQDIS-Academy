"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import UserStatsChart from "./components/UserStatsChart";

export default function Tugas2Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#191c1d] font-sans">
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 md:hidden z-40 transition-opacity duration-300" 
          onClick={handleCloseMobileMenu}
        />
      )}
      <Sidebar isOpen={isMobileMenuOpen} onClose={handleCloseMobileMenu} />
      <Topbar onMenuToggle={handleMenuToggle} />
      
      <main className="md:ml-[280px] pt-24 md:pt-28 px-6 md:px-10 pb-16">
        
        <div className="mb-10 hidden md:block">
          <h2 className="text-2xl font-bold mb-2 text-[#191c1d]">Dashboard Overview</h2>
          <p className="text-sm text-[#564338]">Ringkasan data dan aktivitas platform Anda hari ini.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          <div className="bg-white border border-[#edeeef] rounded-2xl p-6 md:p-8 transition-all hover:shadow-lg hover:border-[#ff8a3d] hover:shadow-[#ff8a3d]/10">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-[#ff8a3d]/15 rounded-xl flex items-center justify-center text-[#ff8a3d]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8a7266] bg-[#ff8a3d]/10 px-3 py-1 rounded-full">Keseluruhan</span>
            </div>
            <h3 className="text-[#564338] text-sm font-medium mb-2">Total Pengguna</h3>
            <p className="text-4xl font-bold text-[#191c1d]">50.050</p>
          </div>

          <div className="bg-white border border-[#edeeef] rounded-2xl p-6 md:p-8 transition-all hover:shadow-lg hover:border-[#00b7e7] hover:shadow-[#00b7e7]/10">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-[#00b7e7]/15 rounded-xl flex items-center justify-center text-[#00b7e7]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8a7266] bg-[#00b7e7]/10 px-3 py-1 rounded-full">Tersedia</span>
            </div>
            <h3 className="text-[#564338] text-sm font-medium mb-2">Kode Aktivasi</h3>
            <p className="text-4xl font-bold text-[#191c1d]">63.123</p>
          </div>

          <div className="bg-white border border-[#edeeef] rounded-2xl p-6 md:p-8 transition-all hover:shadow-lg hover:border-[#855233] hover:shadow-[#855233]/10">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 bg-[#855233]/15 rounded-xl flex items-center justify-center text-[#855233]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8a7266] bg-[#855233]/10 px-3 py-1 rounded-full">Tahun 2025</span>
            </div>
            <h3 className="text-[#564338] text-sm font-medium mb-2">Pendapatan Tahunan</h3>
            <p className="text-4xl font-bold text-[#191c1d]">Rp 17.144.000</p>
          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="col-span-1 lg:col-span-8">
            <div className="bg-white border border-[#edeeef] rounded-2xl p-6 md:p-8 h-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-lg font-bold text-[#191c1d]">Statistik User Hamim</h3>
                  <p className="text-sm text-[#8a7266] mt-1">Dalam satu tahun terakhir</p>
                </div>
                <button className="bg-white border border-[#edeeef] rounded-xl text-xs font-bold text-[#564338] px-5 py-2.5 hover:bg-[#f3f4f5] hover:border-[#ff8a3d] transition-all flex items-center gap-2 whitespace-nowrap">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  Tahun 2025
                </button>
              </div>
              
              <UserStatsChart />
            </div>
          </div>

          <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
            
            <div className="bg-white border border-[#edeeef] rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#9a4600]/15 flex items-center justify-center text-[#9a4600]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
                </div>
                <span className="px-3 py-1 bg-[#ffb68d]/20 text-[#855233] text-[10px] font-bold rounded-full uppercase tracking-tighter">7 Hari Terakhir</span>
              </div>
              <h4 className="text-[#8a7266] text-sm font-medium mb-2">Total User Baru</h4>
              <p className="text-4xl font-bold text-[#191c1d]">127</p>
              
              <div className="mt-6 w-full bg-[#edeeef] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#9a4600] h-full w-[70%] rounded-full"></div>
              </div>
            </div>

            <div className="bg-white border border-[#edeeef] rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all flex-1 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#00b7e7]/15 flex items-center justify-center text-[#006783]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-tight">Online Now</span>
                </div>
              </div>
              <h4 className="text-[#8a7266] text-sm font-medium mb-2">User Sedang Aktif</h4>
              <p className="text-4xl font-bold text-[#191c1d]">12</p>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}