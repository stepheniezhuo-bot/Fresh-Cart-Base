/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  unit: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: "Sale" | "Local" | "New";
}

export const FREQUENTLY_PURCHASED: Product[] = [
  {
    id: "fp1",
    name: "Organic Whole Milk",
    unit: "1 Gallon",
    price: 4.99,
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1563636619-e9107da5a1bb?q=80&w=300&h=300&auto=format&fit=crop"
  },
  {
    id: "fp2",
    name: "Free Range Eggs",
    unit: "1 Dozen",
    price: 5.49,
    category: "Dairy & Eggs",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=300&h=300&auto=format&fit=crop"
  },
  {
    id: "fp3",
    name: "Artisan Sourdough",
    unit: "1 Loaf",
    price: 6.25,
    category: "Bakery",
    image: "https://images.unsplash.com/photo-1585478259715-876a6a81fc08?q=80&w=300&h=300&auto=format&fit=crop"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Organic Honeycrisp Apples",
    unit: "per lb",
    price: 2.49,
    originalPrice: 3.99,
    category: "Produce",
    badge: "Sale",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=400&h=400&auto=format&fit=crop"
  },
  {
    id: "p2",
    name: "Large Hass Avocados",
    unit: "Each",
    price: 1.50,
    category: "Produce",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=400&h=400&auto=format&fit=crop"
  },
  {
    id: "p3",
    name: "Russet Potatoes",
    unit: "5 lb bag",
    price: 4.99,
    category: "Produce",
    badge: "Local",
    image: "https://images.unsplash.com/photo-1518977676601-b53f02bad675?q=80&w=400&h=400&auto=format&fit=crop"
  },
  {
    id: "p4",
    name: "Organic Carrots Bunch",
    unit: "1 bunch",
    price: 2.99,
    category: "Produce",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=400&h=400&auto=format&fit=crop"
  }
];

export const CATEGORIES = [
  { name: "Produce", count: 124 },
  { name: "Dairy & Eggs", count: 86 },
  { name: "Bakery", count: 42 },
  { name: "Meat & Seafood", count: 65 }
];

export const DIETARY_FILTERS = ["Organic", "Gluten-Free", "Vegan"];
