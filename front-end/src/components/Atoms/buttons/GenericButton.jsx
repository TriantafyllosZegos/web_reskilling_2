import { useState } from "react";

const GenericButton = ({
  text,
  borderColor,
  width,
  bgColor,
  textColor,
  onClick,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: isActive ? "white" : bgColor,
          color: isActive ? textColor : "white",
          borderColor: borderColor,
        }}
        className={`flex justify-center items-center px-[33px] py-[16px] gap-2 h-[57px] ${width} border-4 shadow-[0px_5px_8px_rgba(119,121,78,0.4)] rounded-full font-semibold transition-all`}
      >
        {text}
      </button>
    </div>
  );
};
export default GenericButton;
