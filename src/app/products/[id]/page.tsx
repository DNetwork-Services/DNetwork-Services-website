"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Tag,
  Shield,
  Clock,
  CheckCircle,
  XCircle,
  MessageCircle,
  IndianRupee,
  Cpu,
  HardDrive,
  Monitor,
  BatteryFull,
  Star,
  ChevronRight,
} from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";
import { ImageGallery } from "@/components/shared/ImageGallery";
import { ProductDetailSkeleton } from "@/components/shared/SkeletonCard";
import { ErrorState } from "@/components/shared/ErrorState";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types";
import {
  formatPrice,
  getWhatsAppLink,
  getProductWhatsAppMessage,
} from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export default function ProductDetailPage() {
  const params = useParams();
  const { getProduct } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        if (!params.id) return;
        const data = await getProduct(params.id as string);
        setProduct(data);
        if (!data) setError("Product not found");
      } catch {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [params.id, getProduct]);

  if (loading) return <ProductDetailSkeleton />;
  if (error || !product) {
    return (
      <div className="pt-24">
        <ErrorState
          title="Product not found"
          message="The product you are looking for does not exist or has been removed."
        />
      </div>
    );
  }

  const whatsappLink = getWhatsAppLink(
    WHATSAPP_NUMBER,
    getProductWhatsAppMessage(product.name)
  );

  const hasDiscount =
    product.discountPrice && product.discountPrice < product.price;

  const specs = [
    { label: "Processor", value: product.processor, icon: <Cpu className="h-4 w-4" /> },
    { label: "RAM", value: product.ram, icon: <HardDrive className="h-4 w-4" /> },
    { label: "Storage", value: product.storage, icon: <HardDrive className="h-4 w-4" /> },
    { label: "Graphics", value: product.graphics, icon: <Monitor className="h-4 w-4" /> },
    { label: "Screen", value: product.screenSize, icon: <Monitor className="h-4 w-4" /> },
    { label: "Battery Health", value: product.batteryHealth, icon: <BatteryFull className="h-4 w-4" /> },
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-width px-4">
          <Link
            href="/products"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <ImageGallery
                images={product.images}
                productName={product.name}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary">{product.condition}</Badge>
                  <Badge
                    variant={
                      product.availability === "In Stock"
                        ? "success"
                        : "destructive"
                    }
                  >
                    {product.availability}
                  </Badge>
                  {product.featured && <Badge>Featured</Badge>}
                </div>

                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  {product.name}
                </h1>
                <p className="text-muted-foreground">{product.brand}</p>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-primary">
                  {formatPrice(product.discountPrice || product.price)}
                </span>
                {hasDiscount && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(product.price)}
                    </span>
                    <Badge variant="success">
                      {Math.round(
                        ((product.price - product.discountPrice!) /
                          product.price) *
                          100
                      )}
                      % OFF
                    </Badge>
                  </>
                )}
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-3">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <span className="text-muted-foreground">{spec.icon}</span>
                      <span className="text-muted-foreground">{spec.label}:</span>
                      <span className="font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="text-muted-foreground">Warranty:</span>
                <span className="font-medium">{product.warranty}</span>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full rounded-full" size="lg">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </a>
                <Link href="/contact" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full rounded-full"
                    size="lg"
                  >
                    Get Best Price
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
