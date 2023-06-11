import Icon from "./Icon";

const TaskHeader = ({ title, verified }) => {
  return (
    <header
      className="flex justify-between items-center text-xs font-semibold gap-5 text-gray-secondary"
      key={title}
    >
      <h4>{title}</h4>{" "}
      <div className="flex gap-2 justify-center items-center">
        <Icon
          url={verified[0] ? "verify-blue.svg" : "verify.svg"}
          size={"md"}
        />
        <span
          className={`${
            verified[0] ? "text-sky" : "text-gray"
          } text-xs font-bold`}
        >
          {verified[1]}
        </span>
      </div>
    </header>
  );
};

export default TaskHeader;
