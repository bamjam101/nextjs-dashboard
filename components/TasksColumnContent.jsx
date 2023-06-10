import React from "react";
import Icon from "./Icon";

const TasksColumnContent = ({ data }) => {
  return (
    <section className="flex flex-col bg-white w-full p-4 gap-2 rounded-lg">
      {data?.map((task) => (
        <>
          <header
            className="flex justify-between items-center"
            key={task?.title}
          >
            {task?.title} <Icon url={"verify.svg"} size={"md"} />
          </header>
          <div className="flex gap-1">
            {task?.tags.map((tag) => (
              <span className="p-2 rounded-lg text-xs font-bold">{tag}</span>
            ))}
          </div>
        </>
      ))}
    </section>
  );
};

export default TasksColumnContent;
