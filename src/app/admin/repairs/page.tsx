"use client";

import { PageTransition } from "@/components/shared/PageTransition";
import { RepairRequestsTable } from "@/components/admin/RepairRequestsTable";
import { Wrench } from "lucide-react";

export default function AdminRepairsPage() {
  return (
    <PageTransition>
      <div className="space-y-6">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-3">
            <Wrench className="h-3.5 w-3.5 mr-1.5" />
            Repairs
          </div>
          <h1 className="text-2xl font-bold">Repair Requests</h1>
          <p className="text-muted-foreground text-sm">
            Manage customer repair service requests
          </p>
        </div>
        <RepairRequestsTable />
      </div>
    </PageTransition>
  );
}
