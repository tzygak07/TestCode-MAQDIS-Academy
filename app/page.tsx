import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Uji Kompetensi Internship
          </h1>
          <p className="text-gray-600">MAQDIS Academy</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Tugas 1 */}
          <Link 
            href="/tugas-1" 
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-gray-300 transition-all duration-200"
          >
            <div className="flex flex-col h-full">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Landing Page
              </h3>
              <p className="text-sm text-gray-600 flex-grow">
                Halaman web sederhana yang terdiri dari Header, Section Utama (teks & gambar), dan Footer yang responsif.
              </p>
              <div className="mt-4 text-blue-600 text-sm font-medium">
                Lihat →
              </div>
            </div>
          </Link>

          {/* Card Tugas 2 */}
          <Link 
            href="/tugas-2" 
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-gray-300 transition-all duration-200"
          >
            <div className="flex flex-col h-full">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tugas Kedua
              </h3>
              <p className="text-sm text-gray-600 flex-grow">
                (Segera diimplementasikan sesuai instruksi berikutnya).
              </p>
              <div className="mt-4 text-green-600 text-sm font-medium">
                Lihat →
              </div>
            </div>
          </Link>

          {/* Card Tugas 3 */}
          <Link 
            href="/tugas-3" 
            className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-gray-300 transition-all duration-200"
          >
            <div className="flex flex-col h-full">
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tugas Ketiga
              </h3>
              <p className="text-sm text-gray-600 flex-grow">
                (Segera diimplementasikan sesuai instruksi berikutnya).
              </p>
              <div className="mt-4 text-purple-600 text-sm font-medium">
                Lihat →
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}