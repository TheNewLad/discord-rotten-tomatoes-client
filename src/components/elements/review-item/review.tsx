import { type Review as ReviewItemType } from "@/components/elements/review-item/review.types.ts";
import { StarIcon } from "@heroicons/react/16/solid";

export const Review = ({
  imageSrc,
  title,
  rating,
  reviewCount,
}: ReviewItemType) => {
  return (
    <div className="grid w-full grid-cols-1 justify-items-center gap-2 text-center align-middle md:grid-cols-2 md:justify-items-start md:text-left">
      <img
        src={imageSrc}
        alt={`${title} poster`}
        className="h-48 w-32 rounded-lg md:row-span-2"
      />
      <h2 className="text-lg font-semibold md:col-start-2 md:content-end">
        {title}
      </h2>
      <div className="inline-flex max-h-fit items-baseline gap-1 md:col-start-2">
        <StarIcon className="h-4 w-4 text-yellow-400" />
        <span className="">{rating}</span>
        <span className="ml-1 text-gray-500">({reviewCount})</span>
      </div>
    </div>
  );
};
