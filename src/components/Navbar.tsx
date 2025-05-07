
import React from 'react';
import { Menu, Search, User, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-zara-white z-50 px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Menu className="w-6 h-6 cursor-pointer" />
          <span className="text-xl font-montserrat tracking-[0.3em] hidden md:block">ZARA MARKET</span>
        </div>
        
        <span className="text-xl font-montserrat tracking-[0.3em] md:hidden">ZARA</span>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <Search className="w-5 h-5" />
            <span className="text-xs tracking-widest">BUSCAR</span>
          </div>
          
          <div className="flex items-center gap-6">
            <User className="w-5 h-5" />
            <ShoppingCart className="w-5 h-5" />
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-start gap-8 mt-8 overflow-x-auto text-xs tracking-widest pb-2">
        <span className="shrink-0 cursor-pointer">VER TODO</span>
        <span className="shrink-0 cursor-pointer">CAMISETAS</span>
        <span className="shrink-0 cursor-pointer">PANTALONES</span>
        <span className="shrink-0 cursor-pointer">VESTIDOS</span>
        <span className="shrink-0 cursor-pointer">CHAQUETAS</span>
        <span className="shrink-0 cursor-pointer">ZAPATOS</span>
        <span className="shrink-0 cursor-pointer">ACCESORIOS</span>
      </div>
    </nav>
  );
};

export default Navbar;
