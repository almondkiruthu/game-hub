import { Toaster } from 'react-hot-toast';
import GameGrid from './components/game-grid';
import Navbar from './components/navbar';
import Sidebar from './components/navbarComponents/sidebar';
import { ThemeProvider } from './components/theme-provider';
import { useState } from 'react';
import { Genre } from './hooks/use-genres';
import PlatformSelector from './components/platform-selector';
import { Platform } from './hooks/use-games';
import SortSelector from './components/sort-selector';
import Gameheading from './components/game-heading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        {/* <ScrollBar /> */}
        <div className='h-full font-inter'>
          <div className='inset-y-0 w-full z-[50] md:pl-56 h-[5rem] fixed'>
            <Navbar
              onSearch={(searchText) =>
                setGameQuery({ ...gameQuery, searchText })
              }
            />
          </div>
          <div className='flex-col hidden md:flex h-full fixed inset-y-0 z-50 w-56'>
            <Sidebar
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </div>
          <main className='h-full md:pl-60 pt-[5.5rem]'>
            <div className='flex gap-x-5 items-center pl-2'>
              <PlatformSelector
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
                selectedPlatform={gameQuery.platform}
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </div>
            <Gameheading gameQuery={gameQuery} />
            <GameGrid gameQuery={gameQuery} />
            <Toaster position='bottom-right' reverseOrder={true} />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
