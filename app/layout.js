"use client";

import Header from "@components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@components/Footer";
import { useEffect, useState } from "react";
import Sidebar from "@components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TickYourTask | Dashboard",
  description:
    "TickYourTask let's you schedule your tasks and tick them on the go.",
};

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMediumScreenDevice, setIsMediumScreenDevice] = useState(false);

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
      <body className={inter.className}>
        <Header />
        <Sidebar isSidebarOpen={isSidebarOpen} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
