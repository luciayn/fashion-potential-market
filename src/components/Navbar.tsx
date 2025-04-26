
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-zara-white border-b border-zara-black/10 py-6 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-montserrat font-medium tracking-widest">FASHION MARKET</span>
        </div>
        
        <div className="flex items-center space-x-12 text-xs tracking-widest">
          <a href="#" className="hover:text-zara-gray transition-colors uppercase">Productos</a>
          <a href="#" className="hover:text-zara-gray transition-colors uppercase">Favoritos</a>
          <a href="#" className="hover:text-zara-gray transition-colors uppercase">Nueva Colección</a>
          
          <div className="border border-zara-black px-8 py-3 hover:bg-zara-black hover:text-zara-white transition-colors duration-300 cursor-pointer">
            <span className="font-medium tracking-wider text-xs uppercase">Ver Mercado</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
