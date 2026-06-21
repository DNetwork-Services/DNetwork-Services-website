# DNetwork & Services — Website

**Live:** [dnetwork.vercel.app](https://dnetwork.vercel.app)  
**Admin:** [dnetwork.vercel.app/admin/login](https://dnetwork.vercel.app/admin/login)  
**Repo:** [github.com/DNetwork-Services/DNetwork-Services-website](https://github.com/DNetwork-Services/DNetwork-Services-website)

---

## Quick Links

| Service | Link | Purpose |
|---------|------|---------|
| Firebase Console | https://console.firebase.google.com/project/dnetwork-and-services-5f626 | Auth, Firestore, Storage |
| Vercel Dashboard | https://vercel.com/DNetwork-Services/dnetwork-website | Deployment & logs |
| Cloudinary | https://console.cloudinary.com | Image uploads & CDN |
| Google Analytics | https://analytics.google.com | Visitor tracking |
| Google Search Console | https://search.google.com/search-console?resource_id=https://dnetwork.vercel.app | SEO |
| Sentry | https://dnetwork-and-services.sentry.io | Error monitoring |
| Tally.so | https://tally.so/forms | Feedback forms |
| UptimeRobot | https://uptimerobot.com | Uptime monitoring |
| Zoho Mail | https://mail.zoho.com | Business email |
| Buffer | https://buffer.com | Social media |

---

## Tech Stack

Next.js 14 (App Router), TypeScript, Tailwind CSS v3, Shadcn UI, Framer Motion, Firebase Auth, Firestore, Cloudinary, Sentry, Google Analytics, Tally.so, Vercel.

---

## Setup

### Prerequisites
- Node.js 18+, Firebase account, Vercel account

### 1. Clone & Install
```bash
git clone https://github.com/DNetwork-Services/DNetwork-Services-website.git
cd DNetwork-Services-website
npm install
```

### 2. Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/) → Create project (or use existing)
2. Enable **Authentication** → Sign-in method → **Email/Password**
3. Create an admin user (Authentication → Users → Add user)
4. Enable **Firestore Database** (start in test mode)
5. Copy Firebase config from Project Settings → General → Web app

### 3. Cloudinary Setup (image uploads)
1. Sign up at [Cloudinary](https://cloudinary.com)
2. Get **Cloud Name** from dashboard
3. Settings → Upload → Upload presets → Add **unsigned** upload preset
4. Save cloud name and preset name

### 4. Optional Integrations
- **Google Analytics** — Create GA4 property, copy Measurement ID (`G-XXXXXXXXXX`)
- **Sentry** — Create Next.js project, copy DSN/org/project
- **Tally.so** — Create form, copy form ID
- **Google Search Console** — Add property, copy verification string

### 5. Environment Variables

Create `.env.local`:

```env
# ── Firebase (REQUIRED) ─────────────────────────────────────────
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# ── Admin Email ─────────────────────────────────────────────────
NEXT_PUBLIC_ADMIN_EMAIL=admin@dnetwork.com

# ── Google Analytics (optional) ─────────────────────────────────
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# ── Google Search Console (optional) ────────────────────────────
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=

# ── Sentry (optional) ───────────────────────────────────────────
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_ORG=
SENTRY_PROJECT=

# ── Cloudinary (optional, recommended) ───────────────────────────
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=

# ── Tally.so (optional) ─────────────────────────────────────────
NEXT_PUBLIC_TALLY_FORM_ID=WOQMdk
```

### 6. Deploy Firebase Rules
Paste `firebase/firestore.rules` into Firestore → Rules, and `firebase/storage.rules` into Storage → Rules.

### 7. Run Locally
```bash
npm run dev
# http://localhost:3000
```

---

## Deployment (Vercel)

1. Push to GitHub
2. Go to [Vercel](https://vercel.com) → Add New → Project → Import repo
3. Add all environment variables from `.env.local`
4. Deploy

### Admin Access
`https://yoursite.vercel.app/admin/login` — sign in with the Firebase Auth user created earlier.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Login page blank | Ensure on `/admin/login` path. Check Firebase Auth Email/Password is enabled. |
| Firebase init failed | Verify `NEXT_PUBLIC_FIREBASE_API_KEY` and `PROJECT_ID` are set. |
| Images not uploading | Check Cloudinary upload preset is **unsigned** and env vars are set. |
| Build fails | Run `npm install`, check Node.js 18+. |
