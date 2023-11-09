import useGames from '@/hooks/use-games.ts';
import GameCard from './game-card';
import GameCardSkeleton from './game-card-skeleton';
import { GameQuery } from '@/App';

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { error, data, isLoading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 20 }, (_, i) => i);
  return (
    <>
      {error && <p>{error}</p>}
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
