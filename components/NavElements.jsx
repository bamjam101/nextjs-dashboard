import Link from "next/link";
import React from "react";

const NavElements = ({ navList }) => {
  return (
    <ul className="flex w-full justify-center gap-3 items-center list-none">
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
