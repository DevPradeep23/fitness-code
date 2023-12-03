"use client";
import CollapsibleCard from "@/main/collapsiblecard/CollapsibleCard";
import SwiperImage from "@/main/swiperImage/SwiperImage";
import Image from "next/image";
import Logo from "../assest/Image/beatslogo.png";
import CollasibleContainer from "@/main/collapsibleContainer/CollasibleContainer";
import CollapsibleTraining from "@/main/collapsibleTraining/CollapsibleTraining";
import CollapsibleVideo from "@/main/collapsibleVideo/CollapsibleVideo";
import Banner from "@/component/banner/Banner";
import UserSwiper from "@/main/UserSwiper";
import Coach from "../assest/Image/coach1.svg";
import Left from "../assest/Image/back.png";
import Right from "../assest/Image/right.png";
import Carousel, { consts } from "react-elastic-carousel";

export default function Home() {
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
    <main>
        <Banner imageUrl={"https://res.cloudinary.com/dbesu6ege/image/upload/v1697693837/bannerImg_gdgl1m.svg"}/>
      <CollapsibleCard />
      <SwiperImage />
      <div className="flex justify-center align-center py-5 md:py-20">
        <div className="m-auto w-[200px] md:w-[250px]">
          <Image src={Logo} alt="/" className="w-full" />
        </div>
      </div>
      <CollasibleContainer />
      <div className=" flex justify-center align-center py-5 md:py-20">
        <div className="m-auto w-[200px] md:w-[250px]">
          <Image src={Logo} alt="/" className="w-full" />
        </div>
      </div>
      <CollapsibleTraining />
      <CollapsibleVideo />
      {/* <CollapsibleTestimonial /> */}
      <div className=" bg-white lg:py-4 ">
        <div className="max-w-[1200px] mx-auto shadow-2xl lg:py-8 lg:px-8 "> 
          <Carousel pagination={false} renderArrow={myArrow}>
            <UserSwiper src={Coach} />
            <UserSwiper src={Coach} />
            <UserSwiper src={Coach} />
            <UserSwiper src={Coach} />
          </Carousel>
        </div>
      </div>
    </main>
  );
}
