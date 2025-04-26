
import React from 'react';
import { Product } from '../types/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import WatchlistButton from './WatchlistButton';
import PriceChart from './PriceChart';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const priceChange = ((product.currentPrice - product.initialPrice) / product.initialPrice) * 100;
  const isPriceUp = priceChange > 0;
  const isPriceDown = priceChange < 0;
  
  const formatPrice = (price: number) => {
    return price.toFixed(2) + ' €';
  };
  
  return (
    <Card className="overflow-hidden rounded-none border-none hover:shadow-lg transition-shadow">
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.isNew && (
          <Badge className="absolute top-4 right-4 bg-zara-black text-zara-white rounded-none uppercase text-xs tracking-wider">
            Nueva Colección
          </Badge>
        )}
        {product.stock < 10 && !product.isNew && (
          <Badge variant="destructive" className="absolute top-4 right-4 rounded-none uppercase text-xs tracking-wider">
            ¡Pocas Unidades!
          </Badge>
        )}
      </div>
      
      <CardHeader className="pb-2 space-y-4">
        <div>
          <h3 className="font-montserrat text-lg tracking-wide">{product.name}</h3>
          <p className="text-xs text-zara-gray uppercase tracking-wider mt-1">{product.category} · {product.size} · {product.color}</p>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        {!product.isNew ? (
          <div>
            <div className="flex items-end gap-4 mb-4">
              <span className="text-2xl font-montserrat">{formatPrice(product.currentPrice)}</span>
              <span className="text-sm text-zara-gray line-through">{formatPrice(product.initialPrice)}</span>
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
            <div className="flex items-end gap-4 mb-4">
              <span className="text-2xl font-montserrat">{formatPrice(product.currentPrice)}</span>
              <div className="flex items-center text-price-neutral text-sm ml-auto uppercase tracking-wider">
                <span>Precio fijo</span>
              </div>
            </div>
            <div className="h-[100px] flex items-center justify-center bg-zara-lightGray">
              <p className="text-zara-gray text-xs uppercase tracking-wider">Precio no variable</p>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between pt-2">
        <div className="text-xs uppercase tracking-wider">
          <span className={product.stock < 10 ? "text-price-decrease" : "text-zara-gray"}>
            {product.stock} en stock
          </span>
        </div>
        <WatchlistButton productId={product.id} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
