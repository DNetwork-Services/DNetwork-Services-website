"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeedbackForm() {
  return (
    <div className="fixed bottom-24 right-4 z-50">
      <Button
        variant="outline"
        size="sm"
        className="gap-2 bg-background/80 backdrop-blur-sm shadow-lg"
        asChild
      >
        <a
          href="https://tally.so/r/your-tally-form-id"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-4 w-4" />
          Feedback
        </a>
      </Button>
    </div>
  );
}
