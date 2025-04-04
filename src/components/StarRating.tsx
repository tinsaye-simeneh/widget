import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  size?: number;
}

export default function StarRating({ rating, size = 20 }: StarRatingProps) {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} size={size} className="text-yellow-400" />
      ))}
      {hasHalfStar && <FaStarHalfAlt size={size} className="text-yellow-400" />}

      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar
          key={`empty-${index}`}
          size={size}
          className="text-gray-400"
        />
      ))}
    </div>
  );
}
