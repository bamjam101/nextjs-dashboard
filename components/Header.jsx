import React from "react";
import SearchBar from "./SearchBar";

import Navbar from "./Navbar";
import SectionHeader from "./SectionHeader";
import SectionAction from "./SectionAction";

const Header = () => {
  return (
    <header className="w-full flex flex-col px-8">
      <Navbar />
      <SectionHeader />
      <SectionAction />
    </header>
  );
};

export default Header;
