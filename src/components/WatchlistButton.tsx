
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface WatchlistButtonProps {
  productId: number;
  className?: string;
}

// In a real app, this would interact with saved state or backend
const WatchlistButton: React.FC<WatchlistButtonProps> = ({ productId, className }) => {
  const [isWatched, setIsWatched] = useState(false);
  
  const toggleWatchlist = () => {
    setIsWatched(!isWatched);
    
    if (!isWatched) {
      // In a real app, this would save to user watchlist
      console.log(`Product ${productId} added to watchlist`);
    } else {
      // In a real app, this would remove from user watchlist
      console.log(`Product ${productId} removed from watchlist`);
    }
  };
  
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleWatchlist}
      className={cn(
        'flex items-center gap-1 transition-all',
        isWatched ? 'bg-forest-light/10 text-forest-light border-forest-light/30' : '',
        className
      )}
    >
      {isWatched ? 'Siguiendo' : 'Seguir Precio'}
    </Button>
  );
};

export default WatchlistButton;
