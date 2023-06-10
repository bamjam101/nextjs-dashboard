import React from "react";
import Icon from "./Icon";

const UserList = () => {
  return (
    <section className="w-full flex justify-end items-center">
      <Icon
        url={"user.svg"}
        size={"lg"}
        explicit={"rounded-full p-[2px] bg-white"}
      />
      <Icon
        url={"user.svg"}
        size={"lg"}
        explicit={"rounded-full p-[2px] bg-white"}
      />
      <Icon
        url={"user.svg"}
        size={"lg"}
        explicit={"rounded-full p-[2px] bg-white"}
      />
      <div className="ml-2">
        <Icon
          url={"add.svg"}
          size={"xl"}
          explicit={"p-[3px] bg-white rounded-full border-3px"}
        />
      </div>
    </section>
  );
};

export default UserList;
