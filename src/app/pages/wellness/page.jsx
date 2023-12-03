"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../assest/Image/beatslogo.png";
import Card1 from "../../../assest/Image/cardImg.svg";
import Card2 from "../../../assest/Image/cardImg1.svg";
import Card3 from "../../../assest/Image/cardImg.svg";
import vLogo from "../../../assest/Image/beatsverticle.png";
import coach1 from "../../../assest/Image/coach1.svg";
import coach2 from "../../../assest/Image/coach2.svg";
import coach3 from "../../../assest/Image/coach3.svg";
import codes from "../../../assest/Image/codes.svg";
import Jane from "../../../assest/Image/Jane.jpg.svg";
import Coach from "../../../assest/Image/coach1.svg";
import Coach1 from "../../../assest/Image/coach2.svg";
import Coach2 from "../../../assest/Image/coach3.svg";
import Coach3 from "../../../assest/Image/coach4.svg";
import Dash from "../../../assest/Image/dash.svg";
import WellnessCard from "@/main/WellnessCard";
import Dash1 from "../../../assest/Image/dash1.svg";
import FitCard from "@/main/FitCard";
import F1 from "../../../assest/Image/F1.svg";
import F2 from "../../../assest/Image/F2.svg";
import F3 from "../../../assest/Image/F3.svg";
import SwiperImage from "@/main/swiperImage/SwiperImage";
import Banner from "@/component/banner/Banner";
import UserSwiper from "@/main/UserSwiper";
import Left from "../../../assest/Image/back.png";
import Right from "../../../assest/Image/right.png";
import Carousel, { consts } from "react-elastic-carousel";

const myArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === consts.PREV ? (
      <Image src={Left} alt="/" className="w-[22px] h-[22px] " />
    ) : (
      <Image src={Right} alt="/" className="w-[22px] h-[22px] ml-1 " />
    );

  return (
    <button onClick={onClick} disabled={isEdge}>
      <div className="bg-[#fdbf1e] w-[40px] h-[40px] rounded-full pl-[7px] pt-2 hidden lg:block ">
        {pointer}
      </div>
    </button>
  );
};

