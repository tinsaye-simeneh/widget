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
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow">
      <h1
        data-testid="widget-title"
        className="mb-3 text-2xl font-bold text-white"
      >
        {widget.title}
      </h1>
      <div className="flex items-center mb-4">
        <StarRating rating={widget.rating} size={20} />
        <span className="ml-2 text-gray-300">{widget.rating}</span>
        <span className="ml-2 text-gray-400">
          ({widget.reviews.toLocaleString()} reviews)
        </span>
      </div>
      <p className="mb-3 text-gray-400">{widget.description}</p>
      <p className="mb-4 font-medium text-green-400">💲 {widget.price}</p>
      <button className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600">
        Get Started
      </button>
    </div>
  );
}
