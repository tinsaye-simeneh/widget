import type { Metadata } from "next";
import "./globals.css";
import "../styles/custom.scss";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Widget App",
  description: "A Next.js app for displaying widgets and their details",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
