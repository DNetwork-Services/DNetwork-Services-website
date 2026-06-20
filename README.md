# DNetwork & Services - Website

**A modern, production-ready website for a refurbished laptop and laptop repair business in Pune, India.**

Built with Next.js 14, TypeScript, Tailwind CSS, Firebase, and deployed on Vercel Free Tier.

---

## Features

### Public Website
- Modern, Apple-inspired premium UI design
- Animated hero section with glassmorphism effects
- Product listing with search, filter, and sort functionality
- Product detail pages with image gallery
- Spare parts and accessories section
- Laptop repair services page with booking form
- About us page with business story and values
- Contact page with WhatsApp integration
- Dark/light mode toggle
- Fully responsive mobile-first design
- Floating WhatsApp chat button
- SEO optimized with Open Graph tags
- Fast loading with skeleton loaders
- Smooth page transitions and animations

### Admin Panel
- Secure Firebase Authentication login
- Dashboard with statistics overview
- Add, edit, delete products
- Upload multiple product images
- Mark items as sold/available
- Toggle featured products
- Manage repair service requests
- Update repair request status
- View all inventory at a glance

### Product Fields
Each product includes: name, brand, processor, RAM, storage, graphics, screen size, battery health, condition, warranty, price, discount price, images, description, availability, tags, and featured status.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** (App Router) | React framework for production |
| **TypeScript** | Type safety |
| **Tailwind CSS v3** | Utility-first styling |
| **Shadcn UI** | Reusable UI components |
| **Framer Motion** | Animations & transitions |
| **Lucide Icons** | Icon library |
| **Firebase Auth** | Admin authentication |
| **Firestore Database** | Product & data storage |
| **Firebase Storage** | Image hosting |
| **Next Themes** | Dark/light mode |
| **Google Analytics** | Visitor analytics & tracking |
| **Google Search Console** | SEO monitoring & indexing |
| **Sentry** | Error monitoring & crash reporting |
| **Cloudinary** | Image optimization & CDN |
| **Tally** | Customer feedback forms |
| **UptimeRobot** | Website uptime monitoring |
| **Vercel** | Free hosting & deployment |

---

## Folder Structure

```
dnetwork-website/
├── public/
│   ├── images/
│   │   └── laptop-placeholder.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── admin/...
│   │   ├── products/...
│   │   ├── spare-parts/page.tsx
│   │   ├── repair-services/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── globals.css
│   │   ├── global-error.tsx
│   │   ├── instrumentation.ts
│   │   ├── instrumentation-client.ts
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── admin/...
│   │   ├── home/...
│   │   ├── layout/...
│   │   ├── products/...
│   │   ├── shared/
│   │   │   ├── EmptyState.tsx
│   │   │   ├── ErrorState.tsx
│   │   │   ├── FeedbackForm.tsx
│   │   │   ├── ImageGallery.tsx
│   │   │   ├── PageTransition.tsx
│   │   │   ├── SkeletonCard.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   └── ui/...
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useMediaQuery.ts
│   │   └── useProducts.ts
│   ├── lib/
│   │   ├── cloudinary.ts
│   │   ├── constants.ts
│   │   ├── firebase.ts
│   │   └── utils.ts
│   ├── providers/
│   │   └── ThemeProvider.tsx
│   └── types/
│       └── index.ts
├── firebase/
│   ├── firestore.rules
│   └── storage.rules
├── .env.example
├── .gitignore
├── components.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## Installation

### Prerequisites
- Node.js 18+ installed
- A Firebase account (free tier)
- A Vercel account (free tier)

### Step 1: Clone and Install

```bash
git clone https://github.com/yourusername/dnetwork-website.git
cd dnetwork-website
npm install
```

### Step 2: Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use existing)
3. Enable **Authentication** → Sign-in method → **Email/Password**
4. Create an admin user:
   - Go to Authentication → Users → Add user
   - Set email: `admin@dnetwork.com` (or your preferred email)
   - Set a strong password
5. Enable **Firestore Database**:
   - Create database → Start in test mode (we'll update rules later)
   - Choose a location closest to you
6. Enable **Storage**:
   - Set up storage → Start in test mode
7. Get your Firebase config:
   - Project Settings → General → Your apps → Web app
   - Register a web app and copy the config values

### Step 3: Environment Variables

Create a `.env.local` file (see `.env.example` for reference):

```env
# Firebase (required)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Google Analytics (optional - for visitor tracking)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console (optional - for SEO verification)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_string

# Sentry (optional - for error monitoring)
NEXT_PUBLIC_SENTRY_DSN=https://xxxxxxx@xxxxxx.ingest.sentry.io/xxxxxx
SENTRY_ORG=your_sentry_org
SENTRY_PROJECT=your_sentry_project

# Cloudinary (optional - for image optimization)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
```

### Step 4: Deploy Firebase Rules

Go to Firestore → Rules and paste the contents of `firebase/firestore.rules`.
Go to Storage → Rules and paste the contents of `firebase/storage.rules`.

### Step 5: Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000`

---

## Deployment Guide

### Deploy to Vercel (FREE)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/dnetwork-website.git
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com) and sign up with GitHub
3. Click **Add New** → **Project**
4. Import your GitHub repository
5. Add environment variables from `.env.example` (all Firebase + optional GA, Sentry, Cloudinary vars)
6. Click **Deploy**
7. Your site will be live at `https://dnetwork-website.vercel.app`

### Custom Domain (FREE Options)

