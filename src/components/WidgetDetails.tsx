import StarRating from "./StarRating";

interface Widget {
  id: string;
  title: string;
  rating: number;
  reviews: number;
  price: string;
  description: string;
}

interface WidgetDetailsProps {
  widget: Widget;
}

export default function WidgetDetails({ widget }: WidgetDetailsProps) {
  const formattedReviews = widget.reviews
    ? widget.reviews.toLocaleString()
    : "0";

  return (
    <div className="p-6 bg-[#20292A] rounded-2xl shadow-md">
      <h1 className="mb-3 text-2xl font-semibold text-white">{widget.title}</h1>
      <div className="flex items-center mb-4">
        <StarRating rating={widget.rating} size={20} />
        <span className="ml-2 text-gray-300">{widget.rating}</span>
        <span className="ml-3 text-sm text-gray-400">
          ({formattedReviews} reviews)
        </span>
      </div>
      <p className="mb-4 leading-relaxed text-gray-400">{widget.description}</p>
      <p className="mb-4 text-lg font-medium text-green-400">
        💲 {widget.price}
      </p>
      <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
}
