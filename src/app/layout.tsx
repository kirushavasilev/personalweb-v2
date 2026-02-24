import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kirillvasilev.com"),
  title: {
    default: "Kirill Vasilev",
    template: "%s | Kirill Vasilev",
  },
  description: "UC Berkeley ECE undergraduate. Interested in cryptography, quantum computing, space exploration, communication technology, infrastructure, robotics, and RF.",
  keywords: ["Kirill Vasilev", "UC Berkeley", "ECE", "Electrical Engineering", "Computer Engineering", "Robotics", "Quantum Computing", "Space Exploration", "Kirill Vasilev berkeley", "Berkeley",],
  authors: [{ name: "Kirill Vasilev", url: "https://kirillvasilev.com" }],
  creator: "Kirill Vasilev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kirillvasilev.com",
    title: "Kirill Vasilev",
    description: "UC Berkeley engineering undergraduate. Interested in cryptography, quantum computing, space exploration, communication technology, infrastructure, robotics, and RF.",
    siteName: "Kirill Vasilev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kirill Vasilev",
    description: "UC Berkeley engineering undergraduate. Interested in cryptography, quantum computing, space exploration, communication technology, infrastructure, robotics, and RF.",
    creator: "@yourtwitterhandle", // User can change this later
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
