"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../assest/Image/beatslogo.png";
import App from "../assest/Image/app.svg";
import Play from "../assest/Image/play.svg";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full bg-black text-gray-400  py-12 border-gray-400">
      <div className="max-w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-4">
        <div className="w-[250px] pl-2 mx-auto">
          <Link href="/">
            <Image src={Logo} alt="/" className="cursor-pointer h-[50] w-[120px]  " />
          </Link>
          <p className="text-[12px] py-4 leading-6">
            At Beats, we make group workouts fun, daily food healthy & tasty,
            mental fitness easy with yoga & meditation, Medical & lifestyle care
            hassle free. #BeBetterEveryDay
          </p>
        </div>
        <div className="w-[250px] mx-auto">
          <ul className="text-[12px] pl-2 lg:pl-8">
            <li className="py-2">
              <Link href="#">{"Beats for business"}</Link>
            </li>
            <li className="py-1">
              <Link href="#">{"Beats franchise"}</Link>
            </li>
            <li className="py-1">
              <Link href="#">{"corporate partnerships"}</Link>
            </li>
            <li className="py-1">
              <Link href="#">{"Beats network"}</Link>
            </li>
            <li className="py-1">
              <Link href="#">{"t&c for business"}</Link>
            </li>
          </ul>
        </div>
        <div className="w-[250px] mx-auto">
          <ul className="text-[12px] pl-2 lg:pl-8">
            <li className="py-1">
              <Link href="#">{"About us"}</Link>
            </li>
            <li className="py-1">
              <Link href="#">{"Blogs"}</Link>
            </li>
            <li className="py-1">
              <Link href="#">{"Security"}</Link>
            </li>
            <li className="py-1">
              <Link href="#">{"Careers"}</Link>
            </li>
          </ul>
        </div>
        <div className="w-[250px] mx-auto pl-2 lg:pl-8">
          <ul className="text-[12px]">
            <li className="py-1">
              <Link href="#">{"contact us"}</Link>
            </li>
            <li className="py-1">
              <Link href="/pages/privacypolicy">{"privacy policy"}</Link>
            </li>{" "}
            <li className="py-1">
              <Link href="/pages/terms&condition">{"terms & conditions"}</Link>
            </li>
          </ul>
        </div>
        <div className="w-[250px] pl-2 mx-auto">
          <Link href="/" className="flex lg:justify-end align-end mt-6 lg:mt-0">
            <Image src={App} alt="/" width={130} height={60} />
          </Link>
          <Link href="/" className="flex lg:justify-end align-end py-4 ">
            <Image
              src={Play}
              alt="/"
              className="cursor-pointer"
              width={130}
              height={60}
              
            />
          </Link>
          <div className="container flex justify-between align-center">
            <div className="bg-gray-400 p-1 rounded-full">
              <AiFillYoutube
                className="text-black"
                style={{ fontSize: "18px" }}
              />
            </div>
            <div className="bg-gray-400 p-1 rounded-full">
              <FaFacebookF
                className="text-black"
                style={{ fontSize: "18px" }}
              />
            </div>
            <div className="bg-gray-400 p-1 rounded-full">
              <BsTwitter className="text-black" style={{ fontSize: "18px" }} />
            </div>
            <div className="bg-gray-400 p-1 rounded-full">
              <BsInstagram
                className="text-black"
                style={{ fontSize: "18px" }}
              />
            </div>
            <div className="bg-gray-400 p-1 rounded-full">
              <BiLogoLinkedin
                className="text-black"
                style={{ fontSize: "18px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
