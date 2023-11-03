import useGames from '@/hooks/use-games.ts';
import GameCard from './game-card';

const GameGrid = () => {
  const { error, games } = useGames();
  return (
    <>
      {error && <p>{error}</p>}
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
