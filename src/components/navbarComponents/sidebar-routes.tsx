import useData from '@/hooks/use-genres';
import getCroppedImageUrl from '@/services/image-url';
import GenreCardSkeleton from '../genre-card-skeleton';
import toast from 'react-hot-toast';

const SideBarRoutes = () => {
  const { data, isLoading, error } = useData();
  const genreSkeletons = Array.from({ length: 19 }).map((_, i) => i);
  if (error) {
    toast.error('Failed to fetch genres');
  }
  return (
    <div className='flex flex-col w-full'>
      <div className='ml-2 md:ml-2 md:mx-auto'>
        {isLoading &&
          genreSkeletons.map((Skeleton) => (
            <GenreCardSkeleton key={Skeleton} />
          ))}
        {data.map((genre) => (
          <div key={genre.id} className='flex items-center gap-x-2 mt-3'>
            <img
              className='w-10 h-10 rounded-lg'
              src={getCroppedImageUrl(genre.image_background)}
            />
            <p className='text-sm text-muted-foreground'>{genre.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarRoutes;
