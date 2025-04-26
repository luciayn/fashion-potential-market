
import React from 'react';
import { Product } from '../types/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown } from 'lucide-react';
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
    <Card className="overflow-hidden border-none hover:shadow-sm transition-shadow duration-300">
      <div className="relative aspect-[3/4] overflow-hidden bg-zara-lightGray">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
        {product.isNew && (
          <Badge className="absolute top-4 right-4 bg-zara-black text-zara-white rounded-none uppercase text-[10px] tracking-widest px-3 py-1">
            Nueva Colección
          </Badge>
        )}
        {product.stock < 10 && !product.isNew && (
          <Badge variant="destructive" className="absolute top-4 right-4 rounded-none uppercase text-[10px] tracking-widest px-3 py-1">
            ¡Pocas Unidades!
          </Badge>
        )}
      </div>
      
      <CardHeader className="pb-2 space-y-4 pt-6">
        <div>
          <h3 className="font-montserrat text-sm tracking-wide">{product.name}</h3>
          <p className="text-[10px] text-zara-gray uppercase tracking-widest mt-1">{product.category} · {product.size} · {product.color}</p>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        {!product.isNew ? (
          <div>
            <div className="flex items-end gap-4 mb-4">
              <span className="text-xl font-montserrat font-light">{formatPrice(product.currentPrice)}</span>
              <span className="text-xs text-zara-gray line-through">{formatPrice(product.initialPrice)}</span>
              {isPriceUp && (
                <div className="flex items-center text-price-increase text-xs ml-auto tracking-wider">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>+{priceChange.toFixed(1)}%</span>
                </div>
              )}
              {isPriceDown && (
                <div className="flex items-center text-price-decrease text-xs ml-auto tracking-wider">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  <span>{priceChange.toFixed(1)}%</span>
                </div>
              )}
            </div>
            
            <PriceChart data={product.priceHistory} height={80} />
          </div>
        ) : (
          <div>
            <div className="flex items-end gap-4 mb-4">
              <span className="text-xl font-montserrat font-light">{formatPrice(product.currentPrice)}</span>
              <div className="flex items-center text-zara-charcoal text-[10px] ml-auto uppercase tracking-widest">
                <span>Precio fijo</span>
              </div>
            </div>
            <div className="h-[80px] flex items-center justify-center bg-zara-lightGray">
              <p className="text-zara-gray text-[10px] uppercase tracking-widest">Precio no variable</p>
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between pt-2">
        <div className="text-[10px] uppercase tracking-widest">
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
