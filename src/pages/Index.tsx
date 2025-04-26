
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { products } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import { Grid2X2, List } from 'lucide-react';

const Index = () => {
  const [gridView, setGridView] = useState(true);
  
  const filteredProducts = products.filter(product => !product.isNew);
  
  return (
    <div className="min-h-screen bg-zara-white">
      <Navbar />
      
      <main className="pt-32 px-6">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Grid2X2 
              className={`w-5 h-5 cursor-pointer ${gridView ? 'text-zara-black' : 'text-zara-gray'}`}
              onClick={() => setGridView(true)}
            />
            <List 
              className={`w-5 h-5 cursor-pointer ${!gridView ? 'text-zara-black' : 'text-zara-gray'}`}
              onClick={() => setGridView(false)}
            />
          </div>
          
          <div className="flex items-center gap-2 text-xs tracking-widest">
            <span>VISTA</span>
            <span className="font-medium">1</span>
            <span>2</span>
            <span>3</span>
            <span className="ml-4">FILTROS</span>
          </div>
        </div>
        
        <div className={`grid ${gridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-1`}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} listView={!gridView} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
