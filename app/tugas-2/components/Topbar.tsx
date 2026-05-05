interface TopbarProps {
  onMenuToggle?: () => void;
}

export default function Topbar({ onMenuToggle }: TopbarProps) {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-[280px] z-40 h-20 bg-white/70 backdrop-blur-xl border-b border-[#edeeef] flex justify-between items-center px-6 md:px-10">
      
      <div className="flex items-center gap-4">
        <button onClick={onMenuToggle} className="md:hidden text-[#564338] hover:text-[#9a4600] transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
        <div className="hidden sm:flex items-center gap-4">
          <span className="text-[#9a4600] font-bold text-2xl">Dashboard</span>
        </div>
      </div>

      <div className="flex items-center gap-3 pl-4 border-l border-[#edeeef]">
        <div className="w-9 h-9 rounded-full bg-[#ff8a3d]/20 border border-[#edeeef] flex items-center justify-center text-[#9a4600]">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
        </div>
        <svg className="w-5 h-5 text-[#8a7266]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
    </header>
  );
}