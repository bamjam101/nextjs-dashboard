"use client";
import { useState } from "react";
import Icon from "./Icon";

const UserList = ({ users, placement, showCount }) => {
  return (
    <section className={`w-full flex items-center ${placement}`}>
      {users?.map((user, index) => {
        if (index < parseInt(showCount)) {
          return (
            <figure
              key={index}
              className={`grid p-[2px] bg-white rounded-full place-items-center ${
                index > 0 ? "-translate-x-4" : undefined
              }`}
            >
              <Icon
                url={user}
                size={"xl"}
                explicit={"rounded-full p-[2px] bg-white"}
              />
            </figure>
          );
        }
      })}
      {users?.length > 2 && (
        <span className="h-9 w-9 rounded-full text-xs font-semibold bg-gray-light flex justify-center items-center -translate-x-7">
          +{users.length - showCount}
        </span>
      )}
      <Icon
        url={"add.svg"}
        size={"xl"}
        explicit={`p-2 ml-2 rounded-full border-[2px] border-dotted border-gray-lighter ${
          users?.length > 2 ? "-translate-x-7" : "translate-x-0"
        }`}
      />
    </section>
  );
};

export default UserList;
