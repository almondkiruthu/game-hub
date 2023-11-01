import Navbar from './components/navbar';
import { ThemeProvider } from './components/theme-provider';

const App = () => {
  return (
    <>
      <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
        <Navbar />
      </ThemeProvider>
    </>
  );
};

export default App;
