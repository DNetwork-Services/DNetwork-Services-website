"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Info,
  Shield,
  Users,
  Award,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  SITE_NAME,
  OWNER_NAME,
  OWNER_ADDRESS,
  OWNER_PHONE_DISPLAY,
  WHY_CHOOSE_US,
} from "@/lib/constants";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-width px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-3">
              <Info className="h-3.5 w-3.5 mr-1.5" />
              About Us
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">{SITE_NAME}</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Your trusted partner for refurbished laptops and laptop repair
              services in Pune.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {SITE_NAME} was founded by {OWNER_NAME} with a simple mission:
                  to provide quality refurbished laptops and affordable repair
                  services to the people of Pune.
                </p>
                <p>
                  With years of experience in laptop repair and refurbishment,
                  we understand that technology should be accessible to everyone.
                  That is why we offer quality tested laptops at prices that
                  won&apos;t break the bank.
                </p>
                <p>
                  Located in New Sangvi, Pune, we serve customers from all over
                  Pune and surrounding areas. Our commitment to quality and
                  customer satisfaction has made us a trusted name in the
                  community.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/products">
                  <Button className="rounded-full">
                    Browse Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="rounded-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{OWNER_NAME}</h3>
                  <p className="text-muted-foreground">Owner, {SITE_NAME}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {OWNER_ADDRESS}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              Our <span className="text-gradient">Values</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_US.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="glass-card h-full">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Visit Our Store</h2>
                <p className="text-muted-foreground mb-4">
                  Come visit us in New Sangvi, Pune to check out our products in
                  person.
                </p>
                <p className="font-medium">{OWNER_ADDRESS}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Call us at {OWNER_PHONE_DISPLAY} for directions
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
