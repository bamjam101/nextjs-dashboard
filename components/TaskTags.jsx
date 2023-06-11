"use client";
import React, { useEffect, useState } from "react";

const TaskTags = ({ tagList, tags }) => {
  const [randomColor, setRandomColor] = useState("text-yellow bg-yellow");
  useEffect(() => {
    if (tags?.columnTag?.tag === "Backlog") {
      setRandomColor("text-pink bg-pink");
    } else if (tags?.columnTag?.tag === "To Do") {
      setRandomColor("text-purple bg-purple");
    } else if (tags?.columnTag?.tag === "In Progress") {
      setRandomColor("text-green bg-green");
    }
  }, []);
  return (
    <div className="flex gap-1">
      <span className="py-1 rounded-full border-2 border-gray/10 px-2 text-xs text-gray font-bold">{`#${tags?.uid}`}</span>
      {tagList?.map((tag) => (
        <span
          className={`py-1 rounded-full px-2 text-xs font-bold ${randomColor}`}
        >
          {tag}
        </span>
      ))}
      <span
        className={`py-1 rounded-full text-xs text-gray px-2 font-bold ${
          tags.columnTag.color === "yellow"
            ? "text-yellow bg-yellow"
            : tags.columnTag.color === "pink"
            ? "text-pink bg-pink"
            : tags.columnTag.color === "purple"
            ? "text-purple bg-purple"
            : "text-green bg-green"
        }`}
      >
        {tags.columnTag?.name}
      </span>
    </div>
  );
};

export default TaskTags;
