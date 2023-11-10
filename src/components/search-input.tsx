import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { useRef } from 'react';

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <div className='relative flex items-center ml-4'>
        <Search className='h-4 w-4 absolute top-3 left-3 text-purple-300' />
        <Input
          className='rounded-full w-full md:w-[300px] pl-9 bg-background focus-visible:ring-purple-400'
          placeholder='Search games...'
          ref={ref}
        />
      </div>
    </form>
  );
};

export default SearchInput;
