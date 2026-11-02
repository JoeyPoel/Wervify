# Wervify Deployment Guide

## 1. Prerequisites
- Node.js 18+ or 20+
- PostgreSQL database (Neon, Supabase, Railway, or AWS RDS)
- Resend API key (optional for production email delivery; system degrades safely if missing)

## 2. Environment Variables
Configure the following environment variables in your deployment environment (Vercel project settings):

```env
DATABASE_URL="postgresql://user:password@host:5432/wervify?sslmode=require"
RESEND_API_KEY="re_..."
ADMIN_NOTIFICATION_EMAIL="leads@wervify.nl"
MAIL_FROM="Wervify <info@wervify.nl>"
```

*Note: The platform features resilient fallbacks. If `DATABASE_URL` is omitted, requests are retained in in-memory storage with clear log telemetry instead of throwing uncaught runtime errors.*

## 3. Local Development
```bash
npm install
npm run dev
```

## 4. Production Build & Test
```bash
npm test          # Invariants verification
npm run build     # Prisma generate + TypeScript check + Vite bundle
```
