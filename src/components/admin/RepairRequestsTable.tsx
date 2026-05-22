"use client";

import { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RepairRequest } from "@/types";
import { formatDate, getWhatsAppLink } from "@/lib/utils";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { EmptyState } from "@/components/shared/EmptyState";
import { MessageCircle, ExternalLink } from "lucide-react";

const statusVariant: Record<string, "default" | "secondary" | "success" | "destructive" | "warning"> = {
  pending: "warning",
  "in-progress": "default",
  completed: "success",
  cancelled: "destructive",
};

export function RepairRequestsTable() {
  const [requests, setRequests] = useState<RepairRequest[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    try {
      if (!db) {
        setRequests([]);
        setLoading(false);
        return;
      }
      const q = query(
        collection(db, "repair-requests"),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      const items: RepairRequest[] = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      })) as RepairRequest[];
      setRequests(items);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const updateStatus = async (id: string, status: RepairRequest["status"]) => {
    if (!db) return;
    try {
      await updateDoc(doc(db, "repair-requests", id), {
        status,
        updatedAt: new Date().toISOString(),
      });
      fetchRequests();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-8 text-sm text-muted-foreground">
        Loading repair requests...
      </div>
    );
  }

  if (requests.length === 0) {
    return (
      <EmptyState
        title="No repair requests"
        description="Repair requests from customers will appear here."
      />
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Device</TableHead>
            <TableHead>Issue</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((req) => (
            <TableRow key={req.id}>
              <TableCell>
                <div>
                  <p className="font-medium text-sm">{req.customerName}</p>
                  <p className="text-xs text-muted-foreground">{req.phone}</p>
                </div>
              </TableCell>
              <TableCell className="text-sm">{req.deviceType}</TableCell>
              <TableCell className="text-sm max-w-[200px] truncate">
                {req.issue}
              </TableCell>
              <TableCell>
                <Select
                  value={req.status}
                  onValueChange={(v) =>
                    updateStatus(req.id, v as RepairRequest["status"])
                  }
                >
                  <SelectTrigger className="w-[130px] h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {formatDate(req.createdAt)}
              </TableCell>
              <TableCell>
                <div className="flex gap-1">
                  <a
                    href={getWhatsAppLink(
                      WHATSAPP_NUMBER,
                      `Regarding repair request from ${req.customerName} for ${req.deviceType} - ${req.issue}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
