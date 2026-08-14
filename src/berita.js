import React from 'react';

function Berita({ onBack }) {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Tombol Kembali ke Beranda */}
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition font-medium text-sm shadow-sm"
        >
          ← Kembali ke Beranda
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Kabar Seputar Sekolah (Semua Berita)
        </h1>

        {/* Grid Daftar Berita */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Berita 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
            <div className="p-6">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                Pengumuman
              </span>
              <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2">
                Penerimaan Peserta Didik Baru (PPDB)
              </h2>
              <p className="text-gray-600 text-sm">
                Informasi pendaftaran siswa baru SMP Al-Fathonah Arjasari tahun ajaran baru telah dibuka.
              </p>
            </div>
          </div>

          {/* Card Berita 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
            <div className="p-6">
              <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                Prestasi
              </span>
              <h2 className="text-xl font-bold text-gray-800 mt-4 mb-2">
                Juara Lomba Pramuka
              </h2>
              <p className="text-gray-600 text-sm">
                Siswa SMP Al-Fathonah meraih penghargaan dalam perlombaan tingkat kabupaten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Berita;