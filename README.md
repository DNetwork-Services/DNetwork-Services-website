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
│   │   ├── admin/
│   │   │   ├── login/page.tsx
│   │   │   ├── products/
│   │   │   │   ├── add/page.tsx
│   │   │   │   └── edit/[id]/page.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── repairs/page.tsx
│   │   │   ├── categories/page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   ├── [id]/page.tsx
│   │   │   └── page.tsx
│   │   ├── spare-parts/page.tsx
│   │   ├── repair-services/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── admin/
│   │   │   ├── ProductForm.tsx
│   │   │   ├── RepairRequestsTable.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── StatsCard.tsx
│   │   ├── home/
│   │   │   ├── FAQ.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── RepairServicesSection.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── WhyChooseUs.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Navbar.tsx
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductFilters.tsx
│   │   │   └── ProductGrid.tsx
│   │   ├── shared/
│   │   │   ├── EmptyState.tsx
│   │   │   ├── ErrorState.tsx
│   │   │   ├── ImageGallery.tsx
│   │   │   ├── PageTransition.tsx
│   │   │   ├── SkeletonCard.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   └── ui/
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── skeleton.tsx
│   │       ├── table.tsx
│   │       ├── textarea.tsx
│   │       └── toast.tsx
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useMediaQuery.ts
│   │   └── useProducts.ts
│   ├── lib/
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

Create a `.env.local` file:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
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
5. Add environment variables (all `NEXT_PUBLIC_FIREBASE_*` values)
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
- [ ] **Analytics** - Google Analytics integration
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
