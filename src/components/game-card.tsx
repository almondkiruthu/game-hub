import { Game } from '@/hooks/use-games';
import PlatformIcon from './platform-icon-list';
import CriticScore from './critic-score';
import getCroppedImageUrl from '@/services/image-url';
import Emoji from './emoji';

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className='m-4'>
      <div className='relative group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full'>
        <div className=' w-full aspect-video rounded-md overflow-hidden'>
          <img
            className='object-cover'
            alt={game.name}
            src={getCroppedImageUrl(game.background_image)}
          />
        </div>
        <div className='flex flex-col pt-2'>
          <div className='flex items-center justify-between pt-1'>
            <PlatformIcon
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <div>
              <CriticScore score={game.metacritic} />
            </div>
          </div>
          <div className='text-lg md:text-xl font-bold flex-col items-start group-hover:text-purple-400 transition line-clamp-2 mt-4'>
            {game.name}
            <Emoji rating={game.rating_top} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
