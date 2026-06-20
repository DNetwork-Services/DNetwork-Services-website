import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { FeedbackForm } from "@/components/shared/FeedbackForm";

const inter = Inter({ subsets: ["latin"] });

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: {
    default: "DNetwork & Services | Refurbished Laptops & Laptop Repair in Pune",
    template: "%s | DNetwork & Services",
  },
  description:
    "Buy quality refurbished laptops, used laptops, genuine spare parts, and affordable laptop repair services in New Sangvi, Pune. SSD upgrades, RAM upgrades, and more.",
  keywords: [
    "refurbished laptops Pune",
    "used laptops Pune",
    "laptop repair Pune",
    "affordable laptop repair",
    "second hand laptops Pune",
    "laptop spare parts Pune",
    "SSD upgrade Pune",
    "laptop service center Pune",
    "DNetwork & Services",
    "Deepak Nemade",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dnetwork.vercel.app",
    siteName: "DNetwork & Services",
    title: "DNetwork & Services | Refurbished Laptops & Laptop Repair in Pune",
    description:
      "Buy quality refurbished laptops, genuine spare parts, and affordable laptop repair services in Pune.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DNetwork & Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DNetwork & Services | Refurbished Laptops & Laptop Repair in Pune",
    description:
      "Buy quality refurbished laptops, genuine spare parts, and affordable laptop repair services in Pune.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://dnetwork.vercel.app"),
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {GA_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppButton />
          <FeedbackForm />
        </ThemeProvider>
      </body>
    </html>
  );
}
