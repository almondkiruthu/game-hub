import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  const isHighlyRated = () => score >= 75;
  const isMiddleRated = () => score >= 60 && score < 75;
  const isLowlyRated = () => score < 60;

  return (
    <>
      <Badge
        variant={'outline'}
        className={cn(
          '',
          isHighlyRated() && 'text-green-700',
          isMiddleRated() && 'text-yellow-700',
          isLowlyRated() && 'text-red-700'
        )}
      >
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
