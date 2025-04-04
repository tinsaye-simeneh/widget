"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useWidgetStore } from "../../../store/widgetStore";
import WidgetDetails from "../../../components/WidgetDetails";
import CommentsSection from "../../../components/CommentsSection";
import ShareThoughts from "../../../components/ShareThoughts";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <main className="min-h-screen bg-[#141A1B] py-10">
      <div className="container max-w-4xl px-4 mx-auto">
        <button
          onClick={() => router.push("/")}
          className="mb-6 text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to Widgets
        </button>

        <div className="relative w-full h-64 mb-8 overflow-hidden bg-gray-700 shadow-lg rounded-2xl">
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

        <WidgetDetails widget={selectedWidget} />

        <div className="mt-10">
          <h2 className="mb-2 text-xl font-semibold text-white">
            Example Output
          </h2>
          <a
            href="/example.pdf"
            download
            className="text-blue-400 underline hover:text-blue-300"
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
