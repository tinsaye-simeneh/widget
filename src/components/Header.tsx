"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 bg-gray-800 shadow-md">
      <nav className="container flex items-center justify-between px-4 mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tight text-white">
          abyss
        </Link>
        <div className="space-x-6">
          <Link
            href="/"
            className="text-gray-300 transition-colors hover:text-blue-400"
          >
            Widgets
          </Link>
          <Link
            href="/requests"
            className="text-gray-300 transition-colors hover:text-blue-400"
          >
            Requests
          </Link>
          <Link
            href="/create"
            className="text-gray-300 transition-colors hover:text-blue-400"
          >
            Create
          </Link>
        </div>
      </nav>
    </header>
  );
}
