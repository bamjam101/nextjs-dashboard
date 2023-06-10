import React from "react";
import Icon from "./Icon";

const SectionHeaderIconList = () => {
  const iconList = [
    "verify.svg",
    "invert-pyramid.svg",
    "menu.svg",
    "rolls.svg",
    "group-edit.svg",
  ];
  return (
    <section className="flex justify-center h-full gap-4 pl-4 items-center">
      {iconList?.map((iconPath) => (
        <figure
          key={iconPath.split(".")[0]}
          className="cursor-pointer h-[38px] w-[38px] grid place-items-center p-2 rounded-md bg-white"
        >
          <Icon url={iconPath} size={"lg"} />
        </figure>
      ))}
    </section>
  );
};

export default SectionHeaderIconList;
