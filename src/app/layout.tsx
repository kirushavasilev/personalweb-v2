import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kirill Vasilev",
  description: "UC Berkeley ECE undergraduate. Interested in cryptography, quantum computing, space exploration, communication technology, infrastructure, robotics, and RF.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Inspired by Michael Truell's design at mntruell.com */}
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
