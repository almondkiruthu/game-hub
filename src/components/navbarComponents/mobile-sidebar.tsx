import { Genre } from '@/hooks/use-genres';
import { Platform } from '@/hooks/use-platforms';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import Sidebar from './sidebar';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
const MobileSidebar = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Sheet>
      <SheetTrigger className='md:hidden hover:opacity-75 transition'>
        <Menu />
      </SheetTrigger>
      <SheetContent side='left' className='p-1'>
        <Sidebar
          selectedGenreId={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
