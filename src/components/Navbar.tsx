
import React from 'react';
import { ChartBar, DollarSign } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-zara-black text-zara-white py-6 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-montserrat font-bold tracking-wider">FASHION MARKET</span>
        </div>
        
        <div className="flex items-center space-x-8 text-sm tracking-wide">
          <a href="#" className="hover:text-zara-gray transition-colors uppercase">Productos</a>
          <a href="#" className="hover:text-zara-gray transition-colors uppercase">Favoritos</a>
          <a href="#" className="hover:text-zara-gray transition-colors uppercase">Nueva Colección</a>
          
          <div className="border border-zara-white px-6 py-2 hover:bg-zara-white hover:text-zara-black transition-colors cursor-pointer uppercase">
            <span className="font-medium tracking-wider text-xs">Ver Mercado</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
