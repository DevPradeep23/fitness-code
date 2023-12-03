import Image from "next/image";
import React from "react";
import Arr from "../assest/Image/Arr.svg";

const AcademyCard = ({ head, para, btn, imageUrl, bg }) => {
  return (
    <div
      className="max-w-[95%] sm:max-w-[95%] md:max-w-[100%] lg:max-w-[100%] px-8 bg-no-repeat bg-cover bg-center py-8 shadow-shadow md:hover:shadow-shadow-color scale-105 ease-in duration-300"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundColor: bg,
      }}
    >
      <h5 className="text-[20px] font-bold text-white">{head}</h5>
      <p className="text-[#b0ada5] text-[13px] py-4">{para}</p>
      <div className="flex gap-4">
        <h6 className="text-white">{btn}</h6>
        <Image src={Arr} alt="/" />
      </div>
    </div>
  );
};

export default AcademyCard;
