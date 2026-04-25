import { ShoppingCart, Plus } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { Product } from "../constants";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isSale = product.badge === "Sale";
  const isLocal = product.badge === "Local";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="bg-white border border-outline-variant rounded-lg p-4 flex flex-col shadow-sm hover:shadow-md transition-shadow relative group"
    >
      {product.badge && (
        <div className="absolute top-2 left-2 z-10">
          <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
            isSale ? 'bg-error-container text-on-error-container' : 
            isLocal ? 'bg-secondary-container text-on-secondary-container' : 
            'bg-surface-container-highest text-on-surface-variant'
          }`}>
            {product.badge}
          </span>
        </div>
      ) }

      <div className="w-full aspect-square rounded-default bg-[#fdfdfd] mb-4 overflow-hidden flex items-center justify-center p-2">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="mt-auto">
        <h3 className="text-body-md font-semibold text-on-surface line-clamp-1">{product.name}</h3>
        <p className="text-label-md text-outline mb-3">{product.unit}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="price-display text-primary">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-[10px] text-outline line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-sm ${
              isSale 
                ? 'bg-primary text-white hover:bg-primary-container' 
                : 'bg-surface-container text-primary hover:bg-primary hover:text-white border border-outline-variant'
            }`}
          >
            {isSale ? <ShoppingCart className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

