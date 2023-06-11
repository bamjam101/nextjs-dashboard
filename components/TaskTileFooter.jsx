import React from "react";
import UserList from "./UserList";
import Icon from "./Icon";

const TaskTileFooter = ({ userList, comments, pinned }) => {
  return (
    <section className="w-full flex justify-between items-center">
      <div>
        {userList?.length && <UserList showCount={2} users={userList} />}
      </div>
      <div className="flex gap-3">
        <div className="flex gap-1 flex-grow">
          <Icon url={pinned[0] ? "pin-purple.svg" : "pin.svg"} size={"md"} />
          <p className="text-sm text-gray">{pinned[1]}</p>
        </div>
        <div className="flex gap-1">
          <Icon
            url={comments[0] ? "comment-yellow.svg" : "comment.svg"}
            size={"md"}
          />
          <p className="text-sm text-gray">{comments[1]}</p>
        </div>
      </div>
    </section>
  );
};

export default TaskTileFooter;
