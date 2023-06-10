"use client";

import Header from "@components/Header";
import TasksGrid from "@components/TasksGrid";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMediumScreenDevice, setIsMediumScreenDevice] = useState(false);
  return (
    <main>
      <Header />
      <TasksGrid />
    </main>
  );
}
