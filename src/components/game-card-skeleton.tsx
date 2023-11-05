import { Skeleton } from './ui/skeleton';

const GameCardSkeleton = () => {
  return (
    <div className='p-[0.5rem]'>
      <div className='relative border rounded-lg p-3 h-full'>
        <div className='w-full aspect-video rounded-md'>
          <Skeleton className='w-full h-full' />
        </div>
        <div className='flex flex-col pt-2'>
          <Skeleton className='h-4 w-full' />
          <div className='flex items-center justify-between pt-2'>
            <Skeleton className='h-4 w-[100px]' />
            <Skeleton className='h-4 w-[50px]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
