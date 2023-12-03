"use client";
import AcademyCard from "@/main/AcademyCard";
import Image from "next/image";
import React from "react";
import banner from "../../../assest/Image/bannerImg.svg";
import Coach from "../../../assest/Image/coach1.svg";
import Coach1 from "../../../assest/Image/coach2.svg";
import Coach2 from "../../../assest/Image/coach3.svg";
import Coach3 from "../../../assest/Image/coach4.svg";
import HeadPhone from "../../../assest/Image/headph.svg";
import Star from "../../../assest/Image/star.svg";
import Cup from "../../../assest/Image/cup.svg";
import Like from "../../../assest/Image/like.svg";
import Link from "../../../assest/Image/Link.svg";
import Link1 from "../../../assest/Image/Link1.svg";
import Link2 from "../../../assest/Image/Link2.svg";
import Clock from "../../../assest/Image/clock.svg";
import Heart from "../../../assest/Image/heart.svg";
import Diamond from "../../../assest/Image/daimond.svg";
import Dumble from "../../../assest/Image/dumble.svg";
import Users from "../../../assest/Image/users.svg";
import codes from "../../../assest/Image/codes.svg";
import Jane from "../../../assest/Image/Jane.jpg.svg";
import vLogo from "../../../assest/Image/beatsverticle.png";
import AcademyStar from "@/main/AcademyStar";
import AcademyTestimonial from "@/main/AcademyTestimonial";
import AcademyTrainer from "@/main/AcademyTrainer";
import SwiperImage from "@/main/swiperImage/SwiperImage";
import Banner from "@/component/banner/Banner";
import UserSwiper from "@/main/UserSwiper";
import Left from "../../../assest/Image/back.png";
import Right from "../../../assest/Image/right.png";
import Carousel, { consts } from "react-elastic-carousel";

