## How to run the UNIQLO website

### Prerequisites
1. Node.js v20 or above
2. npm v10 or above
3. PostgreSQL v16 or above
4. Visual Studio Code or other code editor

### Clone the UNIQLO github
```bash
git clone https://github.com/BoviliusMeidi/UNIQLO.git
cd UNIQLO
```
### Run the BackEnd Environment
0. Change to the backend directory first.
```bash
cd backend
```

1. Install the node package manager, that we need for this websnpm --versioite.
```bash
npm install
```
```bash
Package NPM (Node Package Manager) yang akan terinstall
"bcryptjs": "^2.4.3" -> Melakukan algoritma hashing untuk mengamankan kata sandi pengguna.
"body-parser": "^1.20.3" -> Memparssing data yang terkirim melalui permintaan HTTP. seperti JSON atau form data.
"cors": "^2.8.5" -> Akses lintas domain (Cross-Origin Resource Sharing) pada aplikasi Express.
"dotenv": "^16.4.5" -> Memuat variabel environment yang disimpan dalam file .env.
"express": "^4.21.1" -> Framework untuk membangun aplikasi web di Node.js.
"express-session": "^1.18.1" -> Middleware untuk Express yang mengelola session pengguna.
"knex": "^3.1.0" -> Query builder SQL untuk Node.js sehingga dapat berinteraksi dengan database menggunakan antarmuka JavaScript.
"multer": "^1.4.5-lts.1" -> Middleware untuk menangani unggahan file dalam Express.
"path": "^0.12.7" -> Memanipulasi jalur file di sistem file.
"pg": "^8.13.1" -> Menghubungkan dan berinteraksi dengan PostgreSQL dari aplikasi Node.js.
"nodemon": "^3.1.7" -> Alat pengembangan untuk Node.js yang secara otomatis memulai ulang server ketika ada perubahan pada file.
```
2. Copy file `.env.example` to the `.env`.
```bash
cp .env.example .env
```
3. Open file `.env` and re-configuration to the your system environment database.
```bash
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=uniqlo
DB_USERNAME=postgres *username
DB_PASSWORD= *password
```
4. Build the database
```bash
npm run database
```
5. Build the migration
```bash
npm run migrate
```
6. Add the seeder for database
```bash
npm run seed
```
7. Run the server
```bash
npm run dev
```

Backend will run in `http://127.0.0.1:3000` or with the port already you re-configure in the `backend/server.js`

### Run the FrontEnd Environment
1. Install the Live Server extensions in Visual Studio Code.
2. Click the live server, and click the frontend in the listing directory.
3. After that, your website already can be used like you want.
