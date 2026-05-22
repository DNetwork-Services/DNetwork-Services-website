"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { motion } from "framer-motion";
import { Laptop, Wrench, PackageOpen, TrendingUp } from "lucide-react";
import { PageTransition } from "@/components/shared/PageTransition";
import { StatsCard } from "@/components/admin/StatsCard";
import { db } from "@/lib/firebase";
import { SiteStats } from "@/types";

export default function AdminDashboard() {
  const [stats, setStats] = useState<SiteStats>({
    totalProducts: 0,
    totalRepairRequests: 0,
    pendingRepairs: 0,
    soldItems: 0,
    featuredProducts: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      if (!db) return;
      try {
        const productsSnap = await getDocs(collection(db, "products"));
        const repairSnap = await getDocs(collection(db, "repair-requests"));

        const products = productsSnap.docs.map((d) => d.data());
        const sold = products.filter((p) => p.availability === "Sold").length;
        const featured = products.filter((p) => p.featured).length;
        const pendingRepairs = repairSnap.docs.filter(
          (d) => d.data().status === "pending"
        ).length;

        setStats({
          totalProducts: productsSnap.size,
          totalRepairRequests: repairSnap.size,
          pendingRepairs,
          soldItems: sold,
          featuredProducts: featured,
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
  }, []);

  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your admin dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
          >
            <StatsCard
              title="Total Products"
              value={stats.totalProducts}
              icon={<Laptop className="h-5 w-5" />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <StatsCard
              title="Featured Products"
              value={stats.featuredProducts}
              icon={<TrendingUp className="h-5 w-5" />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <StatsCard
              title="Repair Requests"
              value={stats.totalRepairRequests}
              description={`${stats.pendingRepairs} pending`}
              icon={<Wrench className="h-5 w-5" />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <StatsCard
              title="Sold Items"
              value={stats.soldItems}
              icon={<PackageOpen className="h-5 w-5" />}
            />
          </motion.div>
        </div>

        <div className="bg-muted/30 rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">
            Quick Actions
          </h2>
          <p className="text-muted-foreground mb-6">
            Manage your products and services from the sidebar.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/admin/products/add"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              Add New Product
            </a>
            <a
              href="/admin/products"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors text-sm font-medium"
            >
              Manage Products
            </a>
            <a
              href="/admin/repairs"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors text-sm font-medium"
            >
              View Repairs
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
