import React from "react";
import Icon from "./Icon";
import NavElements from "./NavElements";
import UserList from "./UserList";

const SectionHeader = () => {
  return (
    <section className="flex pt-8 pb-4">
      <h2 className="flex gap-10 w-full justify-start items-baseline text-3xl font-bold capitalize">
        Task Boards <Icon url={"edit.svg"} size={"md"} />
      </h2>
      <NavElements
        navList={["Timeline", "Calendar", "Dashboard", "Progress", "More"]}
      />
      <UserList />
    </section>
  );
};

export default SectionHeader;
