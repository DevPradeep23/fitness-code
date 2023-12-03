import React from "react";

const Banner = ({imageUrl}) => {
  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-center"
     style={{
      backgroundImage: `url(${imageUrl})`,
    }}
    >
    </div>
  );
};

export default Banner;
