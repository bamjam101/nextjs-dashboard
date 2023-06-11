import SearchBar from "./SearchBar";
import NavElements from "./NavElements";
import Icon from "./Icon";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <nav className="w-full flex px-8 border-b-[1px] border-gray/10 min-h-[5.5rem]">
      <div className={`w-full flex items-center gap-10`}>
        {!isSidebarOpen && (
          <figure
            className="w-[20%] md:w-auto"
            onClick={() => setIsSidebarOpen(isSidebarOpen ? false : true)}
          >
            <Icon url={"menu.svg"} size={"xl"} />
          </figure>
        )}
        <SearchBar />
        <Icon url={"mic.svg"} size={"sm"} explicit={"hidden md:block"} />
      </div>
      <NavElements
        navList={["Dashboard", "My Tasks", "Reporting", "Portfolios", "Goals"]}
      />
      <section className="w-auto ml-5 md:ml-0 md:w-full flex gap-5 justify-end items-center">
        <Icon size={"md"} url={"file.svg"} explicit={"hidden md:block"} />
        <Icon size={"md"} url={"bell.svg"} explicit={"hidden md:block"} />
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
