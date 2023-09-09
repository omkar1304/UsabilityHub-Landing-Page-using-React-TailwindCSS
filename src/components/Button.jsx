import React from "react";

const Button = ({ text, bgColor, textColor, borderWidth }) => {
  return (
    <div
      className={`${bgColor} ${textColor} px-5 py-2 font-medium text-[15px] max-xs:text-[9px] rounded-[4px] ${
        borderWidth == "true" ? "border-[1px] border-slate-400" : "border-0"
      } cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default Button;
