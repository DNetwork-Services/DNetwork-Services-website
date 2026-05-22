"use client";

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
      <WhyChooseUs />
      <FeaturedProducts />
      <RepairServicesSection />
      <Testimonials />
      <FAQ />
    </PageTransition>
  );
}
