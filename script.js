/**
 * SISTEM ABSENSI DESA WAY GALIH — PRESENTASI 16:9 INTERAKTIF
 * Engine Presentasi Web Responsif Vanilla JavaScript
 * Kapita Selekta IF25-41031 · Kelompok 4 · ITERA
 */

// 1. DATA SLIDE & CATATAN PEMBICARA (NASKAH & RUBRIK)
const SLIDES_DATA = [
  {
    number: 1,
    title: "Cover & Identitas Proyek",
    script: "Selamat pagi Bapak/Ibu dosen pengampu dan rekan-rekan sekalian. Kami dari Kelompok 4 mempersembahkan pemaparan proyek Kapita Selekta dengan judul 'Sistem Absensi Pegawai Kantor Desa Way Galih Berbasis Web: Presentasi Solusi dan Evaluasi Before–After'. Proyek ini dikembangkan bersama mitra Pemerintah Desa Way Galih, Kecamatan Tanjung Bintang, Lampung Selatan.",
    rubric: "Rubrik Pembuka: Sampaikan judul resmi sesuai proposal, identitas mitra pemerintah, dan perkenalkan peran seluruh anggota tim secara ringkas."
  },
  {
    number: 2,
    title: "Mitra dan Masalah",
    script: "Mitra kegiatan kami adalah Pemerintah Desa Way Galih dengan sasaran perangkat dan staf kantor desa. Aspek kegiatan berfokus pada pelayanan publik dan tata kelola kepegawaian. Masalah utama yang dihadapi adalah presensi kehadiran masih mengandalkan buku tanda tangan manual tanpa verifikasi lokasi, mengakibatkan rekapitulasi lambat, menyita waktu berhari-hari, dan rawan salah catat.",
    rubric: "Rubrik Kondisi Awal (Bobot 15): Jelaskan mitra dan masalah spesifik dalam 1-2 menit. Masalah harus selaras dengan proposal dan didukung data awal di slide berikutnya."
  },
  {
    number: 3,
    title: "Kondisi Awal (Baseline Pre-Test)",
    script: "Berdasarkan observasi dan pre-test awal per 15 September 2026, metode absensi masih 100% manual tanpa verifikasi lokasi. Pada skala Likert 1–5, kemudahan proses absensi hanya bernilai 2,38, dan kemudahan menemukan riwayat lampau menjadi indikator terendah yakni 1,63. Data analisis berasal dari kuesioner 8 responden pegawai Kantor Desa Way Galih (P01–P08).",
    rubric: "Rubrik Kondisi Awal: Tampilkan kondisi baseline terukur dengan sumber data jelas. Ukuran indikator di sini harus sama persis dengan yang diukur pada slide evaluasi hasil."
  },
  {
    number: 4,
    title: "SDGs Desa dan Target",
    script: "Proyek ini berkontribusi langsung pada pencapaian SDGs Desa 16: Desa Damai Berkeadilan, khususnya Indikator 16.6.2.(a). Target yang dijanjikan dalam proposal adalah tersedianya sistem absensi digital berbasis QR Code dan GPS yang terintegrasi untuk mendukung pencatatan kehadiran aparatur kantor desa, dibuktikan melalui log sistem dan uji black-box.",
    rubric: "Rubrik SDGs: Sebutkan kode indikator resmi (16.6.2.(a)) dan jelaskan keterkaitan langsung solusi dengan butir target proposal pengajuan."
  },
  {
    number: 5,
    title: "Solusi yang Dibangun",
    script: "Untuk menjawab masalah tersebut, kami merancang empat komponen utama: Pertama, autentikasi aman via Google Login dengan whitelist email resmi admin. Kedua, validasi geofencing GPS radius Balai Desa (100 m) dipadu QR Code kantor. Ketiga, dashboard admin untuk rekapitulasi otomatis dan ekspor laporan. Keempat, layanan izin dan absensi tugas dinas luar dengan upload 2 foto kamera dan tag lokasi.",
    rubric: "Rubrik Solusi (Bobot 15): Skor tertinggi bila setiap fitur utama dapat ditelusuri ke akar masalah mitra dan kebutuhan nyata di lapangan."
  },
  {
    number: 6,
    title: "Rancangan Solusi & Alur",
    script: "Arsitektur sistem dibangun menggunakan React + Vite dan Tailwind CSS pada frontend, berkomunikasi via RESTful API ke backend Laravel 13 dengan autentikasi Laravel Sanctum, dan database PostgreSQL. Alur pengguna: Pegawai login Google -> verifikasi whitelist -> izin akses GPS -> validasi radius kantor -> scan QR Code kantor -> server mencatat waktu dan koordinat resmi.",
    rubric: "Rubrik Solusi & Arsitektur: Jelaskan komponen perangkat lunak, aliran data bolak-balik antara frontend-backend, dan diagram alur interaksi pengguna."
  },
  {
    number: 7,
    title: "Demonstrasi Produk & Pengujian",
    script: "Berikut adalah demonstrasi skenario pengguna dari login hingga absensi tercatat. Sistem juga diuji terhadap kondisi negatif: jika pegawai berada di luar radius Balai Desa, izin GPS ditolak, QR Code tidak sesuai, atau email belum di-whitelist, maka sistem secara otomatis menolak dan memblokir pencatatan absensi duplikat.",
    rubric: "Rubrik Demonstrasi: Tunjukkan alur lengkap berjalan pada skenario riil serta paparkan batas sistem dan pengujian kondisi gagal (negatif)."
  },
  {
    number: 8,
    title: "Inovasi dan Kesiapterapan (TKT)",
    script: "Dibandingkan cara manual dan aplikasi check-in biasa, inovasi sistem ini mewajibkan verifikasi fisik ganda: scan QR Code yang ditempel di kantor dipadukan geofencing GPS server-side. Secara jujur, kami mengklaim posisi TKT pada tingkat 4–5, di mana fungsi telah tervalidasi di lingkungan kantor Desa Way Galih, dengan batas kesiapan belum mencakup PWA offline dan absensi checkout.",
    rubric: "Rubrik Kesiapan Teknologi (TKT): Target mata kuliah adalah TKT 5-6. Sebutkan bukti pengujian riil di lingkungan mitra dan akui batas kesiapan produk secara jujur."
  },
  {
    number: 9,
    title: "Desain Evaluasi Before–After",
    script: "Evaluasi before–after dilakukan pada 23 November 2026 menggunakan 6 indikator terstandar melalui kuesioner skala Likert 1–5. Dataset evaluasi terdiri dari 8 responden pegawai Kantor Desa Way Galih (P01–P08) yang mengisi kuesioner pre-test dan post-test pada sesi uji tersebut.",
    rubric: "Rubrik Evaluasi Before-After (Bobot 25): Jelaskan metode, instrumen, dan jumlah sampel 8 responden pegawai kantor desa beserta prosedur pengisian kuesioner."
  },
  {
    number: 10,
    title: "Hasil Before dan After",
    script: "Hasil pengukuran menunjukkan peningkatan pada seluruh indikator: Kemudahan proses naik dari 2,38 menjadi 4,25 (+1,87); Kejelasan status dari 2,75 ke 4,63 (+1,88); Kemudahan menemukan riwayat mengalami kenaikan tertinggi dari 1,63 menjadi 4,50 (+2,87). Secara rata-rata total, skor meningkat dari 2,13 menjadi 4,50 (+2,37). Data ini bersifat perbandingan deskriptif, bukan bukti kausalitas.",
    rubric: "Rubrik Evaluasi Hasil (Slide Utama): Paparkan perbandingan angka pada ukuran yang sama persis dengan slide baseline. Tegaskan skala 1-5 dan sifat deskriptif data."
  },
  {
    number: 11,
    title: "Penerimaan Pengguna & Umpan Balik",
    script: "Responden P01 menyatakan fitur scan QR sangat membantu dan memberikan nilai sempurna 5/5. Rata-rata kemudahan dari 8 responden mencapai 4,50/5 (bukan skor SUS). Umpan balik teknis mencatat GPS lock kadang melambat saat sinyal seluler lemah di dalam kantor desa, yang kami tindak lanjuti dengan tombol coba ulang (retry).",
    rubric: "Rubrik Partisipasi Mitra: Tunjukkan respons kualitatif responden lapangan dan jelaskan jumlah 8 responden. Jangan menyebut angka rata-rata sebagai skor SUS karena instrumen berbeda."
  },
  {
    number: 12,
    title: "Capaian terhadap Target SDGs",
    script: "Dari 31 skenario black-box testing, 27 skenario dinyatakan LULUS (87,1%). Terdapat 3 skenario gagal, yaitu pencarian whitelist, sesi aktif belum otomatis terputus saat akun dinonaktifkan, dan pengaturan jam kerja belum tersinkron; serta 1 skenario terhambat yaitu edit data pegawai. Target tercapai sebagian sebagai luaran sistem terpasang.",
    rubric: "Rubrik Capaian SDGs (Bobot 15): Bandingkan hasil nyata dengan janji proposal. Akui kegagalan pengujian secara transparan dan bedakan luaran (output) dengan dampak jangka panjang."
  },
  {
    number: 13,
    title: "Analisis Kritis & Keterbatasan",
    script: "Peningkatan efisiensi presensi dipicu oleh kombinasi login whitelist, validasi koordinat GPS, dan pencatatan waktu resmi server. Namun keterbatasan kami akui: pengujian hanya pada satu kantor desa, durasi uji coba singkat (~3 minggu), tanpa kelompok kontrol, dan GPS web browser belum kebal dari aplikasi Fake GPS.",
    rubric: "Rubrik Analisis Kritis: Mengakui keterbatasan sampel, durasi, dan kelemahan teknis justru meningkatkan integritas akademik penelitian."
  },
  {
    number: 14,
    title: "Kendala dan Pelajaran",
    script: "Kendala utama yang kami hadapi adalah penyesuaian timeline kunjungan dengan jadwal kedinasan mitra desa, sinkronisasi skema data JSON antara React dan Laravel, akurasi GPS indoor, serta ketiadaan absensi jam pulang. Pelajarannya: koordinasi harian frontend-backend dan kalibrasi radius di lingkungan fisik nyata sangat vital.",
    rubric: "Rubrik Refleksi: Sampaikan kendala nyata yang dihadapi, langkah penanganan yang diambil tim, dan pelajaran berharga untuk pengembangan ke depan."
  },
  {
    number: 15,
    title: "Keberlanjutan & Serah Terima",
    script: "Keberlanjutan sistem diserahkan kepada Pak Sadewo selaku Operator Balai Desa Way Galih untuk operasional harian. Pemeliharaan teknis didukung oleh Maulana selaku PM hingga 23 Desember 2026. Estimasi biaya operasional hosting dan domain adalah Rp620.000. Serah terima resmi dilaksanakan pada 23 November 2026.",
    rubric: "Rubrik Keberlanjutan: Sebutkan nama penanggung jawab riil dari pihak mitra desa, estimasi biaya operasional, dan komitmen jadwal serah terima."
  },
  {
    number: 16,
    title: "Rekomendasi & Tindak Lanjut",
    script: "Kami menyusun 3 rekomendasi berbasis dampak: Prioritas 1, perkuat mitigasi kecurangan Fake GPS melalui integrasi PWA atau Dynamic Rotating QR Code berotasi 30 detik. Prioritas 2, kembangkan modul absensi kepulangan (check-out). Prioritas 3, selesaikan perbaikan modul pencarian whitelist dan sinkronisasi jam kerja server.",
    rubric: "Rubrik Tindak Lanjut: Urutkan rekomendasi berdasarkan besaran dampak dan hubungkan langsung dengan temuan pengujian black-box dan kendala evaluasi."
  },
  {
    number: 17,
    title: "Penutup & Tanya Jawab",
    script: "Terima kasih atas perhatian Bapak/Ibu dosen dan rekan-rekan sekalian. Slot tautan repositori, folder luaran Google Drive, video demonstrasi, dan artikel publikasi masih berupa placeholder dan akan diperbarui setelah tautan resmi tersedia. Kami membuka sesi pertanyaan dan diskusi untuk masukan penyempurnaan sistem absensi Desa Way Galih ini.",
    rubric: "Rubrik Penyajian: Akhiri presentasi tepat waktu, sediakan tautan repositori dan luaran resmi, serta siap menjawab pertanyaan berbasis data evaluasi."
  }
];

