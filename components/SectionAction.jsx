import React from "react";
import IconButton from "./IconButton";
import SearchBar from "./SearchBar";
import SectionHeaderIconList from "./SectionHeaderIconList";
import Icon from "./Icon";

const SectionAction = () => {
  return (
    <section className="px-8 flex justify-between py-4">
      <section className="flex border-r-1 gap-1 border-gray-200 pr-4">
        <IconButton
          explicit={"bg-white"}
          url={"grid.svg"}
          size={"md"}
          buttonText={"Board View"}
        />
        <IconButton
          explicit={"bg-white"}
          url={"list.svg"}
          size={"md"}
          buttonText={"List View"}
        />
      </section>
      <section className="flex border-r-1 gap-1 border-gray-200 px-4">
        <IconButton
          url={"lock.svg"}
          size={"md"}
          buttonText={"Limited Access"}
        />
        <Icon size={"md"} url={"drop.svg"} />
      </section>
      <section className="flex items-center gap-1 px-2">
        <span className="font-semibold">Owners</span>
        <IconButton
          url={"twitter.svg"}
          size={"md"}
          buttonText={"Twitter Team"}
        />
      </section>
      <SearchBar exitDisabled={true} />
      <SectionHeaderIconList />
    </section>
  );
};

export default SectionAction;
