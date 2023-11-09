import usePlatforms from '@/hooks/use-platforms';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { ChevronDown } from 'lucide-react';

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <div className='w-[7.5rem] my-1'>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <div className='flex items-center gap-x-2'>
              <p>Platforms</p>
              <ChevronDown className='h-4 w-4' />
            </div>
          </MenubarTrigger>
          <MenubarContent>
            {data.map((platform) => (
              <MenubarItem key={platform.id}>{platform.name}</MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default PlatformSelector;