const page = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
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
    <>
      <Banner
        imageUrl={
          "https://res.cloudinary.com/dbesu6ege/image/upload/v1697694248/div.b-slider-big_venwcp.svg"
        }
      />

      <div className="bg-black py-16 ">
        <div className="max-w-[100%] lg:max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 gap-8 ">
          <AcademyCard
            head="One Year free training support"
            para="Quisque aliquam condimentum vulputate. Nulla facilisi. Sed tempor
              dolor egestas mi placerat fringilla. Sed cursus pharetra eros."
            btn="Book now"
            imageUrl={
              "https://res.cloudinary.com/dbesu6ege/image/upload/v1697648913/qso7qvfr6gkgxldss8rz.svg"
            }
          />
          <AcademyCard
            head="35% Discount"
            para="Quisque aliquam condimentum vulputate. Nulla facilisi. Sed tempor
              dolor egestas mi placerat fringilla. Sed cursus pharetra eros."
            btn="Book now"
            bg="#090909"
          />
          <AcademyCard
            head="Free Certificate"
            para="Quisque aliquam condimentum vulputate. Nulla facilisi. Sed tempor
              dolor egestas mi placerat fringilla. Sed cursus pharetra eros."
            btn="Pass the test"
            // imageUrl={"https://res.cloudinary.com/dbesu6ege/image/upload/v1697648913/chrlz3d1dvi1wkqacdje.svg"}
            imageUrl={
              "https://res.cloudinary.com/dbesu6ege/image/upload/v1697648913/qso7qvfr6gkgxldss8rz.svg"
            }
          />
        </div>
      </div>

      <div className=" bg-[#292928] lg:py-16">
        <div className="max-w-[1200px] mx-auto md:flex lg:flex justify-between align-center">
          <div className="w-[100%] lg:w-[600px] p-4 lg:pr-8">
            <h4 className="text-[40px] font-bold text-white">About us</h4>
            <p className="text-[#b0ada5] text-[13px]  lg:py-4 text-justify">
              Donec ut nisi et nibh iaculis gravida. Nam a auctor libero. Etiam
              issim et odio eget vulputate. Nulla ut ligula sed diam suscipit
              cod mentum eget sit amet quam. Ut vitae feugiat ipsum. Duis condim
              tum lectus quis blandit egestas. Sed euismod nisi ut ullamcorper
              consequat. Morbi vel malesuada dui.
            </p>

            <p className="text-[#b0ada5] text-[13px] py-4">
              Phasellus ornare quam eget vestibulum rhoncus. Integer hendre
              tempor vehicula. Suspendisse orci nisi, sollicitudin vitae turpis,
              cursus pharetra urna.
            </p>
            <button className="bg-[#ffae12] px-8 py-3 text-white font-medium mt-6">
              More about us
            </button>
          </div>

          <div className="w-[100%] lg:w-[600px]">
            <Image src={banner} />
          </div>
        </div>
      </div>

      <div className=" bg-[#111122] py-16">
        <div className="max-w-[1200px] mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AcademyStar
            src={HeadPhone}
            head="Free consultation"
            para="Donec finibus ulicies vulputate tupis, id
          mollis massa laoreet"
          />
          <AcademyStar
            src={Star}
            head="Excellent service"
            para="Donec finibus ulicies vulputate tupis, id
          mollis massa laoreet"
          />
          <AcademyStar
            src={Cup}
            head="Best trainers"
            para="Donec finibus ulicies vulputate tupis, id
          mollis massa laoreet"
          />
          <AcademyStar
            src={Like}
            head="Work programs"
            para="Donec finibus ulicies vulputate tupis, id
          mollis massa laoreet"
          />
        </div>
      </div>

      <div className=" bg-[#f5f4f2] py-16 ">
        <div className="max-w-[1200px] mx-auto">
          <h4 className="text-[30px] font-bold text-center pb-8 ">
            OUR CLASSES
          </h4>
          <Carousel
            breakPoints={breakPoints}
            renderArrow={myArrow}
            pagination={false}
          >
            <AcademyTestimonial
              src={Link}
              head=" Online Advanced Personal Training"
            />
            <AcademyTestimonial
              src={Link1}
              head="Offline Advanced Personal Training"
            />
            <AcademyTestimonial
              src={Link2}
              head="Skill India Government Certification"
            />
            <AcademyTestimonial
              src={Link}
              head=" Online Advanced Personal Training"
            />
            <AcademyTestimonial
              src={Link1}
              head="Offline Advanced Personal Training"
            />
            <AcademyTestimonial
              src={Link2}
              head="Skill India Government Certification"
            />
          </Carousel>
        </div>
      </div>

      <div className=" bg-[#292928] lg:py-16">
        <div className="max-w-[1200px] mx-auto  md:flex justify-between gap-4 align-center">
          <div className="w-[100%] lg:w-[550px]">
            <Image src={banner} />
          </div>

          <div className="max-w-[600px] sm:w-[100%] ">
            <h4 className="text-[30px] text-center pt-4 lg:pt-0 sm:text-left px-4 lg:px-0  lg:text-left font-bold text-white uppercase">
              Benifits
            </h4>

            <div className="flex  px-4 lg:px-0 gap-4 py-4 ">
              <div className="pt-2">
                <Image src={Dumble} />
              </div>
              <div>
                <h4 className="text-white uppercase font-semibold text-[18px]">
                  Personal training
                </h4>
                <p className="text-[#b0ada5] text-[13px] py-4">
                  Etiam aliquam viverra hendrerit. Vestibulum ante ipsum primis
                  in faucibus orci luctus et ultrices.
                </p>
              </div>
            </div>

            <div className="flex px-4 lg:px-0 gap-4 py-4 ">
              <div className="pt-2">
                <Image src={Users} />
              </div>
              <div>
                <h4 className="text-white uppercase font-semibold text-[18px]">
                  Personal training
                </h4>
                <p className="text-[#b0ada5] text-[13px] py-4">
                  Etiam aliquam viverra hendrerit. Vestibulum ante ipsum primis
                  in faucibus orci luctus et ultrices.
                </p>
              </div>
            </div>
            <div className="flex px-4 lg:px-0 gap-4 py-4 ">
              <div className="pt-2">
                <Image src={Clock} />
              </div>
              <div>
                <h4 className="text-white uppercase font-semibold text-[18px]">
                  Personal training
                </h4>
                <p className="text-[#b0ada5] text-[13px] py-4">
                  Etiam aliquam viverra hendrerit. Vestibulum ante ipsum primis
                  in faucibus orci luctus et ultrices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#111122] py-8 lg:py-16">
        <div className="max-w-[1200px] mx-auto sm:grid-cols-2 md:grid-cols-4 grid grid-cols-1 lg:grid-cols-4">
          <div className="max-w-[100%] lg:max-w-[300px] py-4 lg:py-0">
            <div className="flex justify-center align-center">
              <Image src={Clock} />
            </div>
            <h4 className="text-[30px] text-white font-bold py-4 text-center ">
              1280
            </h4>
            <p className="text-[15px] text-white text-center uppercase  ">
              Till Date{" "}
            </p>
          </div>
          <div className="max-w-[100%] lg:max-w-[300px] py-4 lg:py-0">
            <div className="flex justify-center align-center">
              <Image src={Heart} />
            </div>
            <h4 className="text-[30px] text-white font-bold py-4 text-center ">
              500
            </h4>
            <p className="text-[15px] text-white text-center uppercase  ">
              Happy Trainers{" "}
            </p>
          </div>
          <div className="max-w-[100%] lg:max-w-[300px] py-4 lg:py-0">
            <div className="flex justify-center align-center">
              <Image src={Like} />
            </div>
            <h4 className="text-[30px] text-white font-bold py-4 text-center ">
              537
            </h4>
            <p className="text-[15px] text-white text-center uppercase  ">
              Success stories{" "}
            </p>
          </div>
          <div className="max-w-[100%] lg:max-w-[300px] py-4 lg:py-0">
            <div className="flex justify-center align-center">
              <Image src={Diamond} />
            </div>
            <h4 className="text-[30px] text-white font-bold py-4 text-center ">
              862
            </h4>
            <p className="text-[15px] text-white text-center uppercase  ">
              Perfect bodies{" "}
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-[#f5f4f2] py-16 ">
        <div className="max-w-[1200px] mx-auto">
          <h4 className="text-[30px] font-bold text-center pb-8">
            OUR TRAINERS
          </h4>
          <Carousel
            breakPoints={breakPoints}
            renderArrow={myArrow}
            pagination={false}
          >
            <AcademyTrainer />
            <AcademyTrainer />
            <AcademyTrainer />
            <AcademyTrainer />
            <AcademyTrainer />
            <AcademyTrainer />
            <AcademyTrainer />
            <AcademyTrainer />
          </Carousel>
        </div>
      </div>

      <div
        className=" bg-no-repeat bg-cover bg-center py-16 "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbesu6ege/image/upload/v1697648914/ix1zuvsm1orlecg0ggl4.svg')",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[100%] sm:max-w-[80%] sm:px-8 lg:max-w-[600px] px-4">
            <h4 className="lg:text-[30px] text-[25px] uppercase font-bold ">
              Become a trainer this summer
            </h4>
            <h5 className="lg:text-[20px] text-[16px] uppercase font-bold py-4 ">
              Pay now and get{" "}
              <span className="text-[#FFAE12]"> 35% discount! </span>
            </h5>
            <p className="text-[#454443] text-[15px]">
              Donec elementum sapien urna, ac ullamcorper massa congue id. Proin
              efficitur, turpis a consectetur dapibus, mauris quam scelerisque
              est, sed volutpat metus eros at lacus. Suspendisse ornare mollis
              quam, at venenatis lorem faucibus ut. Maecenas ut commodo enim.
            </p>
            <button className="bg-[#ffae12] px-8 py-3 text-white font-medium uppercase mt-8">
              book now
            </button>
          </div>
        </div>
      </div>
      
      <div className=" bg-black py-8 lg:py-16">

        <div className="max-w-[1200px] mx-auto  md:flex justify-between align-center ">
          <div className="px-4">
            <h4 className="text-[20px] lg:text-[30px] text-white font-bold text-center uppercase ">
              Got a quastion? We would be happy to help!
            </h4>
            <p className="text-[#b0ada5] text-center text-[14px] lg:text-[17px]">
              Pellentesque sed nibh blandit, ultricies eros at, dignissim tellus
              ac eleifend velit
            </p>
          </div>

          <div className="py-4 flex md:justify-start justify-center align-center">
            <button className="bg-white text-black uppercase py-2 px-8">
              contact us
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-white py-8 lg:py-16">
        <h4 className="text-[30px] font-bold text-center pb-8 uppercase ">
          our gallery
        </h4>

        <SwiperImage />
      </div>

      <div
        className=" bg-no-repeat bg-cover bg-center py-16 "
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbesu6ege/image/upload/v1697648914/hfegisdwrgdfpvpiaskz.svg')",
        }}
      >
        <div className="max-w-[1200px] mx-auto flex justify-end align-end">
          <div className="bg-[#111122] max-w-[600px] px-8 py-6">
            <h4 className="text-white uppercase font-bold text-[30px]">
              wanna Join In !
            </h4>
            <p className="text-[#b0ada5] text-[13px] py-2">
              India’s first International Fitness Management Institute that
              offers Fitness Training Courses.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 py-4">
              <input
                placeholder="Full name"
                className="py-2 px-4 outline-none "
              />
              <input placeholder="Mobile" className="py-2 px-4 outline-none " />
             
              <input placeholder="Email" className="py-2 px-4 outline-none " />
              <button className="bg-[#ffae12] py-2 px-4 text-white font-medium uppercase">
                connect now
              </button>
            </div>
            <h6 className="text-white uppercase font-bold text-[20px] py-2">
              we can be a best team togather !
            </h6>
            <p className="text-[#b0ada5] text-[13px] py-2">
              Bring your body to perfection with our classes!
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-white lg:py-16 ">
        <div className="max-w-[1200px] mx-auto shadow-2xl lg:py-8 px-8">
          <Carousel 
          renderArrow={myArrow}
          pagination={false}
          >
            <UserSwiper src={Coach} />
            <UserSwiper src={Coach1} />
            <UserSwiper src={Coach2} />
            <UserSwiper src={Coach3} />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default page;
