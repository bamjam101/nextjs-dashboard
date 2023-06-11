import Icon from "./Icon";

const SearchBar = ({ exitDisabled }) => {
  return (
    <section className="relative px-3 py-2 bg-white rounded-lg shadow-sm w-full md:w-[70%] flex justify-start items-center">
      <Icon size={"md"} url={"search.svg" || null} />
      <input
        className="p-1 text-xs outline-none font-bold w-full"
        placeholder="Search Tasks"
        type="text"
      />

      {!exitDisabled && <Icon size={"md"} url={"exit.svg" || null} />}
    </section>
  );
};

export default SearchBar;
