import React from "react";
import SearchBar from "./SearchBar";
import NavElements from "./NavElements";
import Icon from "./Icon";

const Header = () => {
  return (
    <header className="w-full flex justify-center items-center py-3">
      <SearchBar />
      <NavElements />
      <section className="flex justify-center items-center">
        <Icon size={"lg"} url={"file.png"} />
        <Icon size={"lg"} url={"bell.png"} />
        <Icon
          size={"xl"}
          url={"user.png"}
          explicit={"p-2 border-white border-3px rounded-full"}
        />
      </section>
    </header>
  );
};

export default Header;
