import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { ChevronDown } from 'lucide-react';

interface Props {
  onSelectSortOrder: (order: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
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
    (order) => order.value === sortOrder
  );

  return (
    <>
      <Menubar className='inline-block'>
        <MenubarMenu>
          <MenubarTrigger>
            <div className='flex items-center gap-x-2'>
              <p>Order by {currentSortOrder?.label || 'Relevance'}</p>
              <ChevronDown className='h-4 w-4' />
            </div>
          </MenubarTrigger>
          <MenubarContent>
            {sortOrders.map((order) => (
              <MenubarItem
                onClick={() => onSelectSortOrder(order.value)}
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
