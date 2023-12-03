// import React from 'react'
"use client"
import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };
    
      const listenToScroll = () => {
        let heightToHidden = 200;
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHidden) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
      }, []);

  return (
    <>
   {isVisible && (
   <BsFillArrowUpCircleFill onClick={() => goTop()} className='w-[40px] h-[40px] hidden md:block  text-[#ffae12] fixed right-8 bottom-16 z-10 cursor-pointer'/>
  )}
  </>
)}

export default Scroll