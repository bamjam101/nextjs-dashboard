"use client";
import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import UserList from "./UserList";
import TaskHeader from "./TaskHeader";
import TaskTags from "./TaskTags";
import TaskTileFooter from "./TaskTileFooter";

const TaskTile = ({ task }) => {
  const [randomColor, setRandomColor] = useState("text-yellow bg-yellow");
  useEffect(() => {
    if (task?.tags?.columnTag?.tag === "Backlog") {
      setRandomColor("text-pink bg-pink");
    } else if (task?.tags?.columnTag?.tag === "To Do") {
      setRandomColor("text-purple bg-purple");
    } else if (task?.tags?.columnTag?.tag === "In Progress") {
      setRandomColor("text-green bg-green");
    }
  }, []);
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-white p-5 shadow-sm">
      <TaskHeader title={task?.title} verified={task?.verified} />
      <TaskTags tags={task?.tags} tagList={task?.tagList} />
      <TaskTileFooter
        pinned={task?.pinned}
        comments={task?.comments}
        userList={task?.userList}
      />
    </div>
  );
};

export default TaskTile;
