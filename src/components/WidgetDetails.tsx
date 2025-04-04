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
    <div className="bg-gray-800 p-6 rounded-lg shadow">
      <h1 data-testid="widget-title" className="text-2xl font-bold">
        {widget.title}
      </h1>
      <div className="flex items-center my-2">
        <span className="text-yellow-400">
          {"★".repeat(Math.floor(widget.rating))}
        </span>
        <span className="ml-1 text-gray-400">{widget.rating}</span>
        <span className="ml-2 text-gray-400">
          ({widget.reviews.toLocaleString()} reviews)
        </span>
      </div>
      <p className="text-gray-400">{widget.description}</p>
      <p className="text-green-400 mt-2">💲 {widget.price}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Get Started
      </button>
    </div>
  );
}
