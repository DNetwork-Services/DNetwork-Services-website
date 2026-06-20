"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { getFirebaseCloudinaryUrl } from "@/lib/cloudinary";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState<Set<number>>(new Set());

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square rounded-xl bg-muted flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <ImageOff className="h-12 w-12 mx-auto mb-2" />
          <p className="text-sm">No images available</p>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-square rounded-xl overflow-hidden bg-muted group">
        {imageError.has(currentIndex) ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <ImageOff className="h-12 w-12 mx-auto mb-2" />
              <p className="text-sm">Image not available</p>
            </div>
          </div>
        ) : (
          <Image
            src={getFirebaseCloudinaryUrl(images[currentIndex], { width: 800, height: 800 })}
            alt={`${productName} - Image ${currentIndex + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setImageError((prev) => new Set(prev).add(currentIndex))}
            priority
          />
        )}

        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
              onClick={prevImage}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
              onClick={nextImage}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-200",
                  idx === currentIndex
                    ? "bg-white w-4"
                    : "bg-white/50 hover:bg-white/80"
                )}
              />
            ))}
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all",
                idx === currentIndex
                  ? "border-primary ring-1 ring-primary"
                  : "border-transparent hover:border-muted-foreground/30"
              )}
            >
              {imageError.has(idx) ? (
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <ImageOff className="h-4 w-4 text-muted-foreground" />
                </div>
              ) : (
                <Image
                  src={getFirebaseCloudinaryUrl(image, { width: 128, height: 128 })}
                  alt={`${productName} thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                  onError={() =>
                    setImageError((prev) => new Set(prev).add(idx))
                  }
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
