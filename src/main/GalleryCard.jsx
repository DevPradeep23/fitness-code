import Image from "next/image";
import React from "react";
import User from "../assest/Image/user.png";
import Like from "../assest/Image/like.png";
import View from "../assest/Image/eye.png";

const GalleryCard = ({ imageUrl }) => {
  return (
    <div>
      <div
        className="max-w-[100%] lg:max0-w-[300px] min-h-[250px] bg-no-repeat bg-cover bg-center shadow-shadow md:hover:shadow-shadow-color scale-105 ease-in duration-300"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="max-w-[300px] min-h-[250px] hover:bg-black  hover:opacity-[0.5] cursor-pointer scale-100 ease-in duration-300 "></div>
      </div>
      <div className=" flex justify-between align-center pt-2">
        <div className="flex align-center gap-2 pt-4">
          <Image src={User} alt="/" height={30} width={30} />
          <p className="text-[13px] mt-1 ">Gaurav Joshi</p>
        </div>
        <div className="flex gap-4 pt-1">
          <div className="flex align-center gap-2 pt-4 text-[13px]">
            <Image src={Like} alt="/" className="w-[20px] h-[20px] cursor-pointer  " />
            <p className="mt-[2px]">593</p>
          </div>
          <div className="flex align-center gap-2 pt-4 text-[13px]  ">
            <Image src={View} alt="/" className="w-[20px] h-[20px] cursor-pointer " />
            <p> 78.8k</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
