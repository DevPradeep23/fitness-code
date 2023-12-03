import React from 'react'
import Image from 'next/image'
const ImageCard = ({Gym}) => {
  return (
    <div className=" sm:w-60 w-[250px] md:w-64  lg:max-w-[180px]"
    >
      <Image src={Gym} className="shadow-shadow w-[100%] md:hover:shadow-shadow-color scale-105 ease-in duration-300"
      />
    </div>
  )
}

export default ImageCard
