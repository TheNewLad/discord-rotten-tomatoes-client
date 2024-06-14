import { Review } from "@/components/elements/review-item/review.tsx";
import { type Reviews } from "@/components/elements/review-item/review.types.ts";

interface ReviewListProps {
  reviews: Reviews;
}

export const ReviewList = ({ reviews }: ReviewListProps) => {
  return (
    <ul className="grid justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {reviews.map((review) => (
        <li key={review.title} className="w-full">
          <Review {...review} />
        </li>
      ))}
    </ul>
  );
};
