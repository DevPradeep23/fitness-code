import React from "react";
import ImageCard from "@/component/imageCard/ImageCard";
import Gym from "../../assest/Image/gymImg.svg";
import Gym1 from "../../assest/Image/gymImg1.svg";
import Gym2 from "../../assest/Image/gymImg2.svg";
import Gym3 from "../../assest/Image/gymImg3.svg";
import Gym4 from "../../assest/Image/gymImg4.svg";
import Gym5 from "../../assest/Image/gymImg5.svg";
import Gym6 from "../../assest/Image/gymImg6.svg";
import Gym7 from "../../assest/Image/gymImg7.svg";
import Left from "../../assest/Image/back.png";
import Right from "../../assest/Image/right.png";
import Carousel, { consts } from "react-elastic-carousel";
import Image from "next/image";

const SwiperImage = () => {
  const breakPoints = [
     { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 900, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
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
        <div className="bg-[#fdbf1e] w-[40px] h-[40px] rounded-full pl-[7px] pt-2 hidden lg:block ">
          {pointer}
        </div>
      </button>
    );
  };
  return (
    <div className="containe mx-auto md:px-10 lg:px-20">
      <Carousel breakPoints={breakPoints} pagination={false} 
        renderArrow={myArrow}
      >
        <ImageCard Gym={Gym} />
        <ImageCard Gym={Gym1} />
        <ImageCard Gym={Gym2} />
        <ImageCard Gym={Gym3} />
        <ImageCard Gym={Gym4} />
        <ImageCard Gym={Gym5} />
        <ImageCard Gym={Gym6} />
        <ImageCard Gym={Gym7} />
        <ImageCard Gym={Gym} />
        <ImageCard Gym={Gym1} />
        <ImageCard Gym={Gym2} />
        <ImageCard Gym={Gym3} />
        <ImageCard Gym={Gym4} />
        <ImageCard Gym={Gym5} />
        <ImageCard Gym={Gym6} />
        <ImageCard Gym={Gym7} />
      </Carousel>
    </div>
  );
};

export default SwiperImage;
