"use client";

import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export default function CommentsSection({
  comments,
  widgetId,
  addNewComment,
}: {
  comments: {
    id: string;
    author: string;
    timestamp: string;
    content: string;
    likes: number;
  }[];
  widgetId: string;
  addNewComment: (comment: {
    id: string | null;
    author: string | null;
    timestamp: string | null;
    content: string | null;
    likes: number | string | null;
  }) => void;
}) {
  const [likedComments, setLikedComments] = useState<{
    [key: string]: boolean;
  }>({});
  const [dislikedComments, setDislikedComments] = useState<{
    [key: string]: boolean;
  }>({});
  const [newComment, setNewComment] = useState<string>("");
  const [isPosting, setIsPosting] = useState<boolean>(false);

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

  const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setIsPosting(true);

    try {
      const newCommentData = {
        author: "newUser",
        timestamp: "Just now",
        content: newComment,
        likes: 0,
      };

      const response = await fetch(
        `https://67f04f7e2a80b06b8897881d.mockapi.io/api/widget/${widgetId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comments: [...comments, newCommentData],
          }),
        }
      );

      if (response.ok) {
        const updatedWidget = await response.json();
        addNewComment(updatedWidget.comments);
        setNewComment("");
      } else {
        console.error("Failed to post comment");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="mt-12">
      <h2 className="mb-4 text-xl font-semibold text-white">
        Share your thoughts
      </h2>

      <form onSubmit={handlePostComment} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment..."
          rows={4}
          className="w-full p-3 bg-[#1F2A2B] text-white rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 mt-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500"
          disabled={isPosting}
        >
          {isPosting ? "Posting..." : "Post Comment"}
        </button>
      </form>

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
