import meh from '@/assets/meh.webp';
import bullseye from '@/assets/bulls-eye.webp';
import thumbsup from '@/assets/thumbs-up.webp';

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: string } = {
    3: meh,
    4: thumbsup,
    5: bullseye,
  };
  const EmojiImage = emojiMap[rating];
  return (
    <div>
      <img
        className='h-[25px] w-[25px] mt-2 aspect-video'
        src={EmojiImage}
        alt='emoji'
      />
    </div>
  );
};

export default Emoji;
