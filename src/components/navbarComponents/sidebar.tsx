import SideBarRoutes from './sidebar-routes';

const Sidebar = () => {
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto shadow-sm bg-background'>
      <div className='flex flex-col w-full'>
        <div className='flex items-center flex-shrink-0 md:hidden mb-4 pl-4 border-b shadow-sm'>
          <p className='mt-5 font-extrabold text-muted-foreground pb-4 w-full'>
            GAME HUB
          </p>
        </div>
        <SideBarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
