import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  const isHighlyRated = () => score > 75;
  const isMiddleRated = () => score > 60 && score < 75;
  const isLowlyRated = () => score < 60;

  return (
    <>
      <Badge
        variant={'outline'}
        className={cn(
          '',
          isHighlyRated() && 'bg-green-700 text-slate-50',
          isMiddleRated() && 'bg-yellow-700',
          isLowlyRated() && 'bg-red-700'
        )}
      >
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
