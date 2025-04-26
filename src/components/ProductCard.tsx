import React from 'react';
import { Product } from '../types/types';
import { ChevronRight, TrendingUp, TrendingDown } from 'lucide-react';
import WatchlistButton from './WatchlistButton';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  listView?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, listView }) => {
  const navigate = useNavigate();
  
  const formatPrice = (price: number) => {
    return price.toFixed(2) + ' EUR';
  };

  const isPriceIncreasing = product.currentPrice > product.initialPrice;
  const priceChanged = product.currentPrice !== product.initialPrice;
  
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };
  
  const PriceTrend = () => {
    if (!priceChanged) return null;
    
    return (
      <div className={`inline-flex items-center gap-1 text-xs font-medium ${
        isPriceIncreasing ? 'text-[#ea384c]' : 'text-[#4CAF50]'
      }`}>
        {isPriceIncreasing ? (
          <TrendingUp className="w-4 h-4" />
        ) : (
          <TrendingDown className="w-4 h-4" />
        )}
      </div>
    );
  };
  
  if (listView) {
    return (
      <div 
        className="group relative border-t border-zara-black/10 py-6 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h3 className="font-montserrat text-sm tracking-wide">{product.name}</h3>
            <p className="text-[10px] text-zara-gray uppercase tracking-widest">{product.category}</p>
            <div className="flex items-center gap-4">
              <span className="text-lg font-montserrat">{formatPrice(product.currentPrice)}</span>
              {priceChanged && (
                <span className="text-xs text-zara-gray line-through">{formatPrice(product.initialPrice)}</span>
              )}
              <PriceTrend />
            </div>
          </div>
          
          <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    );
  }
  
  return (
    <div 
      className="group relative cursor-pointer"
      onClick={handleClick}
    >
      <div className="aspect-[3/4] overflow-hidden bg-white">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
      </div>
      
      <div className="p-4 space-y-2">
        <h3 className="font-montserrat text-sm tracking-wide">{product.name}</h3>
        <p className="text-[10px] text-zara-gray uppercase tracking-widest">{product.category}</p>
        <div className="flex items-center gap-4">
          <span className="text-lg font-montserrat">{formatPrice(product.currentPrice)}</span>
          {priceChanged && (
            <>
              <span className="text-xs text-zara-gray line-through">{formatPrice(product.initialPrice)}</span>
              <PriceTrend />
            </>
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
