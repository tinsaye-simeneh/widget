"use client";

import { useState } from "react";
import { useWidgetStore } from "../store/widgetStore";
import { FaThumbsUp } from "react-icons/fa";

export default function CommentsSection() {
  const { selectedWidget } = useWidgetStore();
  const comments = selectedWidget?.comments || [];

  // Local state to track likes for each comment
  const [likedComments, setLikedComments] = useState<{
    [key: string]: boolean;
  }>({});

  const handleLike = (commentId: string) => {
    setLikedComments((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  return (
    <div className="mt-6">
      <h2 className="mb-4 text-xl font-bold text-white">Comments</h2>
      {comments.length === 0 ? (
        <p className="text-gray-400">
          No comments yet. Be the first to share your thoughts!
        </p>
      ) : (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 mb-3 bg-gray-800 rounded-lg shadow"
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-white">{comment.author}</span>
              <span className="text-sm text-gray-400">{comment.timestamp}</span>
            </div>
            <p className="mt-2 text-gray-300">{comment.content}</p>
            <div className="flex mt-3 space-x-3">
              <button className="text-gray-400 transition-colors hover:text-blue-400">
                Reply
              </button>
              <button
                onClick={() => handleLike(comment.id)}
                className={`flex items-center space-x-1 transition-colors ${
                  likedComments[comment.id]
                    ? "text-blue-400"
                    : "text-gray-400 hover:text-blue-400"
                }`}
              >
                <FaThumbsUp />
                <span>
                  {comment.likes + (likedComments[comment.id] ? 1 : 0)}
                </span>
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
