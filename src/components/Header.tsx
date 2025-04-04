"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 py-4 bg-gray-800 shadow-md">
      <nav className="container flex items-center justify-between px-4 mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tight text-white">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={30}
            height={30}
            className="inline-block mr-2"
          />
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
