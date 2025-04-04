"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBell } from "react-icons/fa";

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 py-4 bg-gray-800 shadow-md">
      <nav className="container flex items-center justify-between px-4 mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tight text-white">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={30}
            height={30}
            className="inline-block mr-2 rounded"
          />
          abyss
        </Link>

        <div className="flex items-center space-x-6 text-gray-300">
          <Link href="/" className="hover:text-blue-400">
            Widgets
          </Link>
          <Link href="/requests" className="hover:text-blue-400">
            Requests
          </Link>
          <Link href="/create" className="hover:text-blue-400">
            Create
          </Link>

          <div className="relative" ref={notificationRef}>
            <button
              onClick={toggleNotifications}
              className="relative p-2 rounded-full hover:bg-gray-700"
              aria-label="Notifications"
            >
              <FaBell className="text-xl text-white" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {showNotifications && (
              <div className="absolute right-0 z-50 w-64 mt-2 bg-white rounded shadow-lg">
                <div className="px-4 py-2 font-medium text-gray-800 border-b">
                  Notifications
                </div>
                <ul className="overflow-y-auto text-sm text-gray-700 divide-y max-h-60">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    New widget added:{" "}
                    <span className="font-medium">Hotel Ads</span>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    Your request has been approved.
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    Welcome to Abyss! Explore the widgets.
                  </li>
                </ul>
                <div className="px-4 py-2 text-xs text-center text-blue-500 cursor-pointer hover:underline">
                  View all
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
