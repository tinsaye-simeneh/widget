"use client";

import { useEffect } from "react";
import { useWidgetStore } from "../store/widgetStore";
import WidgetList from "../components/WidgetList";

export default function Home() {
  const { widgetList, setWidgetList } = useWidgetStore();

  useEffect(() => {
    const mockWidgets = [
      {
        id: "1",
        title: "GoogleAds for Airline Flights content generation",
        rating: 3.6,
        reviews: 17300,
        price: "7.2",
        description: "dialogue shop",
      },
      {
        id: "2",
        title: "GoogleAds for Airline Flights content generation",
        rating: 3.6,
        reviews: 17300,
        price: "7.2",
        description: "dialogue shop",
      },
    ];
    setWidgetList(mockWidgets);
  }, [setWidgetList]);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Widgets</h1>
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <WidgetList widgets={widgetList} />
    </main>
  );
}
