export default function Progress() {
  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 border border-[#edeeef] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 lg:gap-0">
      <div className="space-y-1">
        <p className="text-xs font-bold text-[#8a7266] uppercase tracking-widest">Progress Hafalan</p>
        <h3 className="text-xl lg:text-2xl font-black text-[#191c1d] tracking-tight">Hari 8 : Ayat 16-20.1</h3>
      </div>
      <button className="w-full sm:w-auto bg-[#ff8a3d] hover:bg-[#e67a36] text-white h-12 px-8 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all">
        Lanjut
      </button>
    </div>
  );
}
