import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { ChevronDown } from 'lucide-react';

const PlatformSelector = () => {
  return (
    <div className='w-[7.5rem]'>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <div className='flex items-center gap-x-2'>
              <p>Platforms</p>
              <ChevronDown className='h-4 w-4' />
            </div>
          </MenubarTrigger>
          <MenubarContent></MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default PlatformSelector;
