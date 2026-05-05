import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

export default function Tugas1Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-slate-900">
      <Header />
      <main className="flex-grow pt-20">
        <MainSection />
      </main>

      <Footer />
    </div>
  );
}