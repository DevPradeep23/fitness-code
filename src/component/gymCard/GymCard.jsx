import React from "react";
import Image from "next/image";
const SimpleGymCard = ({ img }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[280px] md:max-w-[280px] lg:max-w-[300px] xl:max-w-[300px]  rounded-[10px] shadow-shadow md:hover:shadow-shadow-color scale-105 ease-in duration-300 my-4 ">
      <div>
        <Image src={img} />
      </div>
      <div className="py-4 text-white px-4">
        <h5 className="font-semibold text-[20px]">FUISION 5</h5>
        <ul className="leading-8 text-[15px] text-[#a6a6a2] pl-4">
          <li className="list-disc">At-center group classes</li>
          <li className="list-disc">
            2 Sessions/month at ELITE gyms & group classes
          </li>
          <li className="list-disc">
            Goal-based Workouts and Meditation Sessions
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SimpleGymCard;
