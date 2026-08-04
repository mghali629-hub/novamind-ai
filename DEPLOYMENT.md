# Deployment Guide — NovaMind AI

NovaMind AI is built with Next.js 14 App Router and Prisma SQLite.

## Deployment Options

### 1. Deploying to Vercel (Recommended)

1. Push your repository to GitHub.
2. Import the project into Vercel.
3. Configure Environment Variables:
   - `DATABASE_URL="file:./dev.db"` (or point to Supabase/PostgreSQL for production).
4. Build Command: `npx prisma generate && npx prisma db push && next build`.

### 2. Docker Deployment

Build and run using Docker:

```bash
docker build -t novamind-ai .
docker run -p 3000:3000 novamind-ai
```

### 3. Production Health Check

Verify status at `/api/status` or browse to `/status` to verify system health metrics.
