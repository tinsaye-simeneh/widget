"use client";

import Link from "next/link";

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
        className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
      >
        <h2 className="text-lg font-semibold">{widget.title}</h2>
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
        <div className="mt-2 text-sm text-gray-500">
          <span className="highlight">css</span>{" "}
          <span className="highlight">cross-browser</span>{" "}
          <span className="highlight">highlighting</span>{" "}
          <span className="highlight">textselection</span>
        </div>
      </div>
    </Link>
  );
}
