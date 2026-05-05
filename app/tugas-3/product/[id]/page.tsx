"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { programHafalan } from "../../data";

export default function ProductDetailPage() {
  const params = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const program = programHafalan.find((p) => p.id === params.id);

  if (!program) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-[#191c1d]">Program tidak ditemukan</h1>
          <Link
            href="/tugas-3"
            className="inline-block bg-[#ff8a3d] hover:bg-[#e67a36] text-white font-bold px-6 py-3 rounded-2xl transition-all"
          >
            ← Kembali ke Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#191c1d] flex overflow-x-hidden">
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <div className="flex-1 lg:ml-64 flex flex-col w-full min-h-screen overflow-y-auto">
        <Topbar onMenuToggle={() => setIsMobileMenuOpen(true)} />

        <main className="p-4 lg:p-8 w-full max-w-[100vw]">
          <Link
            href="/tugas-3"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#9a4600] hover:text-[#ff8a3d] transition-colors mb-6 lg:mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Dashboard
          </Link>

          <div className="max-w-3xl">
            <div className={`w-20 h-20 rounded-3xl ${program.bgColor} flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-6`}>
              {program.icon}
            </div>

            <h1 className="text-2xl lg:text-3xl font-black text-[#191c1d] mb-4 leading-tight tracking-tight">
              {program.title}
            </h1>

            <div className="inline-flex items-center px-4 py-2 bg-[#ff8a3d]/10 text-[#9a4600] font-bold text-sm rounded-full mb-6">
              <span className="mr-2">💰</span> {program.harga}
            </div>

            <p className="text-sm lg:text-base text-[#564338] leading-relaxed mb-8 lg:mb-10">
              {program.deskripsi}
            </p>

            <div className="space-y-5 mb-10">
              <h4 className="font-bold text-[#191c1d] tracking-wide uppercase text-xs lg:text-sm">Benefit Program:</h4>
              <ul className="space-y-4">
                <li className="flex text-sm text-[#564338]"><span className="text-emerald-500 mr-3 text-lg font-bold">✓</span> Evaluasi hafalan komprehensif oleh ustadz/ustadzah tersertifikasi.</li>
                <li className="flex text-sm text-[#564338]"><span className="text-emerald-500 mr-3 text-lg font-bold">✓</span> Bimbingan tajwid dasar dan perbaikan makhraj huruf (Tahsin).</li>
                <li className="flex text-sm text-[#564338]"><span className="text-emerald-500 mr-3 text-lg font-bold">✓</span> Akses materi & audio irama Maqdis seumur hidup.</li>
              </ul>
            </div>

            <button className="w-full sm:w-auto bg-[#ff8a3d] hover:bg-[#e67a36] text-white font-bold h-12 lg:h-14 px-10 rounded-2xl shadow-lg hover:shadow-xl transition-all tracking-wide hover:-translate-y-1">
              Daftar Program Sekarang
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
