import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import Sidebar from './sidebar';

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-1">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
