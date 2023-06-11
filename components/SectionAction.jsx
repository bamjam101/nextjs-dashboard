import React from "react";
import IconButton from "./IconButton";
import SearchBar from "./SearchBar";
import SectionHeaderIconList from "./SectionHeaderIconList";
import Icon from "./Icon";

const SectionAction = () => {
  return (
    <article className="px-8 hidden lg:flex text-black-light justify-between py-4">
      <section className="flex border-r-[1px] gap-[1px] border-gray/10 pr-6">
        <IconButton
          explicit={"bg-white rounded-l-lg shadow-sm"}
          url={"grid.svg"}
          size={"sm"}
          buttonText={"Board View"}
        />
        <IconButton
          explicit={"bg-white rounded-r-lg shadow-sm"}
          url={"list.svg"}
          size={"md"}
          buttonText={"List View"}
        />
      </section>
      <section className="flex border-r-[1px] gap-1 border-gray/10 pr-3">
        <IconButton
          url={"lock.svg"}
          size={"md"}
          buttonText={"Limited Access"}
        />
        <figure className="grid place-items-center">
          <Icon size={"md"} url={"drop.svg"} />
        </figure>
      </section>
      <section className="flex items-center gap-1 px-2">
        <span className="font-semibold text-xs">Owners</span>
        <IconButton
          url={"twitter.svg"}
          size={"sm"}
          buttonText={"Twitter Team"}
          iconExplicit={"p-2 shadow-sm rounded-full bg-white"}
        />
      </section>
      <section className="hidden lg:block pr-auto">
        <SearchBar exitDisabled={true} />
      </section>
      <SectionHeaderIconList />
    </article>
  );
};

export default SectionAction;
