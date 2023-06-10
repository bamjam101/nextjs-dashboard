import React from "react";

const NavElements = () => {
  const navList = ["Dashboard", "My Tasks", "Reporting", "Portfolios", "Goals"];
  return (
    <ul className="flex w-full justify-center gap-3 items-center list-none">
      {navList?.map((redirect) => (
        <li className="font-bold capitalize">{redirect}</li>
      ))}
    </ul>
  );
};

export default NavElements;
