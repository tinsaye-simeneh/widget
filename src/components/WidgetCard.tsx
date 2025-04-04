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
        className="p-6 transition-all duration-300 transform shadow-lg bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl hover:shadow-xl hover:-translate-y-1"
      >
        <h2 className="mb-2 text-xl font-semibold text-white truncate">
          {widget.title}
        </h2>

        <div className="flex items-center mb-3">
          <StarRating rating={widget.rating} size={16} />
          <span className="ml-2 text-gray-300">{widget.rating}</span>
          <span className="ml-2 text-sm text-gray-400">
            ({widget.reviews.toLocaleString()} reviews)
          </span>
        </div>

        <p className="mb-3 text-sm text-gray-400">{widget.description}</p>

        <p className="mb-4 font-medium text-green-400">💲 {widget.price}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="highlight">css</span>
          <span className="highlight">cross-browser</span>
          <span className="highlight">highlighting</span>
          <span className="highlight">textselection</span>
        </div>

        <button className="w-full py-2 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600">
          View Details
        </button>
      </div>
    </Link>
  );
}
