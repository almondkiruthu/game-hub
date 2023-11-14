import { GameQuery } from '@/App';
import useGames from '@/hooks/use-games.ts';
import { Loader2 } from 'lucide-react';
import React from 'react';
import toast from 'react-hot-toast';
import InfiniteScroll from 'react-infinite-scroll-component';
import GameCard from './game-card';
import GameCardSkeleton from './game-card-skeleton';

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { error, data, isLoading, hasNextPage, fetchNextPage } =
    useGames(gameQuery);

  const skeletons = Array.from({ length: 20 }, (_, i) => i);

  if (error) {
    toast.error("Can't fetch games");
  }
  const fetchedGamesCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;
  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={
          <div className='flex items-center pl-4 gap-x-2 justify-center my-4'>
            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            Please wait
          </div>
        }
      >
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
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
