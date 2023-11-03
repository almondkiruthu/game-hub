import { Platform } from '@/hooks/use-games';

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { IconItem } from './icon-item';

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIcon = ({ platforms = [] }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      <div className='flex gap-x-2 pt-2'>
        {platforms.map((platform) => (
          <IconItem icon={iconMap[platform.slug]} />
        ))}
      </div>
    </>
  );
};

export default PlatformIcon;