// 2. STATE APLIKASI
let currentIndex = 0;
const totalSlides = SLIDES_DATA.length;
let timerSeconds = 0;
let timerInterval = null;
let isTimerRunning = false;

// 3. ELEMEN DOM
const canvas = document.getElementById("canvas");
const frameEl = document.getElementById("frame");
const stageEl = document.getElementById("stage");
const progressBar = document.getElementById("progressBar");
const slideCounter = document.getElementById("slideCounter");
const slides = document.querySelectorAll(".slide");

const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const btnFirst = document.getElementById("btnFirst");
const btnOverview = document.getElementById("btnOverview");
const btnNotes = document.getElementById("btnNotes");
const btnGuide = document.getElementById("btnGuide");
const btnTheme = document.getElementById("btnTheme");
const btnTimer = document.getElementById("btnTimer");
const btnTimerReset = document.getElementById("btnTimerReset");
const btnFull = document.getElementById("btnFull");
const btnHelp = document.getElementById("btnHelp");

const notesDrawer = document.getElementById("notesDrawer");
const btnNotesClose = document.getElementById("btnNotesClose");
const notesSlideNumber = document.getElementById("notesSlideNumber");
const notesScript = document.getElementById("notesScript");
const notesRubric = document.getElementById("notesRubric");

const overviewModal = document.getElementById("overviewModal");
const overviewGrid = document.getElementById("overviewGrid");
const btnOverviewClose = document.getElementById("btnOverviewClose");

