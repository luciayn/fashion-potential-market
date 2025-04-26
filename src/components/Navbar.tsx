
import React from 'react';
import { ChartBar, DollarSign } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-navy text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ChartBar className="text-forest-light h-6 w-6" />
          <span className="text-xl font-montserrat font-bold">FashionStock Market</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-forest-light transition-colors">Productos</a>
          <a href="#" className="hover:text-forest-light transition-colors">Favoritos</a>
          <a href="#" className="hover:text-forest-light transition-colors">Nueva Colección</a>
          
          <div className="bg-forest-light px-4 py-2 rounded-full flex items-center">
            <DollarSign className="h-4 w-4 mr-1" />
            <span className="font-semibold">Ver Mercado</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
