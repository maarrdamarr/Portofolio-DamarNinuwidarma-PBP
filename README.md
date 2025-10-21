# DamarDProject – Portfolio & Mini Site (HTML/CSS)

Proyek ini adalah halaman portfolio sederhana dengan fokus **ringan, rapi, dan siap-salin**.  
Struktur terdiri dari tiga halaman utama:

- `index.html` – Landing/Portfolio (Home, About, Technical Skill, Projects, Contact)
- `index2.html` – Statistik Keaktifan (grafik/laporan singkat aktivitas & bahasa yang sering dipakai)
- `index3.html` – Profil • Kerjasama • Kontak (company/profile style dengan call-to-action)

---

## 🔧 Tech Stack
- **HTML5**, **CSS3**, sedikit **JS** seperlunya
- Komponen UI bergaya **modern** (spacing lapang, rounded, card/shadow lembut)
- Layout **responsif**: desktop → tablet → mobile (grid kolom menyesuaikan breakpoint)

---

## 📁 Struktur Proyek (Ringkas)

├─ assets/ # resource untuk halaman (ikon, css/js jika ada)
├─ dist/ # file CSS/JS hasil pisah dari index (jika dipakai)
├─ screenshots/ # <— khusus gambar untuk README (bebas nama, bukan "assets")
├─ index.html
├─ index2.html
├─ index3.html
└─ README.md


> **Catatan**: Folder `screenshots/` hanya untuk dokumentasi README agar rapi dan tidak bercampur dengan aset website.

---

## 💡 Fitur Utama

1. **Landing Portfolio (index.html)**
   - Hero teks + foto, tombol **Hubungi | kerjasama** dan **GitHub Stats**
   - Section **About**, **Tech Stack** (kartu-kartu teknologi), **Projects** (kartu proyek), **Contact**
   - Navigasi anchor (Home, About, Technical Skill, Projects, Contact)

2. **Statistik Keaktifan (index2.html)**
   - Bagian ringkas: total kontribusi, current/longest streak, breakdown bahasa (bar chart sederhana)
   - Tombol **Kembali** ke halaman utama

3. **Profil & Kerjasama (index3.html)**
   - Heading **DamarDProject**, deskripsi singkat layanan, CTA **Ajukan Kerjasama** & **Hubungi Kami**
   - Cards: **Nilai Utama**, **Keahlian (Laravel 12 + Laragon, Blade/Livewire, Tailwind/Bootstrap, Auth/Roles/Laporan)**, **Komitmen**

4. **Responsif Penuh**
   - **Desktop**: layout 2–3 kolom (cards leluasa), hero teks + gambar berdampingan
   - **Tablet**: grid menjadi 2 kolom, ukuran tipografi menyesuaikan
   - **Mobile**: 1 kolom penuh, navbar ringkas, tombol mudah ditekan

---

## 🖼️ Tangkapan Layar

> Simpan gambar di `./screenshots/` (nama contoh di bawah bisa kamu ganti sesuai file yang kamu upload).

### 1) Home / Landing (index.html)
**Desktop**
![Home – Desktop](./screenshots/home-desktop.png)

**Tablet**
![Home – Tablet](./screenshots/home-tablet.png)

**Mobile**
![Home – Mobile](./screenshots/home-mobile.png)

**Penjelasan**  
- **Desktop**: Hero 2 kolom (teks kiri, foto kanan), spacing lapang, tombol CTA jelas.  
- **Tablet**: Grid menyusut jadi 2 kolom; padding & font-size menyesuaikan.  
- **Mobile**: Satu kolom penuh untuk keterbacaan; tombol besar dan mudah di-tap.

---

### 2) Tech Stack & Projects (index.html – bagian tengah)
**Tech Stack**
![Tech Stack – Desktop](./screenshots/techstack-desktop.png)

**Projects**
![Projects – Desktop](./screenshots/projects-desktop.png)

**Penjelasan**  
- **Tech Stack**: Kartu-kartu teknologi dengan icon/logo, bayangan lembut, dan radius besar.  
- **Projects**: Grid kartu proyek; tiap kartu berisi judul, deskripsi singkat, dan badge/teknologi.

---

### 3) Statistik Keaktifan (index2.html)
![Statistik Keaktifan](./screenshots/stats-page.png)

**Penjelasan**  
- Ringkasan kontribusi, streak, dan **Most Used Languages**. Tampilan bersih untuk presentasi cepat.

---

### 4) Profil • Kerjasama • Kontak (index3.html)
![Profil & Kerjasama](./screenshots/partnership-page.png)

**Penjelasan**  
- Halaman profil ringkas: nilai utama, keahlian, komitmen. Ada CTA **Ajukan Kerjasama** & **Hubungi Kami**.

---

## ▶️ Cara Menjalankan Secara Lokal

1. Clone / download repo ini.
2. Buka `index.html` langsung di browser **atau** gunakan ekstensi **Live Server** (VS Code).
3. Aset tambahan untuk halaman (bila ada) tetap di `assets/` atau `dist/`.  
   Gambar dokumentasi README tetap di `screenshots/`.

---

## ✏️ Kustomisasi Konten

- **Teks hero, about, dan kontak**: edit langsung di `index.html`.
- **Kartu Tech Stack & Projects**: duplikasi elemen card, ubah icon/teksnya.
- **Statistik (index2.html)**: sesuaikan angka/label yang kamu pakai.
- **Profil (index3.html)**: ubah deskripsi layanan, nilai inti, dan CTA.

---

## 🔗 Tautan Penting

- **Halaman utama**: `index.html`  
- **Statistik**: `index2.html`  
- **Profil/Kerjasama**: `index3.html`

---

## 📹 Demo Video

Tonton demo lengkap di YouTube: **[https://youtu.be/ISI-LINK-YT-KAMU](https://youtu.be/ISI-LINK-YT-KAMU)**

