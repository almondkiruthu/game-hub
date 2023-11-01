import SideBarRoutes from "./sidebar-routes";

const Sidebar = () => {
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto shadow-sm'>
      <div className='flex flex-col w-full'>
        <SideBarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
