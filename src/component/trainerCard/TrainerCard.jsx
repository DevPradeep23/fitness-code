import React from "react";
import Image from "next/image";
const TrainerCard = ({ head, Note, imageUrl }) => {
  return (
    <div
      className="max-w-[350px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[300px] xl:max-w-[300px]  bg-no-repeat bg-cover bg-center flex justify-center align-center p-8 shadow-shadow md:hover:shadow-shadow-color scale-105 ease-in duration-300"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="bg-[#322b21] opacity-[0.5] grid items-center py-4 max-w-[300px] mx-auto text-center text-white ">
        <div className="flex justify-center align-center">
          <Image src={Note} className="sm:h-16 w-16" />
        </div>
        <h4 className="text-[25px] sm:text-[20px] lg:text-[25px] uppercase font-semibold pt-4 ">
          {head}
        </h4>
        <p className="text-[14px] sm:text-[12px] lg:text-[14px] px-4 pb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi
          mi, imperdiet quidem rerum facilis est.
        </p>
        <div>
          <button className="border-b-2 border-l-2 text-white text-[12px] hover:bg-white hover:text-black p-2 hover:scale-100 ease-in duration-300 ">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
