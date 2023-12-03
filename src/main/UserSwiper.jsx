"use client";
import Image from "next/image";
import React from "react";
import Google from "../assest/Image/google.svg";

const UserSwiper = ({ src }) => {
  return (
    <>
    <div className=" bg-white rounded-[10px] py-8 grid md:grid-cols-2 lg:grid-cols-2 ">
      <div className="lg:max-w-[300px] max-w-[100%]  flex justify-center lg:justify-start align-center">
        <Image src={src} alt="/" />
      </div>
      <div className=" lg:w-[500px] w-[100%] px-4 sm:px-8 my-auto py-10 text-justify text-[14px] lg:text-[18px] ">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by inj ected humour, or
        randomised words which don't look even slightly believable.There are
        many variations of passages of Lorem Ipsum available, but the majority
        have suffered alteration in some form, by injected humour, or randomised
        words which don't look even slightly believable.
        <div className="flex justify-center align-center lg:justify-start">
          <Image src={Google} alt="/" height={50} className="mt-8 " />
        </div>
      </div>
    </div>
      </>
  );
};

export default UserSwiper;
