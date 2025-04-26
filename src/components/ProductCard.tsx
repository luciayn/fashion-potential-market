
import React from 'react';
import { Product } from '../types/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import WatchlistButton from './WatchlistButton';
import PriceChart from './PriceChart';
import { getPriceChange } from '../data/mockData';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const priceChange = getPriceChange(product);
  const isPriceUp = priceChange > 0;
  const isPriceDown = priceChange < 0;
  
  // Format price with 2 decimal places and € symbol
  const formatPrice = (price: number) => {
    return price.toFixed(2) + ' €';
  };
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.isNew && (
          <Badge className="absolute top-2 right-2 bg-forest-light">Nueva Colección</Badge>
        )}
        {product.stock < 10 && !product.isNew && (
          <Badge variant="destructive" className="absolute top-2 right-2">¡Pocas Unidades!</Badge>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.category} · {product.size} · {product.color}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        {!product.isNew ? (
          <div>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-2xl font-bold">{formatPrice(product.currentPrice)}</span>
              <span className="text-sm text-muted-foreground line-through">{formatPrice(product.initialPrice)}</span>
              {isPriceUp && (
                <div className="flex items-center text-price-increase text-sm ml-auto">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>+{priceChange.toFixed(1)}%</span>
                </div>
              )}
              {isPriceDown && (
                <div className="flex items-center text-price-decrease text-sm ml-auto">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span>{priceChange.toFixed(1)}%</span>
                </div>
              )}
            </div>
            
            <PriceChart data={product.priceHistory} height={100} />
          </div>
        ) : (
          <div>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-2xl font-bold">{formatPrice(product.currentPrice)}</span>
              <div className="flex items-center text-price-neutral text-sm ml-auto">
                <DollarSign className="h-4 w-4 mr-1" />
                <span>Precio fijo</span>
              </div>
            </div>
            <div className="h-[100px] flex items-center justify-center bg-gray-50 rounded">
              <p className="text-muted-foreground text-sm">Precio no variable</p>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between pt-2">
        <div className="text-sm">
          <span className={product.stock < 10 ? "text-price-decrease" : "text-muted-foreground"}>
            {product.stock} en stock
          </span>
        </div>
        <WatchlistButton productId={product.id} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
