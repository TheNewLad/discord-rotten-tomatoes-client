import { ReviewItem } from "@/components/elements/review-item/review-item.tsx";
import { ReviewItems } from "@/components/sandbox/mock-data.ts";

const [item] = ReviewItems;

export const ReviewItemSandbox = () => {
  return (
    <>
      <div>
        <h3>Review Item</h3>
        <ReviewItem {...item} />
      </div>
      <div>
        <h3>Review Items</h3>
        <div className="grid justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ReviewItems.map((item) => (
            <ReviewItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};