const helpModal = document.getElementById("helpModal");
const btnHelpClose = document.getElementById("btnHelpClose");

const timerDisplay = document.getElementById("timerDisplay");

// 4. RESPONSIVE 16:9 LETTERBOX SCALING (1280x720)
function fitCanvas() {
  const isFull = document.body.classList.contains("is-fullscreen");
  const notesOpen = document.body.classList.contains("notes-open") && window.innerWidth > 960;
  
  const padX = isFull ? 0 : 16;
  const padTop = isFull ? 0 : 16;
  const padBottom = isFull ? 0 : 88;
  const notesWidth = notesOpen ? 380 : 0;

  const availW = Math.max(320, window.innerWidth - padX * 2 - notesWidth);
  const availH = Math.max(180, window.innerHeight - padTop - padBottom);

  const scale = Math.max(0.2, Math.min(availW / 1280, availH / 720));

  canvas.style.transform = `scale(${scale})`;
  frameEl.style.width = `${1280 * scale}px`;
  frameEl.style.height = `${720 * scale}px`;
}

window.addEventListener("resize", fitCanvas);

// 5. NAVIGASI SLIDE
function updateSlide(index) {
  if (index < 0) index = 0;
  if (index >= totalSlides) index = totalSlides - 1;
  currentIndex = index;

  slides.forEach((el, i) => {
    const isActive = i === currentIndex;
    el.classList.toggle("active", isActive);
    el.setAttribute("aria-hidden", isActive ? "false" : "true");
  });

  // Update progress bar & counter
  const progressPercent = ((currentIndex + 1) / totalSlides) * 100;
  progressBar.style.width = `${progressPercent}%`;
  progressBar.setAttribute("aria-valuenow", currentIndex + 1);
  slideCounter.textContent = `${currentIndex + 1} / ${totalSlides}`;

  // Update tombol state
  btnPrev.disabled = currentIndex === 0;
  btnFirst.disabled = currentIndex === 0;
  btnNext.disabled = currentIndex === totalSlides - 1;

  // Update panel catatan pembicara jika terbuka
  updateNotesContent();
  updateGuideBar();

  // Highlight di grid overview
  document.querySelectorAll(".overview-card").forEach((card, i) => {
    card.classList.toggle("active", i === currentIndex);
  });

  // Sinkronkan hash URL (deep-link, mis. index.html#slide-10)
  const hash = `#slide-${currentIndex + 1}`;
  if (window.location.hash !== hash) {
    history.replaceState(null, "", hash);
  }
}

