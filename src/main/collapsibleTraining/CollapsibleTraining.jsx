import React from "react";
import TrainerCard from "@/component/trainerCard/TrainerCard";
import Note from "../../assest/Image/textNote.svg";
import Left from "../../assest/Image/back.png";
import Right from "../../assest/Image/right.png";

import Carousel, { consts } from "react-elastic-carousel";
import Image from "next/image";

const CollapsibleTraining = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 640, itemsToShow: 2 },
    { width: 900, itemsToShow: 3 },
    { width: 1024, itemsToShow: 3 },
  ];

  // type === consts.PREV;

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <Image src={Left} alt="/" className="w-[22px] h-[22px] " />
      ) : (
        <Image src={Right} alt="/" className="w-[22px] h-[22px] ml-1 " />
      );
    return (
      <button onClick={onClick} disabled={isEdge}>
        <div className="bg-[#fdbf1e] w-[40px] h-[40px] rounded-full pt-2 pl-[7px] hidden lg:block ">
          {pointer}
        </div>
      </button>
    );
  };
  return (
    <div className="lg:max-w-[90%] mx-auto lg:px-20 py-0 lg:py-0">
      <Carousel
        breakPoints={breakPoints}
        pagination={false}
        renderArrow={myArrow}
      >
        <TrainerCard
          Note={Note}
          head="progression"
          imageUrl={
            "https://res.cloudinary.com/dbesu6ege/image/upload/v1697696943/gymImg12_mrjoqw.svg"
          }
        />
        <TrainerCard
          Note={Note}
          head="progression"
          imageUrl={
            "https://res.cloudinary.com/dbesu6ege/image/upload/v1697696944/trainer__img_iyi6a5.svg"
          }
        />
        <TrainerCard
          Note={Note}
          head="workout"
          imageUrl={
            "https://res.cloudinary.com/dbesu6ege/image/upload/v1697696943/gymImg11_fnqp2j.svg"
          }
        />
        <TrainerCard
          Note={Note}
          head="progression"
          imageUrl={
            "https://res.cloudinary.com/dbesu6ege/image/upload/v1697696943/gymImg12_mrjoqw.svg"
          }
        />
        <TrainerCard
          Note={Note}
          head="progression"
          imageUrl={
            "https://res.cloudinary.com/dbesu6ege/image/upload/v1697696944/trainer__img_iyi6a5.svg"
          }
        />
        <TrainerCard
          Note={Note}
          head="workout"
          imageUrl={
            "https://res.cloudinary.com/dbesu6ege/image/upload/v1697696943/gymImg11_fnqp2j.svg"
          }
        />
      </Carousel>
    </div>
  );
};

export default CollapsibleTraining;
