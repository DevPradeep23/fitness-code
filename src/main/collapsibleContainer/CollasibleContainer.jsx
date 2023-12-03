import React from "react";
import SimpleGymCard from "@/component/gymCard/GymCard";
import GYM from "../../assest/Image/gymImg8.svg";
import GYM1 from "../../assest/Image/gymImg9.svg";
import GYM2 from "../../assest/Image/gymImg10.svg";
import Left from "../../assest/Image/back.png";
import Right from "../../assest/Image/right.png";
import Carousel, { consts } from "react-elastic-carousel";
import Image from "next/image";

const CollasibleContainer = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 640, itemsToShow: 2 },
    { width: 900, itemsToShow: 3 },
    { width: 1024, itemsToShow: 3 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <Image src={Left} alt="/" className="w-[22px] h-[22px] " />
      ) : (
        <Image src={Right} alt="/" className="w-[22px] h-[22px] ml-1 " />
      );
    return (
      <button onClick={onClick} disabled={isEdge}>
        <div className="bg-[#fdbf1e] w-[40px] h-[40px] rounded-full pt-2 pl-[7px] hidden lg:block  ">
          {pointer}
        </div>
      </button>
    );
  };
  return (
    <div className=" mx-auto pt-10 bg-[#171a26]">
      <div className=" font-500 md:text-2xl text-1xl text-[#fff] text-center grid place-items-center">
        Lets Dive In Into. The Service List
        <br />
        <button className="bg-[#fff] text-[#171a26] font-bold  text-sm py-3 px-8 rounded-3xl m-4 hover:scale-105 ease-in duration-300 hover:bg-[#5a55a4] hover:text-[#fff]">
          LEARN MORE
        </button>
      </div>
      <div className=" lg:max-w-[90%] lg:px-20 mx-auto py-10">
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
          renderArrow={myArrow}
        >
          <SimpleGymCard img={GYM} />
          <SimpleGymCard img={GYM1} />
          <SimpleGymCard img={GYM2} />
          <SimpleGymCard img={GYM} />
          <SimpleGymCard img={GYM1} />
          <SimpleGymCard img={GYM2} />
          <SimpleGymCard img={GYM} />
          <SimpleGymCard img={GYM1} />
          <SimpleGymCard img={GYM2} />
        </Carousel>
        ;
      </div>
    </div>
  );
};

export default CollasibleContainer;
