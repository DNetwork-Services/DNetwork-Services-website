"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  MemoryStick,
  Monitor,
  Sparkles,
  Keyboard,
  MonitorSmartphone,
  BatteryCharging,
  Cpu,
  Terminal,
  ArrowRight,
  Wrench,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { REPAIR_SERVICES } from "@/lib/constants";

const serviceIcons: Record<string, React.ReactNode> = {
  zap: <Zap className="h-6 w-6" />,
  "memory-stick": <MemoryStick className="h-6 w-6" />,
  monitor: <Monitor className="h-6 w-6" />,
  sparkles: <Sparkles className="h-6 w-6" />,
  keyboard: <Keyboard className="h-6 w-6" />,
  "monitor-smartphone": <MonitorSmartphone className="h-6 w-6" />,
  "battery-charging": <BatteryCharging className="h-6 w-6" />,
  cpu: <Cpu className="h-6 w-6" />,
  terminal: <Terminal className="h-6 w-6" />,
};

export function RepairServicesSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-3">
            <Wrench className="h-3.5 w-3.5 mr-1.5" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Laptop <span className="text-gradient">Repair Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Professional laptop repair and upgrade services at affordable prices.
            Fast turnaround with quality guaranteed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REPAIR_SERVICES.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="glass-card h-full group hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      {serviceIcons[service.icon]}
                    </div>
                    <span className="text-sm font-semibold text-primary">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {service.description}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    Estimated: {service.estimatedTime}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground mb-4">
            Need a different repair? Contact us for a custom quote.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full">
              Book a Repair
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
