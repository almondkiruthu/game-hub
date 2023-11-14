import { GameQuery } from '@/App';
import useGenres from '@/hooks/use-genres';
import usePlatforms from '@/hooks/use-platforms';

interface Props {
  gameQuery: GameQuery;
}

const Gameheading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();

  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

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
