import { Genre } from '@/hooks/use-genres';
import getCroppedImageUrl from '@/services/image-url';
import GenreCardSkeleton from '../genre-card-skeleton';
import { Button } from '../ui/button';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';
import useGenres from '@/hooks/use-genres';

interface SidebarProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const Sidebar = ({ onSelectGenre, selectedGenreId }: SidebarProps) => {
  const { data, isLoading, error } = useGenres();
  const genreSkeletons = Array.from({ length: 19 }).map((_, i) => i);

  if (error) {
    toast.error('Failed to fetch genres');
  }

  return (
    <>
      <div className='h-full border-r flex flex-col overflow-y-auto shadow-sm bg-background'>
        <div className='flex flex-col w-full'>
          <div className='flex items-center flex-shrink-0 md:hidden mb-4 pl-4 border-b shadow-sm'>
            <p className='mt-5 font-extrabold text-muted-foreground pb-4 w-full'>
              GAME HUB
            </p>
          </div>
          <div className='flex flex-col w-full'>
            <h3 className='hidden md:block scroll-m-20 text-xl font-semibold tracking-tight my-4 pl-4 border-b pb-4'>
              Genres
            </h3>
            <div className='ml-2 md:ml-2 md:mx-auto'>
              {isLoading &&
                genreSkeletons.map((skeleton) => (
                  <GenreCardSkeleton key={skeleton} />
                ))}
              {data?.results.map((genre) => (
                <Button
                  onClick={() => onSelectGenre(genre)}
                  variant='link'
                  key={genre.id}
                  className={cn(
                    'flex items-center gap-x-2 mt-3 justify-between',
                    selectedGenreId === genre.id
                      ? 'font-bold text-purple-400'
                      : 'font-normal'
                  )}
                >
                  <img
                    className='w-8 h-8 rounded-lg object-cover'
                    src={getCroppedImageUrl(genre.image_background)}
                  />
                  <p
                    className={cn(
                      'text-sm text-left',
                      selectedGenreId === genre.id
                        ? 'font-bold text-purple-400'
                        : 'font-normal'
                    )}
                  >
                    {genre.name}
                  </p>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
