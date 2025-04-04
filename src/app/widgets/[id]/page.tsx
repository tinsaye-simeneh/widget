"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useWidgetStore } from "../../../store/widgetStore";
import WidgetDetails from "../../../components/WidgetDetails";
import CommentsSection from "../../../components/CommentsSection";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShareAlt, FaBookmark } from "react-icons/fa";
import { Widget, Comment } from "../../../types/widget";

export default function SingleWidgetPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const unwrappedParams = React.use(params);
  const { id } = unwrappedParams;

  const [isLoading, setIsLoading] = useState(true);
  const { selectedWidget, setSelectedWidget, widgetList } = useWidgetStore();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchWidgetData = async () => {
      if (id && widgetList.length > 0) {
        const widget = widgetList.find((w) => w.id === id);
        if (widget) {
          setSelectedWidget(widget);
          setIsLoading(false);
          return;
        }
      }
      try {
        const response = await fetch(
          `https://67f04f7e2a80b06b8897881d.mockapi.io/api/widget/${id}`
        );
        const data = await response.json();
        setSelectedWidget(data);
      } catch (error) {
        console.error("Error fetching widget data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWidgetData();
  }, [id, widgetList, setSelectedWidget]);

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleNewComment = (comment: Comment) => {
    setSelectedWidget((prev: Widget | null) => {
      if (!prev) return null;
      return {
        ...prev,
        comments: prev.comments ? [...prev.comments, comment] : [comment],
      };
    });
  };

  if (isLoading) {
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

  if (!selectedWidget) {
    return (
      <div className="py-20 text-lg text-center text-gray-400">
        Widget not found.
        <Link
          href="/"
          className="block mt-10 text-blue-400 underline hover:text-blue-300"
        >
          Back to Widgets
        </Link>
      </div>
    );
  }

  const comments = selectedWidget.comments || [];

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
            <FaShareAlt /> Share
          </button>

          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded hover:bg-gray-500">
            <FaBookmark /> Save
          </button>
        </div>

        <WidgetDetails widget={selectedWidget} />

        <CommentsSection
          widgetId={id}
          comments={comments}
          addNewComment={handleNewComment}
        />
      </div>
    </main>
  );
}
