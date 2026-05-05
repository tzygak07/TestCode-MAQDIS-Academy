import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
      <div className="max-w-[1280px] mx-auto px-8 py-10 flex justify-center items-center w-full">
        <div className="flex gap-8 text-sm font-medium text-slate-500">
          <Link href="#" className="hover:text-slate-700 transition-colors">
            Instagram
          </Link>
          <Link href="#" className="hover:text-slate-700 transition-colors">
            LinkedIn
          </Link>
          <Link href="#" className="hover:text-slate-700 transition-colors">
            Facebook
          </Link>
          <Link href="#" className="hover:text-slate-700 transition-colors">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}