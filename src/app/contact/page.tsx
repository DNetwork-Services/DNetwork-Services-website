"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  ChevronRight,
} from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  SITE_NAME,
  OWNER_PHONE_DISPLAY,
  OWNER_PHONE_ALT,
  OWNER_EMAIL,
  OWNER_ADDRESS,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello ${SITE_NAME},%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank"
    );
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Call Us",
      details: [OWNER_PHONE_DISPLAY, OWNER_PHONE_ALT],
      action: { label: "Call Now", href: `tel:+91${OWNER_PHONE_DISPLAY}` },
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "WhatsApp",
      details: [OWNER_PHONE_DISPLAY],
      action: {
        label: "Chat Now",
        href: getWhatsAppLink(
          WHATSAPP_NUMBER,
          "Hello! I have a question."
        ),
      },
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      details: [OWNER_EMAIL],
      action: { label: "Send Email", href: `mailto:${OWNER_EMAIL}` },
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      details: [OWNER_ADDRESS],
      action: {
        label: "Get Directions",
        href: `https://maps.google.com/?q=${encodeURIComponent(OWNER_ADDRESS)}`,
      },
    },
  ];

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
              <Phone className="h-3.5 w-3.5 mr-1.5" />
              Contact
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have a question? Want to buy a laptop or book a repair? We are
              here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    Send us a <span className="text-gradient">Message</span>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          Phone
                        </label>
                        <Input
                          type="tel"
                          placeholder="Enter your phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        Message
                      </label>
                      <Textarea
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full rounded-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {contactInfo.map((info) => (
                <Card key={info.title}>
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-medium">{info.title}</h3>
                          {info.details.map((detail) => (
                            <p
                              key={detail}
                              className="text-sm text-muted-foreground"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                      <a href={info.action.href} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm">
                          {info.action.label}
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card>
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Mon - Sat: 10:00 AM - 8:00 PM
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sunday: By Appointment
                      </p>
                    </div>
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
