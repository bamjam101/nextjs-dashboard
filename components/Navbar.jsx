import React from "react";
import SearchBar from "./SearchBar";
import NavElements from "./NavElements";
import Icon from "./Icon";

const Navbar = () => {
  return (
    <nav className="w-full flex px-8 border-b-2 border-black/10 min-h-[4rem]">
      <div className="w-full flex items-center gap-10">
        <SearchBar />
        <Icon url={"mic.svg"} size={"sm"} />
      </div>
      <NavElements
        navList={["Dashboard", "My Tasks", "Reporting", "Portfolios", "Goals"]}
      />
      <section className="w-full flex gap-5 justify-end items-center">
        <Icon size={"md"} url={"file.svg"} />
        <Icon size={"md"} url={"bell.svg"} />
        <Icon
          size={"xl"}
          url={"user.svg"}
          explicit={"p-1 border-red border-2px rounded-full"}
        />
      </section>
    </nav>
  );
};

export default Navbar;
