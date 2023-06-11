import React from "react";
import Icon from "./Icon";

const TaskHeader = ({ title, verified }) => {
  return (
    <header
      className="flex justify-between items-center text-sm font-bold gap-5 text-gray-secondary"
      key={title}
    >
      <h4>{title}</h4>{" "}
      <div className="flex gap-1">
        <Icon
          url={verified[0] ? "verify-blue.svg" : "verify.svg"}
          size={"md"}
        />
        <span className="text-sm text-gray">{verified[1]}</span>
      </div>
    </header>
  );
};

export default TaskHeader;
