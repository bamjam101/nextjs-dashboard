import TasksColumnHeader from "./TasksColumnHeader";
import TasksColumnContent from "./TasksColumnContent";
import TaskColumnFooter from "./TaskColumnFooter";

const TasksColumn = ({ header, data }) => {
  return (
    <article className="flex flex-col gap-8 pb-5 w-full border-b-[1px] border-gray/10 md:border-none">
      <TasksColumnHeader columnHeader={header} taskCount={data?.length} />
      <TasksColumnContent data={data} />
      <TaskColumnFooter />
    </article>
  );
};

export default TasksColumn;
