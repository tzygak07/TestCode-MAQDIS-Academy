interface TopbarProps {
  onMenuToggle: () => void;
}

export default function Topbar({ onMenuToggle }: TopbarProps) {
  return (
    <header className="bg-white border-b border-gray-100 px-4 lg:px-8 py-4 flex justify-between items-center sticky top-0 z-10 w-full">
      <div className="flex items-center space-x-4">
        <button onClick={onMenuToggle} className="text-gray-400 hover:text-gray-600 lg:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </button>
        <h1 className="text-lg font-bold text-gray-700">Hafalan</h1>
      </div>

      <div className="flex items-center space-x-4 lg:space-x-6">
        <div className="text-right hidden md:block">
          <p className="text-xs font-semibold text-gray-800">Assalamu'alaikum Farrel</p>
          <p className="text-[10px] text-gray-400">Which Chapter Will You Memorize Today?</p>
        </div>
        
        <div className="relative cursor-pointer hover:opacity-80">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
        </div>

        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold border-2 border-white shadow-sm cursor-pointer shrink-0">
          F
        </div>
      </div>
    </header>
  );
}