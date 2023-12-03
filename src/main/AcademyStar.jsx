import Image from 'next/image'
import React from 'react'

const AcademyStar = ({head, para, src}) => {
  return (
    <div className='max-w-[100%] lg:max-w-[400px] px-4  text-center'>
        <div className='flex justify-center align-center py-4'>
    <Image src={src} alt="/" />
    </div>
    <h5 className='text-[20px] font-bold text-white'>{head}</h5>
    <p className='text-[#b0ada5] text-[13px] py-4'>{para}</p>
 </div>
  )
}

export default AcademyStar
