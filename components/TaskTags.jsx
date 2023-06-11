"use client";
import React, { useEffect, useState } from "react";

const TaskTags = ({ tagList, tags }) => {
  const [randomColor, setRandomColor] = useState("");
  useEffect(() => {
    if (tags?.columnTag?.name === "Backlog") {
      setRandomColor("text-pink bg-pink");
    } else if (tags?.columnTag?.name === "To Do") {
      setRandomColor("text-purple bg-purple");
    } else if (tags?.columnTag?.name === "In Progress") {
      setRandomColor("text-green bg-green");
    } else {
      setRandomColor("text-yellow bg-yellow");
    }
  }, []);
  return (
    <div className="flex gap-1">
      <span className="py-1 rounded-full border-2 border-gray/10 px-2 text-[8px] text-gray font-bold">{`#${tags?.uid}`}</span>
      {tagList?.map((tag) => (
        <span
          key={tag}
          className={`py-1 rounded-full text-[8px] px-2 font-bold ${randomColor}`}
        >
          {tag}
        </span>
      ))}
      <span
        className={`py-1 rounded-full text-[8px] text-gray px-2 font-bold ${
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
