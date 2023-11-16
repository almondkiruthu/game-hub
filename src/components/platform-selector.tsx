import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import usePlatform from '@/hooks/lookup-hooks/use-platform';
import usePlatforms from '@/hooks/use-platforms';
import useGameQueryStore from '@/store';
import { ChevronDown } from 'lucide-react';

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  if (error) return null;

  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <div className="flex items-center gap-x-2">
              {selectedPlatform ? selectedPlatform.name : 'Platforms'}
              <ChevronDown className="h-4 w-4" />
            </div>
          </MenubarTrigger>
          <MenubarContent>
            {data?.results.map((platform) => (
              <MenubarItem
                onClick={() => setSelectedPlatformId(platform.id)}
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
