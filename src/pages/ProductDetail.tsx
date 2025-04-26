
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PriceChart from '../components/PriceChart';
import { products } from '../data/mockData';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }
  
  return (
    <div className="min-h-screen bg-zara-white pt-8 px-6">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-8 hover:opacity-70 transition-opacity"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-xs tracking-widest">VOLVER</span>
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="aspect-[3/4] bg-zara-lightGray">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-montserrat mb-2">{product.name}</h1>
            <p className="text-xs text-zara-gray uppercase tracking-widest">{product.category}</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="text-2xl font-montserrat">{product.currentPrice.toFixed(2)} EUR</span>
              {product.currentPrice !== product.initialPrice && (
                <span className="text-sm text-zara-gray line-through">
                  {product.initialPrice.toFixed(2)} EUR
                </span>
              )}
            </div>
            
            <div className="space-y-2">
              <p className="text-xs text-zara-gray uppercase tracking-widest">Color: {product.color}</p>
              <p className="text-xs text-zara-gray uppercase tracking-widest">Talla: {product.size}</p>
              <p className="text-xs text-zara-gray uppercase tracking-widest">Stock: {product.stock} unidades</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="font-montserrat text-sm tracking-widest">EVOLUCIÓN DEL PRECIO</h2>
            <div className="h-[300px]">
              <PriceChart data={product.priceHistory} height={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
