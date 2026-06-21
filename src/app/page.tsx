"use client";

import { AlertTriangle } from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";
import { Hero } from "@/components/home/Hero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { RepairServicesSection } from "@/components/home/RepairServicesSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <div className="max-width section-padding pt-0">
        <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-sm text-amber-800 dark:text-amber-200">
          <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
          <p>
            <strong>Note:</strong> Prices mentioned are indicative and may change
            as per market conditions. Please confirm the final price before
            placing your order.
          </p>
        </div>
      </div>
      <WhyChooseUs />
      <FeaturedProducts />
      <RepairServicesSection />
      <Testimonials />
      <FAQ />
    </PageTransition>
  );
}
