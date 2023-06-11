import React, { useEffect, useState } from "react";
import Icon from "./Icon";

const TasksColumnHeader = ({ columnHeader, taskCount }) => {
  const [colorTheme, setColorTheme] = useState("text-green bg-green");
  useEffect(() => {
    if (columnHeader.includes("Backlog")) {
      setColorTheme("text-yellow bg-yellow");
    } else if (columnHeader.includes("To Do")) {
      setColorTheme("text-pink bg-pink");
    } else if (columnHeader.includes("In Progress")) {
      setColorTheme("text-purple bg-purple");
    }
  }, []);
  return (
    <header className="flex justify-between">
      <h3 className="flex gap-4 font-bold">
        {columnHeader}{" "}
        <span
          className={`h-5 w-5 flex justify-center items-center text-sm rounded-full ${colorTheme}`}
        >
          {taskCount}
        </span>
      </h3>
      <Icon url={"more.svg"} size={"md"} />
    </header>
  );
};

export default TasksColumnHeader;
