"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useWidgetStore } from "../../../store/widgetStore";
import WidgetDetails from "../../../components/WidgetDetails";
import CommentsSection from "../../../components/CommentsSection";
import ShareThoughts from "../../../components/ShareThoughts";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShareAlt, FaBookmark } from "react-icons/fa";

export default function SingleWidgetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;
  const { selectedWidget, setSelectedWidget, widgetList } = useWidgetStore();

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (id && widgetList.length > 0) {
      const widget = widgetList.find((w) => w.id === id);
      if (widget) {
        setSelectedWidget(widget);
      }
    }
  }, [id, widgetList, setSelectedWidget]);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  if (!selectedWidget) {
    return (
      <div className="py-20 text-lg text-center text-gray-400">
        Loading...
        <Link
          href="/"
          className="block mt-10 text-blue-400 underline hover:text-blue-300"
        >
          Back to Widgets
        </Link>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#141A1B] py-10">
      {toastMessage && (
        <div className="fixed z-50 px-4 py-2 text-sm text-center text-white transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-md shadow-md top-5 left-1/2 bg-opacity-80 animate-fade-in-out">
          {toastMessage}
        </div>
      )}

      <div className="container max-w-4xl px-4 mx-auto">
        <button
          onClick={() => router.push("/")}
          className="mb-6 text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to Widgets
        </button>

        <div className="relative w-full h-64 mb-4 overflow-hidden bg-gray-700 shadow-lg rounded-2xl">
          <Image
            alt="banner image"
            src="/banner.jpg"
            className="object-cover w-full h-full"
            width={800}
            height={400}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <h2 className="text-3xl font-semibold text-white">
              Marketing Campaign Draft
            </h2>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 mb-6">
          <button
            onClick={() => {
              const shareUrl =
                typeof window !== "undefined" ? window.location.href : "";
              navigator.clipboard.writeText(shareUrl);
              setToastMessage("Link copied to clipboard!");
            }}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-500"
          >
            <FaShareAlt />
            Share
          </button>

          <button
            onClick={() => {
              setToastMessage("Widget saved!");
            }}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-500"
          >
            <FaBookmark />
            Save
          </button>
        </div>

        <WidgetDetails widget={selectedWidget} />

        <div className="mt-10">
          <h2 className="mb-6 text-2xl font-semibold text-white">
            Example Output
          </h2>
          <div className="max-w-sm p-8 bg-gray-800 rounded-lg shadow-lg">
            <a
              href="/example.pdf"
              download
              className="block font-medium text-center text-blue-400 underline transition-colors duration-300 text-md hover:text-blue-300"
            >
              Download Marketing Campaign PDF
            </a>
          </div>
        </div>

        <CommentsSection />
        <ShareThoughts />
      </div>
    </main>
  );
}
