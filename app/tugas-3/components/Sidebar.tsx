import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-[#191c1d]/40 backdrop-blur-sm z-20 lg:hidden transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      
      <aside className={`w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-30 transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#FF8A3D] rounded-lg flex items-center justify-center text-white font-bold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path d="M12 21a9 9 0 100-18 9 9 0 000 18z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800 tracking-tight">Hamim</span>
          </div>
          <button onClick={onClose} className="lg:hidden text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <nav className="flex-1 mt-4">
          <ul className="space-y-1">
            <li>
              <Link href="/tugas-3" className="flex items-center px-6 py-3 text-[#FF8A3D] border-r-4 border-[#FF8A3D] bg-[#FFF7ED] font-semibold">
                <span className="mr-3">📖</span> Hafalan
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center px-6 py-3 text-gray-500 hover:bg-[#FFF7ED] transition-colors">
                <span className="mr-3">🏆</span> Peringkat
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center px-6 py-3 text-gray-500 hover:bg-[#FFF7ED] transition-colors">
                <span className="mr-3">⚙️</span> Pengaturan
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-6 border-t border-gray-100">
          <button className="flex items-center text-red-500 font-medium hover:text-red-600 transition-colors">
            <span className="mr-3">🚪</span> Keluar
          </button>
        </div>
      </aside>
    </>
  );
}