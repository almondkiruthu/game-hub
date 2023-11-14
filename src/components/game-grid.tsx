import useGames from '@/hooks/use-games.ts';
import GameCard from './game-card';
import GameCardSkeleton from './game-card-skeleton';
import { GameQuery } from '@/App';
import toast from 'react-hot-toast';
import React from 'react';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const {
    error,
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery);
  const skeletons = Array.from({ length: 20 }, (_, i) => i);
  if (error) {
    toast.error("Can't fetch games");
  }
  return (
    <>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className='pl-4'>
        {hasNextPage && (
          <Button variant='outline' onClick={() => fetchNextPage()}>
            {!isFetchingNextPage && 'Load More'}
            {isFetchingNextPage && (
              <div className='flex items-center'>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Please wait
              </div>
            )}
          </Button>
        )}
      </div>
    </>
  );
};

export default GameGrid;
