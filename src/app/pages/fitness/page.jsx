"use client";
import Image from "next/image";
import React from "react";
import VerticleLogo from "../../../assest/Image/beatsverticle.png";
import Logo from "../../../assest/Image/beatslogo.png";
import Text from "@/main/Text";
import CoachCard from "@/main/CoachCard";
import Coach from "../../../assest/Image/coach1.svg";
import Coach1 from "../../../assest/Image/coach2.svg";
import Coach2 from "../../../assest/Image/coach3.svg";
import Coach3 from "../../../assest/Image/coach4.svg";
import Img from "../../../assest/Image/gymImg12.svg";
import Img11 from "../../../assest/Image/gymImg11.svg";
import Fit from "../../../assest/Image/fitbody.png";
import SwiperImage from "@/main/swiperImage/SwiperImage";
import UserSwiper from "@/main/UserSwiper";
import Banner from "@/component/banner/Banner";
import Left from "../../../assest/Image/back.png";
import Right from "../../../assest/Image/right.png";
import Carousel, { consts } from "react-elastic-carousel";

const Fitness = () => {
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
        <Image src={Left} className="w-[22px] h-[22px] " />
      ) : (
        <Image src={Right} className="w-[22px] h-[22px] ml-1 " />
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
    <>
      <Banner
        imageUrl={
          "https://res.cloudinary.com/dbesu6ege/image/upload/v1697652549/FITNESS_BANNER_2_copy_1_hfscx5.svg"
        }
      />

      <div className=" bg-black lg:py-16 py-8">
        <div className="max-w-[1200px] mx-auto flex align-center justify-between">
          <div className="pt-8 hidden lg:block">
            <Image src={VerticleLogo} className="" />
          </div>
          <div className=" max-w-[900px] px-4">
            <h4 className="lg:py-8 text-white text-justify lg:text-[23px] md:text-[17px] text-[15px] md:font-semibold">
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
            </h4>

            <div className="grid lg:gap-16 gap-4 py-8 lg:py-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2">
              <Text head="INTENSITY" text="Medium & Heigh" />
              <Text head="FEEL" text="High energy" />
              <Text head="GROUP" text="4-16 People" />
              <Text head="TIME" text="50 min" />
              <Text head="DATES" text="Mon, Wed, Fri" />
              <Text head="PRICE" text="850 /mo – 3 workouts" />
            </div>
            <div className=" py-8 flex justify-center lg:justify-end align-center">
              <button className="bg-[#ffab07] py-3 px-8 text-[20px] rounded-[15px] font-semibold">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:py-16 py-8">
        <div className="max-w-[1200px] mx-auto">
          <h4 className="text-center text-[25px] font-semibold">FIT 5</h4>
          <p className="text-[15px] px-4 text-justify lg:text-[20px] md:text-[17px] lg:pt-6 pt-4 font-medium lg:text-center">
            It’s the best workout most people will ever have. For a challenging,
            fun, varied and results-focused workout experience, nothing quite
            matches a great functional workout in a group. Members who get into
            this style of training are more likely to feel fully engaged with
            fitness – and with the club and trainers making it happen for them
          </p>
        </div>
      </div>

      <div className=" bg-black py-8">
        <div className="max-w-[1200px] mx-auto  ">
          <h4 className="text-center lg:text-[25px] text-[18px] font-semibold text-white py-4">
            MEET THE FIT 5 CHOACHES
          </h4>
          <div className=" lg:py-16 py-4  md:pl-8">
            <Carousel
              breakPoints={breakPoints}
              pagination={false}
              renderArrow={myArrow}
            >
              <CoachCard Coach={Coach} name="Sam joe" />
              <CoachCard Coach={Coach1} name="Rose Mey" />
              <CoachCard Coach={Coach2} name="James" />
              <CoachCard Coach={Coach3} name="Walley" />
              <CoachCard Coach={Coach} name="Sam joe" />
              <CoachCard Coach={Coach1} name="Rose Mey" />
              <CoachCard Coach={Coach2} name="James" />
              <CoachCard Coach={Coach3} name="Walley" />
            </Carousel>
          </div>
        </div>
      </div>

      <div className=" bg-black lg:py-10">
        <div className="max-w-[1200px] mx-auto md:pl-32  ">
          <h4 className="md:text-left pl-4 lg:text-[25px] text-[18px] font-semibold text-white pb-6  ">
            WHAT TO BRING WITH YOU
          </h4>
          <ul className="grid lg:grid-cols-3 pb-10 lg:pb-0 pl-8 gap-4  sm:grid-cols-2 text-white font-semibold lg:text-[20px] text-[15px] list-disc">
            <li>Reusable water bottle</li>
            <li>Headphones</li>
            <li>Comfy workout clothes</li>
            <li>Clean and comfortable shoes</li>
            <li>Compact microfiber towel</li>
            <li>Shower Essentials</li>
          </ul>
        </div>
      </div>

      <div className=" bg-black lg:py-32">
        <SwiperImage />
      </div>

      <div className=" bg-black">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 py-10 px-4 lg:px-0 lg:grid-cols-2">
          <Image
            src={Fit}
            height={100}
            width={200}
            className="w-[100%] lg:w-[50%]"
          />
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/HnoPHqrdXQ8"
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
            // borderRadius="30px"
          ></iframe>
        </div>
      </div>

      <div className=" bg-white lg:py-24 ">
        <div className="max-w-[1200px] mx-auto shadow-2xl lg:py-16 lg:px-8 ">
          <Carousel pagination={false} renderArrow={myArrow}>
            <UserSwiper src={Coach} />
            <UserSwiper src={Coach} />
            <UserSwiper src={Coach} />
            <UserSwiper src={Coach} />
          </Carousel>
        </div>
      </div>

      <div className=" bg-[#141414] py-4 md:py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 py-4 lg:px-16">
            <div className=" flex md:justify-start md:px-8 justify-center align-center ">
              <Image src={Logo} className=" w-[180px] h-[80px] lg:w-[250px] lg:h-[100px] " />
            </div>
            <div className="max-w-[600px] text-center">
              <h4 className="text-[25px] lg:text-[30px] py-4 lg:py-0 font-semibold text-white">
                LETEST BLOGS POST
              </h4>
              <p className="text-[12px] sm:text-[16px] lg:text-[16px] text-center px-4 lg:px-0 font-medium text-white pt-1 lg:pt-8">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo.
              </p>
            </div>
          </div>
          <div className="mx-auto py-4 lg:py-10 lg:gap-4">
            <Carousel
              breakPoints={breakPoints}
              pagination={false}
              renderArrow={myArrow}
            >
              <div
                className="max-w-[350px] sm:max-w-[280px] md:max-w-[280px] lg:w-[300px] my-8 rounded-[10px]  shadow-shadow md:hover:shadow-shadow-color scale-105 ease-in duration-300"
                // style={{ boxShadow: '0px 0px 20px rgba(255, 167, 5)'}}
              >
                <Image
                  src={Img}
                  className=" rounded-[10px]"
                />
                <h6 className="text-[16px] font-semibold text-white py-4 px-2">
                  10 TIPS HOW TO PREPARE MWALS FAST AND EASY
                </h6>
                <p className="text-[12px] font-medium text-white text-justify px-2 pb-4">
                  {" "}
                  It’s the best workout most people will ever have. For a
                  challenging, fun, varied and results-focused workout
                  experience, nothing quite matches a great functional workout
                  in a group.
                </p>
              </div>
              <div
                className="max-w-[350px] sm:max-w-[280px] md:max-w-[280px] lg:w-[300px] my-8 rounded-[10px]  shadow-shadow md:hover:shadow-shadow-color scale-105 ease-in duration-300"
                // style={{ boxShadow: '0px 0px 20px rgba(255, 167, 5)'}}
              >
                <Image
                  src={Img}
                 
                  className=" rounded-[10px]"
                />
                <h6 className="text-[16px] font-semibold text-white py-4 px-2">
                  10 TIPS HOW TO PREPARE MWALS FAST AND EASY
                </h6>
                <p className="text-[12px] font-medium text-white text-justify px-2 pb-4">
                  {" "}
                  It’s the best workout most people will ever have. For a
                  challenging, fun, varied and results-focused workout
                  experience, nothing quite matches a great functional workout
                  in a group.
                </p>
              </div>
              <div
                className="max-w-[350px] sm:max-w-[280px] md:max-w-[280px] lg:w-[300px] my-8 rounded-[10px]  shadow-shadow md:hover:shadow-shadow-color scale-105 ease-in duration-300"
                // style={{ boxShadow: '0px 0px 20px rgba(255, 167, 5)'}}
              >
                <Image
                  src={Img}
                 
                  className=" rounded-[10px]"
                />
                <h6 className="text-[16px] font-semibold text-white py-4 px-2">
                  10 TIPS HOW TO PREPARE MWALS FAST AND EASY
                </h6>
                <p className="text-[12px] font-medium text-white text-justify px-2 pb-4">
                  {" "}
                  It’s the best workout most people will ever have. For a
                  challenging, fun, varied and results-focused workout
                  experience, nothing quite matches a great functional workout
                  in a group.
                </p>
              </div>
              <div
                className="max-w-[350px] sm:max-w-[280px] md:max-w-[280px] lg:w-[300px] my-8 rounded-[10px]  shadow-shadow md:hover:shadow-shadow-color scale-105 ease-in duration-300"
                // style={{ boxShadow: '0px 0px 20px rgba(255, 167, 5)'}}
              >
                <Image
                  src={Img}
                 
                  className=" rounded-[10px]"
                />
                <h6 className="text-[16px] font-semibold text-white py-4 px-2">
                  10 TIPS HOW TO PREPARE MWALS FAST AND EASY
                </h6>
                <p className="text-[12px] font-medium text-white text-justify px-2 pb-4">
                  {" "}
                  It’s the best workout most people will ever have. For a
                  challenging, fun, varied and results-focused workout
                  experience, nothing quite matches a great functional workout
                  in a group.
                </p>
              </div>
              <div
                className="max-w-[350px] sm:max-w-[280px] md:max-w-[280px] lg:w-[300px] my-8 rounded-[10px]  shadow-shadow md:hover:shadow-shadow-color scale-105 ease-in duration-300"
                // style={{ boxShadow: '0px 0px 20px rgba(255, 167, 5)'}}
              >
                <Image
                  src={Img}
                 
                  className=" rounded-[10px]"
                />
                <h6 className="text-[16px] font-semibold text-white py-4 px-2">
                  10 TIPS HOW TO PREPARE MWALS FAST AND EASY
                </h6>
                <p className="text-[12px] font-medium text-white text-justify px-2 pb-4">
                  {" "}
                  It’s the best workout most people will ever have. For a
                  challenging, fun, varied and results-focused workout
                  experience, nothing quite matches a great functional workout
                  in a group.
                </p>
              </div>
              <div
                className="max-w-[350px] sm:max-w-[280px] md:max-w-[280px] lg:w-[300px] my-8 rounded-[10px]  shadow-shadow md:hover:shadow-shadow-color scale-105 ease-in duration-300"
                // style={{ boxShadow: '0px 0px 20px rgba(255, 167, 5)'}}
              >
                <Image
                  src={Img}
                 
                  className=" rounded-[10px]"
                />
                <h6 className="text-[16px] font-semibold text-white py-4 px-2">
                  10 TIPS HOW TO PREPARE MWALS FAST AND EASY
                </h6>
                <p className="text-[12px] font-medium text-white text-justify px-2 pb-4">
                  {" "}
                  It’s the best workout most people will ever have. For a
                  challenging, fun, varied and results-focused workout
                  experience, nothing quite matches a great functional workout
                  in a group.
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fitness;
