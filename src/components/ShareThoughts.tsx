"use client";

import { useState } from "react";
import { useWidgetStore } from "../store/widgetStore";

export default function ShareThoughts() {
  const { selectedWidget, addComment } = useWidgetStore();
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || !selectedWidget) return;

    const newComment = {
      id: Date.now().toString(),
      author: "User",
      timestamp: new Date().toLocaleString(),
      content: comment,
      likes: 0,
    };

    addComment(selectedWidget.id, newComment);
    setComment("");
  };

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-4 rounded-xl bg-[#1F2A2B] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={4}
          placeholder="Write your comment here..."
        />
        <button
          type="submit"
          disabled={!comment.trim()}
          className="self-end px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