const Page = () => {
  const [year, setYear] = useState(false);
  const [month, setMonth] = useState(false);
  const [week, setWeek] = useState(false);

  return (
    <>
      <Banner
        imageUrl={
          "https://res.cloudinary.com/dbesu6ege/image/upload/v1697694244/Frame_po2hd5.svg"
        }
      />
      <div className="bg-white py-8 lg:py-16">
        <div className="max-w-[1200px] mx-auto lg:flex lg:justify-between lg:align-center grid gap-4 ">
          <div className=" flex lg:block justify-center align-center">
            <button className="bg-[#ffae12] px-8 py-3 rounded-[7px] text-white font-medium lg:mt-6 mt-0">
              View Classes
            </button>
          </div>

          <div className="">
            <h1 className=" text-black font-bold lg:text-[60px] text-[50px] pt-1 text-center">
              REACH YOUR GOAL AT{" "}
            </h1>
          </div>

          <div className=" flex lg:block justify-center align-center">
            <Image src={Logo} alt="/" height={100} width={200} className="mt-3" />
          </div>
        </div>
      </div>

      <div className=" bg-black  ">
        <div className="max-w-[1200px]  mx-auto">
          <div className="grid  lg:grid-cols-3 sm:grid-cols-2 gap-4 lg:gap-1 px-4 lg:px-1">
            <Image src={Card1} alt="/" height={100} width={400} />
            <Image src={Card2} alt="/" height={100} width={400} />
            <Image src={Card3} alt="/" height={100} width={400} />
          </div>

          <div className=" lg:flex  lg:justify-between lg:align-center sm:grid-cols-2 grid grid-cols-1 lg:py-16 py-8 ">
            <div className="lg:max-w-[350px] md:w-[330px] w-[90%] py-8 lg:pt-8 px-6  lg:hover:px-8 shadow-shadow md:hover:shadow-shadow-color scale-105 ease-in duration-300">
              <h4 className="text-[#ffae12] font-semibold text-[20px] lg:text-[25px] ">
                OUR PHILOSOPHY
              </h4>
              <p className="text-white text-[13px] lg:text-[15px] leading-6 text-justify pt-4">
                As summarised in our philosophy and mission statement we believe
                that the potential to achieve any desired health and fitness
                goal lies within each and every one. 💪 More About Us
              </p>
              <button className="bg-[#ffae12] px-8 py-2 text-white font-medium mt-6">
                View Classes
              </button>
            </div>
            <div className="w-[90%] md:w-[300px] mx-6 lg:w-[500px] md:hover:shadow-shadow-color scale-105 ease-in duration-300">
              <iframe
                className="w-[90%] lg:w-[100%] h-[35vh] "
                src="https://www.youtube.com/embed/HnoPHqrdXQ8"
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
                // borderRadius="30px"
              ></iframe>
            </div>
          </div>

          <div className="lg:flex  lg:justify-between lg:align-center sm:grid-cols-2 grid grid-cols-1 lg:py-16 py-8">
            <div className="w-[90%] md:w-[300px] mx-6 lg:w-[500px] md:hover:shadow-shadow-color scale-105 ease-in duration-300">
              <iframe
                src="https://www.youtube.com/embed/HnoPHqrdXQ8"
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
                // borderRadius="30px"
                className="w-[90%] lg:w-[100%] h-[35vh]"
              ></iframe>
            </div>

            <div className="lg:max-w-[350px] md:w-[330px] mt-10 w-[90%] px-6 lg:pt-8 md:py-4  lg:hover:px-8 shadow-shadow md:hover:shadow-shadow-color scale-105 ease-in duration-300">
              <h4 className="text-[#ffae12]  font-semibold text-[20px] lg:text-[25px] uppercase">
                Personal Traning
              </h4>
              <p className="text-white text-[13px] lg:text-[15px] leading-6 text-justify pt-4">
                As summarised in our philosophy and mission statement we believe
                that the potential to achieve any desired health and fitness
                goal lies within each and every one. 💪 More About Us
              </p>
              <button className="bg-[#ffae12] px-8 py-2 text-white font-medium mt-6">
                Get The FT
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white py-16">
        <div className="max-w-[1200px] mx-auto flex justify-between align-center">
          <div className="max-w-[300px] hidden lg:block  ">
            <Image src={vLogo} alt="/" />
          </div>
          <div className="lg:max-w-[900px] w-[100%] ">
            <h4 className="font-bold text-[20px] lg:text-[30px] sm:text-[25px] text-center lg:pl-4">
              EXPLORE WELLNESS CLASSIC
            </h4>
            <p className="lg:pl-4 text-center text-[12px] sm:text-[20px] lg:text-[20px] px-4 ">
              It is imperative that everyone maximises the time they spend
              <br />
              exercising to help guarantee optimal results.
            </p>
            <div className="lg:max-w-[1000px] w-[100%] lg:flex justify-between lg:align-center pt-6 sm:grid-cols-2 md:grid-cols-3 grid grid-cols-1">
              <div className="w-[100%] md:max-w-[230px] lg:max-w-[300px]">
                <Image src={coach1} alt="/" />
                <div className="flex justify-between align-center px-4 py-4">
                  <h6 className="font-semibold text-[18px] pt-2 ">HIT</h6>
                  <button className="bg-[#ffae12] px-4 py-2 text-white font-medium mr-2 text-[12px]">
                    BOOK NOW
                  </button>
                </div>
              </div>
              <div className="w-[100%] md:max-w-[230px] lg:max-w-[300px] ">
                <Image src={coach2} alt="/" />
                <div className="flex justify-between align-center px-4 py-4">
                  <h6 className="font-semibold text-[18px] pt-2 ">CARDIO</h6>
                  <button className="bg-[#ffae12] px-4 py-2 text-white font-medium mr-2 text-[12px]">
                    BOOK NOW
                  </button>
                </div>
              </div>
              <div className="w-[100%] md:max-w-[230px] lg:max-w-[300px] ">
                <Image src={coach3} alt="/" />
                <div className="flex justify-between align-center px-4 py-4">
                  <h6 className="font-semibold text-[18px] pt-2 ">HIT YOU</h6>
                  <button className="bg-[#ffae12] px-4 py-2 text-white font-medium mr-2 text-[12px]">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#e8eaed] lg:py-16 ">
        <div className="max-w-[1200px] bg-white mx-auto shadow-2xl lg:py-8 px-8 ">
          <Carousel pagination={false} renderArrow={myArrow}>
            <UserSwiper src={Coach} />
            <UserSwiper src={Coach1} />
            <UserSwiper src={Coach2} />
            <UserSwiper src={Coach3} />
          </Carousel>
        </div>
      </div>

      <div className=" bg-white py-20">
        <div className="max-w-[1200px] mx-auto lg:flex justify-between lg:align-center">
          <div className="max-w-[300px] hidden lg:block">
            <Image src={vLogo} alt="/" />
          </div>
          <div className="max-w-[100%] lg:max-w-[300px] text-center lg:text-left">
            <div className="flex justify-center lg:justify-start align-center">
              <Image src={Dash} alt="/" className="" />
            </div>
            <h4 className="font-bold lg:text-[50px]  text-[30px] py-4">
              RECENT NEWS
            </h4>
            <p className="text-[#b8b7b4] sm:px-8 ">
              {" "}
              It is imperative that everyone maximises the time they spend
              exercising to help guarantee optimal results.
            </p>
            <h6 className="py-8 text-[15px]">Read the blog</h6>
          </div>
          <div className="max-w-[600px] sm:max-w-[100%] px-6 lg:px-1 grid lg:grid-cols-2 sm:grid-cols-2 gap-8">
            <WellnessCard />
            <WellnessCard />
            <WellnessCard />
            <WellnessCard />
            <WellnessCard />
            <WellnessCard />
            <WellnessCard />
            <WellnessCard />
          </div>
        </div>
      </div>

      <div
        className=" bg-no-repeat bg-cover bg-center py-16"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbesu6ege/image/upload/v1697648913/et3rsqdwq2ffeobcmjse.svg')",
        }}
      >
        <div className="max-w-[600px] mx-auto ">
          <div className="flex justify-center lg:justify-start align-center">
            <Image src={Dash1} alt="/" />
          </div>
          <h4 className="text-white text-[40px] font-bold pt-4 text-center md:text-left">
            JOIN NOW
          </h4>
          <p className="text-[#69696b] text-center md:text-left ">
            Select Your Plan
          </p>

          <div
            className={`bg-[#202020] mx-4 lg:mx-0 ${
              year ? "border-orange-500" : ""
            }`}
          >
            <div className="flex align-center gap-4 mt-4 bg-[#202020] px-8 py-4">
              <input
                type="radio"
                className="w-5 h-5 mt-[3px]"
                onClick={() => setYear(!year)}
                onChange={() => setYear(true)}
                checked={year === true}
              />
              <p className="text-white font-bold text-[16px] italic">
                One Year Plan
              </p>
            </div>
            {year && (
              <p className="px-[4.2rem] text-justify pb-4 text-[#69696b] text-[14px]">
                No Term, plus free access card. $39 joining fee included, 1
                month guess pass and free 2 PT class. Free access to all
                equipments and the swimming pool.
              </p>
            )}
          </div>

          <div className="bg-[#202020] mx-4 lg:mx-0 ">
            <div className="flex align-center gap-4 mt-4 bg-[#202020] px-8 py-4">
              <input
                type="radio"
                className="w-5 h-5 text-amber-600 border-amber-600 mt-[3px] ring-[#ffae12]"
                onClick={() => {
                  setMonth(!month);
                  setYear(false);
                }}
                onChange={() => setMonth(true)}
                checked={month === true}
              />
              <p className="text-white font-bold text-[16px]">One Month Plan</p>
            </div>
            {month && (
              <p className="px-[4.2rem] text-justify pb-4 text-[#69696b] text-[14px]">
                No Term, plus free access card. $39 joining fee included, 1
                month guess pass and free 2 PT class. Free access to all
                equipments and the swimming pool.
              </p>
            )}
          </div>

          <div className="bg-[#202020] mx-4 lg:mx-0 ">
            <div className="flex align-center gap-4 mt-4 bg-[#202020] px-8 py-4">
              <input
                type="radio"
                className="w-5 h-5 text-amber-600 border-amber-600 mt-[3px] "
                onClick={() => {
                  setWeek(!week);
                  setMonth(false);
                }}
                onChange={() => setWeek(true)}
                checked={week === true}
              />
              <p className="text-white font-bold text-[16px]">One Week Plan</p>
            </div>
            {week && (
              <p className="px-[4.2rem] text-justify pb-4 text-[#69696b] text-[14px]">
                No Term, plus free access card. $39 joining fee included, 1
                month guess pass and free 2 PT class. Free access to all
                equipments and the swimming pool.
              </p>
            )}
          </div>
          <div className="flex justify-center lg:justify-start align-center">
            <button className="bg-[#ffae12] px-8 py-3 text-white font-medium mt-6">
              Next Step
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-white py-20 ">
        <div className="max-w-[1200px] mx-6 lg:mx-auto lg:flex lg:justify-between lg:align-center grid sm:grid-cols-2">
          <FitCard
            head="Pure Strength"
            para="It is imperative that everyone maximises
            the time they spend exercising to help
            guarantee results from the commit ment
            put into achieving each goal."
            src={F1}
          />
          <FitCard
            head="The Challenge"
            para="It is imperative that everyone maximises
            the time they spend exercising to help
            guarantee results from the commit ment
            put into achieving each goal."
            src={F2}
          />
          <FitCard
            head="The Mission"
            para="It is imperative that everyone maximises
            the time they spend exercising to help
            guarantee results from the commit ment
            put into achieving each goal."
            src={F3}
          />
        </div>
      </div>

      <div className=" bg-white lg:py-16">
        <SwiperImage />
      </div>

      <div className=" bg-white lg:py-16 py-8">
        <div className="max-w-[1200px] mx-auto sm:px-8  sm:flex justify-between align-center">
          <div className="max-w-[100%]  lg:max-w-[200px] ">
            <div className="flex justify-center sm:justify-start align-center">
              <Image src={Dash} alt="/" />
            </div>
            <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-center font-extrabold py-4 italic">
              NEWSLETTER
            </h1>
          </div>

          <div className="max-w-[700px] sm:flex gap-2 lg:pt-8 pt-4 sm:pt-1 ">
            <div className="flex justify-center lg:justify-start align-center sm:py-4 md:py-6 lg:py-4">
              <input
                placeholder="Your Email Address"
                className="py-[7px]  outline-none border-b-2 border-gray-500  "
              />
            </div>

            <div className="flex justify-center lg:flex-nowrap align-center py-4  md:py-6 lg:py-4">
              <button className="bg-black py-2 px-8 text-white ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
