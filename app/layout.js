"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TickYourTask | Dashboard",
  description:
    "TickYourTask let's you schedule your tasks and tick them on the go.",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window != "undefined") {
      if (window.innerWidth < 720) {
        setIsMediumScreenDevice(true);
        setIsSidebarOpen(false);
      }
    }
  }, []);
  return (
    <html lang="en">
      <body className={`bg-main ${inter.className}`}>{children}</body>
    </html>
  );
}
