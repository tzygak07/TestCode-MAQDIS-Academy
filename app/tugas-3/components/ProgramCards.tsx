import { programHafalan } from "../data";

interface ProgramCardsProps {
  onSelectProgram: (program: any) => void;
}

export default function ProgramCards({ onSelectProgram }: ProgramCardsProps) {
  const patternStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' opacity='0.3'%3E%3Cpath d='M12 0C12 6.6 17.4 12 24 12C17.4 12 12 17.4 12 24C12 17.4 6.6 12 0 12C6.6 12 12 6.6 12 0z'/%3E%3C/svg%3E")`,
    backgroundSize: '20px 20px',
    backgroundPosition: 'right center',
    backgroundRepeat: 'repeat'
  };

  return (
    <div className="space-y-4 pt-2 lg:pt-4">
      {programHafalan.map((program) => (
        <div 
          key={program.id} 
          onClick={() => onSelectProgram(program)}
          className={`cursor-pointer block bg-gradient-to-r from-[#fcb366] to-[#f48031] rounded-xl p-4 lg:p-5 text-white relative overflow-hidden shadow-sm group hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 ease-out`}
        >
          <div className="absolute top-0 right-[-10px] w-[100px] lg:w-[140px] h-full opacity-60" style={patternStyle}></div>
          
          <div className="flex items-center relative z-10 ml-1 lg:ml-3">
            
            <div className="w-[36px] h-[36px] lg:w-[42px] lg:h-[42px] bg-white rounded-full flex items-center justify-center mr-4 lg:mr-8 shrink-0 shadow-[0_0_0_4px_rgba(255,255,255,0.4),0_0_0_8px_rgba(255,255,255,0.15)] lg:shadow-[0_0_0_6px_rgba(255,255,255,0.4),0_0_0_12px_rgba(255,255,255,0.15)]">
              <span className="text-base lg:text-lg font-bold text-[#f48031] drop-shadow-sm">{program.icon}</span>
            </div>
            
            <div className="flex-1 min-w-0 pr-2">
              <h2 className="text-[15px] lg:text-[17px] font-bold flex items-center tracking-tight truncate">
                {program.title} 
                
                <span className="ml-2 mt-0.5 text-[8px] lg:text-[9px] bg-white/20 rounded-full w-4 h-4 flex items-center justify-center opacity-90 group-hover:translate-x-1 transition-transform shrink-0">
                  ➔
                </span>
              </h2>
              
              <p className="hidden text-white/90 text-sm font-medium leading-relaxed opacity-90">
                {program.deskripsi}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}