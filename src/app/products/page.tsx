"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Laptop } from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductFilters } from "@/components/products/ProductFilters";
import { useProducts } from "@/hooks/useProducts";
import { ProductFilters as Filters } from "@/types";
import type { Metadata } from "next";

const defaultFilters: Filters = {
  search: "",
  brand: "",
  condition: "",
  minPrice: "",
  maxPrice: "",
  sort: "newest",
  category: "all",
};

export default function ProductsPage() {
  const { products, loading } = useProducts();
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const clearFilters = () => setFilters(defaultFilters);

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-width px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-3">
              <Laptop className="h-3.5 w-3.5 mr-1.5" />
              Products
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Our <span className="text-gradient">Laptops</span>
            </h1>
            <p className="text-muted-foreground">
              Browse our collection of quality refurbished and used laptops.
            </p>
          </motion.div>

          <div className="mb-8">
            <ProductFilters
              filters={filters}
              onFilterChange={setFilters}
              onClear={clearFilters}
            />
          </div>

          <ProductGrid
            products={products}
            loading={loading}
            filters={filters}
          />
        </div>
      </div>
    </PageTransition>
  );
}
