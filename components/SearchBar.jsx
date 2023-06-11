import React from "react";
import Icon from "./Icon";

const SearchBar = ({ exitDisabled }) => {
  return (
    <section className="relative px-3 py-1 bg-white rounded-lg shadow-sm w-full md:w-auto flex justify-start items-center">
      <Icon size={"md"} url={"search.svg" || null} />
      <input
        className="p-1 font-light text-sm outline-none w-full"
        placeholder="Search Tasks"
        type="text"
      />

      {!exitDisabled && <Icon size={"md"} url={"exit.svg" || null} />}
    </section>
  );
};

export default SearchBar;
