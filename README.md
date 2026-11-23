# Presentasi Sistem Absensi Desa Way Galih

Slide presentasi **Kapita Selekta IF25-41031 — Kelompok 4** untuk proyek *Sistem Absensi Pegawai Kantor Desa Way Galih Berbasis Web*.

Presentasi ini membahas solusi absensi nirsentuh berbasis QR Code dengan validasi geofencing GPS, beserta evaluasi **before–after** penerimaan pengguna oleh pegawai kantor desa.

## Isi Repositori

| Berkas | Keterangan |
|---|---|
| `index.html` | Seluruh 17 slide presentasi (satu berkas HTML) |
| `style.css` | Tema, tata letak slide, dan gaya komponen |
| `script.js` | Navigasi slide, mode ringkasan, catatan pembicara, timer, tema |
| `assets/images/` | Gambar pendukung (hero, arsitektur alur, grafik evaluasi) |
| `assets/logos/` | Logo ITERA dan Kabupaten Lampung Selatan |
| `assets/screenshots/` | Tangkapan layar aplikasi dan dokumentasi uji lapangan |

## Cara Menjalankan

Tidak perlu build tool atau server — cukup buka berkas HTML di browser:

```bash
# Buka langsung
xdg-open index.html      # Linux
open index.html          # macOS
start index.html         # Windows

# Atau jalankan server lokal
python3 -m http.server 8000
# lalu akses http://localhost:8000
```

## Navigasi Presentasi

| Tombol | Fungsi |
|---|---|
| `→` / `Space` | Slide berikutnya |
| `←` | Slide sebelumnya |
| `Home` / `End` | Slide pertama / terakhir |
| `O` | Mode ringkasan (overview semua slide) |
| `N` | Panel naskah & rubrik akademik |
| `G` | Bar panduan akademik |
| `T` | Ganti tema terang / gelap |
| `F` | Mode layar penuh |
| `?` | Bantuan pintasan keyboard |

Deep-link ke slide tertentu juga didukung, misalnya `index.html#slide-10`.

## Ringkasan Materi

- **Identifikasi masalah** — absensi manual berbasis kertas: antrean, titip tanda tangan, rekapitulasi lambat
- **Solusi** — absensi QR Code nirsentuh + validasi radius GPS Balai Desa, data terpusat di server
- **Kesiapan teknologi** — TKT 4–5, diuji langsung di lingkungan operasional Kantor Desa Way Galih
- **Evaluasi before–after** — 6 indikator kuesioner Likert 1–5, 8 responden pegawai kantor desa (P01–P08)
- **Hasil** — rata-rata skor naik dari 2,13 menjadi 4,50 (selisih deskriptif +2,37)
- **Keterbatasan** — sampel satu kantor desa, durasi uji singkat, tanpa kelompok kontrol

Lampiran bukti post-test tersedia pada tautan Google Sheets di Slide 10.

## Lisensi

Repositori ini dibuat untuk keperluan akademik. Logo ITERA dan Pemerintah Kabupaten Lampung Selatan adalah milik masing-masing pemegang hak.
