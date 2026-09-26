# ShiftHub

ShiftHub is a self‑hosted nurse scheduling application designed for emergency departments. It allows nurses to log in, request shifts, mark days off, and view their schedules. Admins can approve or deny shift requests, manage staff, and oversee the full schedule from a clean dashboard.

ShiftHub is built with a modern, stable stack:
- React + Vite (frontend)
- Node.js 20 + Express (backend)
- PostgreSQL (database)
- Prisma ORM
- Supabase Auth (secure authentication)
- Docker Compose (deployment)
- Unraid‑friendly architecture

---

## Features

### Nurse Features
- Secure login and signup
- Request shifts
- Mark days off or unavailable
- View upcoming schedule
- Mobile‑friendly interface

### Admin Features
- Approve or deny shift requests
- View all nurse availability
- Manage nurse accounts
- Oversee full department schedule

### Technical Features
- Fully containerized (frontend, backend, database)
- Uses Supabase for secure authentication
- Prisma ORM for clean database modeling
- Easy deployment on Unraid or any Docker host

---

## Tech Stack

### Frontend
- React 18
- Vite
- Supabase JS client
- Custom hooks for auth

### Backend
- Node.js 20 (LTS)
- Express
- Prisma ORM
- Supabase Admin API

### Database
- PostgreSQL 15
- Prisma migrations

### Deployment
- Docker Compose
- Nginx Proxy Manager (optional)
- Unraid‑friendly layout

---

## Project Structure

shifthub/
    backend/
    src/
    controllers/
    routes/
    prisma/
    utils/
    server.js
    Dockerfile
    package.json
    .env

    frontend/
    src/
    components/
    pages/
    hooks/
    supabase/
    App.jsx
    main.jsx
    public/
    Dockerfile
    package.json
    .env

docker-compose.yml
.gitignore
README.md


---

## Environment Variables

### Backend `.env`
DATABASE_URL="postgres://shifthub:shifthub@db:5432/shifthub"
SUPABASE_URL="https://YOUR_PROJECT_ID.supabase.co"
SUPABASE_ANON_KEY="YOUR_ANON_KEY"
SUPABASE_SERVICE_ROLE_KEY="YOUR_SERVICE_ROLE_KEY"
PORT=5000

### Frontend `.env`
VITE_SUPABASE_URL="https://YOUR_PROJECT_ID.supabase.co"
VITE_SUPABASE_ANON_KEY="YOUR_ANON_KEY"
VITE_API_URL="http://localhost:5000"


---

## Running Locally (Development)

Install dependencies:

cd backend
npm install

cd ../frontend
npm install


Start backend:
npm run dev


Start frontend:
npm run dev


---

## Running with Docker Compose

From the project root:
docker compose up -d --build

This starts:
- Backend (port 5000)
- Frontend (port 3000)
- PostgreSQL database

Stop the stack:
docker compose down


---

## Deploying on Unraid

1. Copy the project folder to your Unraid server  
2. Open a terminal into Unraid  
3. Navigate to the project directory  
4. Run:
docker compose up -d --build


5. Use Nginx Proxy Manager to expose:
   - `shifthub.yourdomain.com` → frontend (3000)
   - `shifthub-api.yourdomain.com` → backend (5000)

---

## Prisma Migrations

After editing `schema.prisma`:
cd backend
npx prisma migrate dev --name init


Generate client:
npx prisma generate


---

## Future Features (Planned)

- Auto‑generated schedules
- PTO / sick day tracking
- Shift conflict detection
- Notifications
- Calendar drag‑and‑drop UI
- Role‑based dashboards

---

## License

ShiftHub © 2026 William McCown

This work is licensed under the Creative Commons 
Attribution-NonCommercial-ShareAlike 4.0 International License.

You are free to:
- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material

Under the following terms:
- Attribution — You must give appropriate credit.
- NonCommercial — You may not use the material for commercial purposes.
- ShareAlike — If you remix, transform, or build upon the material, 
  you must distribute your contributions under the same license as the original.

No additional restrictions — You may not apply legal terms or technological 
measures that legally restrict others from doing anything the license permits.

To view the full license, visit:
https://creativecommons.org/licenses/by-nc-sa/4.0/


