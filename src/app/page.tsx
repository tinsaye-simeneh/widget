"use client";

import { useEffect, useState } from "react";
import { useWidgetStore } from "../store/widgetStore";
import WidgetList from "../components/WidgetList";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {
  const { widgetList, setWidgetList } = useWidgetStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredWidgets, setFilteredWidgets] = useState(widgetList || []);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const widgetsPerPage = 4;

  useEffect(() => {
    const fetchWidgets = async () => {
      try {
        const response = await fetch(
          "https://67f04f7e2a80b06b8897881d.mockapi.io/api/widget"
        );
        const data = await response.json();
        console.log(data);
        if (Array.isArray(data)) {
          setWidgetList(data);
          setFilteredWidgets(data);
        } else {
          console.error("Error: The fetched data is not an array.");
        }
      } catch (error) {
        console.error("Error fetching widgets:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWidgets();
  }, [setWidgetList]);

  useEffect(() => {
    const filtered = widgetList.filter((widget) =>
      widget.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredWidgets(filtered);
    setCurrentPage(1);
  }, [searchTerm, widgetList]);

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const indexOfLastWidget = currentPage * widgetsPerPage;
  const indexOfFirstWidget = indexOfLastWidget - widgetsPerPage;
  const currentWidgets =
    filteredWidgets?.length > 0
      ? filteredWidgets.slice(indexOfFirstWidget, indexOfLastWidget)
      : [];
  const totalPages = Math.ceil(filteredWidgets?.length / widgetsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRefresh = () => {
    setIsLoading(true);
    router.refresh();
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
          <>
            <WidgetList widgets={currentWidgets} />
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-full border text-sm ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-lg text-center text-gray-400">
              No widgets found matching:{" "}
              {searchTerm && (
                <span className="font-medium text-white">{searchTerm}</span>
              )}
            </div>
            <button
              onClick={handleRefresh}
              className="block mt-4 text-blue-400 underline hover:text-blue-300"
            >
              Refresh
            </button>
          </>
        )}
      </div>
    </main>
  );
}
