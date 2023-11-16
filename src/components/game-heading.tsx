import useGenre from '@/hooks/lookup-hooks/use-genre';
import usePlatform from '@/hooks/lookup-hooks/use-platform';
import useGameQueryStore from '@/store';

const Gameheading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <div className="my-4 pl-2">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {heading}
      </h1>
    </div>
  );
};

export default Gameheading;
