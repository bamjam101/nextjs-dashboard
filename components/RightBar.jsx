import React from "react";
import Icon from "./Icon";

const RightBar = ({ isSidebarOpen }) => {
  const rightBarUsersProfile = [
    { icon: "user.svg", color: "blue" },

    { icon: "user1.svg", color: "pink" },

    { icon: "MI", color: "sky" },

    { icon: "PR", color: "purple" },

    { icon: "user2.svg", color: "blue" },

    { icon: "user3.svg", color: "blue" },

    { icon: "go", color: "green" },

    { icon: "user4.svg", color: "blue" },

    { icon: "user5.svg", color: "blue" },

    { icon: "nY", color: "yellow" },
  ];
  return (
    <aside
      className={`relative ${
        isSidebarOpen ? "w-0" : "w-[10%] md:w-[5%]"
      }  border-l-[1px] border-gray/10 hidden md:block transition-all duration-300 overflow-hidden`}
    >
      <header className="min-h-[5.5rem] grid place-items-center border-b-[1px] border-gray/10">
        <Icon url={"x.svg"} size={"lg"} />
      </header>
      <section className="flex flex-col justify-center min-h-screen items-center gap-4">
        {rightBarUsersProfile?.map(({ icon, color }) => {
          if (icon?.includes("svg")) {
            return <Icon key={icon} url={icon} size={"lg"} />;
          } else {
            return (
              <span
                key={icon}
                className={`p-2 rounded-full shadow-sm flex justify-center items-center uppercase font-bold text-md text-${color} bg-${color}`}
              >
                {icon}
              </span>
            );
          }
        })}
      </section>
      <footer className="absolute w-full bottom-0 left-0 h-[5.5rem] grid place-items-center border-t-[1px] border-gray/10">
        <Icon url={"arrow.svg"} size={"lg"} />
      </footer>
    </aside>
  );
};

export default RightBar;
