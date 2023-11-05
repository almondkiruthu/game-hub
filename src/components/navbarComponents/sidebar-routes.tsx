import useData from '@/hooks/use-genres';
import getCroppedImageUrl from '@/services/image-url';

const SideBarRoutes = () => {
  const { data } = useData();
  return (
    <div className='flex flex-col w-full'>
      <div className='ml-2 md:ml-2 md:mx-auto'>
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
