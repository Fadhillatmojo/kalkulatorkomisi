# Projek Laravel + React

Projek ini adalah integrasi antara backend menggunakan Laravel dan frontend menggunakan React, yang berjalan dalam satu projek yang sama di port 8000. Berikut adalah langkah-langkah untuk menjalankan projek ini di lingkungan lokal Anda.

## Clone Repository

1. Clone repository dari GitHub:

    ```bash
    git clone https://github.com/Fadhillatmojo/kalkulatorkomisi.git
    cd kalkulatorkomisi
    ```

## Setup

Pastikan Anda telah menginstal PHP, Composer, Node.js, dan npm di komputer Anda sebelum memulai.

### Backend (Laravel)

1. Buka terminal dan navigasi ke direktori projek:

    ```bash
    cd path/to/kalkulatorkomisi
    ```

2. Install dependencies menggunakan Composer:

    ```bash
    composer install
    ```

3. Salin file `.env.example` menjadi `.env` dan sesuaikan pengaturan database:

    ```bash
    cp .env.example .env
    ```

4. Generate kunci aplikasi Laravel:

    ```bash
    php artisan key:generate
    ```

5. Jalankan migrasi untuk membuat skema database:

    ```bash
    php artisan migrate
    ```

6. (Opsional) Jalankan seeder untuk mengisi database dengan data dummy:

    ```bash
    php artisan db:seed
    ```

7. Jalankan server Laravel:

    ```bash
    php artisan serve --port=8000
    ```

   Server Laravel akan berjalan di `http://127.0.0.1:8000`.

### Frontend (React)

1. Buka terminal dan navigasi ke direktori frontend:

    ```bash
    cd path/to/kalkulatorkomisi
    ```

2. Install dependencies menggunakan npm:

    ```bash
    npm install
    ```

3. Jalankan aplikasi React:

    ```bash
    npm run dev
    ```

   Aplikasi React akan berjalan di `http://127.0.0.1:8000`.

## Menggunakan Aplikasi

Setelah menjalankan kedua server (Laravel dan React), Anda dapat mengakses aplikasi di browser:

- Aplikasi akan tersedia di `http://127.0.0.1:8000`.

Terima kasih!

