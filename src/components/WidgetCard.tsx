"use client";

import Link from "next/link";
import StarRating from "./StarRating";

interface Widget {
  id: string;
  title: string;
  rating: number;
  reviews: number;
  price: string;
  description: string;
}

interface WidgetCardProps {
  widget: Widget;
}

export default function WidgetCard({ widget }: WidgetCardProps) {
  return (
    <Link href={`/widgets/${widget.id}`}>
      <div
        data-testid="widget-card"
        className="max-w-sm p-4 transition-all duration-300 transform rounded-lg shadow-md bg-gradient-to-br from-gray-800 to-gray-700 hover:shadow-lg hover:-translate-y-1"
      >
        <h2 className="mb-1 text-xs font-semibold text-white truncate">
          {widget.title}
        </h2>

        <div className="flex items-center mb-2">
          <StarRating rating={widget.rating} size={10} />
          <span className="ml-1 text-xs text-gray-300">{widget.rating}</span>
          <span className="ml-2 text-xs text-gray-400">
            ({widget.reviews.toLocaleString()} reviews)
          </span>
        </div>

        <p className="mb-2 text-xs text-gray-400">{widget.description}</p>

        <p className="mb-2 text-sm font-medium text-green-400">
          💲 {widget.price}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          <span className="text-xs highlight">css</span>
          <span className="text-xs highlight">cross-browser</span>
          <span className="text-xs highlight">highlighting</span>
          <span className="text-xs highlight">textselection</span>
        </div>

        <button className="w-full py-1.5 text-sm text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600">
          View Details
        </button>
      </div>
    </Link>
  );
}
