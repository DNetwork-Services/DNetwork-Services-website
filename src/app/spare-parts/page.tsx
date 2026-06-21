"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductFilters } from "@/components/products/ProductFilters";
import { useProducts } from "@/hooks/useProducts";
import { ProductFilters as Filters } from "@/types";

const defaultFilters: Filters = {
  search: "",
  brand: "",
  condition: "",
  minPrice: "",
  maxPrice: "",
  sort: "newest",
  category: "all",
};

export default function SparePartsPage() {
  const { products, loading } = useProducts();
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const spareParts = useMemo(
    () => products.filter((p) => p.category === "spare-part" || p.category === "accessory"),
    [products]
  );

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
              <Wrench className="h-3.5 w-3.5 mr-1.5" />
              Spare Parts
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Laptop <span className="text-gradient">Spare Parts</span>
            </h1>
            <p className="text-muted-foreground">
              Genuine laptop spare parts and accessories at affordable prices.
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
            products={spareParts}
            loading={loading}
            filters={filters}
          />
        </div>
      </div>
    </PageTransition>
  );
}
