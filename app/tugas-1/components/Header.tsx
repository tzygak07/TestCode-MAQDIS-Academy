import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 h-20">
      <nav className="flex justify-between items-center max-w-[1280px] mx-auto px-8 w-full h-full font-sans antialiased">
        <div className="text-xl font-bold tracking-tight text-slate-900">
          LandingPage
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-slate-900 font-medium border-b-2 border-slate-900 pb-2 hover:opacity-80 transition-opacity">
            Home
          </Link>
          <Link href="#" className="text-slate-500 font-medium hover:text-slate-900 transition-colors">
            Solutions
          </Link>
          <Link href="#" className="text-slate-500 font-medium hover:text-slate-900 transition-colors">
            Resources
          </Link>
          <Link href="#" className="text-slate-500 font-medium hover:text-slate-900 transition-colors">
            Contact
          </Link>
        </div>
        <button className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors">
          Get Started
        </button>
      </nav>
    </header>
  );
}