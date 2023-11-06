// import SideBarRoutes from './sidebar-routes';

// const Sidebar = () => {
//   return (
//     <div className='h-full border-r flex flex-col overflow-y-auto shadow-sm bg-background'>
//       <div className='flex flex-col w-full'>
//         <div className='flex items-center flex-shrink-0 md:hidden mb-4 pl-4 border-b shadow-sm'>
//           <p className='mt-5 font-extrabold text-muted-foreground pb-4 w-full'>
//             GAME HUB
//           </p>
//         </div>
//         <SideBarRoutes />
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import useData, { Genre } from '@/hooks/use-genres';
import getCroppedImageUrl from '@/services/image-url';
import GenreCardSkeleton from '../genre-card-skeleton';
import { Button } from '../ui/button';
import toast from 'react-hot-toast';

interface SidebarProps {
  onSelectGenre: (genre: Genre) => void;
}

const Sidebar = ({ onSelectGenre }: SidebarProps) => {
  const { data, isLoading, error } = useData();
  const genreSkeletons = Array.from({ length: 19 }).map((_, i) => i);

  if (error) {
    toast.error('Failed to fetch genres');
  }

  return (
    <div className='h-full border-r flex flex-col overflow-y-auto shadow-sm bg-background'>
      <div className='flex flex-col w-full'>
        <div className='flex items-center flex-shrink-0 md:hidden mb-4 pl-4 border-b shadow-sm'>
          <p className='mt-5 font-extrabold text-muted-foreground pb-4 w-full'>
            GAME HUB
          </p>
        </div>
        <div className='flex flex-col w-full'>
          <div className='ml-2 md:ml-2 md:mx-auto'>
            {isLoading &&
              genreSkeletons.map((skeleton) => (
                <GenreCardSkeleton key={skeleton} />
              ))}
            {data.map((genre) => (
              <Button
                onClick={() => onSelectGenre(genre)}
                variant='link'
                key={genre.id}
                className='flex items-center gap-x-2 mt-3'
              >
                <img
                  className='w-10 h-10 rounded-lg'
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <p className='text-sm text-muted-foreground'>{genre.name}</p>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
