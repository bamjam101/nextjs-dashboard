"use client";

import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import TasksGrid from "@components/TasksGrid";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <main className="relative min-w-screen flex overflow-hidden md:overflow-auto">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <section
        className={` transition-opacity duration-100  ${
          isSidebarOpen
            ? "opacity-0 pointer-events-none w-0 md:w-[82%] md:opacity-100 md:pointer-events-auto"
            : " w-[100%] md:w-full"
        }`}
      >
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <TasksGrid />
      </section>
    </main>
  );
}
