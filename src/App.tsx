import { Toaster } from 'react-hot-toast';
import GameGrid from './components/game-grid';
import Navbar from './components/navbar';
import Sidebar from './components/navbarComponents/sidebar';
import { ThemeProvider } from './components/theme-provider';
import { useState } from 'react';
import { Genre } from './hooks/use-genres';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <div className='h-full font-inter'>
          <div className='inset-y-0 w-full z-[50] md:pl-56 h-[5rem] fixed'>
            <Navbar />
          </div>
          <div className='flex-col hidden md:flex h-full fixed inset-y-0 z-50 w-56'>
            <Sidebar
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </div>
          <main className='h-full md:pl-60 pt-[5.5rem]'>
            <GameGrid selectedGenre={selectedGenre} />
            <Toaster position='bottom-right' reverseOrder={true} />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
