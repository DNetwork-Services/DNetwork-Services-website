"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";

export function WhatsAppButton() {
  const whatsappLink = getWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <Button
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white hover:scale-105 transition-all duration-200"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </a>
      <span className="text-xs font-medium bg-background border px-3 py-1 rounded-full shadow-sm">
        Chat with us
      </span>
    </div>
  );
}
