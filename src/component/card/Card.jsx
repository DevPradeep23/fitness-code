import React from "react";
import Image from "next/image";

const SimpleCard = ({ Body }) => {
  return (
    <div className="bg-white w-[300px] lg:w-[350px] cursor-pointer py-8 flex justify-between align-center shadow-shadow md:hover:shadow-shadow-color scale-105 ease-in duration-300">
      <div className="flex justify-center align-center max-w-[150px]">
        <Image src={Body} alt="/" />
      </div>
      <div className="max-w-[230px] text-[13px] pr-4 py-4 ">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
        ab.{" "}
      </div>
    </div>
  );
};

export default SimpleCard;
