import { Search } from 'lucide-react';
import { Input } from './ui/input';

const SearchInput = () => {
  return (
    <div className='relative flex items-center ml-4'>
      <Search className='h-4 w-4 absolute top-3 left-3 text-slate-600' />
      <Input
        className='rounded-2xl w-full md:w-[300px] pl-9'
        placeholder='Search games...'
      />{' '}
    </div>
  );
};

export default SearchInput;