Your site will automatically get a `.vercel.app` domain:
- `dnetwork.vercel.app`
- `dnetworkservices.vercel.app`
- `dnetworkpune.vercel.app`
- `dnetworktech.vercel.app`
- `dnetwork-laptops.vercel.app`
- `deepaklaptops.vercel.app`

Other free domain options:
- `your-site.pages.dev` (Cloudflare Pages)
- `your-site.netlify.app` (Netlify)

To set a custom domain in Vercel:
1. Go to your project → **Settings** → **Domains**
2. Enter your desired `*.vercel.app` subdomain
3. Save

### Admin Access

1. Go to `https://yoursite.vercel.app/admin/login`
2. Sign in with the email and password you set in Firebase Authentication
3. Start adding products!

---

## Free Tools & Integrations

This project is built entirely using free-tier services. Below is the complete list:

### Already Integrated (Code-Level)

| Service | Purpose | Setup Required |
|---------|---------|---------------|
| **[Vercel](https://vercel.com)** | Hosting & deployment | Connect GitHub repo, add env vars |
| **[Firebase](https://firebase.google.com)** | Auth, database, file storage | Create project, enable services |
| **[Google Analytics](https://analytics.google.com)** | Visitor tracking | Get GA4 Measurement ID, set `NEXT_PUBLIC_GA_ID` |
| **[Google Search Console](https://search.google.com/search-console)** | SEO & indexing | Verify domain, set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` |
| **[Sentry](https://sentry.io)** | Error & crash monitoring | Create project, set `NEXT_PUBLIC_SENTRY_DSN`, `SENTRY_ORG`, `SENTRY_PROJECT` |
| **[Cloudinary](https://cloudinary.com)** | Image optimization & CDN | Get cloud name, set `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` |
| **[Tally](https://tally.so)** | Customer feedback forms | Create form, update form ID in `FeedbackForm.tsx` |

### External (No Code Required)

| Service | Purpose | Setup |
|---------|---------|-------|
| **[UptimeRobot](https://uptimerobot.com)** | 24/7 uptime monitoring | Sign up, add site URL (free: 50 monitors) |
| **[Zoho Mail](https://zoho.com/mail)** | Custom domain email | Sign up, verify domain (free: 5 users, 5GB each) |
| **[Buffer](https://buffer.com)** | Social media scheduling | Connect accounts (free: 3 channels) |
| **[GitHub](https://github.com)** | Source control & CI | Already using; free private repos with unlimited collaborators |

### How Each Integration Works

**Google Analytics** — Loads the GA4 gtag script on all pages via `next/script` in `src/app/layout.tsx`. Page views are tracked automatically. Only activates when `NEXT_PUBLIC_GA_ID` is set.

**Google Search Console** — Injects the verification meta tag from `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` into the document `<head>` via Next.js metadata. Submit your sitemap at `/sitemap.xml` in Search Console.

**Sentry** — Initialized in `src/instrumentation.ts` (server/edge) and `src/instrumentation-client.ts` (browser). Captures unhandled exceptions, promise rejections, and errors. Session replays on error. Only enabled in production. A `global-error.tsx` catches root-level errors.

**Cloudinary** — Uses Cloudinary's image fetch API to transform Firebase Storage images on-the-fly. Automatically converts to WebP, resizes to appropriate dimensions, and compresses to optimal quality. Falls back to the original URL if Cloudinary is not configured. Configured in `src/lib/cloudinary.ts`, used by `ProductCard` and `ImageGallery`.

**Tally** — A floating feedback button in `src/components/shared/FeedbackForm.tsx`. Opens your Tally form in a new tab. Update the form URL after creating your form on tally.so.

---

## Seed Data

The project includes sample product data in `src/lib/constants.ts` (SAMPLE_PRODUCTS).
When you first set up the site, you can manually add products through the admin panel
or create a seed script to populate Firestore.

To add seed data:
1. Log in to the admin panel
2. Go to Products → Add Product
3. Fill in the details and upload images
4. Submit to add to Firestore

---

## SEO & Marketing

This website is optimized for:
- **refurbished laptops Pune**
- **used laptops Pune**
- **laptop repair Pune**
- **affordable laptop repair**
- **second hand laptops Pune**
- **laptop spare parts Pune**

SEO features:
- Meta tags and Open Graph tags for all pages
- Semantic HTML structure
- robots.txt and sitemap.xml
- Fast loading performance
- Mobile-responsive design
- Accessibility improvements

---

## Future Improvements

- [ ] **PWA Support** - Add service worker for offline access
- [ ] **Blog Section** - SEO blog posts about laptop tips
- [ ] **Customer Reviews** - Let customers leave reviews on site
- [ ] **Order Tracking** - Track repair order status online
- [ ] **Payment Gateway** - Accept online payments (Razorpay/PhonePe)
- [ ] **Multi-language** - Add Marathi/Hindi language support
- [ ] **Email Notifications** - Notify customers on repair completion
- [ ] **Bulk Upload** - CSV/Excel product import
- [x] **Analytics** - Google Analytics integrated
- [ ] **Live Chat** - Real-time chat support

---

## License

MIT License - Feel free to use this project for your business.

---

## Support

For questions or support, contact:
- **Phone**: 7709443422 / 8999110217
- **WhatsApp**: https://wa.me/917709443422
- **Location**: New Sangvi, Pune, Maharashtra, India

---

Made with ❤️ for DNetwork & Services, Pune.
