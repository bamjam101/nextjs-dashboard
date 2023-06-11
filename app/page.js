"use client";

import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import TasksGrid from "@components/TasksGrid";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <main className="relative min-w-screen flex">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <section className={`${isSidebarOpen ? "w-[82%]" : "w-full"}`}>
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <TasksGrid
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </section>
    </main>
  );
}
