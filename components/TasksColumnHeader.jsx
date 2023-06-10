import React from "react";
import Icon from "./Icon";

const TasksColumnHeader = ({ columnHeader }) => {
  return (
    <header className="flex justify-between">
      <h3 className="font-bold">{columnHeader}</h3>
      <Icon url={"more.svg"} size={"md"} />
    </header>
  );
};

export default TasksColumnHeader;
