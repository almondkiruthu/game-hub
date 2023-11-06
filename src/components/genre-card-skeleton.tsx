import { Skeleton } from "./ui/skeleton";

const GenreCardSkeleton = () => {
  return (
    <div className='flex items-center gap-x-2 mt-3'>
      <Skeleton className='w-10 h-10 rounded-lg' />
      <Skeleton className='w-[100px] h-4 rounded-lg' />
    </div>
  );
};

export default GenreCardSkeleton;
