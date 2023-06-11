import Link from "next/link";

const NavElements = ({ navList }) => {
  return (
    <ul className="md:flex w-full justify-center gap-3 text-gray items-center list-none hidden">
      {navList?.map((redirect) => (
        <Link
          href={"#"}
          key={redirect}
          className="font-semibold text-sm capitalize"
        >
          {redirect}
        </Link>
      ))}
    </ul>
  );
};

export default NavElements;
