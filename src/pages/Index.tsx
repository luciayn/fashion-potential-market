
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { products, categories } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import TrendingItems from '../components/TrendingItems';
import NewCollection from '../components/NewCollection';
import { Button } from '@/components/ui/button';
import { ChartLine } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filter products by category and exclude new collection
  const filteredProducts = products.filter(product => {
    if (product.isNew) return false;
    if (selectedCategory) return product.category === selectedCategory;
    return true;
  });
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="flex-grow">
            <div className="bg-navy rounded-lg p-6 mb-8 text-white">
              <h1 className="text-3xl font-bold mb-2">Market de Moda</h1>
              <p className="mb-4 text-gray-300 max-w-2xl">
                Explora nuestra selección de ropa con precios dinámicos que cambian según la demanda. 
                Compra cuando los precios sean más bajos o consigue las prendas más populares antes de que suban.
              </p>
              <div className="flex items-center">
                <Button className="bg-forest-light hover:bg-forest text-white border-none">
                  <ChartLine className="mr-2 h-4 w-4" />
                  Ver Tendencias
                </Button>
                <p className="ml-4 text-sm text-gray-300">
                  Los precios cambian diariamente según la demanda
                </p>
              </div>
            </div>
            
            <Tabs defaultValue="dynamic" className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="dynamic">Precios Dinámicos</TabsTrigger>
                  <TabsTrigger value="new">Nueva Colección</TabsTrigger>
                </TabsList>
                
                {/* Category filter buttons */}
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant={selectedCategory === null ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(null)}
                  >
                    Todos
                  </Button>
                  
                  {categories.map(category => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.name ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
              
              <TabsContent value="dynamic" className="mt-0">
                <h2 className="text-2xl font-bold mb-4">Productos con Precio Variable</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          
          {/* Sidebar */}
          <div className="w-full lg:w-80 space-y-6">
            <TrendingItems />
          </div>
        </div>
      </main>
      
      <footer className="bg-navy-light py-6 mt-auto">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <p className="text-sm opacity-75">© 2025 Fashion Stock Market · Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
