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
    <main className="min-h-screen py-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container px-4 mx-auto">
        <h1 className="relative inline-block mb-6 text-4xl font-extrabold text-white">
          Explore Widgets
          <span className="absolute left-0 w-1/2 h-1 bg-blue-500 rounded-full -bottom-1"></span>
        </h1>

        <div className="relative max-w-lg mx-auto mb-8">
          <div className="flex items-center p-2 bg-gray-700 rounded-full shadow-lg">
            <FaSearch className="ml-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search widgets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-4 text-white placeholder-gray-400 bg-transparent focus:outline-none"
            />
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                className="mr-3 text-gray-400 hover:text-white"
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
            No widgets found matching for: {searchTerm}.
          </div>
        )}
      </div>
    </main>
  );
}
