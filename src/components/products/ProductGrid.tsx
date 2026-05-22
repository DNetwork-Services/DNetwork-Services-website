"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { SkeletonCard } from "@/components/shared/SkeletonCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { Product, ProductFilters } from "@/types";

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  filters: ProductFilters;
}

export function ProductGrid({ products, loading, filters }: ProductGridProps) {
  const filtered = useMemo(() => {
    return products.filter((product) => {
      if (filters.search) {
        const s = filters.search.toLowerCase();
        if (
          !product.name.toLowerCase().includes(s) &&
          !product.brand.toLowerCase().includes(s) &&
          !product.processor.toLowerCase().includes(s) &&
          !product.tags.some((t) => t.toLowerCase().includes(s))
        )
          return false;
      }
      if (filters.brand && !product.brand.toLowerCase().includes(filters.brand.toLowerCase()))
        return false;
      if (filters.condition && product.condition.toLowerCase() !== filters.condition)
        return false;
      if (filters.category && filters.category !== "all") {
        if (filters.category === "laptops" && product.category !== "laptop") return false;
        if (filters.category === "spare-parts" && product.category !== "spare-part") return false;
        if (filters.category === "accessories" && product.category !== "accessory") return false;
      }
      if (filters.minPrice && product.price < Number(filters.minPrice))
        return false;
      if (filters.maxPrice && product.price > Number(filters.maxPrice))
        return false;
      return true;
    }).sort((a, b) => {
      switch (filters.sort) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "name": return a.name.localeCompare(b.name);
        default: return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
  }, [products, filters]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (filtered.length === 0) {
    return (
      <EmptyState
        title="No products found"
        description="Try adjusting your search or filter criteria to find what you're looking for."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filtered.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  );
}
