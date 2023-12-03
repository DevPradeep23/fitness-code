import React from "react";
import Image from "next/image";
const TestimonialCard = ({UserImag,name}) => {
  return (
    <div className="bg-white max-w-[350px] px-10 py-12 my-4 cursor-pointer shadow-shadow md:hover:shadow-shadow-color scale-105 ease-in duration-300 "
    >
      <div className="flex justify-center align-center">
        <Image src={UserImag} alt="/" className="rounded-full w-[120px] h-[120px]"/>
      </div>
      <h5 className="text-black font-bold text-[22px] text-center py-6">{name}</h5>
      <p className="text-[#6b6e6c] text-[14px] text-justify">
        A paragraph is a self-contained unit of discourse in writing dealing
        with a particular point or idea. Though not required by the orthographic
        conventions of any language with a writing system, paragraphs are a
        conventional means of organizing extended segments of prose.
      </p>
    </div>
  );
};

export default TestimonialCard;
