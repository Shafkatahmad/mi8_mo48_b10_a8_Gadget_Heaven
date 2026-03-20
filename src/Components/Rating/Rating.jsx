import { Star } from "lucide-react";

const Rating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex items-center gap-2">
      {[...Array(totalStars)].map((_, index) => {
        const filled = index < Math.floor(rating);

        return (
          <Star
            key={index}
            size={20}
            className={
              filled ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }
          />
        );
      })}

      <span className="ml-2 text-[#09080F]/60 text-[12px] rounded-4xl bg-[#09080F]/5 px-3 py-2">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default Rating;
