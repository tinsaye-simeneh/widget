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
      id: Date.now().toString(), // Simple ID generation
      author: "User", // Replace with authenticated user name in a real app
      timestamp: new Date().toLocaleString(), // Current timestamp
      content: comment,
      likes: 0,
    };

    addComment(selectedWidget.id, newComment);
    setComment(""); // Clear the input after submission
  };

  return (
    <div className="mt-6">
      <h2 className="mb-2 text-xl font-bold text-white">
        Share your thoughts...
      </h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 text-white bg-gray-800 border border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Write your comment here..."
        />
        <button
          type="submit"
          disabled={!comment.trim()}
          className="px-4 py-2 mt-2 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
