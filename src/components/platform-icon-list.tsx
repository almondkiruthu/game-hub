import { Platform } from '@/hooks/use-platforms';

import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
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
      <div className='flex gap-x-2 pt-2 text-gray-500'>
        {platforms.map((platform) => (
          <IconItem key={platform.id} icon={iconMap[platform.slug]} />
        ))}
      </div>
    </>
  );
};

export default PlatformIcon;
