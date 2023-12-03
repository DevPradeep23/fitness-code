import Image from "next/image";
import React from "react";
import Arr from "../assest/Image/blackArr.svg";

const AcademyTestimonial = ({ src, head }) => {
  return (
    <div className="max-w-[300px] my-4 shadow-shadow md:hover:shadow-shadow-color scale-105 ease-in duration-300">
      <Image src={src} alt="/" />
      <h4 className=" font-bold  text-[17px] py-4 px-4">{head}</h4>
      <p className="text-[#4a4947] text-[13px] px-4">
        Suspendisse vel nisl sed turpis viverra tincidunt. Vivamus et lobortis
        felis. Proin accumsan orci eu quam facilisis, et egestas.
      </p>
      <div className="flex gap-4 py-4 px-4">
        <p className="font-bold">Learn more</p>
        <Image src={Arr} alt="/" />
      </div>
    </div>
  );
};

export default AcademyTestimonial;
