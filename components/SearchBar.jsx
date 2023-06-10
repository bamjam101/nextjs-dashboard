import React from "react";
import Icon from "./Icon";

const SearchBar = () => {
  return (
    <section className="relative p-2 rounded-md flex justify-center items-center">
      <Icon size={"lg"} url={"search.png" || null} />
      <input
        className="p-1 font-light"
        placeholder="Search Tasks"
        type="text"
      />
      <Icon size={"lg"} url={"exit.png" || null} />
    </section>
  );
};

export default SearchBar;
