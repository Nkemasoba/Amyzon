export const subNavLinks = [
  { id: 'deals', label: "Today's Deals", href: "/todays-deals" },
  { id: 'cs', label: "Customer Service", href: "/customer-service" },
  { id: 'prime', label: "Prime Video", href: "/prime-video" },
  { id: 'gift', label: "Gift Cards", href: "/gift-cards" },
  { id: 'sell', label: "Sell", href: "/sell" },
  { id: 'registry', label: "Registry", href: "/registry" }
];

// src/components/index.jsx

// 1. Array list of background slider slides that shift when arrows are pressed
export const heroSlides = [
  {
    id: 'slide-1',
    title: "Toys for little ones",
    bgClass: "from-emerald-100 via-green-50 to-teal-100",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 'slide-2',
    title: "School essentials at every price",
    bgClass: "from-purple-600 via-purple-500 to-indigo-600",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
  }
];


export const dashboardCards = [
  {
    id: 'card-1',
    title: "Get your game on",
    linkText: "Shop gaming",
    type: "single",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 'card-2',
    title: "New home arrivals under $50",
    linkText: "Shop the latest from Home",
    type: "grid-2x2",
    items: [
      { name: "Kitchen & Dining", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=400&q=80" },
      { name: "Home Improvement", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80" },
      { name: "Décor", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80" },
      { name: "Bedding & Bath", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    id: 'card-3',
    title: "Shop Fashion for less",
    linkText: "See all deals",
    type: "grid-2x2",
    items: [
      { name: "Jeans under $50", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80" },
      { name: "Tops under $25", image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=400&q=80" },
      { name: "Dresses under $30", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=400&q=80" },
      { name: "Shoes under $50", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    id: 'card-4',
    title: "Must-have school supplies",
    linkText: "Shop Back to School",
    type: "grid-2x2",
    items: [
      { name: "Backpacks", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80" },
      { name: "Electronics", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80" },
      { name: "Stationery", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80" },
      { name: "Fashion", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&q=80" }
    ]
  }
];
