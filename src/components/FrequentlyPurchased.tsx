import { Plus } from "lucide-react";
import { motion } from "motion/react";
import { FREQUENTLY_PURCHASED } from "../constants";

export default function FrequentlyPurchased() {
  return (
    <section>
      <h2 className="text-headline-sm font-semibold text-on-surface mb-4">Frequently Purchased</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {FREQUENTLY_PURCHASED.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-outline-variant rounded-lg p-4 flex gap-4 items-center shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="w-20 h-20 rounded-default bg-surface-container-low flex-shrink-0 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-on-surface">{item.name}</h3>
              <p className="text-xs text-outline">{item.unit}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-primary">${item.price.toFixed(2)}</span>
                <button className="bg-primary-container text-primary hover:bg-primary hover:text-white w-7 h-7 rounded-full flex items-center justify-center transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
