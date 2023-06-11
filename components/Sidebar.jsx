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
    },
    {
      text: "Drive Files",
      left: "drive.svg",
      right: null,
    },
    {
      text: "Boards",
      left: "addition.svg",
      right: null,
    },
    {
      text: "Updates",
      left: "clock.svg",
      right: null,
    },
    {
      text: "Analytics",
      left: "load.svg",
      right: null,
    },
    {
      text: "Ecommerce",
      left: "tag.svg",
      right: null,
    },
    {
      text: "CRM Dashboard",
      left: "boxes.svg",
      right: null,
    },
    {
      text: "Cryptocurrency",
      left: "directory.svg",
      right: null,
    },
    {
      text: "Projects",
      left: "secure.svg",
      right: null,
    },
    {
      text: "NFT Marketplace",
      left: "browse.svg",
      right: null,
    },
    {
      text: "Settings",
      left: "setting.svg",
      right: null,
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
    },
    {
      text: "Brand Logo Design",
      left: "hashtag.svg",
      right: null,
    },
    {
      text: "User Research",
      left: "hashtag.svg",
      right: null,
    },
    {
      text: "Market Sales",
      left: "hashtag.svg",
      right: null,
    },
    {
      text: "New Project Template",
      left: "hashtag.svg",
      right: null,
    },
  ];
  return (
    <section
      className={`transition-all duration-300 border-r-2 border-black/10 ${
        isSidebarOpen
          ? "w-screen md:w-[18%] translate-x-0"
          : "w-0 -translate-x-48"
      }`}
    >
      <header className="flex justify-between items-center min-h-[4rem] px-8 transition-all border-b-2 border-black/10">
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
      <section className="flex justify-between px-8 pt-8 pb-4 items-center border-b-2 border-black/10">
        <div className="flex justify-evenly gap-3">
          <Icon url={"user.svg"} size={"xl"} />
          <div className="flex flex-col gap-2">
            <p className="font-bold text-sm">Nancy Martino</p>
            <p className="font-semibold text-xs">Designer</p>
          </div>
        </div>
        <Icon url={"expand.svg"} size={"sm"} />
      </section>
      <section className="w-full flex flex-col pt-4 gap-6 px-8 justify-center items-center">
        {sidebarItems?.map((item) => {
          if (item?.left == null) {
            return (
              <div className="w-full flex justify-between items-center text-gray">
                <h3 className="text-sm font-semibold">{item.text}</h3>
                <Icon url={item.right} size={"md"} />
              </div>
            );
          } else {
            return (
              <div className="w-full flex gap-4 items-center">
                <Icon url={item.left} size={"md"} />
                <p className="text-xs">{item.text}</p>
              </div>
            );
          }
        })}
      </section>
    </section>
  );
};

export default Sidebar;
