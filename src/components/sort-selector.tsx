import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { ChevronDown } from 'lucide-react';

const SortSelector = () => {
  return (
    <>
      <Menubar className='inline-block'>
        <MenubarMenu>
          <MenubarTrigger>
            <div className='flex items-center gap-x-2'>
              Sort
              <ChevronDown className='h-4 w-4' />
            </div>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Relevance</MenubarItem>
            <MenubarItem>Relevance</MenubarItem>
            <MenubarItem>Relevance</MenubarItem>
            <MenubarItem>Relevance</MenubarItem>
            <MenubarItem>Relevance</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
};

export default SortSelector;
