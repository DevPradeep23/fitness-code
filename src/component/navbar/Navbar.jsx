"use client";
import Image from "next/image";
import Logo from "../../assest/Image/beatslogo.png";
import Ham from "../../assest/Image/hambarger.png";
import Img from "../../assest/Image/user.svg";
import React, { useState, useEffect } from "react";
import style from "../navbar/navbar.module.css";
import Link from "next/link";
import { MenuList } from "@/json_data/MenuList";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav
      className={`bg-[#161921]  ${
        scrolled
          ? "fixed w-full z-[100] h-[60px] shadow-xl ease-in-out duration-300"
          : "fixed w-full h-[60px] z-[100]"
      }`}
    >
      <div className="w-[92%] mx-auto flex justify-between align-center">
        <div className="pt-2">
          <Link href="/">
            <Image src={Logo} alt="/" className="h-[50px] w-[120px] " />
          </Link>
        </div>

        <div className="lg:hidden block" onClick={handleShowNavbar}>
          <Image src={Ham} alt="/" className="h-[28px] w-[28px] mt-4" />
        </div>
        <div
          className={`${style["nav-elements"]} ${showNavbar && style.active}`}
        >
          <ul>
            {MenuList.map((menu, i) => (
              <li
                key={i}
                // className={`uppercase ${menu?.link ? "text-[#fdbf1e]" : ""}`}
              >
                <Link
                  href={menu?.link}
                  className={`uppercase ${menu?.link ? "text-[#fdbf1e]" : ""}`}
                >
                  {menu?.name}
                </Link>
              </li>
            ))}

            {/* <li>
              <Link href="/pages/fitness">FITNESS</Link>
            </li>
            <li>
              <Link href="/pages/wellness">WELLNESS</Link>
            </li>
            <li>
              <Link href="/pages/academy">ACADEMY</Link>
            </li>
            <li>
              <Link href="/pages/gallery">GALLERY</Link>
            </li> */}
          </ul>
          <div className="md:flex grid grid-cols-1 md:align-center gap-8 rounded-[5px]">
            <button
              className="bg-white text-[#161921] font-semibold text-[14px] px-4 py-1 rounded-[5px]
            hover:bg-[#fdbf1e] hover:text-white scale-100 ease-in duration-300 ml-8 md:ml-0
            "
            >
              GET APP
            </button>
            <Image src={Img} alt="/" className="ml-8 md:ml-0" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
