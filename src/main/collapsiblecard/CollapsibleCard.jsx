import React from "react";
import SimpleCard from "@/component/card/Card";
import Img from "../../assest/Image/hand.svg";
import Img1 from "../../assest/Image/handum.svg";
import Img2 from "../../assest/Image/body.svg";

const CollapsibleCard = () => {
  return (
    <div className="flex justify-center align-center py-10">
      <div className="max-w-[1320px] mx-auto lg:py-20 grid lg:gap-16 gap-8 lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2">
        <SimpleCard Body={Img2} />
        <SimpleCard Body={Img1} />
        <SimpleCard Body={Img} />
      </div>
    </div>
  );
};

export default CollapsibleCard;
