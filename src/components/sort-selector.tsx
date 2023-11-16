import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import useGameQueryStore from '@/store';
import { ChevronDown } from 'lucide-react';

const SortSelector = () => {
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSelectedSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrders = [
    {
      value: '',
      label: 'Relevance',
    },
    {
      value: 'name',
      label: 'Name',
    },
    {
      value: '-added',
      label: 'Date added',
    },
    {
      value: '-released',
      label: 'Release Date',
    },
    {
      value: '-metacritic',
      label: 'Popularity',
    },
    {
      value: '-rating',
      label: 'Average Rating',
    },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <div className="flex items-center gap-x-2">
              <p className="line-clamp-1">
                Order by {currentSortOrder?.label || 'Relevance'}
              </p>
              <ChevronDown className="h-4 w-4" />
            </div>
          </MenubarTrigger>
          <MenubarContent>
            {sortOrders.map((order) => (
              <MenubarItem
                onClick={() => setSelectedSortOrder(order.value)}
                key={order.value}
              >
                {order.label}
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
};

export default SortSelector;
