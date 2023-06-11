import React from "react";
import SearchBar from "./SearchBar";

import Navbar from "./Navbar";
import SectionHeader from "./SectionHeader";
import SectionAction from "./SectionAction";

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <header className={`flex flex-col`}>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <SectionHeader />
      <SectionAction />
    </header>
  );
};

export default Header;
