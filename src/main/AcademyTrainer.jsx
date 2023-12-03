import Image from "next/image";
import React from "react";
import Trainer from "../assest/Image/trainer__img.svg";

const AcademyTrainer = () => {
  return (
    <div className="max-w-[300px] bg-[#FFAE12] shadow-shadow md:hover:shadow-shadow-color scale-105 ease-in duration-300">
      <Image src={Trainer} alt="/" />
      <h4 className="text-[16px] py-2 font-semibold text-white  uppercase text-center ">
        Julia Jones / Body trainer
      </h4>
    </div>
  );
};

export default AcademyTrainer;
