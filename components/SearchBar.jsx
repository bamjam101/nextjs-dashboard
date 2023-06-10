import React from "react";
import Icon from "./Icon";

const SearchBar = ({ exitDisabled }) => {
  return (
    <section className="relative px-3 py-1 bg-white rounded-lg shadow-sm flex justify-center items-center">
      <Icon size={"sm"} url={"search.png" || null} />
      <input
        className="p-1 font-light text-sm outline-none w-full"
        placeholder="Search Tasks"
        type="text"
      />

      {!exitDisabled && <Icon size={"sm"} url={"exit.png" || null} />}
    </section>
  );
};

export default SearchBar;
