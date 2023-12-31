import { Toaster } from 'react-hot-toast';
import GameGrid from './components/game-grid';
import Gameheading from './components/game-heading';
import Navbar from './components/navbar';
import Sidebar from './components/navbarComponents/sidebar';
import PlatformSelector from './components/platform-selector';
import SortSelector from './components/sort-selector';
import { ThemeProvider } from './components/theme-provider';

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* <ScrollBar /> */}
        <div className="h-full font-inter">
          <div className="inset-y-0 w-full z-[50] md:pl-56 h-[5rem] fixed">
            <Navbar />
          </div>
          <div className="flex-col hidden md:flex h-full fixed inset-y-0 z-50 w-56">
            <Sidebar />
          </div>
          <main className="h-full md:pl-60 pt-[5.5rem]">
            <div className="flex gap-x-5 items-center pl-2">
              <PlatformSelector />
              <SortSelector />
            </div>
            <Gameheading />
            <GameGrid />
            <Toaster position="bottom-right" reverseOrder={true} />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
