import React from "react";
import Icon from "./Icon";

const TaskColumnFooter = () => {
  return (
    <button className="w-full py-1 shadow-sm bg-white rounded-lg flex justify-center items-center">
      <Icon url={"add.svg"} size={"md"} />
    </button>
  );
};

export default TaskColumnFooter;
