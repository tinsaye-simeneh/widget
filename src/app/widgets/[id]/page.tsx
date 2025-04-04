"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useWidgetStore } from "../../../store/widgetStore";
import WidgetDetails from "../../../components/WidgetDetails";
import CommentsSection from "../../../components/CommentsSection";
import ShareThoughts from "../../../components/ShareThoughts";

export default function SingleWidgetPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { id } = params;
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
    return <div>Loading...</div>;
  }

  return (
    <main className="container mx-auto p-4">
      <button
        onClick={() => router.push("/")}
        className="mb-4 text-blue-500 hover:underline"
      >
        ← Back to Widgets
      </button>
      <WidgetDetails widget={selectedWidget} />
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Example Output</h2>
        <a
          href="/example.pdf"
          download
          className="text-blue-500 hover:underline"
        >
          Marketing_Campaign.pdf
        </a>
      </div>
      <CommentsSection />
      <ShareThoughts />
    </main>
  );
}
