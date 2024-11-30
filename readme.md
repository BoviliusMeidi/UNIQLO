## How to run the UNIQLO website

### Clone the UNIQLO github
```bash
git clone https://github.com/BoviliusMeidi/UNIQLO.git
cd UNIQLO
```
### Run the BackEnd Environment
1. Install the node package manager, that we need for this website.
```bash
npm install
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
