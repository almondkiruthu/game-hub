const navbar = () => {
  return (
    <div
      className='p-4 boarder-b h-full items-center
    bg-slate-500 shadow-sm'
    >
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default navbar;
