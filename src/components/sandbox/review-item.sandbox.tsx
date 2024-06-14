import { Review } from "@/components/elements/review-item/review.tsx";
import { reviews } from "@/components/sandbox/mock-data.ts";

const [firstReview] = reviews;

export const ReviewItemSandbox = () => {
  return (
    <>
      <div>
        <h3>Review Item</h3>
        <Review {...firstReview} />
      </div>
      <div>
        <h3>Review Items</h3>
        <div className="grid justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {reviews.map((item) => (
            <Review key={item.title} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
