import { Game } from '@/hooks/use-games';
import PlatformIcon from './platform-icon-list';

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className='p-[0.5rem]'>
      <div className='relative group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full'>
        <div className=' w-full aspect-video rounded-md overflow-hidden'>
          <img
            className='object-cover'
            alt={game.name}
            src={game.background_image}
          />
        </div>
        <div className='flex flex-col pt-2'>
          <div className='text-lg md:text-xl font-medium group-hover:text-purple-400 transition line-clamp-2'>
            {game.name}
          </div>
          <PlatformIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
