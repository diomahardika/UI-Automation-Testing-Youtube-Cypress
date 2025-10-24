# Proyek Uji End-to-End YouTube dengan Cypress

Proyek ini berisi serangkaian tes *end-to-end* (E2E) otomatis untuk situs web YouTube, yang dibuat menggunakan [Cypress](https://www.cypress.io/). Tujuan utama dari tes ini adalah untuk memverifikasi alur pengguna dalam menemukan video trending di kategori Gaming.

## 🚀 Fitur Utama

-   **Navigasi Halaman**: Mengunjungi halaman utama YouTube dan menavigasi ke halaman Gaming.
-   **Interaksi & Ekstraksi Data**: Mengidentifikasi video trending ketiga, menyimpan judul video dan nama channel.
-   **Verifikasi**: Mengklik video tersebut, lalu memvalidasi bahwa judul video dan nama channel di halaman pemutaran video sesuai dengan data yang disimpan sebelumnya.
-   **Pelaporan**: Menghasilkan laporan tes dalam format HTML yang interaktif menggunakan `cypress-mochawesome-reporter`.

## 🛠️ Teknologi yang Digunakan

-   **Framework Pengujian**: [Cypress](https://www.cypress.io/)
-   **Bahasa**: JavaScript
-   **Manajemen Dependensi**: Node.js & NPM
-   **Plugin Cypress**:
    -   [cypress-xpath](https://github.com/cypress-io/cypress-xpath) untuk menggunakan selector XPath.
    -   [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) untuk laporan tes HTML.
-   **Manajemen Variabel Lingkungan**: [dotenv](https://github.com/motdotla/dotenv)

## 📋 Prasyarat

Pastikan Anda telah menginstal perangkat lunak berikut di mesin Anda:
-   [Node.js](https://nodejs.org/en/) (v18 atau lebih tinggi direkomendasikan)
-   NPM (biasanya terinstal bersama Node.js)

## ⚙️ Instalasi & Konfigurasi

1.  **Clone repository ini:**
    ```bash
    git clone <URL_REPOSITORY_ANDA>
    cd e2e-youtube-testing
    ```

2.  **Instal semua dependensi:**
    ```bash
    npm install
    ```

3.  **Konfigurasi Variabel Lingkungan:**
    -   Buat file `.env` di direktori utama proyek dengan menyalin dari file [`.env.example`](.env.example).
    -   Isi nilai `CYPRESS_BASE_URL` di dalam file `.env`:
      ```
      CYPRESS_BASE_URL=https://www.youtube.com
      ```

## ▶️ Menjalankan Tes

Anda dapat menjalankan tes dengan dua cara:

1.  **Membuka Cypress Test Runner (Mode Interaktif):**
    Perintah ini akan membuka antarmuka grafis Cypress di mana Anda dapat memilih dan menjalankan tes secara visual.
    ```bash
    npm run cypress:open
    ```

2.  **Menjalankan Tes di Headless Mode & Menghasilkan Laporan:**
    Perintah ini akan menjalankan semua tes di *background* (tanpa membuka browser) dan menghasilkan laporan HTML di direktori `cypress/reports/html`.
    ```bash
    npm run html-report
    ```

## 📂 Struktur Proyek

```
e2e-youtube-testing/
├── .github/workflows/      # Konfigurasi alur kerja GitHub Actions (CI)
├── cypress/
│   ├── e2e/                # Berisi file-file spesifikasi tes (.cy.js)
│   ├── fixtures/           # Data statis atau mock data
│   ├── locators/           # Menyimpan semua selector elemen (XPath)
│   ├── pages/              # Page Object Model untuk setiap halaman
│   ├── reports/            # Laporan tes yang dihasilkan (HTML, JSON)
│   └── support/            # Konfigurasi global dan custom commands
├── .env.example            # Contoh file variabel lingkungan
├── .gitignore              # File dan folder yang diabaikan oleh Git
├── cypress.config.js       # File konfigurasi utama Cypress
├── package.json            # Daftar dependensi dan skrip proyek
└── README.md               # Dokumentasi proyek
```
