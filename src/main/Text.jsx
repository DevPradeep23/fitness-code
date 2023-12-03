import React from "react";

const Text = ({ head, text }) => {
  return (
    <div className="">
      <h4 className="text-[#ffab07] lg:text-[23px] md:text-[20px] text-[15px] lg:font-semibold">
        {head}
      </h4>
      <h4 className="text-[#fff] lg:text-[23px] md:text-[17px] text-[15px] lg:font-semibold">
        {text}
      </h4>
    </div>
  );
};

export default Text;
