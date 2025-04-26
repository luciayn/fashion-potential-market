
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { products, categories } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import TrendingItems from '../components/TrendingItems';
import NewCollection from '../components/NewCollection';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredProducts = products.filter(product => {
    if (product.isNew) return false;
    if (selectedCategory) return product.category === selectedCategory;
    return true;
  });
  
  return (
    <div className="min-h-screen flex flex-col bg-zara-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-grow">
            <div className="bg-zara-white border border-zara-black/10 p-16 mb-12">
              <h1 className="text-4xl font-montserrat font-light mb-6 tracking-widest uppercase">Market de Moda</h1>
              <p className="mb-8 text-zara-charcoal max-w-2xl text-sm tracking-wide leading-relaxed">
                Explora nuestra selección de ropa con precios dinámicos que cambian según la demanda. 
                Compra cuando los precios sean más bajos o consigue las prendas más populares antes de que suban.
              </p>
              <Button className="bg-zara-black hover:bg-zara-charcoal text-zara-white border-none rounded-none px-12 py-6 h-auto">
                <span className="text-xs tracking-widest uppercase">Ver Tendencias</span>
              </Button>
            </div>
            
            <Tabs defaultValue="dynamic" className="mb-12">
              <div className="flex justify-between items-center mb-12">
                <TabsList className="bg-transparent border-b border-zara-black/10 rounded-none w-auto h-auto p-0 space-x-12">
                  <TabsTrigger 
                    value="dynamic" 
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-zara-black data-[state=active]:bg-transparent px-0 uppercase text-xs tracking-widest"
                  >
                    Precios Dinámicos
                  </TabsTrigger>
                  <TabsTrigger 
                    value="new"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-zara-black data-[state=active]:bg-transparent px-0 uppercase text-xs tracking-widest"
                  >
                    Nueva Colección
                  </TabsTrigger>
                </TabsList>
                
                <div className="flex flex-wrap gap-6">
                  <Button 
                    variant={selectedCategory === null ? "default" : "outline"}
                    className="rounded-none text-xs tracking-widest uppercase h-auto px-8 py-3 border border-zara-black/10 bg-transparent text-zara-black hover:bg-zara-black hover:text-zara-white transition-colors duration-300"
                    onClick={() => setSelectedCategory(null)}
                  >
                    Todos
                  </Button>
                  
                  {categories.map(category => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.name ? "default" : "outline"}
                      className="rounded-none text-xs tracking-widest uppercase h-auto px-8 py-3 border border-zara-black/10 bg-transparent text-zara-black hover:bg-zara-black hover:text-zara-white transition-colors duration-300"
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
              
              <TabsContent value="dynamic" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="new" className="mt-0">
                <NewCollection />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="w-full lg:w-80 space-y-6">
            <TrendingItems />
          </div>
        </div>
      </main>
      
      <footer className="py-12 border-t border-zara-black/10">
        <div className="container mx-auto px-4">
          <div className="text-center text-zara-charcoal">
            <p className="text-xs tracking-widest uppercase">© 2025 Fashion Stock Market · Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
