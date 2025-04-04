import type { Metadata } from "next";
import "./globals.css";
import "../styles/custom.scss";

export const metadata: Metadata = {
  title: "Wigdet",
  description: "A simple widget for your website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
