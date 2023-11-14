import { GameQuery } from '@/App';
import useGenre from '@/hooks/lookup-hooks/use-genre';
import usePlatform from '@/hooks/lookup-hooks/use-platform';

interface Props {
  gameQuery: GameQuery;
}

const Gameheading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <div className='my-4 pl-2'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        {heading}
      </h1>
    </div>
  );
};

export default Gameheading;