// 5b. DEEP-LINK DARI URL HASH
function readHash() {
  const match = window.location.hash.match(/slide-(\d+)/);
  if (match) {
    const num = parseInt(match[1], 10);
    if (num >= 1 && num <= totalSlides) {
      updateSlide(num - 1);
      return true;
    }
  }
  return false;
}

window.addEventListener("hashchange", readHash);

function nextSlide() {
  if (currentIndex < totalSlides - 1) {
    updateSlide(currentIndex + 1);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    updateSlide(currentIndex - 1);
  }
}

function firstSlide() {
  updateSlide(0);
}

function lastSlide() {
  updateSlide(totalSlides - 1);
}

// 6. PANEL NASKAH & SPEAKER NOTES
function updateNotesContent() {
  const currentData = SLIDES_DATA[currentIndex];
  if (!currentData) return;
  notesSlideNumber.textContent = `Slide ${currentData.number}: ${currentData.title}`;
  notesScript.innerHTML = `<p>${currentData.script}</p>`;
  notesRubric.innerHTML = `<strong>Kriteria Rubrik:</strong><p style="margin-top: 4px;">${currentData.rubric}</p>`;
}

function toggleNotes() {
  document.body.classList.toggle("notes-open");
  btnNotes.classList.toggle("active", document.body.classList.contains("notes-open"));
  fitCanvas();
}

