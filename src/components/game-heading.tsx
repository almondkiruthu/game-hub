import { GameQuery } from '@/App';

interface Props {
  gameQuery: GameQuery;
}

const Gameheading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`;

  return (
    <div className='my-4 pl-2'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        {heading}
      </h1>
    </div>
  );
};

export default Gameheading;
