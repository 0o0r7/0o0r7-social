'use client';

import { useState } from 'react';

interface Post {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  image?: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      author: 'Web3 Creator',
      content: 'Just launched my first post on 0o0r7! This is amazing.',
      timestamp: '2 hours ago',
      likes: 42,
      comments: 8,
    },
  ]);

  const [newPost, setNewPost] = useState('');

  const handleCreatePost = () => {
    if (newPost.trim()) {
      const post: Post = {
        id: Date.now().toString(),
        author: 'You',
        content: newPost,
        timestamp: 'now',
        likes: 0,
        comments: 0,
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="flex gap-6 p-6 max-w-6xl mx-auto">
      {/* Sidebar */}
      <aside className="w-64 space-y-4">
        <div className="bg-gray-800 rounded-lg p-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-full transition">
            Share
          </button>
        </div>
        <nav className="bg-gray-800 rounded-lg p-4 space-y-3">
          <div className="cursor-pointer hover:bg-gray-700 p-3 rounded">🏠 Home</div>
          <div className="cursor-pointer hover:bg-gray-700 p-3 rounded">🔍 Explore</div>
          <div className="cursor-pointer hover:bg-gray-700 p-3 rounded">❤️ Likes</div>
          <div className="cursor-pointer hover:bg-gray-700 p-3 rounded">💬 Messages</div>
          <div className="cursor-pointer hover:bg-gray-700 p-3 rounded">👤 Profile</div>
        </nav>
      </aside>

      {/* Feed */}
      <main className="flex-1 max-w-2xl">
        {/* Create Post */}
        <div className="bg-gray-800 rounded-lg p-4 mb-4">
          <textarea
            className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 placeholder-gray-400 resize-none"
            placeholder="What's happening?!"
            rows={4}
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <div className="flex justify-end mt-3 gap-2">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition" onClick={handleCreatePost}>
              Post
            </button>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition cursor-pointer">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{post.author}</span>
                    <span className="text-gray-500 text-sm">@{post.author.toLowerCase()} • {post.timestamp}</span>
                  </div>
                  <p className="mt-2 text-gray-100">{post.content}</p>
                  <div className="flex gap-4 mt-3 text-gray-500 text-sm">
                    <div className="hover:text-blue-500 cursor-pointer">💬 {post.comments}</div>
                    <div className="hover:text-red-500 cursor-pointer">❤️ {post.likes}</div>
                    <div className="hover:text-green-500 cursor-pointer">🔄 Share</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Trending Sidebar */}
      <aside className="w-72 space-y-4">
        <div className="bg-gray-800 rounded-lg p-4">
          <div className="text-gray-500 text-sm mb-2">What's happening?!</div>
          <div className="space-y-3">
            <div className="p-3 hover:bg-gray-700 cursor-pointer rounded transition">
              <div className="font-bold">#Web3</div>
              <div className="text-gray-500 text-sm">150.5K posts</div>
            </div>
            <div className="p-3 hover:bg-gray-700 cursor-pointer rounded transition">
              <div className="font-bold">#BaseChain</div>
              <div className="text-gray-500 text-sm">89.3K posts</div>
            </div>
            <div className="p-3 hover:bg-gray-700 cursor-pointer rounded transition">
              <div className="font-bold">#Community</div>
              <div className="text-gray-500 text-sm">234.2K posts</div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
