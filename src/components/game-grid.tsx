import axios from 'axios';
import { useEffect, useState } from 'react';
interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get<FetchGamesResponse>('https://api.rawg.io/api/xgames', {
        params: {
          key: 'f5b56fb4fcdc43df8c293b0c1d550edf',
        },
      })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err: Error) => setError(err.message));
  }, []);
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
