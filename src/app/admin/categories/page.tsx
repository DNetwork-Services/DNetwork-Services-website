"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tags, Plus, Edit3, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PageTransition } from "@/components/shared/PageTransition";
import { CATEGORIES } from "@/lib/constants";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState([...CATEGORIES]);

  return (
    <PageTransition>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-3">
              <Tags className="h-3.5 w-3.5 mr-1.5" />
              Categories
            </div>
            <h1 className="text-2xl font-bold">Manage Categories</h1>
            <p className="text-muted-foreground text-sm">
              Organize your products with categories
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{cat.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {cat.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Slug: /{cat.slug}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="font-semibold mb-4">Add New Category</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Categories are predefined. The current categories are optimized for
              your business. To add custom categories, please configure them in
              the constants file.
            </p>
            <Button variant="outline" disabled>
              <Plus className="h-4 w-4 mr-2" />
              Add Category (Coming Soon)
            </Button>
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}
