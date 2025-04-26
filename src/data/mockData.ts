
import { Product, Category } from '../types/types';

export const categories: Category[] = [
  { id: 1, name: 'Camisetas' },
  { id: 2, name: 'Pantalones' },
  { id: 3, name: 'Vestidos' },
  { id: 4, name: 'Chaquetas' },
  { id: 5, name: 'Zapatos' },
];

// Generate price history for last 30 days
const generatePriceHistory = (basePrice: number, isNew: boolean) => {
  const history = [];
  const now = new Date();
  
  // New products have fixed prices
  if (isNew) {
    for (let i = 29; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      history.push({
        date: date.toISOString().split('T')[0],
        price: basePrice
      });
    }
    return history;
  }
  
  // Dynamic pricing for regular products
  let currentPrice = basePrice;
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Random fluctuation between -5% and +5%
    const fluctuation = (Math.random() * 0.1) - 0.05;
    currentPrice = Math.max(basePrice * 0.7, Math.min(basePrice * 1.3, currentPrice * (1 + fluctuation)));
    
    history.push({
      date: date.toISOString().split('T')[0],
      price: Number(currentPrice.toFixed(2))
    });
  }
  
  return history;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Camiseta básica',
    category: 'Camisetas',
    initialPrice: 19.99,
    currentPrice: 15.99,
    priceHistory: generatePriceHistory(19.99, false),
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    stock: 45,
    demand: 3,
    isNew: false,
    size: 'M',
    color: 'Negro'
  },
  {
    id: 2,
    name: 'Pantalón vaquero',
    category: 'Pantalones',
    initialPrice: 49.99,
    currentPrice: 59.99,
    priceHistory: generatePriceHistory(49.99, false),
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    stock: 28,
    demand: 7,
    isNew: false,
    size: '40',
    color: 'Azul'
  },
  {
    id: 3,
    name: 'Vestido elegante',
    category: 'Vestidos',
    initialPrice: 89.99,
    currentPrice: 75.99,
    priceHistory: generatePriceHistory(89.99, false),
    imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    stock: 12,
    demand: 5,
    isNew: false,
    size: 'S',
    color: 'Rojo'
  },
  {
    id: 4,
    name: 'Chaqueta de cuero',
    category: 'Chaquetas',
    initialPrice: 199.99,
    currentPrice: 220.99,
    priceHistory: generatePriceHistory(199.99, false),
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    stock: 8,
    demand: 9,
    isNew: false,
    size: 'L',
    color: 'Marrón'
  },
  {
    id: 5,
    name: 'Zapatos deportivos',
    category: 'Zapatos',
    initialPrice: 79.99,
    currentPrice: 65.99,
    priceHistory: generatePriceHistory(79.99, false),
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    stock: 32,
    demand: 4,
    isNew: false,
    size: '42',
    color: 'Blanco'
  },
  {
    id: 6,
    name: 'Sudadera con capucha',
    category: 'Camisetas',
    initialPrice: 39.99,
    currentPrice: 42.99,
    priceHistory: generatePriceHistory(39.99, false),
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    stock: 22,
    demand: 6,
    isNew: false,
    size: 'XL',
    color: 'Gris'
  },
  {
    id: 7,
    name: 'Camiseta Premium 2025',
    category: 'Camisetas',
    initialPrice: 29.99,
    currentPrice: 29.99,
    priceHistory: generatePriceHistory(29.99, true),
    imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    stock: 50,
    demand: 8,
    isNew: true,
    size: 'M',
    color: 'Verde'
  },
  {
    id: 8,
    name: 'Vestido de Gala 2025',
    category: 'Vestidos',
    initialPrice: 129.99,
    currentPrice: 129.99,
    priceHistory: generatePriceHistory(129.99, true),
    imageUrl: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    stock: 15,
    demand: 10,
    isNew: true,
    size: 'M',
    color: 'Negro'
  }
];

// Helper to get trending items based on demand
export const getTrendingItems = () => {
  return [...products]
    .filter(product => !product.isNew)
    .sort((a, b) => b.demand - a.demand)
    .slice(0, 4);
};

// Helper to get price change percentage
export const getPriceChange = (product: Product) => {
  const history = product.priceHistory;
  if (history.length < 2) return 0;
  
  const oldPrice = history[history.length - 2].price;
  const newPrice = history[history.length - 1].price;
  
  return ((newPrice - oldPrice) / oldPrice) * 100;
};

export const getNewCollection = () => {
  return products.filter(product => product.isNew);
};
