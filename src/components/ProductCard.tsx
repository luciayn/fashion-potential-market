
import React from 'react';
import { Product } from '../types/types';
import { ChevronRight } from 'lucide-react';
import WatchlistButton from './WatchlistButton';

interface ProductCardProps {
  product: Product;
  listView?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, listView }) => {
  const formatPrice = (price: number) => {
    return price.toFixed(2) + ' EUR';
  };
  
  if (listView) {
    return (
      <div className="group relative border-t border-zara-black/10 py-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h3 className="font-montserrat text-sm tracking-wide">{product.name}</h3>
            <p className="text-[10px] text-zara-gray uppercase tracking-widest">{product.category}</p>
            <div className="flex items-baseline gap-4">
              <span className="text-lg font-montserrat">{formatPrice(product.currentPrice)}</span>
              {product.currentPrice !== product.initialPrice && (
                <span className="text-xs text-zara-gray line-through">{formatPrice(product.initialPrice)}</span>
              )}
            </div>
          </div>
          
          <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    );
  }
  
  return (
    <div className="group relative">
      <div className="aspect-[3/4] overflow-hidden bg-zara-lightGray">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      
      <div className="p-4 space-y-2">
        <h3 className="font-montserrat text-sm tracking-wide">{product.name}</h3>
        <p className="text-[10px] text-zara-gray uppercase tracking-widest">{product.category}</p>
        <div className="flex items-baseline gap-4">
          <span className="text-lg font-montserrat">{formatPrice(product.currentPrice)}</span>
          {product.currentPrice !== product.initialPrice && (
            <span className="text-xs text-zara-gray line-through">{formatPrice(product.initialPrice)}</span>
          )}
        </div>
      </div>
      
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <WatchlistButton productId={product.id} />
      </div>
    </div>
  );
};

export default ProductCard;