// 7. OVERVIEW MODAL (GRID G)
function buildOverviewGrid() {
  overviewGrid.innerHTML = "";
  SLIDES_DATA.forEach((s, idx) => {
    const card = document.createElement("div");
    card.className = `overview-card ${idx === currentIndex ? "active" : ""}`;
    card.innerHTML = `
      <div class="overview-card-num">SLIDE ${String(s.number).padStart(2, "0")}</div>
      <div class="overview-card-title">${s.title}</div>
      <div class="overview-card-foot">${s.script.split(".")[0].slice(0, 58)}…</div>
    `;
    card.addEventListener("click", () => {
      updateSlide(idx);
      closeOverview();
    });
    overviewGrid.appendChild(card);
  });
}

function openOverview() {
  buildOverviewGrid();
  overviewModal.classList.add("open");
  btnOverview.classList.add("active");
}

function closeOverview() {
  overviewModal.classList.remove("open");
  btnOverview.classList.remove("active");
}

function toggleOverview() {
  if (overviewModal.classList.contains("open")) {
    closeOverview();
  } else {
    openOverview();
  }
}

// 8. PANDUAN AKADEMIK TOGGLE (P)
function toggleGuide() {
  document.body.classList.toggle("guide-active");
  const active = document.body.classList.contains("guide-active");
  btnGuide.classList.toggle("active", active);
  btnGuide.setAttribute("aria-pressed", active ? "true" : "false");
  updateGuideBar();
}

function updateGuideBar() {
  const bar = document.getElementById("guideBarText");
  const currentData = SLIDES_DATA[currentIndex];
  if (bar && currentData) {
    bar.textContent = currentData.rubric;
  }
}

// 9. TEMA TERANG / GELAP (T)
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme-absensi-way-galih", newTheme);
  btnTheme.classList.toggle("active", newTheme === "dark");
}

function loadSavedTheme() {
  const saved = localStorage.getItem("theme-absensi-way-galih");
  if (saved) {
    document.documentElement.setAttribute("data-theme", saved);
    btnTheme.classList.toggle("active", saved === "dark");
  }
}

