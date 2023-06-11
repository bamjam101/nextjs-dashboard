import React from "react";
import Icon from "./Icon";
import NavElements from "./NavElements";
import UserList from "./UserList";

const SectionHeader = () => {
  return (
    <section className="w-full flex pt-10 pb-4 px-8">
      <h2 className="flex gap-2 sm:gap-4 md:gap-8 w-full justify-start items-center text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl font-bold capitalize">
        Task Boards <Icon url={"edit.svg"} size={"md"} />
      </h2>
      <NavElements
        navList={["Timeline", "Calendar", "Panel", "Progress", "Forms", "More"]}
      />
      <UserList
        placement={"justify-end translate-x-8"}
        showCount={"2"}
        users={[
          "user.svg",
          "user1.svg",
          "user2.svg",
          "user3.svg",
          "user4.svg",
          "user5.svg",
          "user1.svg",
          "user2.svg",
        ]}
      />
    </section>
  );
};

export default SectionHeader;
