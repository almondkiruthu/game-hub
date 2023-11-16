import logo from '@/assets/logo.webp';
import MobileSidebar from './navbarComponents/mobile-sidebar';
import NavbarRoutes from './navbarComponents/navbar-routes';
import SearchInput from './search-input';

const Navbar = () => {
  return (
    <div
      className="p-4 border-b h-full items-center
  shadow-sm flex gap-x-2 bg-background/95 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60
  top-0 sticky"
    >
      <div className="hidden md:block mb-7">
        <div className="w-[4rem] h-[4rem] pt-3">
          <img className="" src={logo} alt="logo" />
        </div>
      </div>
      <MobileSidebar />
      <SearchInput />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;

// sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