// 10. TIMER PRESENTASI
function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function toggleTimer() {
  if (isTimerRunning) {
    clearInterval(timerInterval);
    isTimerRunning = false;
    btnTimer.classList.remove("active");
  } else {
    isTimerRunning = true;
    btnTimer.classList.add("active");
    timerInterval = setInterval(() => {
      timerSeconds++;
      timerDisplay.textContent = formatTime(timerSeconds);
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  timerSeconds = 0;
  timerDisplay.textContent = "00:00";
  btnTimer.classList.remove("active");
}

// 11. LAYAR PENUH (FULLSCREEN)
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }
}

document.addEventListener("fullscreenchange", () => {
  const isFull = !!document.fullscreenElement;
  document.body.classList.toggle("is-fullscreen", isFull);
  btnFull.classList.toggle("active", isFull);
  fitCanvas();
});

// 12. BANTUAN SHORTCUT (?)
function openHelp() {
  helpModal.classList.add("open");
}

function closeHelp() {
  helpModal.classList.remove("open");
}

// 13. SCREENSHOT TAB SWITCHER (SLIDE 7)
function initDemoTabs() {
  const previewImg = document.getElementById("demoPreviewImage");
  const previewEmpty = document.getElementById("demoPreviewEmpty");
  const previewEmptyText = document.getElementById("demoPreviewEmptyText");
  const previewCaption = document.getElementById("demoPreviewCaption");
  const shotBadge = document.getElementById("demoShotBadge");
  const stepCards = document.querySelectorAll(".demo-step-card");
  if (!previewImg || !stepCards.length) return;

  function showStep(card) {
    stepCards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");

    const imgPath = (card.getAttribute("data-img") || "").trim();
    const caption = card.getAttribute("data-caption") || "";
    const hasImage = imgPath.length > 0;

    previewImg.style.display = hasImage ? "block" : "none";
    previewEmpty.classList.toggle("show", !hasImage);

    if (hasImage) {
      previewImg.style.opacity = "0.5";
      previewImg.src = imgPath;
      previewImg.alt = `Tangkapan layar: ${caption}`;
      setTimeout(() => { previewImg.style.opacity = "1"; }, 150);
      shotBadge.textContent = "Aset Uji Lapangan";
      shotBadge.className = "badge badge-success";
      previewCaption.textContent = `Tahap ${card.getAttribute("data-step")} — ${caption}. Gambar diambil dari implementasi sistem yang dikembangkan tim.`;
    } else {
      previewEmptyText.innerHTML = `Belum ada tangkapan layar untuk <strong>${caption}</strong>. Simpan berkas asli di <code>assets/screenshots/</code> lalu perbarui atribut <code>data-img</code> pada tahap ini.`;
      shotBadge.textContent = "Placeholder";
      shotBadge.className = "badge badge-warning";
      previewCaption.textContent = "Slot gambar disediakan agar dapat diganti dengan tangkapan layar asli aplikasi. Tidak ada tangkapan layar palsu yang ditampilkan.";
    }
  }

  stepCards.forEach((card) => {
    card.addEventListener("click", () => showStep(card));
  });
}

// 14. KEYBOARD SHORTCUTS HANDLER
document.addEventListener("keydown", (e) => {
  // Jika fokus sedang pada input, abaikan
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

  switch (e.key) {
    case "ArrowRight":
    case "ArrowDown":
    case "PageDown":
    case " ": // Space
      e.preventDefault();
      nextSlide();
      break;

    case "ArrowLeft":
    case "ArrowUp":
    case "PageUp":
      e.preventDefault();
      prevSlide();
      break;

    case "Home":
      e.preventDefault();
      firstSlide();
      break;

    case "End":
      e.preventDefault();
      lastSlide();
      break;

    case "f":
    case "F":
      e.preventDefault();
      toggleFullscreen();
      break;

    case "g":
    case "G":
      e.preventDefault();
      toggleOverview();
      break;

    case "n":
    case "N":
      e.preventDefault();
      toggleNotes();
      break;

    case "p":
    case "P":
      e.preventDefault();
      toggleGuide();
      break;

    case "t":
    case "T":
      e.preventDefault();
      toggleTheme();
      break;

    case "?":
    case "/":
      e.preventDefault();
      helpModal.classList.contains("open") ? closeHelp() : openHelp();
      break;

    case "Escape":
      closeOverview();
      closeHelp();
      if (document.body.classList.contains("notes-open")) {
        toggleNotes();
      }
      break;
  }
});

// 15. TOUCH SWIPE SUPPORT
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener("touchstart", (e) => {
  if (e.touches && e.touches.length > 0) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }
}, { passive: true });

document.addEventListener("touchend", (e) => {
  if (!e.changedTouches || e.changedTouches.length === 0) return;
  const deltaX = e.changedTouches[0].clientX - touchStartX;
  const deltaY = e.changedTouches[0].clientY - touchStartY;

  // Swipe horizontal signifikan
  if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
    if (deltaX < 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
}, { passive: true });

// 16. EVENT LISTENERS
btnPrev.addEventListener("click", prevSlide);
btnNext.addEventListener("click", nextSlide);
btnFirst.addEventListener("click", firstSlide);
btnOverview.addEventListener("click", toggleOverview);
btnOverviewClose.addEventListener("click", closeOverview);
btnNotes.addEventListener("click", toggleNotes);
btnNotesClose.addEventListener("click", toggleNotes);
btnGuide.addEventListener("click", toggleGuide);
btnTheme.addEventListener("click", toggleTheme);
btnTimer.addEventListener("click", toggleTimer);
btnTimerReset.addEventListener("click", resetTimer);
btnFull.addEventListener("click", toggleFullscreen);
btnHelp.addEventListener("click", openHelp);
btnHelpClose.addEventListener("click", closeHelp);

// Klik luar modal untuk menutup
[overviewModal, helpModal].forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
      if (modal === overviewModal) btnOverview.classList.remove("active");
    }
  });
});

// 17. INISIALISASI
function initPresentation() {
  loadSavedTheme();
  fitCanvas();
  if (!readHash()) {
    updateSlide(0);
  }
  initDemoTabs();
}

document.addEventListener("DOMContentLoaded", initPresentation);

// Fallback inisialisasi jika DOMContentLoaded sudah lewat
if (document.readyState === "complete" || document.readyState === "interactive") {
  initPresentation();
}
