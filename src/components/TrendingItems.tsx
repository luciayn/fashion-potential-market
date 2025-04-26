
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartBarIncreasing } from 'lucide-react';
import { getTrendingItems } from '../data/mockData';
import { Product } from '../types/types';
import { useNavigate } from 'react-router-dom';

const TrendingItems: React.FC = () => {
  const trendingProducts = getTrendingItems();
  
  return (
    <Card className="shadow-md border-none">
      <CardHeader className="pb-2 border-b">
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <ChartBarIncreasing className="h-5 w-5 text-forest-light" />
          Productos Tendencia
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
  const navigate = useNavigate();
  // Show demand as a bar (1-10 scale)
  const demandPercentage = (product.demand / 10) * 100;
  
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };
  
  return (
    <div className="flex flex-col h-full cursor-pointer hover:shadow-md transition-shadow rounded-md p-3" onClick={handleClick}>
      <div className="aspect-square overflow-hidden bg-white mb-3">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h4 className="font-medium text-sm truncate">{product.name}</h4>
          <span className="text-sm font-semibold whitespace-nowrap">{product.currentPrice.toFixed(2)} €</span>
        </div>
        
        <p className="text-xs text-zara-gray mb-2 uppercase tracking-wide">{product.category}</p>
        
        <div className="mt-auto">
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <div 
              className="bg-forest-light h-1.5 rounded-full" 
              style={{ width: `${demandPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-muted-foreground">Demanda</span>
            <span className="text-xs font-medium">{product.demand}/10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingItems;
