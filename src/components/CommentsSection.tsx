"use client";

import { useState } from "react";
import { useWidgetStore } from "../store/widgetStore";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export default function CommentsSection() {
  const { selectedWidget } = useWidgetStore();
  const comments = selectedWidget?.comments || [];

  const [likedComments, setLikedComments] = useState<{
    [key: string]: boolean;
  }>({});
  const [dislikedComments, setDislikedComments] = useState<{
    [key: string]: boolean;
  }>({});

  const handleLike = (commentId: string) => {
    setLikedComments((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
    if (dislikedComments[commentId]) {
      setDislikedComments((prev) => ({ ...prev, [commentId]: false }));
    }
  };

  const handleDislike = (commentId: string) => {
    setDislikedComments((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
    if (likedComments[commentId]) {
      setLikedComments((prev) => ({ ...prev, [commentId]: false }));
    }
  };

  return (
    <div className="mt-12">
      <h2 className="mb-4 text-xl font-semibold text-white">
        Share your thoughts
      </h2>
      {comments.length === 0 ? (
        <p className="text-gray-400">
          No comments yet. Be the first to share your thoughts!
        </p>
      ) : (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-[#1F2A2B] p-4 rounded-xl mb-4 shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-white">{comment.author}</span>
                <span className="text-sm text-gray-500">
                  {comment.timestamp}
                </span>
                <span className="text-xs text-gray-500">(edited)</span>
              </div>
              <button className="text-lg text-gray-400 hover:text-blue-400">
                ...
              </button>
            </div>
            <p className="mb-3 text-gray-300">{comment.content}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <button className="text-gray-400 hover:text-blue-400">
                Reply
              </button>
              <button className="text-gray-400 hover:text-blue-400">
                View replies (2)
              </button>
              <button
                onClick={() => handleLike(comment.id)}
                className={`flex items-center gap-1 ${
                  likedComments[comment.id]
                    ? "text-blue-400"
                    : "text-gray-400 hover:text-blue-400"
                }`}
              >
                <FaThumbsUp />
                <span>
                  {comment.likes + (likedComments[comment.id] ? 1 : 0)}k
                </span>
              </button>
              <button
                onClick={() => handleDislike(comment.id)}
                className={`flex items-center gap-1 ${
                  dislikedComments[comment.id]
                    ? "text-blue-400"
                    : "text-gray-400 hover:text-blue-400"
                }`}
              >
                <FaThumbsDown />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
