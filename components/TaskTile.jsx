import TaskHeader from "./TaskHeader";
import TaskTags from "./TaskTags";
import TaskTileFooter from "./TaskTileFooter";

const TaskTile = ({ task }) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-white p-4 shadow-sm">
      <TaskHeader title={task?.title} verified={task?.verified} />
      <TaskTags tags={task?.tags} tagList={task?.tags?.tagList} />
      <TaskTileFooter
        pinned={task?.pinned}
        comments={task?.comments}
        userList={task?.userList}
      />
    </div>
  );
};

export default TaskTile;
