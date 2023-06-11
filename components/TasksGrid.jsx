import TasksColumn from "./TasksColumn";

const TasksGrid = () => {
  const backlogTasksData = [
    {
      title: "Model Answer",
      tags: {
        uid: "UI007",
        tagList: ["Design"],
        columnTag: { name: "Backlog", color: "yellow" },
      },
      userList: [
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
      ],
      verified: [true, "4"],
      comments: [true, "2"],
      pinned: [true, "2"],
    },
    {
      title: "Create calendar chats and email app",
      tags: {
        uid: "UI005",
        tagList: ["Development"],
        columnTag: { name: "Backlog", color: "yellow" },
      },
      userList: [
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
      ],
      verified: [true, "4"],
      comments: [true, "2"],
      pinned: [true, "2"],
    },
    {
      title: "Product Design, Figma Prototyping",
      tags: {
        uid: "UI003",
        tagList: ["Project"],
        columnTag: { name: "Backlog", color: "yellow" },
      },
      userList: [
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
      ],
      verified: [false, "0"],
      comments: [true, "1"],
      pinned: [false, "0"],
    },
  ];
  const todoTasksData = [
    {
      title: "Model Answer",
      tags: {
        uid: "BC05",
        tagList: ["Design"],
        columnTag: { name: "To Do", color: "pink" },
      },
      userList: ["user.svg", "user.svg", "user.svg", "user.svg"],
      verified: [false, "0"],
      comments: [false, "0"],
      pinned: [true, "1"],
    },
    {
      title: "Add Authentication Page",
      tags: {
        uid: "UI008",
        tagList: [],
        columnTag: { name: "To Do", color: "pink" },
      },
      userList: ["user.svg"],
      verified: [false, "0"],
      comments: [false, "0"],
      pinned: [false, "0"],
    },
    {
      title: "Profile page structure",
      tags: {
        uid: "UI001",
        tagList: ["Design"],
        columnTag: { name: "To Do", color: "pink" },
      },
      userList: ["user.svg", "user.svg"],
      verified: [false, "0"],
      comments: [true, "4"],
      pinned: [true, "3"],
    },
  ];
  const inProgressTasksData = [
    {
      title: "Model Answer",
      tags: {
        uid: "BC02",
        tagList: ["Research"],
        columnTag: { name: "In Progress", color: "purple" },
      },
      verified: [true, "1"],
      comments: [true, "4"],
      pinned: [true, "2"],
    },
    {
      title: "Add Authentication Page",
      tags: {
        uid: "UI008",
        tagList: [],
        columnTag: { name: "In Progress", color: "purple" },
      },
      userList: ["user.svg", "user.svg"],
      verified: [false, "0"],
      comments: [false, "0"],
      pinned: [false, "0"],
    },
  ];
  const doneTasksData = [
    {
      title: "Model Answer",
      tags: {
        uid: "UI007",
        tagList: ["Design"],
        columnTag: { name: "Done", color: "green" },
      },
      userList: ["user.svg", "user.svg"],
      verified: [true, "4"],
      comments: [true, "2"],
      pinned: [true, "2"],
    },
    {
      title: "Model Answer",
      tags: {
        uid: "BC02",
        tagList: ["Research"],
        columnTag: { name: "Done", color: "green" },
      },
      verified: [true, "1"],
      comments: [true, "4"],
      pinned: [true, "2"],
    },
    {
      title: "Add Authentication Page",
      tags: {
        uid: "UI008",
        tagList: [],
        columnTag: { name: "Done", color: "green" },
      },
      userList: ["user.svg", "user.svg"],
      verified: [false, "0"],
      comments: [false, "0"],
      pinned: [false, "0"],
    },
    {
      title: "Create calendar chats and email app",
      tags: {
        uid: "UI005",
        tagList: ["Development"],
        columnTag: { name: "Done", color: "green" },
      },
      userList: [
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
      ],
      verified: [true, "4"],
      comments: [true, "2"],
      pinned: [true, "2"],
    },
    {
      title: "Product Design, Figma Prototyping",
      tags: {
        uid: "UI003",
        tagList: ["Project"],
        columnTag: { name: "Done", color: "green" },
      },
      userList: [
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
        "user.svg",
      ],
      verified: [true, "4"],
      comments: [true, "1"],
      pinned: [false, "0"],
    },
  ];
  return (
    <section
      className={`px-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8 gap-6`}
    >
      <TasksColumn header={"Backlog Tasks"} data={backlogTasksData} />
      <TasksColumn header={"To Do Tasks"} data={todoTasksData} />
      <TasksColumn header={"In Progress"} data={inProgressTasksData} />
      <TasksColumn header={"Done"} data={doneTasksData} />
    </section>
  );
};

export default TasksGrid;
