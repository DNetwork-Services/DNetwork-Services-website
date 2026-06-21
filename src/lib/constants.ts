export const SITE_NAME = "DNetwork & Services";
export const SITE_DESCRIPTION =
  "Buy quality refurbished laptops, genuine spare parts, and affordable laptop repair services in Pune.";
export const SITE_URL = "https://dnetwork.vercel.app";
export const OWNER_NAME = "Deepak Nemade";
export const OWNER_PHONE = "917709443422";
export const OWNER_PHONE_DISPLAY = "7709443422";
export const OWNER_PHONE_ALT = "8999110217";
export const OWNER_EMAIL = "dnetworkandservices@gmail.com";
export const OWNER_ADDRESS = "New Sangvi, Pune, Maharashtra, India";

export const WHATSAPP_NUMBER = "917709443422";
export const WHATSAPP_MESSAGE = "Hello DNetwork & Services, I am interested in your products.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Laptops" },
  { href: "/spare-parts", label: "Spare Parts" },
  { href: "/repair-services", label: "Repair" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const REPAIR_SERVICES = [
  {
    name: "SSD Upgrade",
    description: "Upgrade your laptop with a high-speed SSD for faster performance.",
    price: "₹499 onwards",
    estimatedTime: "30 mins",
    icon: "zap",
  },
  {
    name: "RAM Upgrade",
    description: "Increase your laptop's memory for smoother multitasking.",
    price: "₹299 onwards",
    estimatedTime: "20 mins",
    icon: "memory-stick",
  },
  {
    name: "Windows Installation",
    description: "Clean installation of Windows OS with all drivers.",
    price: "₹399",
    estimatedTime: "1 hour",
    icon: "monitor",
  },
  {
    name: "Laptop Cleaning",
    description: "Deep cleaning of your laptop including fan and thermal paste.",
    price: "₹499",
    estimatedTime: "45 mins",
    icon: "sparkles",
  },
  {
    name: "Keyboard Replacement",
    description: "Replace faulty or damaged laptop keyboard.",
    price: "₹699 onwards",
    estimatedTime: "1 hour",
    icon: "keyboard",
  },
  {
    name: "Screen Replacement",
    description: "Replace cracked or damaged laptop screen.",
    price: "₹1,999 onwards",
    estimatedTime: "2 hours",
    icon: "monitor-smartphone",
  },
  {
    name: "Battery Replacement",
    description: "Replace old or swollen laptop battery.",
    price: "₹999 onwards",
    estimatedTime: "30 mins",
    icon: "battery-charging",
  },
  {
    name: "Motherboard Repair",
    description: "Expert motherboard chip-level repair service.",
    price: "₹999 onwards",
    estimatedTime: "2-3 days",
    icon: "cpu",
  },
  {
    name: "Software Troubleshooting",
    description: "Fix software issues, virus removal, and optimization.",
    price: "₹299",
    estimatedTime: "1 hour",
    icon: "terminal",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Quality Tested",
    description: "Every laptop is thoroughly tested for performance and reliability before sale.",
    icon: "shield-check",
  },
  {
    title: "Affordable Prices",
    description: "Best prices in Pune for refurbished laptops and repair services.",
    icon: "indian-rupee",
  },
  {
    title: "Expert Technicians",
    description: "Skilled technicians with years of experience in laptop repair.",
    icon: "wrench",
  },
  {
    title: "Warranty Included",
    description: "All products come with warranty for your peace of mind.",
    icon: "award",
  },
  {
    title: "Fast Service",
    description: "Quick turnaround time for repairs and prompt customer support.",
    icon: "clock",
  },
  {
    title: "Genuine Parts",
    description: "We use only genuine spare parts for all repairs and upgrades.",
    icon: "verified",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "Customer",
    content:
      "Bought a refurbished laptop from DNetwork. Great quality and amazing price! Highly recommended for anyone looking for affordable laptops in Pune.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Customer",
    content:
      "Got my laptop screen replaced here. Fast service and reasonable rates. Very happy with the work.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Customer",
    content:
      "Excellent service! Upgraded my laptop with SSD and RAM. Performance improved drastically. Thank you Deepak!",
    rating: 5,
  },
  {
    name: "Sneha Joshi",
    role: "Customer",
    content:
      "Best place for laptop repair in Pune. Fixed my motherboard issue at half the price other shops quoted.",
    rating: 5,
  },
] as const;

export const FAQS = [
  {
    question: "Are your refurbished laptops reliable?",
    answer:
      "Yes, all our laptops go through rigorous testing including hardware diagnostics, battery health check, and performance testing. We offer warranty on all products.",
  },
  {
    question: "How long does a laptop repair take?",
    answer:
      "Simple repairs like SSD/RAM upgrades take 20-30 minutes. Screen replacement takes about 2 hours. Motherboard repairs may take 2-3 days depending on the issue.",
  },
  {
    question: "Do you provide warranty on repairs?",
    answer:
      "Yes, we provide warranty on all repair services. The warranty period varies by service type. Please contact us for specific warranty details.",
  },
  {
    question: "Can I visit your shop to check laptops?",
    answer:
      "Absolutely! You can visit our store in New Sangvi, Pune to check the laptops in person before purchasing.",
  },
  {
    question: "Do you buy old laptops?",
    answer:
      "Yes, we buy old and used laptops. Contact us with your laptop details for a quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, UPI (Google Pay, PhonePe, Paytm), and bank transfers.",
  },
] as const;

export const CATEGORIES = [
  { name: "All", slug: "all", description: "All products" },
  { name: "Laptops", slug: "laptops", description: "Refurbished & used laptops" },
  { name: "Desktops", slug: "desktops", description: "Refurbished desktops & workstations" },
  { name: "Monitors", slug: "monitors", description: "Monitors & displays" },
  { name: "Spare Parts", slug: "spare-parts", description: "Laptop spare parts" },
  { name: "Accessories", slug: "accessories", description: "Laptop accessories" },
] as const;

export const CONDITIONS = [
  "New",
  "Like New",
  "Excellent",
  "Good",
  "Fair",
] as const;

export const SAMPLE_PRODUCTS = [
  {
    name: "Dell Latitude 5480",
    brand: "Dell",
    processor: "Intel Core i5-7300U",
    ram: "8GB DDR4",
    storage: "256GB SSD",
    graphics: "Intel HD Graphics 620",
    screenSize: "14 inch",
    batteryHealth: "85%",
    condition: "Excellent" as const,
    warranty: "6 Months",
    price: 15999,
    discountPrice: 13999,
    images: ["/images/laptop-placeholder.svg"],
    description:
      "Dell Latitude 5480 in excellent condition. Perfect for office work, browsing, and multimedia. Lightweight and portable with great battery life.",
    availability: "In Stock" as const,
    tags: ["dell", "i5", "14-inch", "business"],
    featured: true,
    category: "laptop" as const,
  },
  {
    name: "HP ProBook 450 G5",
    brand: "HP",
    processor: "Intel Core i5-8250U",
    ram: "8GB DDR4",
    storage: "256GB SSD",
    graphics: "Intel UHD Graphics 620",
    screenSize: "15.6 inch",
    batteryHealth: "80%",
    condition: "Good" as const,
    warranty: "6 Months",
    price: 17999,
    discountPrice: 15999,
    images: ["/images/laptop-placeholder.svg"],
    description:
      "HP ProBook 450 G5 with powerful 8th gen i5 processor. Great for multitasking and professional use.",
    availability: "In Stock" as const,
    tags: ["hp", "i5", "15-inch", "business"],
    featured: true,
    category: "laptop" as const,
  },
  {
    name: "Lenovo ThinkPad T480",
    brand: "Lenovo",
    processor: "Intel Core i5-8350U",
    ram: "16GB DDR4",
    storage: "512GB SSD",
    graphics: "Intel UHD Graphics 620",
    screenSize: "14 inch",
    batteryHealth: "90%",
    condition: "Like New" as const,
    warranty: "1 Year",
    price: 24999,
    discountPrice: 22999,
    images: ["/images/laptop-placeholder.svg"],
    description:
      "Lenovo ThinkPad T480 in like new condition. Premium business laptop with excellent build quality and performance.",
    availability: "In Stock" as const,
    tags: ["lenovo", "i5", "14-inch", "business", "premium"],
    featured: true,
    category: "laptop" as const,
  },
  {
    name: "Dell Inspiron 3576",
    brand: "Dell",
    processor: "Intel Core i3-7020U",
    ram: "4GB DDR4",
    storage: "1TB HDD",
    graphics: "Intel HD Graphics 620",
    screenSize: "15.6 inch",
    batteryHealth: "75%",
    condition: "Good" as const,
    warranty: "3 Months",
    price: 9999,
    discountPrice: null,
    images: ["/images/laptop-placeholder.svg"],
    description:
      "Affordable Dell Inspiron laptop for basic tasks. Perfect for students and home use.",
    availability: "In Stock" as const,
    tags: ["dell", "i3", "15-inch", "budget"],
    featured: false,
    category: "laptop" as const,
  },
  {
    name: "HP Laptop Charger 18.5V",
    brand: "HP",
    processor: "N/A",
    ram: "N/A",
    storage: "N/A",
    graphics: "N/A",
    screenSize: "N/A",
    batteryHealth: "N/A",
    condition: "New" as const,
    warranty: "1 Month",
    price: 699,
    discountPrice: null,
    images: ["/images/laptop-placeholder.svg"],
    description:
      "Original HP laptop charger. Compatible with most HP laptops. 18.5V 3.5A.",
    availability: "In Stock" as const,
    tags: ["hp", "charger", "power-adapter"],
    featured: false,
    category: "spare-part" as const,
  },
  {
    name: "Dell OptiPlex 3070 Desktop",
    brand: "Dell",
    processor: "Intel Core i5-9500",
    ram: "8GB DDR4",
    storage: "256GB SSD",
    graphics: "Intel UHD Graphics 630",
    screenSize: "N/A",
    batteryHealth: "N/A",
    condition: "Excellent" as const,
    warranty: "6 Months",
    price: 19999,
    discountPrice: 17999,
    images: ["/images/laptop-placeholder.svg"],
    description:
      "Dell OptiPlex 3070 desktop in excellent condition. Perfect for office work, browsing, and multimedia. Compact form factor with great performance.",
    availability: "In Stock" as const,
    tags: ["dell", "i5", "desktop", "office"],
    featured: true,
    category: "desktop" as const,
  },
  {
    name: "Dell 22 inch Monitor E2222H",
    brand: "Dell",
    processor: "N/A",
    ram: "N/A",
    storage: "N/A",
    graphics: "N/A",
    screenSize: "22 inch",
    batteryHealth: "N/A",
    condition: "Excellent" as const,
    warranty: "6 Months",
    price: 5499,
    discountPrice: 4999,
    images: ["/images/laptop-placeholder.svg"],
    description:
      "Dell 22 inch professional monitor with full HD display. Ideal for office work and multitasking.",
    availability: "In Stock" as const,
    tags: ["dell", "monitor", "22-inch", "display"],
    featured: true,
    category: "monitor" as const,
  },
  {
    name: "Dell Laptop Battery",
    brand: "Dell",
    processor: "N/A",
    ram: "N/A",
    storage: "N/A",
    graphics: "N/A",
    screenSize: "N/A",
    batteryHealth: "100%",
    condition: "New" as const,
    warranty: "3 Months",
    price: 1999,
    discountPrice: 1799,
    images: ["/images/laptop-placeholder.svg"],
    description:
      "Original Dell laptop battery. Compatible with Dell Latitude and Inspiron series.",
    availability: "In Stock" as const,
    tags: ["dell", "battery", "spare-part"],
    featured: false,
    category: "spare-part" as const,
  },
] as const;
