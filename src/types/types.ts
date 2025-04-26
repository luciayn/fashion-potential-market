
export interface Product {
  id: number;
  name: string;
  category: string;
  initialPrice: number;
  currentPrice: number;
  priceHistory: PricePoint[];
  imageUrl: string;
  stock: number;
  demand: number; // 1-10 scale
  isNew: boolean;
  size: string;
  color: string;
}

export interface PricePoint {
  date: string;
  price: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface WatchlistItem {
  productId: number;
  addedAt: string;
}
