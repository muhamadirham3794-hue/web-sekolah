import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronRight, ChevronLeft, GraduationCap, BookOpen, Users, Award, 
  MapPin, Phone, Mail, ArrowRight, CheckCircle, Shield, Quote, 
  Calendar, ArrowUpRight, Monitor, Library, Heart, Activity, 
  Star, PlayCircle, Sparkles, Target, Laptop, Info,
  Lock, Edit3, Save, LogOut, Settings, Plus, Trash2
} from 'lucide-react';

const FEATURES = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Kurikulum Terpadu",
    desc: "Sinergi kurikulum nasional (Merdeka Belajar) dan pendidikan agama Islam yang mendalam."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Pengajar Bersertifikasi",
    desc: "Didukung pendidik kompeten, lulusan universitas terbaik, dan berpengalaman."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Berakhlakul Karimah",
    desc: "Pembentukan karakter islami, pembiasaan shalat dhuha, dan adab bergaul."
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Digital Learning",
    desc: "Pembelajaran interaktif berbasis teknologi untuk menghadapi tantangan global."
  }
];

const FASILITAS = [
  {
    title: "Laboratorium Komputer",
    desc: "Dilengkapi 40+ PC spesifikasi tinggi dan internet cepat.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2"
  },
  {
    title: "Perpustakaan Digital",
    desc: "Ribuan koleksi buku fisik dan e-book yang nyaman untuk literasi.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1"
  },
  {
    title: "Masjid Utama",
    desc: "Pusat kegiatan ibadah.",
    image: "https://images.unsplash.com/photo-1584553421349-355dbcb32ee8?q=80&w=600",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  {
    title: "Lapangan Olahraga",
    desc: "Fasilitas olahraga terpadu.",
    image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=600",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  }
];

const LATEST_NEWS = [
  {
    id: 1,
    title: "Pendaftaran Peserta Didik Baru (PPDB) Gelombang 1 Resmi Dibuka",
    date: "01 Agustus 2026",
    category: "Pengumuman",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600",
    content: "Alhamdulillah, pendaftaran Peserta Didik Baru (PPDB) SMP Al-Fathonah Arjasari Gelombang 1 telah resmi dibuka. Kami mengundang putra-putri terbaik bangsa untuk bergabung bersama kami dalam mencetak generasi cerdas, berakhlak mulia, dan berwawasan global.\n\nPendaftaran dapat dilakukan secara online melalui website resmi ini atau datang langsung ke sekretariat pendaftaran di kampus SMP Al-Fathonah Arjasari. Berbagai kemudahan dan program beasiswa tersedia bagi calon siswa yang berprestasi dan memenuhi syarat tertentu.\n\nJangan lewatkan kesempatan berharga ini. Kuota terbatas! Segera daftarkan diri Anda dan raih masa depan gemilang bersama SMP Al-Fathonah Arjasari."
  },
  {
    id: 2,
    title: "Siswa SMP Al-Fathonah Raih Medali Emas Olimpiade Sains Nasional Tingkat Kabupaten",
    date: "15 Juli 2026",
    category: "Prestasi",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600",
    content: "Prestasi membanggakan kembali ditorehkan oleh siswa SMP Al-Fathonah Arjasari. Ananda Muhammad Fatih, siswa kelas VIII, berhasil meraih medali emas pada ajang Olimpiade Sains Nasional (OSN) tingkat Kabupaten Tasikmalaya di bidang Matematika.\n\nKeberhasilan ini tidak lepas dari kerja keras, ketekunan, dan doa dari seluruh civitas akademika, serta bimbingan intensif dari para guru pembina OSN. Prestasi ini semakin memotivasi kami untuk terus memberikan pendampingan terbaik bagi para siswa agar mampu bersaing di tingkat provinsi maupun nasional.\n\nSelamat kepada Ananda Fatih! Semoga prestasi ini menjadi inspirasi bagi siswa-siswi lainnya untuk terus berprestasi dan mengharumkan nama sekolah."
  },
  {
    id: 3,
    title: "Pelaksanaan Program Pesantren Kilat dan Buka Puasa Bersama Ramadhan",
    date: "20 Maret 2026",
    category: "Kegiatan",
    image: "https://images.unsplash.com/photo-1584553421349-355dbcb32ee8?q=80&w=600",
    content: "Menyambut bulan suci Ramadhan, SMP Al-Fathonah Arjasari akan menyelenggarakan kegiatan Pesantren Kilat (Sanlat) yang wajib diikuti oleh seluruh siswa kelas VII hingga IX. Kegiatan ini bertujuan untuk meningkatkan keimanan, ketakwaan, dan pemahaman agama Islam para siswa.\n\nSanlat akan berlangsung selama 3 hari berturut-turut dengan berbagai agenda menarik seperti kajian keislaman, tahfidz Al-Quran, praktik ibadah, dan diakhiri dengan buka puasa bersama serta shalat tarawih berjamaah.\n\nKami berharap melalui kegiatan ini, para siswa dapat mengisi bulan Ramadhan dengan aktivitas yang bermanfaat dan penuh keberkahan. Mari bersama-sama kita raih pahala berlimpah di bulan suci ini."
  }
];

const NewsDetail = ({ news, onBack }) => {
  if (!news) return null;
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#00664f]/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 text-slate-500 hover:text-[#00664f] font-medium flex items-center gap-2 transition-all group bg-white py-2.5 px-5 rounded-full shadow-sm w-fit border border-slate-100 hover:shadow-md"
        >
          <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> 
          Kembali ke Berita
        </button>

        <article className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 relative">
          <div className="w-full h-[300px] md:h-[450px] relative">
            <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/95 backdrop-blur-sm text-[#00664f] text-sm font-bold px-5 py-2 rounded-full shadow-lg">
              {news.category}
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex items-center text-slate-500 font-semibold mb-6 uppercase tracking-wider text-sm">
              <Calendar className="w-5 h-5 mr-2 text-[#00664f]" /> Dipublikasikan pada {news.date}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              {news.title}
            </h1>
            
            <div className="prose prose-slate md:prose-lg max-w-none prose-headings:text-[#00664f] prose-a:text-[#00664f]">
              {news.content ? news.content.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-5 text-slate-600 leading-relaxed">
                  {paragraph}
                </p>
              )) : (
                <p className="text-slate-500 italic">Konten berita belum tersedia.</p>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

const FormPPDB = ({ setCurrentPage, siteData }) => {
  const [formData, setFormData] = useState({
    namaLengkap: '', nisn: '', tempatLahir: '', tanggalLahir: '',
    jenisKelamin: '', agama: '', alamatLengkap: '', asalSekolah: '',
    tahunLulus: '', namaOrtu: '', pekerjaanOrtu: '', noWhatsapp: ''
  });
  const [status, setStatus] = useState('idle'); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulasi pengiriman API
    setTimeout(() => {
      setStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#00664f]/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#e1ce8c]/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="mb-8 text-slate-500 hover:text-[#00664f] font-medium flex items-center gap-2 transition-all group bg-white py-2.5 px-5 rounded-full shadow-sm w-fit border border-slate-100 hover:shadow-md"
        >
          <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> 
          Kembali ke Beranda
        </button>

        <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 relative">
          {/* Header Form */}
          <div className="bg-gradient-to-br from-[#00664f] to-[#004d3b] p-8 md:p-12 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 opacity-10">
                <Shield className="w-64 h-64 transform translate-x-1/4 -translate-y-1/4" />
             </div>
             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-[#e1ce8c] text-xs font-bold px-4 py-2 rounded-full mb-6 border border-white/20">
                  <Sparkles className="w-4 h-4" /> Tahun Ajaran {siteData.sekolah.tahunPelajaran}
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Formulir Pendaftaran</h2>
                <p className="text-slate-200 max-w-xl text-sm md:text-base leading-relaxed font-light">
                  Lengkapi data calon peserta didik di bawah ini dengan sebenar-benarnya sesuai dengan dokumen resmi (Kartu Keluarga / Ijazah).
                </p>
             </div>
          </div>

          <div className="p-6 md:p-12">
            {status === 'success' ? (
              <div className="text-center py-16 animate-fade-in">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                  <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-50 duration-1000"></div>
                  <CheckCircle className="w-12 h-12 text-green-600 relative z-10" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">Pendaftaran Berhasil!</h3>
                <p className="text-slate-500 max-w-md mx-auto text-lg mb-8 leading-relaxed">
                  Alhamdulillah, data calon siswa atas nama <strong className="text-[#00664f]">{formData.namaLengkap}</strong> telah masuk ke dalam sistem kami.
                </p>
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl inline-block max-w-lg mb-10 w-full">
                  <p className="text-sm text-slate-500 mb-2">Nomor Registrasi Anda:</p>
                  <p className="text-2xl font-black text-[#00664f] tracking-widest mb-4">PPDB-{Math.floor(1000 + Math.random() * 9000)}</p>
                  <p className="text-sm text-slate-600">
                    Silakan simpan nomor ini. Panitia kami akan segera menghubungi Anda melalui WhatsApp untuk tahap verifikasi berkas.
                  </p>
                </div>
                <div>
                  <button 
                    onClick={() => { setStatus('idle'); setFormData({ namaLengkap: '', nisn: '', tempatLahir: '', tanggalLahir: '', jenisKelamin: '', agama: '', alamatLengkap: '', asalSekolah: '', tahunLulus: '', namaOrtu: '', pekerjaanOrtu: '', noWhatsapp: '' }); }} 
                    className="text-[#00664f] font-bold hover:text-[#004d3b] flex items-center justify-center gap-2 mx-auto group"
                  >
                    Daftarkan Siswa Lainnya <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                
                {/* Bagian A */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-[#00664f]/10 text-[#00664f] flex items-center justify-center font-bold text-lg">1</div>
                    <h4 className="font-bold text-xl text-slate-900">Identitas Calon Siswa</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Nama Lengkap <span className="text-red-500">*</span></label>
                      <input required type="text" name="namaLengkap" value={formData.namaLengkap} onChange={handleInputChange} placeholder="Sesuai Akte Kelahiran" 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-[#00664f] focus:ring-4 focus:ring-[#00664f]/10 outline-none transition-all bg-slate-50 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">NISN</label>
                      <input type="text" name="nisn" value={formData.nisn} onChange={handleInputChange} placeholder="10 Digit Nomor Induk Siswa Nasional" 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-[#00664f] focus:ring-4 focus:ring-[#00664f]/10 outline-none transition-all bg-slate-50 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Tempat Lahir <span className="text-red-500">*</span></label>
                      <input required type="text" name="tempatLahir" value={formData.tempatLahir} onChange={handleInputChange} placeholder="Contoh: Tasikmalaya" 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-[#00664f] focus:ring-4 focus:ring-[#00664f]/10 outline-none transition-all bg-slate-50 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Tanggal Lahir <span className="text-red-500">*</span></label>
                      <input required type="date" name="tanggalLahir" value={formData.tanggalLahir} onChange={handleInputChange} 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-[#00664f] focus:ring-4 focus:ring-[#00664f]/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-700" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Jenis Kelamin <span className="text-red-500">*</span></label>
                      <select required name="jenisKelamin" value={formData.jenisKelamin} onChange={handleInputChange} 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-[#00664f] focus:ring-4 focus:ring-[#00664f]/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-700 appearance-none">
                        <option value="">Pilih Jenis Kelamin...</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Agama <span className="text-red-500">*</span></label>
                      <select required name="agama" value={formData.agama} onChange={handleInputChange} 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-[#00664f] focus:ring-4 focus:ring-[#00664f]/10 outline-none transition-all bg-slate-50 focus:bg-white text-slate-700 appearance-none">
                        <option value="">Pilih Agama...</option>
                        <option value="Islam">Islam</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-semibold text-slate-700">Alamat Lengkap <span className="text-red-500">*</span></label>
                      <textarea required name="alamatLengkap" value={formData.alamatLengkap} onChange={handleInputChange} rows="3" placeholder="Jalan, RT/RW, Desa, Kecamatan, Kota/Kabupaten" 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-[#00664f] focus:ring-4 focus:ring-[#00664f]/10 outline-none transition-all bg-slate-50 focus:bg-white resize-none"></textarea>
                    </div>
                  </div>
                </div>

                {/* Bagian B */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-[#00664f]/10 text-[#00664f] flex items-center justify-center font-bold text-lg">2</div>
                    <h4 className="font-bold text-xl text-slate-900">Data Asal Sekolah</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-1">
                      <label className="text-sm font-semibold text-slate-700">Asal Sekolah (SD/MI) <span className="text-red-500">*</span></label>
                      <input required type="text" name="asalSekolah" value={formData.asalSekolah} onChange={handleInputChange} placeholder="Contoh: SDN 1 Arjasari" 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-[#00664f] focus:ring-4 focus:ring-[#00664f]/10 outline-none transition-all bg-slate-50 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Tahun Lulus <span className="text-red-500">*</span></label>
                      <input required type="number" name="tahunLulus" value={formData.tahunLulus} onChange={handleInputChange} placeholder="Contoh: 2026" min="2020" max="2030"
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-[#00664f] focus:ring-4 focus:ring-[#00664f]/10 outline-none transition-all bg-slate-50 focus:bg-white" />
                    </div>
                  </div>
                </div>

                {/* Bagian C */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-[#00664f]/10 text-[#00664f] flex items-center justify-center font-bold text-lg">3</div>
                    <h4 className="font-bold text-xl text-slate-900">Data Orang Tua / Wali</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-semibold text-slate-700">Nama Orang Tua / Wali <span className="text-red-500">*</span></label>
                      <input required type="text" name="namaOrtu" value={formData.namaOrtu} onChange={handleInputChange} placeholder="Sesuai KTP" 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-[#00664f] focus:ring-4 focus:ring-[#00664f]/10 outline-none transition-all bg-slate-50 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Pekerjaan <span className="text-red-500">*</span></label>
                      <input required type="text" name="pekerjaanOrtu" value={formData.pekerjaanOrtu} onChange={handleInputChange} placeholder="Contoh: Wiraswasta, PNS, Petani" 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-[#00664f] focus:ring-4 focus:ring-[#00664f]/10 outline-none transition-all bg-slate-50 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Nomor WhatsApp Aktif <span className="text-red-500">*</span></label>
                      <input required type="tel" name="noWhatsapp" value={formData.noWhatsapp} onChange={handleInputChange} placeholder="Contoh: 081234567890" 
                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-[#00664f] focus:ring-4 focus:ring-[#00664f]/10 outline-none transition-all bg-slate-50 focus:bg-white" />
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full bg-[#00664f] hover:bg-[#004d3b] disabled:bg-slate-400 text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-[#00664f]/20 flex justify-center items-center gap-3 text-lg hover:-translate-y-1"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Memproses Data...
                      </>
                    ) : (
                      <>Kirim Data Pendaftaran <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                  <p className="text-center text-slate-500 text-sm mt-4 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4 text-[#00664f]" /> Data Anda dienkripsi dan dijamin kerahasiaannya.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const INITIAL_SITE_DATA = {
  sekolah: {
    nama: "SMP AL-FATHONAH",
    npsn: "20227245",
    tahunPelajaran: "2026/2027",
    lokasi: "Arjasari - Tasikmalaya",
    alamat: "Jl. Arjasari, Leuwisari, Kab. Tasikmalaya, Jawa Barat, 46464",
    telepon: "(0265) 1234567",
    email: "info@smpalfathonah.sch.id",
    logo: "",
    akreditasi: "Predikat A",
    totalSiswa: "500+ Aktif"
  },
  hero: {
    tagline: "Penerimaan Siswa Baru",
    title1: "Cerdas",
    title2: "Intelektual & Spiritual",
    subtitle: "Mencetak generasi islami unggulan yang menguasai ilmu pengetahuan, teknologi, dan berakar kuat pada nilai-nilai akhlakul karimah."
  },
  profil: {
    namaKepsek: "Ahmad Fathonah, M.Pd.",
    fotoKepsek: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
    sambutan: "Pendidikan bukan sekadar proses transfer ilmu pengetahuan, melainkan pembentukan karakter yang utuh. Di SMP Al-Fathonah Arjasari, kami memadukan kurikulum modern dengan keluhuran akhlak Islam untuk membekali anak-anak kita menghadapi tantangan global dengan iman yang teguh.",
    videoProfil: ""
  },
  fasilitas: FASILITAS,
  berita: LATEST_NEWS,
  ekskul: [
    { name: "Pramuka", iconName: "Target", category: "Wajib" },
    { name: "Paskibra", iconName: "Star", category: "Pilihan" },
    { name: "Rohis (Tahfidz)", iconName: "BookOpen", category: "Keagamaan" },
    { name: "Futsal", iconName: "Activity", category: "Olahraga" },
    { name: "Pencak Silat", iconName: "Shield", category: "Olahraga" },
    { name: "Klub Komputer", iconName: "Monitor", category: "Akademik" }
  ],
  guru: [
    { id: 1, name: "Budi Santoso, S.Pd.", role: "Guru Matematika", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400" },
    { id: 2, name: "Siti Aminah, M.Ag.", role: "Guru PAI & Budi Pekerti", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" },
    { id: 3, name: "Ahmad Fauzi, S.Si.", role: "Guru IPA Terpadu", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400" },
    { id: 4, name: "Ratna Sari, S.Pd.", role: "Guru Bahasa Indonesia", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400" },
    { id: 5, name: "Rizky Pratama, S.Kom.", role: "Guru TIK", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" },
    { id: 6, name: "Nisa Fitriani, S.Pd.", role: "Guru Bahasa Inggris", image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=400" }
  ]
};

const AdminDashboard = ({ siteData, setSiteData, showToast, onLogout }) => {
  const [localData, setLocalData] = useState(siteData);

  // Fungsi untuk membaca file gambar dan mengubahnya menjadi Base64 string
  const processImageUpload = (e, callback) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Fungsi untuk mengunggah video
  const processVideoUpload = (e, callback) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        showToast('Ukuran video terlalu besar. Maksimal 100MB.');
        return;
      }
      const videoUrl = URL.createObjectURL(file);
      callback(videoUrl);
    }
  };

  // Fungsi untuk mengupdate item spesifik pada array Fasilitas / Berita
  const updateArrayItem = (arrayName, index, field, value) => {
    const newArray = [...localData[arrayName]];
    newArray[index] = { ...newArray[index], [field]: value };
    setLocalData({ ...localData, [arrayName]: newArray });
  };

  const addNewTeacher = () => {
    setLocalData(prev => ({
      ...prev,
      guru: [...prev.guru, { id: Date.now(), name: '', role: '', image: '' }]
    }));
    showToast('Form guru baru ditambahkan. Silakan isi data.');
  };

  const removeTeacher = (index) => {
    const newGuru = [...localData.guru];
    newGuru.splice(index, 1);
    setLocalData(prev => ({ ...prev, guru: newGuru }));
    showToast('Data guru dihapus.');
  };

  const handleSave = () => {
    setSiteData(localData);
    showToast('Perubahan berhasil disimpan!');
  };

  // Tambahkan di dalam komponen utama sebelum 'return'

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwrOR2iUENmq2avdLWwexeO50Djt9sLaavaxpdz4YLcRym5aSCvpjyj2m3bbPIED3aYaw/exec";

// 1. Fungsi untuk MENGAMBIL data dari Database saat web dimuat
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(APPS_SCRIPT_URL);
      const data = await response.json();
      
      if (data && data.sekolah) {
        setSiteData(data); // Mengganti state dengan data dari database
      }
    } catch (error) {
      console.error("Gagal mengambil data dari server", error);
    }
  };
  
  fetchData();
}, []);

// 2. Modifikasi fungsi handleSave di dalam komponen Admin
const handleSaveToDatabase = async () => {
  try {
    // Ubah status tombol menjadi loading jika perlu
    alert("Menyimpan ke database... Mohon tunggu.");
    
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(siteData), // Mengirim seluruh state web
      headers: {
        "Content-Type": "text/plain;charset=utf-8", 
        // Menggunakan text/plain untuk menghindari isu CORS preflight di Apps Script
      },
    });

    const result = await response.json();
    if (result.status === "success") {
      alert("Yeay! Website berhasil diperbarui & disimpan permanen!");
      setIsAdmin(false); // Keluar dari mode admin
    }
  } catch (error) {
    alert("Gagal menyimpan data: " + error.message);
  }
};

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div>
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
              <Settings className="text-[#00664f]" /> CMS Admin Dashboard
            </h2>
            <p className="text-slate-500 text-sm">Kelola konten website secara real-time.</p>
          </div>
          <button onClick={onLogout} className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg font-bold hover:bg-red-100 transition-colors">
            <LogOut className="w-4 h-4" /> Keluar
          </button>
        </div>

        <div className="space-y-6">
          {/* Pengaturan Identitas Sekolah */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2 flex items-center gap-2"><Edit3 className="w-5 h-5"/> Identitas & Kontak Sekolah</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">Nama Sekolah</label>
                <input type="text" value={localData.sekolah.nama} onChange={e => setLocalData({...localData, sekolah: {...localData.sekolah, nama: e.target.value}})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#00664f]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">NPSN</label>
                <input type="text" value={localData.sekolah.npsn} onChange={e => setLocalData({...localData, sekolah: {...localData.sekolah, npsn: e.target.value}})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#00664f]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">Lokasi Singkat</label>
                <input type="text" value={localData.sekolah.lokasi} onChange={e => setLocalData({...localData, sekolah: {...localData.sekolah, lokasi: e.target.value}})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#00664f]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">Tahun Pelajaran Saat Ini</label>
                <input type="text" value={localData.sekolah.tahunPelajaran} onChange={e => setLocalData({...localData, sekolah: {...localData.sekolah, tahunPelajaran: e.target.value}})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#00664f]" placeholder="Contoh: 2026/2027" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">Akreditasi</label>
                <input type="text" value={localData.sekolah.akreditasi} onChange={e => setLocalData({...localData, sekolah: {...localData.sekolah, akreditasi: e.target.value}})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#00664f]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">Total Siswa Aktif</label>
                <input type="text" value={localData.sekolah.totalSiswa} onChange={e => setLocalData({...localData, sekolah: {...localData.sekolah, totalSiswa: e.target.value}})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#00664f]" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-600 mb-1">Alamat Lengkap</label>
                <input type="text" value={localData.sekolah.alamat} onChange={e => setLocalData({...localData, sekolah: {...localData.sekolah, alamat: e.target.value}})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#00664f]" />
              </div>
              <div className="md:col-span-2 pt-4 border-t border-slate-100">
                <label className="block text-sm font-semibold text-slate-600 mb-2">Logo Sekolah</label>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                    {localData.sekolah.logo ? (
                      <img src={localData.sekolah.logo} alt="Logo" className="w-full h-full object-contain p-2" />
                    ) : (
                      <span className="text-xs text-slate-400 text-center px-2">Belum ada logo</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <input type="file" accept="image/*" onChange={(e) => processImageUpload(e, (base64) => setLocalData({...localData, sekolah: {...localData.sekolah, logo: base64}}))} className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00664f]/10 file:text-[#00664f] hover:file:bg-[#00664f]/20 transition-colors cursor-pointer" />
                    <p className="text-xs text-slate-500 mt-2">Format: JPG, PNG, atau SVG (Maks. 2MB).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pengaturan Hero */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2 flex items-center gap-2"><Edit3 className="w-5 h-5"/> Teks Beranda (Hero)</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">Tagline Atas</label>
                <input type="text" value={localData.hero.tagline} onChange={e => setLocalData({...localData, hero: {...localData.hero, tagline: e.target.value}})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#00664f]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-1">Judul Utama (Baris 1)</label>
                  <input type="text" value={localData.hero.title1} onChange={e => setLocalData({...localData, hero: {...localData.hero, title1: e.target.value}})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#00664f]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-1">Judul Utama (Baris 2 - Emas)</label>
                  <input type="text" value={localData.hero.title2} onChange={e => setLocalData({...localData, hero: {...localData.hero, title2: e.target.value}})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#00664f]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">Sub-judul / Deskripsi</label>
                <textarea rows="2" value={localData.hero.subtitle} onChange={e => setLocalData({...localData, hero: {...localData.hero, subtitle: e.target.value}})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#00664f] resize-none" />
              </div>
            </div>
          </div>

          {/* Pengaturan Profil */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2 flex items-center gap-2"><Edit3 className="w-5 h-5"/> Profil & Sambutan</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">Nama Kepala Sekolah</label>
                <input type="text" value={localData.profil.namaKepsek} onChange={e => setLocalData({...localData, profil: {...localData.profil, namaKepsek: e.target.value}})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#00664f]" />
              </div>
              <div className="pb-4 border-b border-slate-50">
                <label className="block text-sm font-semibold text-slate-600 mb-2">Foto Kepala Sekolah</label>
                <div className="flex items-center gap-4">
                  {localData.profil.fotoKepsek && <img src={localData.profil.fotoKepsek} alt="Kepsek" className="w-16 h-16 object-cover rounded-lg border border-slate-200 shadow-sm shrink-0" />}
                  <input type="file" accept="image/*" onChange={(e) => processImageUpload(e, (base64) => setLocalData({...localData, profil: {...localData.profil, fotoKepsek: base64}}))} className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-[#00664f]/10 file:text-[#00664f] hover:file:bg-[#00664f]/20 cursor-pointer" />
                </div>
              </div>
              <div className="pb-4 border-b border-slate-50">
                <label className="block text-sm font-semibold text-slate-600 mb-2">Video Profil Sekolah</label>
                <div className="flex items-center gap-4">
                  {localData.profil.videoProfil ? (
                    <div className="w-16 h-16 bg-slate-900 rounded-lg overflow-hidden shrink-0 relative flex items-center justify-center border border-slate-200">
                       <PlayCircle className="w-8 h-8 text-[#e1ce8c]" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-xs text-slate-400 text-center px-1">Belum ada</span>
                    </div>
                  )}
                  <div className="flex-1">
                    <input type="file" accept="video/*" onChange={(e) => processVideoUpload(e, (url) => setLocalData({...localData, profil: {...localData.profil, videoProfil: url}}))} className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-[#00664f]/10 file:text-[#00664f] hover:file:bg-[#00664f]/20 cursor-pointer" />
                    <p className="text-xs text-slate-500 mt-2">Format: MP4, WebM (Maks. 100MB).</p>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-1">Teks Sambutan</label>
                <textarea rows="4" value={localData.profil.sambutan} onChange={e => setLocalData({...localData, profil: {...localData.profil, sambutan: e.target.value}})} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#00664f] resize-none" />
              </div>
            </div>
          </div>

          {/* Pengaturan Fasilitas */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2 flex items-center gap-2"><Edit3 className="w-5 h-5"/> Data Fasilitas (Upload Gambar)</h3>
            <div className="space-y-4">
              {localData.fasilitas.map((item, index) => (
                <div key={index} className="bg-slate-50 p-5 rounded-xl border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <h4 className="font-bold text-slate-700 text-sm uppercase tracking-wider mb-2">Fasilitas #{index + 1}</h4>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Nama Fasilitas</label>
                    <input type="text" value={item.title} onChange={e => updateArrayItem('fasilitas', index, 'title', e.target.value)} className="w-full p-2.5 bg-white border border-slate-200 rounded-lg outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Deskripsi Singkat</label>
                    <input type="text" value={item.desc} onChange={e => updateArrayItem('fasilitas', index, 'desc', e.target.value)} className="w-full p-2.5 bg-white border border-slate-200 rounded-lg outline-none text-sm" />
                  </div>
                  <div className="md:col-span-2 mt-2">
                    <label className="block text-xs font-semibold text-slate-600 mb-2">Gambar Fasilitas</label>
                    <div className="flex items-center gap-4">
                      {item.image && <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg border border-slate-200 shadow-sm shrink-0" />}
                      <input type="file" accept="image/*" onChange={e => processImageUpload(e, base64 => updateArrayItem('fasilitas', index, 'image', base64))} className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-[#00664f]/10 file:text-[#00664f] hover:file:bg-[#00664f]/20 cursor-pointer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pengaturan Ekstrakurikuler */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2 flex items-center gap-2"><Edit3 className="w-5 h-5"/> Data Ekstrakurikuler</h3>
            <div className="space-y-4">
              {localData.ekskul.map((item, index) => (
                <div key={index} className="bg-slate-50 p-5 rounded-xl border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-3">
                    <h4 className="font-bold text-slate-700 text-sm uppercase tracking-wider mb-2">Ekskul #{index + 1}</h4>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Nama Ekskul</label>
                    <input type="text" value={item.name} onChange={e => updateArrayItem('ekskul', index, 'name', e.target.value)} className="w-full p-2.5 bg-white border border-slate-200 rounded-lg outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Kategori</label>
                    <input type="text" value={item.category} onChange={e => updateArrayItem('ekskul', index, 'category', e.target.value)} className="w-full p-2.5 bg-white border border-slate-200 rounded-lg outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Ikon (Pilihan)</label>
                    <select value={item.iconName} onChange={e => updateArrayItem('ekskul', index, 'iconName', e.target.value)} className="w-full p-2.5 bg-white border border-slate-200 rounded-lg outline-none text-sm appearance-none">
                      <option value="Target">Target (Panah)</option>
                      <option value="Star">Star (Bintang)</option>
                      <option value="BookOpen">Book (Buku)</option>
                      <option value="Activity">Activity (Gelombang)</option>
                      <option value="Shield">Shield (Perisai)</option>
                      <option value="Monitor">Monitor (Layar)</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pengaturan Guru */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2"><Edit3 className="w-5 h-5"/> Data Tenaga Pendidik (Guru)</h3>
              <button onClick={addNewTeacher} className="flex items-center gap-1 text-sm bg-[#00664f] text-white px-4 py-2 rounded-lg hover:bg-[#004d3b] transition-colors font-semibold shadow-sm">
                <Plus className="w-4 h-4" /> Tambah Guru Baru
              </button>
            </div>
            <div className="space-y-4">
              {localData.guru.map((item, index) => (
                <div key={item.id || index} className="bg-slate-50 p-5 rounded-xl border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2 flex justify-between items-center mb-2">
                    <h4 className="font-bold text-slate-700 text-sm uppercase tracking-wider">Guru #{index + 1}</h4>
                    <button onClick={() => removeTeacher(index)} className="text-xs text-red-600 hover:text-red-800 font-bold bg-red-100 hover:bg-red-200 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                      <Trash2 className="w-3 h-3" /> Hapus Guru
                    </button>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Nama Guru</label>
                    <input type="text" value={item.name} onChange={e => updateArrayItem('guru', index, 'name', e.target.value)} className="w-full p-2.5 bg-white border border-slate-200 rounded-lg outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Mata Pelajaran</label>
                    <input type="text" value={item.role} onChange={e => updateArrayItem('guru', index, 'role', e.target.value)} className="w-full p-2.5 bg-white border border-slate-200 rounded-lg outline-none text-sm" />
                  </div>
                  <div className="md:col-span-2 mt-2">
                    <label className="block text-xs font-semibold text-slate-600 mb-2">Foto Guru</label>
                    <div className="flex items-center gap-4">
                      {item.image && <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg border border-slate-200 shadow-sm shrink-0" />}
                      <input type="file" accept="image/*" onChange={e => processImageUpload(e, base64 => updateArrayItem('guru', index, 'image', base64))} className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-[#00664f]/10 file:text-[#00664f] hover:file:bg-[#00664f]/20 cursor-pointer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pengaturan Berita */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2 flex items-center gap-2"><Edit3 className="w-5 h-5"/> Data Berita (Upload Gambar)</h3>
            <div className="space-y-4">
              {localData.berita.map((news, index) => (
                <div key={news.id} className="bg-slate-50 p-5 rounded-xl border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <h4 className="font-bold text-slate-700 text-sm uppercase tracking-wider mb-2">Berita #{index + 1}</h4>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Judul Berita</label>
                    <input type="text" value={news.title} onChange={e => updateArrayItem('berita', index, 'title', e.target.value)} className="w-full p-2.5 bg-white border border-slate-200 rounded-lg outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Tanggal</label>
                    <input type="text" value={news.date} onChange={e => updateArrayItem('berita', index, 'date', e.target.value)} className="w-full p-2.5 bg-white border border-slate-200 rounded-lg outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Kategori</label>
                    <input type="text" value={news.category} onChange={e => updateArrayItem('berita', index, 'category', e.target.value)} className="w-full p-2.5 bg-white border border-slate-200 rounded-lg outline-none text-sm" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Isi Berita Lengkap</label>
                    <textarea rows="4" value={news.content} onChange={e => updateArrayItem('berita', index, 'content', e.target.value)} className="w-full p-2.5 bg-white border border-slate-200 rounded-lg outline-none text-sm resize-none"></textarea>
                  </div>
                  <div className="md:col-span-2 mt-2">
                    <label className="block text-xs font-semibold text-slate-600 mb-2">Thumbnail Berita</label>
                    <div className="flex items-center gap-4">
                      {news.image && <img src={news.image} alt={news.title} className="w-16 h-16 object-cover rounded-lg border border-slate-200 shadow-sm shrink-0" />}
                      <input type="file" accept="image/*" onChange={e => processImageUpload(e, base64 => updateArrayItem('berita', index, 'image', base64))} className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-[#00664f]/10 file:text-[#00664f] hover:file:bg-[#00664f]/20 cursor-pointer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sticky bottom-6 z-50">
            <button 
              onClick={handleSave}
              className="w-full bg-[#00664f] hover:bg-[#004d3b] text-white font-bold py-4 rounded-xl shadow-xl shadow-[#00664f]/30 flex items-center justify-center gap-3 transition-transform hover:-translate-y-1"
            >
              <Save className="w-5 h-5" /> Terapkan Perubahan ke Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  // State untuk Detail Berita
  const [selectedNews, setSelectedNews] = useState(null);
  
  // State Dinamis CMS
  const [siteData, setSiteData] = useState(INITIAL_SITE_DATA);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');

  const sliderRef = useRef(null);
  
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Simulasi autentikasi (Password default: admin123)
    if (adminPassword === 'admin123') {
      setIsAdminLoggedIn(true);
      setShowAdminLogin(false);
      setAdminPassword('');
      navigateTo('admin');
      showToast('Berhasil Login sebagai Admin!');
    } else {
      showToast('Password salah! Coba: admin123');
    }
  };

  const handleMenuClick = (id) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => scrollToId(id), 100);
    } else {
      scrollToId(id);
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToId = (id) => {
    if (id === 'beranda') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  const handleReadNews = (news) => {
    setSelectedNews(news);
    setCurrentPage('news-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToNews = () => {
    setCurrentPage('home');
    setTimeout(() => {
      scrollToId('berita');
    }, 100);
  };

  const MENU_ITEMS = [
    { label: 'Beranda', id: 'beranda' },
    { label: 'Profil', id: 'profil' },
    { label: 'Guru', id: 'guru' },
    { label: 'Fasilitas', id: 'fasilitas' },
    { label: 'Berita', id: 'berita' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#e1ce8c]/50 selection:text-[#00664f]">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out 3s infinite; }
        .glass-nav { background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-white/40 py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          
          <div onClick={() => navigateTo('home')} className="flex items-center gap-3.5 cursor-pointer group z-50">
            <div className="relative">
              <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-300 shadow-md ${!isScrolled && currentPage === 'home' ? 'border border-white/20' : 'border border-slate-200'}`}>
                {siteData.sekolah.logo ? (
                  <img src={siteData.sekolah.logo} alt="Logo" className="w-10 h-10 object-contain z-10" />
                ) : (
                  <Shield className="w-6 h-6 text-[#00664f] z-10" />
                )}
              </div>
            </div>
            <div>
              <h1 className={`font-black text-xl tracking-tight leading-none transition-colors duration-300 ${isScrolled || currentPage !== 'home' ? 'text-[#00664f]' : 'text-white'}`}>
                {siteData.sekolah.nama}
              </h1>
              <p className={`text-[0.65rem] font-bold tracking-[0.1em] transition-colors duration-300 uppercase mt-1 ${isScrolled || currentPage !== 'home' ? 'text-slate-500' : 'text-slate-300'}`}>
                NPSN: {siteData.sekolah.npsn} &bull; {siteData.sekolah.lokasi}
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/10">
            {MENU_ITEMS.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleMenuClick(item.id)} 
                className={`text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:text-[#e1ce8c] ${
                  isScrolled || currentPage !== 'home' 
                    ? 'text-slate-600 hover:bg-slate-100' 
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {isAdminLoggedIn && currentPage !== 'admin' ? (
              <button 
                onClick={() => navigateTo('admin')}
                className="ml-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 bg-slate-800 text-white hover:bg-slate-700 flex items-center gap-2"
              >
                <Settings className="w-4 h-4"/> Dashboard
              </button>
            ) : (
              <button 
                onClick={() => navigateTo('ppdb')}
                className="ml-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 bg-[#e1ce8c] text-[#004d3b] hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(225,206,140,0.3)] hover:shadow-[0_0_25px_rgba(225,206,140,0.5)]"
              >
                Daftar PPDB
              </button>
            )}
          </div>

          <button 
            className={`md:hidden p-2 rounded-lg transition-colors z-50 ${isScrolled || currentPage !== 'home' ? 'text-[#00664f] hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className={`md:hidden fixed inset-0 z-40 bg-white transition-all duration-500 origin-top ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="pt-32 px-6 flex flex-col gap-6">
            {MENU_ITEMS.map((item) => (
              <button key={item.id} onClick={() => handleMenuClick(item.id)} className="text-left font-black text-slate-800 text-3xl hover:text-[#00664f] transition-colors">{item.label}</button>
            ))}
            <div className="pt-8 border-t border-slate-100 mt-4">
              <button onClick={() => navigateTo('ppdb')} className="bg-gradient-to-r from-[#00664f] to-[#004d3b] text-white text-center px-6 py-4 rounded-2xl font-bold text-xl w-full shadow-xl shadow-[#00664f]/20 flex items-center justify-center gap-3">
                Daftar PPDB <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {currentPage === 'ppdb' ? (
          <FormPPDB setCurrentPage={setCurrentPage} siteData={siteData} />
        ) : currentPage === 'news-detail' ? (
          <NewsDetail news={selectedNews} onBack={handleBackToNews} />
        ) : currentPage === 'admin' && isAdminLoggedIn ? (
          <AdminDashboard siteData={siteData} setSiteData={setSiteData} showToast={showToast} onLogout={() => {setIsAdminLoggedIn(false); navigateTo('home'); showToast('Berhasil Log Out.');}} />
        ) : (
          <div className="animate-fade-in">
            <header id="beranda" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#002f23]">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600" 
                  alt="Background" 
                  className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#004d3b] via-[#004d3b]/90 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#002f23] via-transparent to-transparent"></div>
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-20">
                <div className="text-left pt-10 md:pt-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                     <span className="w-2.5 h-2.5 rounded-full bg-[#e1ce8c] animate-pulse"></span>
                     <span className="text-[#e1ce8c] text-xs font-bold tracking-widest uppercase">{siteData.hero.tagline}</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1]">
                    {siteData.hero.title1} <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1ce8c] to-white">{siteData.hero.title2}</span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed font-light">
                    {siteData.hero.subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={() => navigateTo('ppdb')} className="bg-[#e1ce8c] text-[#004d3b] hover:bg-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_0_30px_rgba(225,206,140,0.3)] hover:shadow-[0_0_40px_rgba(225,206,140,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2 group">
                      Daftar Sekarang <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button onClick={() => setShowVideoModal(true)} className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                      <PlayCircle className="w-5 h-5" /> Video Profil
                    </button>
                  </div>
                </div>

                <div className="hidden md:block relative h-[600px] w-full">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[28rem] rounded-[2rem] overflow-hidden border-8 border-white/10 shadow-2xl animate-float z-20">
                     <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800" alt="Students" className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#00664f]/80 to-transparent"></div>
                   </div>
                   
                   <div className="absolute top-20 right-0 bg-white p-4 rounded-2xl shadow-xl animate-float-delayed z-30 flex items-center gap-4">
                     <div className="w-12 h-12 bg-[#e1ce8c]/20 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-[#004d3b]" />
                     </div>
                     <div>
                       <p className="text-xs text-slate-500 font-bold uppercase">Akreditasi</p>
                       <p className="text-xl font-black text-slate-900">{siteData.sekolah.akreditasi}</p>
                     </div>
                   </div>

                   <div className="absolute bottom-32 left-0 bg-white p-4 rounded-2xl shadow-xl animate-float z-30 flex items-center gap-4">
                     <div className="w-12 h-12 bg-[#00664f]/10 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-[#00664f]" />
                     </div>
                     <div>
                       <p className="text-xs text-slate-500 font-bold uppercase">Total Siswa</p>
                       <p className="text-xl font-black text-slate-900">{siteData.sekolah.totalSiswa}</p>
                     </div>
                   </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10 transform translate-y-1">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-24 fill-slate-50">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,137.93,122.9,209.6,110.8,247.16,104.4,284.72,83.9,321.39,56.44Z"></path>
                </svg>
              </div>
            </header>

            <section id="profil" className="py-24 bg-slate-50 overflow-hidden relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="lg:w-2/5 relative">
                    <div className="absolute -inset-4 bg-[#00664f] rounded-[3rem] transform -rotate-6 opacity-10"></div>
                    <img 
                      src={siteData.profil.fotoKepsek || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800"} 
                      alt="Kepala Sekolah" 
                      className="w-full h-[500px] object-cover rounded-[2.5rem] relative z-10 shadow-2xl grayscale-[20%]"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#e1ce8c] rounded-full z-20 flex items-center justify-center shadow-xl border-8 border-slate-50">
                      <Quote className="w-12 h-12 text-[#004d3b]" />
                    </div>
                  </div>
                  
                  <div className="lg:w-3/5 lg:pl-10">
                    <h2 className="text-sm font-bold text-[#00664f] tracking-widest uppercase mb-3 flex items-center gap-2">
                      <div className="w-8 h-px bg-[#00664f]"></div> Sambutan Pimpinan
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                      Komitmen Membangun <span className="text-[#00664f]">Generasi Emas</span>
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8 italic">
                      "{siteData.profil.sambutan}"
                    </p>
                    <div className="flex items-center gap-6">
                      <div>
                        <h4 className="font-bold text-2xl text-slate-900">{siteData.profil.namaKepsek}</h4>
                        <p className="text-[#00664f] font-semibold mt-1">Kepala Sekolah</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-24 relative bg-white border-t border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                  <h2 className="text-sm font-bold text-[#e1ce8c] tracking-widest uppercase mb-3">Mengapa Memilih Kami?</h2>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900">Keunggulan {siteData.sekolah.nama}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {FEATURES.map((feat, idx) => (
                    <div key={idx} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,102,79,0.08)] transition-all duration-300 group">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#00664f] group-hover:text-white group-hover:scale-110 transition-all duration-300 text-[#00664f]">
                        {feat.icon}
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00664f] transition-colors">{feat.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="guru" className="py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                  <div>
                    <h2 className="text-sm font-bold text-[#e1ce8c] tracking-widest uppercase mb-3">Tenaga Pendidik</h2>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900">Profil Guru Kami</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={scrollLeft} className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#00664f] hover:border-[#00664f] transition-all hover:-translate-x-1 shadow-sm">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={scrollRight} className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#00664f] hover:border-[#00664f] transition-all hover:translate-x-1 shadow-sm">
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div 
                  ref={sliderRef}
                  className="flex gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
                >
                  {siteData.guru.map((guru) => (
                    <div key={guru.id} className="min-w-[280px] md:min-w-[320px] bg-white rounded-[2rem] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 snap-center hover:-translate-y-2 transition-transform duration-300 group">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-inner group-hover:border-[#00664f]/20 transition-colors">
                        <img src={guru.image} alt={guru.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" loading="lazy" />
                      </div>
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#00664f] transition-colors">{guru.name}</h4>
                        <p className="text-[#e1ce8c] font-bold text-sm">{guru.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="fasilitas" className="py-24 bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[#002f23] mix-blend-multiply opacity-80 z-0"></div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                  <div>
                    <h2 className="text-sm font-bold text-[#e1ce8c] tracking-widest uppercase mb-3">Fasilitas Modern</h2>
                    <h3 className="text-3xl md:text-4xl font-black">Mendukung Potensi Siswa</h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
                  {siteData.fasilitas.map((item, idx) => (
                    <div key={idx} className={`relative rounded-3xl overflow-hidden group ${item.colSpan} ${item.rowSpan}`}>
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-2xl font-bold mb-2 text-white">{item.title}</h4>
                        <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Pengembangan Diri & Ekstrakurikuler</h3>
                  <p className="text-slate-500">Wadah penyaluran bakat dan minat siswa di luar jam pelajaran akademik.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  {siteData.ekskul.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 px-6 py-4 bg-slate-50 border border-slate-100 rounded-full hover:border-[#00664f]/30 hover:bg-[#00664f]/5 hover:shadow-md transition-all cursor-pointer">
                      <div className="text-[#00664f]">
                        {item.iconName === 'Target' && <Target />}
                        {item.iconName === 'Star' && <Star />}
                        {item.iconName === 'BookOpen' && <BookOpen />}
                        {item.iconName === 'Activity' && <Activity />}
                        {item.iconName === 'Shield' && <Shield />}
                        {item.iconName === 'Monitor' && <Monitor />}
                        {!['Target', 'Star', 'BookOpen', 'Activity', 'Shield', 'Monitor'].includes(item.iconName) && <Star />}
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 leading-tight">{item.name}</div>
                        <div className="text-xs text-slate-400">{item.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="berita" className="py-24 bg-slate-50 border-t border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                  <div>
                    <h2 className="text-sm font-bold text-[#e1ce8c] tracking-widest uppercase mb-3">Informasi Terkini</h2>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900">Kabar Seputar Sekolah</h3>
                  </div>
                  <button onClick={() => showToast('Halaman semua berita akan segera hadir.')} className="flex items-center text-[#00664f] font-bold hover:text-[#004d3b] transition-colors group bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200">
                    Semua Berita <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {siteData.berita.map(news => (
                    <div key={news.id} onClick={() => handleReadNews(news)} className="bg-white rounded-[2rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 group cursor-pointer hover:-translate-y-2 transition-all duration-300 flex flex-col">
                      <div className="h-56 overflow-hidden relative">
                        <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#00664f] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                          {news.category}
                        </div>
                      </div>
                      <div className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center text-slate-400 text-xs font-semibold mb-3 uppercase tracking-wider">
                          <Calendar className="w-4 h-4 mr-2" /> {news.date}
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 leading-snug group-hover:text-[#00664f] transition-colors line-clamp-3 mb-4">
                          {news.title}
                        </h3>
                        <div className="mt-auto pt-4 border-t border-slate-50 text-sm font-bold text-[#e1ce8c] flex items-center group-hover:text-[#00664f] transition-colors">
                          Baca Selengkapnya <ChevronRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="bg-gradient-to-r from-[#00664f] to-[#004d3b] rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                    <Shield className="w-96 h-96" />
                  </div>
                  <div className="relative z-10 max-w-2xl mx-auto">
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Siap Bergabung Bersama Kami?</h3>
                    <p className="text-slate-200 text-lg mb-10">
                      Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran {siteData.sekolah.tahunPelajaran} telah dibuka. Kuota terbatas, segera daftarkan putra/putri Anda.
                    </p>
                    <button onClick={() => navigateTo('ppdb')} className="bg-[#e1ce8c] text-[#004d3b] hover:bg-white px-10 py-5 rounded-full font-black text-lg transition-all duration-300 shadow-xl hover:scale-105 inline-flex items-center gap-2">
                      Isi Formulir Pendaftaran Sekarang <ArrowRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      <footer className="bg-[#002f23] text-slate-300 py-20 border-t-[8px] border-[#e1ce8c] relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5">
           <Shield className="w-96 h-96 transform translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
          <div className="md:col-span-5 pr-0 md:pr-10">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center relative shadow-lg shrink-0">
                 {siteData.sekolah.logo ? (
                   <img src={siteData.sekolah.logo} alt="Logo" className="w-10 h-10 object-contain z-10" />
                 ) : (
                   <Shield className="w-7 h-7 text-[#00664f] z-10" />
                 )}
               </div>
               <div>
                 <h2 className="text-white text-2xl font-black tracking-tight leading-none">{siteData.sekolah.nama}</h2>
                 <p className="text-[#e1ce8c] text-xs font-bold tracking-[0.1em] uppercase mt-1">NPSN: {siteData.sekolah.npsn} &bull; {siteData.sekolah.lokasi}</p>
               </div>
            </div>
            <p className="text-sm leading-loose mb-8 text-slate-400 font-light">
              Lembaga pendidikan tingkat menengah pertama yang berdedikasi mendidik generasi bangsa yang cerdas secara intelektual, matang emosional, dan kuat spiritual berdasarkan Al-Qur'an dan As-Sunnah.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center"><div className="w-2 h-2 bg-[#e1ce8c] rounded-full mr-3"></div> Tautan Cepat</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><button onClick={() => handleMenuClick('beranda')} className="hover:text-[#e1ce8c] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-1 opacity-50" /> Beranda Utama</button></li>
              <li><button onClick={() => handleMenuClick('profil')} className="hover:text-[#e1ce8c] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-1 opacity-50" /> Profil & Sejarah</button></li>
              <li><button onClick={() => handleMenuClick('fasilitas')} className="hover:text-[#e1ce8c] transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-1 opacity-50" /> Fasilitas & Ekskul</button></li>
              <li><button onClick={() => navigateTo('ppdb')} className="text-[#e1ce8c] hover:text-white transition-colors flex items-center font-bold"><ChevronRight className="w-4 h-4 mr-1" /> Pendaftaran PPDB</button></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center"><div className="w-2 h-2 bg-[#e1ce8c] rounded-full mr-3"></div> Kontak & Lokasi</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                <MapPin className="w-5 h-5 text-[#e1ce8c] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">{siteData.sekolah.alamat}</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#e1ce8c] transition-colors">
                  <Phone className="w-4 h-4 text-[#e1ce8c] group-hover:text-[#002f23]" />
                </div>
                <span className="group-hover:text-white transition-colors">Telepon: {siteData.sekolah.telepon}</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#e1ce8c] transition-colors">
                  <Mail className="w-4 h-4 text-[#e1ce8c] group-hover:text-[#002f23]" />
                </div>
                <span className="group-hover:text-white transition-colors">{siteData.sekolah.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} {siteData.sekolah.nama}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Kebijakan Privasi</span>
            <button onClick={() => setShowAdminLogin(true)} className="flex items-center gap-1 hover:text-[#e1ce8c] transition-colors group">
              <Lock className="w-3 h-3 group-hover:scale-110 transition-transform" /> Login Admin
            </button>
          </div>
        </div>
      </footer>

      {showAdminLogin && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowAdminLogin(false)}></div>
          <div className="relative bg-white rounded-2xl w-full max-w-sm p-8 shadow-2xl animate-fade-in">
            <button onClick={() => setShowAdminLogin(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900">
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-[#00664f]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6 text-[#00664f]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Otorisasi Admin</h3>
              <p className="text-xs text-slate-500 mt-1">Gunakan password: <strong>admin123</strong></p>
            </div>
            <form onSubmit={handleAdminLogin}>
              <input 
                type="password" 
                autoFocus
                placeholder="Masukkan Password..." 
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl mb-4 outline-none focus:border-[#00664f]"
              />
              <button type="submit" className="w-full bg-[#00664f] hover:bg-[#004d3b] text-white font-bold py-3 rounded-xl transition-colors">
                Masuk Dashboard
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 ${toastMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <div className="bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl font-medium text-sm flex items-center gap-3 border border-slate-700">
          <Info className="w-4 h-4 text-[#e1ce8c]" /> {toastMessage}
        </div>
      </div>

      {showVideoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowVideoModal(false)}></div>
          <div className="relative bg-slate-900 rounded-2xl w-full max-w-4xl aspect-video border border-slate-700 shadow-2xl overflow-hidden animate-fade-in flex flex-col items-center justify-center">
            <button onClick={() => setShowVideoModal(false)} className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 hover:bg-[#00664f] text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md">
              <X className="w-5 h-5" />
            </button>
            {siteData.profil.videoProfil ? (
              <video src={siteData.profil.videoProfil} controls autoPlay className="w-full h-full object-contain bg-black z-10" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-6 text-center z-10">
                <PlayCircle className="w-16 h-16 mb-4 opacity-50" />
                <h3 className="text-2xl font-bold text-white mb-2">Video Profil Sekolah</h3>
                <p className="font-medium max-w-md mx-auto">Video saat ini sedang dalam tahap produksi dan akan segera tersedia. Terima kasih atas antusiasme Anda.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}