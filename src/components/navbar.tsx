import logo from '@/assets/logo.webp';
import MobileSidebar from './navbarComponents/mobile-sidebar';
import NavbarRoutes from './navbarComponents/navbar-routes';
import SearchInput from './search-input';

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <div
      className='p-4 border-b h-full items-center
  shadow-sm flex gap-x-2 bg-background'
    >
      <div className='hidden md:block mb-7'>
        <div className='w-[4rem] h-[4rem] pt-3'>
          <img className='' src={logo} alt='logo' />
        </div>
      </div>
      <MobileSidebar />
      <SearchInput onSearch={onSearch} />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
