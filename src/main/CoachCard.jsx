import Image from "next/image";
import React from "react";

const CoachCard = ({ Coach, name }) => {
  return (
    <div className="bg-black max-w-[350px] lg:max-w-[300px]">
      <Image src={Coach} />
      <h4 className="text-center text-[25px] font-semibold text-white py-4">
        {name}
      </h4>
    </div>
  );
};

export default CoachCard;
