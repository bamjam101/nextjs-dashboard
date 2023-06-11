import Icon from "./Icon";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const sidebarItems = [
    {
      text: "Dashboards",
      left: null,
      right: "up.svg",
    },
    {
      text: "Inbox",
      left: "gallery.svg",
      right: null,
      popups: "2",
    },
    {
      text: "Drive Files",
      left: "drive.svg",
      right: null,
      popups: "4",
    },
    {
      text: "Boards",
      left: "addition.svg",
      right: null,
      popups: "1",
    },
    {
      text: "Updates",
      left: "clock.svg",
      right: null,
      popups: "120",
    },
    {
      text: "Analytics",
      left: "load.svg",
      right: null,
      popups: "10",
    },
    {
      text: "Ecommerce",
      left: "tag.svg",
      right: null,
      popups: "24",
    },
    {
      text: "CRM Dashboard",
      left: "boxes.svg",
      right: null,
      popups: "12",
    },
    {
      text: "Cryptocurrency",
      left: "directory.svg",
      right: null,
      popups: "4",
    },
    {
      text: "Project",
      left: "secure.svg",
      right: null,
      popups: "5",
    },
    {
      text: "NFT Marketplace",
      left: "browse.svg",
      right: null,
      popups: "7",
    },
    {
      text: "Settings",
      left: "setting.svg",
      right: null,
      popups: null,
    },
    {
      text: "Projects",
      left: null,
      right: "up.svg",
    },
    {
      text: "Additional Calendar",
      left: "hashtag.svg",
      right: null,
      popups: null,
    },
    {
      text: "Brand Logo Design",
      left: "hashtag.svg",
      right: null,
      popups: "2",
    },
    {
      text: "User Research",
      left: "hashtag.svg",
      right: null,
      popups: "3",
    },
    {
      text: "Market Sales",
      left: "hashtag.svg",
      right: null,
      popups: "16",
    },
    {
      text: "New Project Template",
      left: "hashtag.svg",
      right: null,
      popups: "8",
    },
  ];
  return (
    <section
      className={`transition-all duration-300 border-r-[1px] border-gray/10 ${
        isSidebarOpen
          ? "w-screen md:w-[19%] translate-x-0"
          : "w-0 -translate-x-48"
      }`}
    >
      <header className="flex justify-between items-center min-h-[5.5rem] px-8 transition-all border-b-[1px] border-gray/10">
        <h1 className="text-xs sm:text-sm md:text-base lg:text-md xl:text-lg font-bold capitalize">
          Dashboard
        </h1>
        <figure
          onClick={() => setIsSidebarOpen(isSidebarOpen ? false : true)}
          className="grid place-items-center cursor-pointer"
        >
          <Icon size={"md"} url={"close.svg"} />
        </figure>
      </header>
      <section className="flex justify-between px-10 pt-10 pb-8 items-center border-b-[1px] border-gray/10">
        <div className="flex justify-evenly gap-4">
          <Icon url={"user.svg"} size={"xl"} />
          <div className="flex flex-col gap-2">
            <p className="font-bold text-sm">Nancy Martino</p>
            <p className="font-semibold text-gray-lighter text-xs">Designer</p>
          </div>
        </div>
        <Icon url={"expand.svg"} size={"sm"} />
      </section>
      <section className="w-full flex flex-col pt-8 gap-6 px-8 justify-center items-center">
        {sidebarItems?.map((item) => {
          if (item?.left == null) {
            return (
              <div
                key={item.text}
                className="w-full flex justify-between items-center text-gray"
              >
                <h3 className="uppercase text-xs font-semibold">{item.text}</h3>
                <Icon url={item.right} size={"md"} />
              </div>
            );
          } else {
            return (
              <div
                key={item.text}
                className="w-full flex items-center justify-between"
              >
                <span className="flex gap-4">
                  <Icon url={item.left} size={"md"} />
                  <p className="text-xs font-bold">{item.text}</p>
                </span>
                {item?.popups && (
                  <span className="text-xs min-h-[24px] min-w-[24px] p-1 rounded-full font-bold flex justify-center items-center text-blue bg-blue">
                    {item.popups}
                  </span>
                )}
              </div>
            );
          }
        })}
      </section>
    </section>
  );
};

export default Sidebar;
