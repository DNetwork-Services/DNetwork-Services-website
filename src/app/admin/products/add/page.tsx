"use client";

import { PageTransition } from "@/components/shared/PageTransition";
import { ProductForm } from "@/components/admin/ProductForm";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types";

export default function AddProductPage() {
  const { addProduct } = useProducts();

  const handleSubmit = async (
    data: Omit<Product, "id" | "createdAt" | "updatedAt">,
    files: File[]
  ) => {
    const id = await addProduct(data, files);
    return id !== null;
  };

  return (
    <PageTransition>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Add Product</h1>
          <p className="text-muted-foreground text-sm">
            Add a new product to your inventory
          </p>
        </div>
        <ProductForm onSubmit={handleSubmit} />
      </div>
    </PageTransition>
  );
}
