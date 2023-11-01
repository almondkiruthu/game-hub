import MobileSidebar from './navbarComponents/mobile-sidebar';
import NavbarRoutes from './navbarComponents/navbar-routes';

const Navbar = () => {
  return (
    <div
      className='p-4 border-b h-full items-center
    bg-white shadow-sm flex'
    >
      <NavbarRoutes />
      <MobileSidebar />
    </div>
  );
};

export default Navbar;
