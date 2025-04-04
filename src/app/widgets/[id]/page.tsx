"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useWidgetStore } from "../../../store/widgetStore";
import WidgetDetails from "../../../components/WidgetDetails";
import CommentsSection from "../../../components/CommentsSection";
import ShareThoughts from "../../../components/ShareThoughts";
import * as React from "react";

export default function SingleWidgetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;
  const { selectedWidget, setSelectedWidget, widgetList } = useWidgetStore();

  useEffect(() => {
    if (id && widgetList.length > 0) {
      const widget = widgetList.find((w) => w.id === id);
      if (widget) {
        setSelectedWidget(widget);
      }
    }
  }, [id, widgetList, setSelectedWidget]);

  if (!selectedWidget) {
    return <div className="text-lg text-center text-gray-400">Loading...</div>;
  }

  return (
    <main className="min-h-screen py-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container px-4 mx-auto">
        <button
          onClick={() => router.push("/")}
          className="flex items-center mb-6 text-blue-400 transition-colors hover:text-blue-300"
        >
          ← Back to Widgets
        </button>
        <WidgetDetails widget={selectedWidget} />
        <div className="mt-8">
          <h2 className="mb-2 text-xl font-bold text-white">Example Output</h2>
          <a
            href="/example.pdf"
            download
            className="text-blue-400 transition-colors hover:text-blue-300"
          >
            Marketing_Campaign.pdf
          </a>
        </div>
        <CommentsSection />
        <ShareThoughts />
      </div>
    </main>
  );
}
