export interface Product {
  id: string;
  name: string;
  brand: string;
  processor: string;
  ram: string;
  storage: string;
  graphics: string;
  screenSize: string;
  batteryHealth: string;
  condition: "New" | "Like New" | "Excellent" | "Good" | "Fair";
  warranty: string;
  price: number;
  discountPrice: number | null;
  images: string[];
  description: string;
  availability: "In Stock" | "Sold" | "Coming Soon";
  tags: string[];
  featured: boolean;
  category: "laptop" | "desktop" | "monitor" | "spare-part" | "accessory";
  createdAt: string;
  updatedAt: string;
}

export interface RepairService {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: string;
  estimatedTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface RepairRequest {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  deviceType: string;
  issue: string;
  description: string;
  status: "pending" | "in-progress" | "completed" | "cancelled";
  createdAt: string;
  updatedAt: string;
}

export interface SiteStats {
  totalProducts: number;
  totalRepairRequests: number;
  pendingRepairs: number;
  soldItems: number;
  featuredProducts: number;
}

export type SortOption = "newest" | "price-low" | "price-high" | "name";

export interface ProductFilters {
  search: string;
  brand: string;
  condition: string;
  minPrice: string;
  maxPrice: string;
  sort: SortOption;
  category: string;
}
