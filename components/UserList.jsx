import Icon from "./Icon";

const UserList = ({ users, placement, showCount }) => {
  return (
    <section className={`w-full flex items-center ${placement}`}>
      {users?.map((user, index) => {
        if (index < parseInt(showCount)) {
          return (
            <figure key={index} className="grid place-items-center">
              <Icon
                url={user}
                size={"xl"}
                explicit={"rounded-full p-[2px] bg-white"}
              />
            </figure>
          );
        }
      })}
      {users?.length > 1 && (
        <span className="h-9 w-9 rounded-full text-xs font-semibold bg-gray-light flex justify-center items-center ">
          +{users.length - showCount}
        </span>
      )}
      <Icon
        url={"add.svg"}
        size={"xl"}
        explicit={
          "p-2 ml-2 rounded-full border-2 border-dotted border-gray-light"
        }
      />
    </section>
  );
};

export default UserList;
