import { Search, User, ShoppingCart, Bell } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-outline-variant shadow-sm px-6 md:px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <span className="text-2xl font-bold text-primary tracking-tight">FreshCart</span>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          <a href="#" className="px-3 py-2 text-primary font-semibold border-b-2 border-primary">Home</a>
          <a href="#" className="px-3 py-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-default transition-colors">Categories</a>
          <a href="#" className="px-3 py-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-default transition-colors">Order History</a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {/* Desktop Search */}
        <div className="relative hidden md:block w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full bg-surface-container-low border border-outline-variant rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="flex items-center gap-1">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-primary hover:bg-surface-container rounded-full transition-colors"
          >
            <User className="w-5 h-5" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-primary hover:bg-surface-container rounded-full transition-colors relative"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-primary hover:bg-surface-container rounded-full transition-colors"
          >
            <Bell className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </header>
  );
}
