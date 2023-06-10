import React from "react";
import TasksColumn from "./TasksColumn";

const TasksGrid = () => {
  const backlogTasksData = [];
  const todoTasksData = [];
  const inProgressTasksData = [];
  const doneTasksData = [];
  return (
    <section className="grid grid-cols-4 py-4 gap-8 px-8">
      <TasksColumn header={"Backlog Tasks"} data={backlogTasksData} />
      <TasksColumn header={"To Do Tasks"} data={todoTasksData} />
      <TasksColumn header={"In Progress"} data={inProgressTasksData} />
      <TasksColumn header={"Done"} data={doneTasksData} />
    </section>
  );
};

export default TasksGrid;
