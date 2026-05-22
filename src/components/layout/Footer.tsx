"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Laptop,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SITE_NAME,
  OWNER_PHONE_DISPLAY,
  OWNER_PHONE_ALT,
  OWNER_EMAIL,
  OWNER_ADDRESS,
  NAV_LINKS,
  REPAIR_SERVICES,
} from "@/lib/constants";
import { getWhatsAppLink, formatDate } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t">
      <div className="max-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Laptop className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg group-hover:text-primary transition-colors">
                {SITE_NAME}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted destination for quality refurbished laptops, genuine
              spare parts, and affordable laptop repair services in Pune.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                asChild
              >
                <a
                  href={getWhatsAppLink("917709443422", "Hello! I have a question.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-3 w-3 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Repair Services</h3>
            <ul className="space-y-2">
              {REPAIR_SERVICES.slice(0, 6).map((service) => (
                <li key={service.name}>
                  <Link
                    href="/repair-services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:+91${OWNER_PHONE_DISPLAY}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  {OWNER_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`tel:+91${OWNER_PHONE_ALT}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  {OWNER_PHONE_ALT}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${OWNER_EMAIL}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  {OWNER_EMAIL}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  {OWNER_ADDRESS}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; {currentYear} {SITE_NAME}. All rights reserved. Designed with
            care in Pune.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link href="/products" className="hover:text-foreground transition-colors">
              Products
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
