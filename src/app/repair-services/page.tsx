"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Wrench,
  Clock,
  IndianRupee,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Phone,
  Zap,
  MemoryStick,
  Monitor,
  Sparkles,
  Keyboard,
  MonitorSmartphone,
  BatteryCharging,
  Cpu,
  Terminal,
} from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { REPAIR_SERVICES, WHATSAPP_NUMBER } from "@/lib/constants";
import { getWhatsAppLink, getRepairWhatsAppMessage } from "@/lib/utils";

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

export default function RepairServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    deviceType: "",
    issue: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `New Repair Request:%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0ADevice: ${formData.deviceType}%0AIssue: ${formData.issue}%0ADescription: ${formData.description}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank"
    );
  };

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
              <Wrench className="h-3.5 w-3.5 mr-1.5" />
              Repair Services
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Laptop <span className="text-gradient">Repair Services</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Expert laptop repair and upgrade services in Pune. Fast turnaround,
              affordable prices, and quality guaranteed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {REPAIR_SERVICES.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="glass-card h-full group hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        {serviceIcons[service.icon]}
                      </div>
                      <Badge variant="secondary">{service.price}</Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {service.name}
                    </h3>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    Book a <span className="text-gradient">Repair</span>
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Your Name
                      </label>
                      <Input
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Device Type
                      </label>
                      <Input
                        placeholder="e.g. Dell Latitude 5480"
                        value={formData.deviceType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            deviceType: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Issue
                      </label>
                      <select
                        className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                        value={formData.issue}
                        onChange={(e) =>
                          setFormData({ ...formData, issue: e.target.value })
                        }
                        required
                      >
                        <option value="">Select an issue</option>
                        {REPAIR_SERVICES.map((s) => (
                          <option key={s.name} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Description
                      </label>
                      <Textarea
                        placeholder="Describe the issue in detail..."
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            description: e.target.value,
                          })
                        }
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full rounded-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Send via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Why Choose <span className="text-gradient">Our Services</span>
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "Expert technicians with years of experience",
                      "Genuine spare parts used for all repairs",
                      "Affordable and transparent pricing",
                      "Quick turnaround time",
                      "Warranty on all repairs",
                      "Free inspection and diagnosis",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-xl font-bold mb-4">
                    Need Help? Contact Us
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Call us or message on WhatsApp for quick assistance.
                  </p>
                  <div className="space-y-3">
                    <a
                      href={`tel:+917709443422`}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted hover:bg-accent transition-colors"
                    >
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Call Us</p>
                        <p className="text-xs text-muted-foreground">
                          7709443422
                        </p>
                      </div>
                    </a>
                    <a
                      href={getWhatsAppLink(
                        WHATSAPP_NUMBER,
                        "Hello! I need laptop repair service."
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/30 hover:bg-green-100 dark:hover:bg-green-950/50 transition-colors"
                    >
                      <MessageCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium">WhatsApp</p>
                        <p className="text-xs text-muted-foreground">
                          Quick response
                        </p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
