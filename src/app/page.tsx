"use client";

import { useEffect, useState } from "react";
import { useWidgetStore } from "../store/widgetStore";
import WidgetList from "../components/WidgetList";
import { FaSearch, FaTimes } from "react-icons/fa";

export default function Home() {
  const { widgetList, setWidgetList } = useWidgetStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWidgets, setFilteredWidgets] = useState(widgetList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const mockWidgets = [
      {
        id: "1",
        title: "GoogleAds for Airline Flights content generation",
        rating: 3.6,
        reviews: 17300,
        price: "7.2",
        description: "dialogue shop",
        comments: [
          {
            id: "1",
            author: "dolorque",
            timestamp: "24 mins ago",
            content:
              "I wouldn't call concurrent futures more 'advanced' - it's a simpler interface that works very much the same regardless of whether you use multiple threads or multiple processes as the underlying parallelization gimmick.",
            likes: 18,
          },
        ],
      },
      {
        id: "2",
        title: "GoogleAds for Travel Packages content generation",
        rating: 4.2,
        reviews: 12500,
        price: "9.5",
        description: "travel hub",
        comments: [],
      },
      {
        id: "3",
        title: "GoogleAds for Hotel Bookings content generation",
        rating: 3.8,
        reviews: 8900,
        price: "6.8",
        description: "booking pro",
        comments: [],
      },
    ];
    setWidgetList(mockWidgets);
    setFilteredWidgets(mockWidgets);
    setIsLoading(false);
  }, [setWidgetList]);

  useEffect(() => {
    const filtered = widgetList.filter((widget) =>
      widget.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredWidgets(filtered);
  }, [searchTerm, widgetList]);

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <main className="min-h-screen py-10 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="relative inline-block text-3xl font-bold text-white sm:text-4xl">
            Explore Widgets
            <span className="block w-16 h-1 mx-auto mt-2 bg-blue-500 rounded-full" />
          </h1>
          <p className="mt-2 text-sm text-gray-400 sm:text-base">
            Discover powerful tools and services tailored for your needs.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative max-w-xl mx-auto mb-12">
          <div className="flex items-center px-4 py-2 bg-gray-700 rounded-full shadow-md">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search widgets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-3 py-1 text-white placeholder-gray-400 bg-transparent focus:outline-none"
            />
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                className="text-gray-400 hover:text-white"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {isLoading ? (
          <div className="text-lg text-center text-gray-400">
            Loading widgets...
          </div>
        ) : filteredWidgets.length > 0 ? (
          <WidgetList widgets={filteredWidgets} />
        ) : (
          <div className="text-lg text-center text-gray-400">
            No widgets found matching:{" "}
            <span className="font-medium text-white">{searchTerm}</span>
          </div>
        )}
      </div>
    </main>
  );
}
