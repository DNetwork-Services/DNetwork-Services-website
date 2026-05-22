"use client";

import Image from "next/image";
import Link from "next/link";
import { ImageOff, Heart, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { formatPrice, getWhatsAppLink, getProductWhatsAppMessage } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/lib/constants";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const whatsappLink = getWhatsAppLink(
    WHATSAPP_NUMBER,
    getProductWhatsAppMessage(product.name)
  );

  const hasDiscount =
    product.discountPrice && product.discountPrice < product.price;

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <Link href={`/products/${product.id}`} className="relative aspect-[4/3] overflow-hidden bg-muted">
        {product.images && product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ImageOff className="h-10 w-10 text-muted-foreground" />
          </div>
        )}

        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.featured && (
            <Badge variant="default" className="text-xs">
              Featured
            </Badge>
          )}
          {product.availability === "Sold" && (
            <Badge variant="destructive" className="text-xs">
              Sold
            </Badge>
          )}
          {hasDiscount && (
            <Badge variant="success" className="text-xs">
              {Math.round(
                ((product.price - product.discountPrice!) / product.price) * 100
              )}
              % OFF
            </Badge>
          )}
        </div>
      </Link>

      <CardContent className="flex-1 flex flex-col p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-base mb-1 line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs text-muted-foreground mb-2">
          {product.brand} | {product.processor}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <Badge variant="secondary" className="text-xs">
            {product.ram}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {product.storage}
          </Badge>
        </div>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-lg font-bold text-primary">
                {formatPrice(product.discountPrice || product.price)}
              </span>
              {hasDiscount && (
                <span className="text-xs text-muted-foreground line-through ml-2">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <Link href={`/products/${product.id}`} className="flex-1">
              <Button size="sm" className="w-full rounded-full text-xs">
                View Details
              </Button>
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                variant="outline"
                className="rounded-full"
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
