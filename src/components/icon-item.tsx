import { IconType } from 'react-icons';

interface IconItemProps {
  icon?: IconType;
}

export const IconItem = ({ icon: Icon }: IconItemProps) => {
  return <div>{Icon && <Icon />}</div>;
};
