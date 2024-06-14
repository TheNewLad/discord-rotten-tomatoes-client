import { ReviewList } from "@/components/elements/review-item/review-list.tsx";
import { Review } from "@/components/elements/review-item/review.tsx";
import { reviews } from "@/components/sandbox/mock-data.ts";

const [firstReview] = reviews;

export const ReviewItemSandbox = () => {
  return (
    <>
      <div>
        <h3>A Single Review</h3>
        <Review {...firstReview} />
      </div>
      <div>
        <h3>Review List</h3>
        <ReviewList reviews={reviews} />
      </div>
    </>
  );
};
