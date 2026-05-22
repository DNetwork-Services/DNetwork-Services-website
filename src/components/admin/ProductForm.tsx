"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";
import { CONDITIONS } from "@/lib/constants";

interface ProductFormProps {
  initialData?: Product;
  onSubmit: (data: any, files: File[]) => Promise<boolean>;
  isEditing?: boolean;
}

export function ProductForm({
  initialData,
  onSubmit,
  isEditing = false,
}: ProductFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    brand: initialData?.brand || "",
    processor: initialData?.processor || "",
    ram: initialData?.ram || "",
    storage: initialData?.storage || "",
    graphics: initialData?.graphics || "",
    screenSize: initialData?.screenSize || "",
    batteryHealth: initialData?.batteryHealth || "",
    condition: initialData?.condition || "Good",
    warranty: initialData?.warranty || "",
    price: initialData?.price?.toString() || "",
    discountPrice: initialData?.discountPrice?.toString() || "",
    description: initialData?.description || "",
    availability: initialData?.availability || "In Stock",
    category: initialData?.category || "laptop",
    featured: initialData?.featured || false,
    tags: initialData?.tags?.join(", ") || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = {
        name: formData.name,
        brand: formData.brand,
        processor: formData.processor,
        ram: formData.ram,
        storage: formData.storage,
        graphics: formData.graphics,
        screenSize: formData.screenSize,
        batteryHealth: formData.batteryHealth,
        condition: formData.condition,
        warranty: formData.warranty,
        price: Number(formData.price),
        discountPrice: formData.discountPrice
          ? Number(formData.discountPrice)
          : null,
        description: formData.description,
        availability: formData.availability,
        category: formData.category,
        featured: formData.featured,
        tags: formData.tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        images: initialData?.images || [],
      };
      const success = await onSubmit(data, files);
      if (success) {
        router.push("/admin/products");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">Basic Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium mb-1 block">
                    Product Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Dell Latitude 5480"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Brand
                  </label>
                  <Input
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Dell"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Category
                  </label>
                  <Select
                    name="category"
                    value={formData.category}
                    onValueChange={(v: string) =>
                      setFormData((prev) => ({ ...prev, category: v as "laptop" | "spare-part" | "accessory" }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="laptop">Laptop</SelectItem>
                      <SelectItem value="spare-part">Spare Part</SelectItem>
                      <SelectItem value="accessory">Accessory</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Processor
                  </label>
                  <Input
                    name="processor"
                    value={formData.processor}
                    onChange={handleChange}
                    placeholder="e.g. Intel Core i5-7300U"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">RAM</label>
                  <Input
                    name="ram"
                    value={formData.ram}
                    onChange={handleChange}
                    placeholder="e.g. 8GB DDR4"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Storage
                  </label>
                  <Input
                    name="storage"
                    value={formData.storage}
                    onChange={handleChange}
                    placeholder="e.g. 256GB SSD"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Graphics
                  </label>
                  <Input
                    name="graphics"
                    value={formData.graphics}
                    onChange={handleChange}
                    placeholder="e.g. Intel HD 620"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Screen Size
                  </label>
                  <Input
                    name="screenSize"
                    value={formData.screenSize}
                    onChange={handleChange}
                    placeholder="e.g. 14 inch"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Battery Health
                  </label>
                  <Input
                    name="batteryHealth"
                    value={formData.batteryHealth}
                    onChange={handleChange}
                    placeholder="e.g. 85%"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">Pricing & Status</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Price (₹)
                  </label>
                  <Input
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    placeholder="e.g. 15999"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Discount Price (₹)
                  </label>
                  <Input
                    name="discountPrice"
                    type="number"
                    value={formData.discountPrice}
                    onChange={handleChange}
                    placeholder="e.g. 13999"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Condition
                  </label>
                  <Select
                    name="condition"
                    value={formData.condition}
                    onValueChange={(v: string) =>
                      setFormData((prev) => ({ ...prev, condition: v as "New" | "Like New" | "Excellent" | "Good" | "Fair" }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CONDITIONS.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Warranty
                  </label>
                  <Input
                    name="warranty"
                    value={formData.warranty}
                    onChange={handleChange}
                    placeholder="e.g. 6 Months"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Availability
                  </label>
                  <Select
                    name="availability"
                    value={formData.availability}
                    onValueChange={(v: string) =>
                      setFormData((prev) => ({ ...prev, availability: v as "In Stock" | "Sold" | "Coming Soon" }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="In Stock">In Stock</SelectItem>
                      <SelectItem value="Sold">Sold</SelectItem>
                      <SelectItem value="Coming Soon">Coming Soon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">Description & Tags</h3>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Product description..."
                rows={5}
              />
              <div>
                <label className="text-sm font-medium mb-1 block">
                  Tags (comma separated)
                </label>
                <Input
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="e.g. dell, i5, 14-inch"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">Product Images</h3>
              <div className="space-y-2">
                <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <span className="text-sm text-muted-foreground">
                    Click to upload images
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    PNG, JPG up to 5MB each
                  </span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files) {
                        setFiles(Array.from(e.target.files));
                      }
                    }}
                  />
                </label>
                {files.length > 0 && (
                  <div className="space-y-1">
                    {files.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-sm bg-muted rounded-lg px-3 py-2"
                      >
                        <span className="truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() =>
                            setFiles((prev) => prev.filter((_, i) => i !== idx))
                          }
                        >
                          <X className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {initialData?.images && initialData.images.length > 0 && (
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">
                      Existing images: {initialData.images.length}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-semibold">Featured</h3>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      featured: e.target.checked,
                    }))
                  }
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm">Mark as featured product</span>
              </label>
            </CardContent>
          </Card>

          <div className="flex gap-3">
            <Button type="submit" className="flex-1" disabled={loading}>
              {loading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              {isEditing ? "Update Product" : "Add Product"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
