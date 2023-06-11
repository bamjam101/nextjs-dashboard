import React from "react";
import Icon from "./Icon";
import NavElements from "./NavElements";
import UserList from "./UserList";

const SectionHeader = () => {
  return (
    <section className="flex pt-8 pb-4 px-8">
      <h2 className="flex gap-10 w-full justify-start items-center text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold capitalize">
        Task Boards <Icon url={"edit.svg"} size={"md"} />
      </h2>
      <NavElements
        navList={["Timeline", "Calendar", "Dashboard", "Progress", "More"]}
      />
      <UserList
        placement={"justify-end"}
        showCount={"5"}
        users={[
          "user.svg",
          "user.svg",
          "user.svg",
          "user.svg",
          "user.svg",
          "user.svg",
          "user.svg",
          "user.svg",
        ]}
      />
    </section>
  );
};

export default SectionHeader;
