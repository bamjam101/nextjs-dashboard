import React from "react";
import TasksColumnHeader from "./TasksColumnHeader";
import TasksColumnContent from "./TasksColumnContent";

const TasksColumn = ({ header, data }) => {
  return (
    <article className="flex flex-col gap-4">
      <TasksColumnHeader columnHeader={header} taskCount={data?.length} />
      <TasksColumnContent data={data} />
    </article>
  );
};

export default TasksColumn;
