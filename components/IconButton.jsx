import React from "react";
import Icon from "./Icon";

const IconButton = ({ explicit, url, size, buttonText }) => {
  return (
    <section
      className={`cursor-pointer ${explicit} flex justify-center items-center px-4 py-2 rounded-lg gap-2`}
    >
      <Icon url={url} size={size} />
      {buttonText && (
        <span className="text-sm font-bold capitalize">{buttonText}</span>
      )}
    </section>
  );
};

export default IconButton;
