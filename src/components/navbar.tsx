import Logo from './navbarComponents/logo';
import MobileSidebar from './navbarComponents/mobile-sidebar';
import NavbarRoutes from './navbarComponents/navbar-routes';

const Navbar = () => {
  return (
    <div
      className='p-4 border-b h-full items-center
  shadow-sm flex gap-x-2 bg-background'
    >
      <div className='hidden md:block mb-7'>
        <Logo />
      </div>
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
