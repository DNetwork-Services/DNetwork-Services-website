"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PageTransition } from "@/components/shared/PageTransition";
import { ProductForm } from "@/components/admin/ProductForm";
import { ErrorState } from "@/components/shared/ErrorState";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types";
import { Loader2 } from "lucide-react";

export default function EditProductPage() {
  const params = useParams();
  const { getProduct, updateProduct } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
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

  const handleSubmit = async (data: Partial<Product>, files: File[]) => {
    return updateProduct(params.id as string, data, files);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <ErrorState
        title="Product not found"
        message="The product you are trying to edit does not exist."
      />
    );
  }

  return (
    <PageTransition>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Edit Product</h1>
          <p className="text-muted-foreground text-sm">
            Update product: {product.name}
          </p>
        </div>
        <ProductForm
          initialData={product}
          onSubmit={handleSubmit}
          isEditing
        />
      </div>
    </PageTransition>
  );
}
