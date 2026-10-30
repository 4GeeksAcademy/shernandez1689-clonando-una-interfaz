import { StarIcon } from "./icons";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  className?: string;
}

const StarRating = ({ rating, reviewCount, className = "" }: StarRatingProps) => (
  <span className={`inline-flex items-center gap-1 ${className}`}>
    <StarIcon className="size-3.5" />
    <span>{rating.toFixed(2)}</span>
    {reviewCount !== undefined && (
      <span className="text-neutral-500">({reviewCount})</span>
    )}
    <span className="sr-only">de 5 estrellas</span>
  </span>
);

export default StarRating;
