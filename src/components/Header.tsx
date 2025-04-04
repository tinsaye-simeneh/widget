"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          abyss
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-blue-500">
            Widgets
          </Link>
          <Link href="/requests" className="text-white hover:text-blue-500">
            Requests
          </Link>
          <Link href="/create" className="text-white hover:text-blue-500">
            Create
          </Link>
        </div>
      </nav>
    </header>
  );
}
