"use client";

import { useCallback } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const TALLY_FORM_ID = process.env.NEXT_PUBLIC_TALLY_FORM_ID || "WOQMdk";

function loadTallyScript(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve();
    if ((window as any).Tally) return resolve();

    (window as any).TallyConfig = { formId: TALLY_FORM_ID };

    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
}

export function FeedbackForm() {
  const openTally = useCallback(async () => {
    await loadTallyScript();
    if (typeof window !== "undefined" && (window as any).Tally) {
      (window as any).Tally.openPopup(TALLY_FORM_ID);
    }
  }, []);

  return (
    <div className="fixed bottom-32 right-6 z-50">
      <Button
        variant="outline"
        size="sm"
        className="gap-2 bg-background/80 backdrop-blur-sm shadow-lg"
        onClick={openTally}
      >
        <MessageCircle className="h-4 w-4" />
        Feedback
      </Button>
    </div>
  );
}
