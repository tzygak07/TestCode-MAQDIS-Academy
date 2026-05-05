export default function Streak() {
  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 border border-[#edeeef] shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8 gap-4 sm:gap-0">
        <h2 className="text-lg lg:text-xl font-bold text-[#191c1d] tracking-tight">Runtutan Kamu</h2>
        <div className="flex space-x-2 lg:space-x-4 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
          <span className="bg-[#ff8a3d]/10 text-[#9a4600] px-3 lg:px-4 py-2 rounded-2xl text-xs lg:text-sm font-bold flex items-center shadow-sm whitespace-nowrap">
            <span className="text-base lg:text-lg mr-1.5">🔥</span> 12 Hari
          </span>
          <span className="bg-[#ff8a3d]/10 text-[#9a4600] px-3 lg:px-4 py-2 rounded-2xl text-xs lg:text-sm font-bold flex items-center shadow-sm whitespace-nowrap">
            <span className="text-base lg:text-lg mr-1.5">⚡</span> 120 XP
          </span>
        </div>
      </div>
      
      <div className="flex justify-between items-end gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2 lg:mx-0 lg:px-0 lg:overflow-visible lg:pb-0">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="flex flex-col items-center space-y-2 lg:space-y-3 min-w-[3rem] lg:min-w-0">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#ff8a3d] rounded-full flex items-center justify-center border-[3px] lg:border-[4px] border-orange-100 text-white text-base lg:text-xl shadow-inner">🏅</div>
            <span className="text-xs font-bold text-[#9a4600] tracking-wide">{num}</span>
          </div>
        ))}
        {[7, 8, 9, 10].map((num) => (
          <div key={num} className="flex flex-col items-center space-y-2 lg:space-y-3 opacity-40 grayscale min-w-[3rem] lg:min-w-0">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-200 rounded-full flex items-center justify-center border-[3px] lg:border-[4px] border-gray-50 text-white text-base lg:text-xl">🏅</div>
            <span className="text-xs font-bold text-gray-500 tracking-wide">{num}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
