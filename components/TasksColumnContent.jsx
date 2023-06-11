import React from "react";
import Icon from "./Icon";
import TaskTile from "./TaskTile";

const TasksColumnContent = ({ data }) => {
  return (
    <section className="flex flex-col gap-5">
      {data?.map((task) => (
        <TaskTile key={task.title} task={task} />
      ))}
    </section>
  );
};

export default TasksColumnContent;
