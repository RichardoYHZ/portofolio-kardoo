# Portfolio Pribadi — Richardo

Website portfolio pribadi untuk menampilkan profil, keahlian, layanan, proyek, dan rekam jejak sertifikasi. Dibangun dengan React dan Vite dengan antarmuka modern, responsif, serta dukungan mode terang dan gelap.

## Fitur

- Desain responsif untuk desktop, tablet, dan perangkat seluler.
- Navigasi sticky, active section, progress scroll, dan tombol kembali ke atas.
- Mode terang/gelap yang tersimpan di `localStorage` dan mengikuti preferensi sistem saat pertama dibuka.
- Bagian Hero, About, Skills, Services, Projects, Credentials, dan Contact.
- Arsip sertifikat yang ditampilkan dari folder Google Drive.
- Filter dan modal detail proyek yang akan aktif setelah data proyek ditambahkan.
- Formulir kontak dengan validasi; pesan valid diteruskan ke aplikasi email pengunjung melalui `mailto:`.
- Fokus keyboard yang terlihat, modal dapat ditutup dengan `Escape`, dan dukungan `prefers-reduced-motion`.

## Teknologi

- React 19
- Vite 8
- JavaScript
- CSS modern dengan design tokens/CSS variables
- Oxlint

## Menjalankan Secara Lokal

Pastikan Node.js telah terpasang. Dari direktori project, jalankan:

```powershell
npm.cmd install
npm.cmd run dev
```

Buka alamat yang ditampilkan Vite di browser, biasanya `http://localhost:5173`.

> Gunakan `npm.cmd` pada PowerShell apabila `npm` diblokir oleh execution policy Windows.

## Perintah Lain

```powershell
# Mengecek aturan kode
npm.cmd run lint

# Membuat build produksi pada folder dist
npm.cmd run build

# Menjalankan preview hasil build
npm.cmd run preview
```

## Struktur Project

```text
src/
├── assets/          # Foto profil dan aset visual
├── components/      # Komponen reusable
├── data/
│   └── portfolio.js # Seluruh data portfolio yang mudah diubah
├── App.jsx          # Struktur halaman utama
├── App.css          # Gaya komponen dan layout
├── index.css        # Token warna, tema, dan gaya global
└── main.jsx         # Titik masuk aplikasi
public/              # Aset publik seperti favicon
```

## Memperbarui Konten

Data utama berada di `src/data/portfolio.js`:

- `profile`: nama, jabatan, bio, pendekatan kerja, dan fokus.
- `socials`: GitHub, LinkedIn, serta email.
- `skills` dan `services`: keahlian serta layanan yang ditawarkan.
- `projects`: daftar proyek nyata. Tambahkan gambar proyek ke `public/projects/` lalu gunakan path seperti `/projects/nama-proyek.jpg`.
- `credentialArchive`: tautan dan embed folder Google Drive untuk sertifikat.

Foto profil berada di `src/assets/profile.jpg`.

## Catatan Publikasi

- Pastikan folder Google Drive sertifikat diatur ke **Anyone with the link / Viewer** agar dapat dilihat pengunjung.
- Kompres gambar sebelum publikasi untuk menjaga kecepatan halaman.
- Form kontak saat ini menggunakan aplikasi email pengguna. Gunakan layanan formulir atau backend jika membutuhkan pengiriman email langsung dari browser.
- Untuk GitHub Pages pada repository project, konfigurasi `base` Vite dan workflow deploy mungkin diperlukan.
