
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WatchlistButtonProps {
  productId: number;
  className?: string;
}

const WatchlistButton: React.FC<WatchlistButtonProps> = ({ productId, className }) => {
  const [isWatched, setIsWatched] = useState(false);
  
  const toggleWatchlist = () => {
    setIsWatched(!isWatched);
  };
  
  return (
    <button
      onClick={toggleWatchlist}
      className={cn(
        'p-2 bg-zara-white hover:bg-zara-black hover:text-zara-white transition-colors',
        className
      )}
    >
      <Heart className="w-4 h-4" fill={isWatched ? "currentColor" : "none"} />
    </button>
  );
};

export default WatchlistButton;
