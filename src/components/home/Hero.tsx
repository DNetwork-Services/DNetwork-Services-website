"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Star, Truck, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5M2MzZWQiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="max-width section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
            >
              <Shield className="h-3.5 w-3.5 mr-1.5" />
              Trusted by customers in Pune
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-gradient">Affordable Refurbished Laptops</span>
              <br />
              <span className="text-foreground">& Laptop Repair Services</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Buy quality refurbished laptops, genuine spare parts, and affordable
              laptop repair services in Pune. Trusted by hundreds of happy customers.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/products">
                <Button size="lg" className="rounded-full text-base">
                  Browse Laptops
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/repair-services">
                <Button size="lg" variant="outline" className="rounded-full text-base">
                  Repair Services
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span className="ml-2 font-medium">4.9 (100+ reviews)</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Truck className="h-4 w-4 mr-1" />
                Free delivery in Pune
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl" />
              <div className="absolute inset-4 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Laptop className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gradient">Quality You Can Trust</h3>
                  <p className="text-muted-foreground mt-2">Serving Pune since 2021</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
