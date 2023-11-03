import Logo from './logo';
import SideBarRoutes from './sidebar-routes';

const Sidebar = () => {
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto shadow-sm bg-background'>
      <div className='flex flex-col w-full'>
        <div className='block md:hidden'>
          <Logo />
        </div>
        <SideBarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
