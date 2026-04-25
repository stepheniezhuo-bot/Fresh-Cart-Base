/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, ChevronDown } from "lucide-react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import FrequentlyPurchased from "./components/FrequentlyPurchased";
import ProductCard from "./components/ProductCard";
import { PRODUCTS } from "./constants";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-[1200px] mx-auto space-y-8">
          
          {/* Mobile Search */}
          <div className="md:hidden relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full bg-white border border-outline-variant rounded-xl pl-11 pr-4 py-3 text-base shadow-sm focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <FrequentlyPurchased />

          <div className="flex flex-col md:flex-row gap-8">
            <Sidebar />

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <h2 className="text-2xl font-bold text-on-surface">Fresh Produce</h2>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-outline">Sort by:</span>
                  <div className="relative">
                    <select className="appearance-none bg-white border border-outline-variant rounded-default py-1.5 pl-3 pr-9 text-sm focus:ring-1 focus:ring-primary outline-none cursor-pointer">
                      <option>Recommended</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-outline pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {PRODUCTS.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {/* Optional: Add more product cards to fill the space visually similar to mockup */}
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                {/* Re-using some products for the visual mockup demo */}
                {PRODUCTS.map((product) => (
                  <ProductCard key={`extra-${product.id}`} product={{...product, id: `extra-${product.id}`, badge: undefined}} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer Spacer */}
      <div className="h-24 md:hidden" />
    </div>
  );
}

