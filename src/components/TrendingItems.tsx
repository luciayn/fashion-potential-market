
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartBarIncreasing } from 'lucide-react';
import { getTrendingItems } from '../data/mockData';
import { Product } from '../types/types';

const TrendingItems: React.FC = () => {
  const trendingProducts = getTrendingItems();
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <ChartBarIncreasing className="h-5 w-5 text-forest-light" />
          Productos Tendencia
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trendingProducts.map((product) => (
            <TrendingItem key={product.id} product={product} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface TrendingItemProps {
  product: Product;
}

const TrendingItem: React.FC<TrendingItemProps> = ({ product }) => {
  // Show demand as a bar (1-10 scale)
  const demandPercentage = (product.demand / 10) * 100;
  
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-grow min-w-0">
        <div className="flex justify-between items-start">
          <h4 className="font-medium text-sm truncate">{product.name}</h4>
          <span className="text-sm font-semibold">{product.currentPrice.toFixed(2)} €</span>
        </div>
        
        <div className="mt-1">
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <div 
              className="bg-forest-light h-1.5 rounded-full" 
              style={{ width: `${demandPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-0.5">
            <span className="text-xs text-muted-foreground">Demanda</span>
            <span className="text-xs font-medium">{product.demand}/10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingItems;
