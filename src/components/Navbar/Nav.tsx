"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsMoonStarsFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import CustomLink from "./CustomLink";
const Nav = () => {
  const [toggleOpen, setToggleOpen] = useState<string>("hidden");
  const handleClick = () => {
    if (toggleOpen === "hidden") {
      setToggleOpen("block");
    } else {
      setToggleOpen("hidden");
    }
  };
  return (
    <>
      <div
        className={`${toggleOpen} absolute top-0 left-0 w-full py-14 bg-primaryColor border-b border-secondaryColor
        md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto`}
      >
        <ul className="flex flex-col md:flex-row text-center gap-5">
          <CustomLink title="Home" ahref="/" />
          <CustomLink title="About Us" ahref="/about" />
          <CustomLink title="Menu" ahref="/menu" />
          <CustomLink title="Review" ahref="/review" />
          <CustomLink title="Contact" ahref="/contact" />
        </ul>
        <div className="absolute text-2xl top-3 right-4 md:hidden">
          <i>
            <button onClick={handleClick}>
              <AiOutlineClose />
            </button>{" "}
          </i>
        </div>
      </div>
      <div className="flex items-cente gap-5">
        <i className="text-2xl cursor-pointer ml-4">
          <BsMoonStarsFill />
        </i>
        <div>
          <button onClick={handleClick}>
            <i className="text-2xl cursor-pointer md:hidden">
              <GiHamburgerMenu />
            </i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
