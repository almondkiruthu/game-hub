import usePlatforms from '@/hooks/use-platforms';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { ChevronDown } from 'lucide-react';
import { Platform } from '@/hooks/use-games';

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <div className='flex items-center gap-x-2'>
              {selectedPlatform ? selectedPlatform.name : 'Platforms'}
              <ChevronDown className='h-4 w-4' />
            </div>
          </MenubarTrigger>
          <MenubarContent>
            {data?.results.map((platform) => (
              <MenubarItem
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
              >
                {platform.name}
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
};

export default PlatformSelector;
