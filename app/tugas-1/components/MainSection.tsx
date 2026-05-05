export default function MainSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-8 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
      <div className="order-2 md:order-1">
        <span className="text-sm font-medium text-blue-600 mb-8 block uppercase">
          First
        </span>
        <h1 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
          Designing the Future of Corporate Excellence.
        </h1>
        <p className="text-base text-slate-600 mb-8 max-w-xl leading-relaxed">
          Our platform streamlines complex enterprise workflows into elegant, manageable experiences. We prioritize clarity and precision, ensuring your team stays focused on what truly matters: driving sustainable growth and professional success.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
            Launch Dashboard
          </button>
          <button className="bg-transparent border border-slate-300 text-slate-900 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors">
            View Case Studies
          </button>
        </div>
      </div>
      
      <div className="order-1 md:order-2">
        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-600/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <img 
            alt="Modern Minimalist Office Architecture" 
            className="relative z-10 w-full aspect-square object-cover rounded-full border border-slate-200 shadow-lg" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2WUUc7y9Rx8yxN-o1Qti2v8sDjFJ16Sq8T9-fZRlwXQSlVcpJugvZzW-4h9r5lKRtjMRF8YpTRqw38Cd4re2b0ktAMT5muHOQJe3qUVOsgwWAvyZJ3TBtV0VlZyLiqrCGCnmSS_OsFoFvWHcJf2SgirxQxMl9ia1FAmfmysCEhymT2lIrM4XcMRi4Au61hC7jMcZgvsmi7F3CYuqPRKN5nTAjS36AE4JsVpD1FfPU8nACJgX-qMGPiWj-7BhmAtR7LsfsbDeACrA" 
          />
        </div>
      </div>
    </section>
  );
}