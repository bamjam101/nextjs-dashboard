import Icon from "./Icon";

const IconButton = ({ explicit, url, size, buttonText, iconExplicit }) => {
  return (
    <section
      className={`cursor-pointer ${explicit} flex justify-center items-center px-5 py-1 gap-2`}
    >
      <Icon url={url} size={size} explicit={iconExplicit} />
      {buttonText && (
        <span className="text-xs font-bold hidden capitalize md:block">
          {buttonText}
        </span>
      )}
    </section>
  );
};

export default IconButton;
