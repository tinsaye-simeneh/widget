export default function CommentsSection() {
  const mockComments = [
    {
      id: "1",
      author: "dolorque",
      timestamp: "24 mins ago",
      content:
        "I wouldn't call concurrent futures more 'advanced' - it's a simpler interface that works very much the same regardless of whether you use multiple threads or multiple processes as the underlying parallelization gimmick.",
      likes: 18,
    },
    // Add more mock comments as needed
  ];

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Comments</h2>
      {mockComments.map((comment) => (
        <div key={comment.id} className="bg-gray-800 p-4 rounded-lg mb-2">
          <div className="flex justify-between">
            <span className="font-semibold">{comment.author}</span>
            <span className="text-gray-400">{comment.timestamp}</span>
          </div>
          <p className="mt-2">{comment.content}</p>
          <div className="mt-2 flex space-x-2">
            <button className="text-gray-400 hover:text-white">Reply</button>
            <button className="text-gray-400 hover:text-white">
              {comment.likes} Likes
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
