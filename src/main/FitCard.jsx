import Image from 'next/image'
import React from 'react'
import Dash from "../assest/Image/dash.svg"
const FitCard = ({src, head, para}) => {
  return (
    <div className='lg:max-w-[300px] w-[100%] py-4 shadow-shadow md:hover:shadow-shadow-color scale-105 ease-in duration-300 '     
    >
      <div className='flex justify-center align-center'>
    <Image src={src} alt="/"/>
    </div>
    <h4 className='text-[20px] font-bold italic py-4 text-center ' >{head}</h4>
     <p className='text-[#69696b] text-justify px-6 pb-4'>{para}</p>
    </div>

  )
}

export default FitCard
