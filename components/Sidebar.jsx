import React from "react";
import Icon from "./Icon";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <section className="absolute top-0 left-0">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold capitalize">Dashboard</h1>
        <Icon size={"xl"} url={"close.png"} />
      </header>
    </section>
  );
};

export default Sidebar;
