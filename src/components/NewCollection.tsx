
import React from 'react';
import { Product } from '../types/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getNewCollection } from '../data/mockData';
import ProductCard from './ProductCard';

const NewCollection: React.FC = () => {
  const newProducts = getNewCollection();
  
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Nueva Colección 2025</h2>
        <p className="text-muted-foreground">Productos con precio fijo</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {newProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
