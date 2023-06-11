const NavElements = ({ navList }) => {
  return (
    <ul className="md:flex md:w-full justify-center gap-6 text-gray items-center list-none hidden w-0">
      {navList?.map((redirect) => {
        if (redirect === "Dashboard") {
          return (
            <a
              href={"#"}
              key={redirect}
              className="font-semibold text-primary text-[12px] capitalize"
            >
              {redirect}
            </a>
          );
        } else if (redirect === "Timeline") {
          return (
            <a
              href={"#"}
              key={redirect}
              className="font-semibold text-[12px] text-purple pb-1 border-b-2 border-purple capitalize"
            >
              {redirect}
            </a>
          );
        } else {
          return (
            <a
              href={"#"}
              key={redirect}
              className="font-semibold text-[12px] text-secondary capitalize"
            >
              {redirect}
            </a>
          );
        }
      })}
    </ul>
  );
};

export default NavElements;
