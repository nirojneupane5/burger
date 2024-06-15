"use client";
import { useState } from "react";
type TMenuListProps = {
  title: string;
  className?: string;
};
export const MenuList = ({ title, className }: TMenuListProps) => {
  const [item, setItem] = useState<string>("All");
  const [active, setActive] = useState<boolean>(false);
  const handleClick = (item: string) => {
    if (active === true) {
      console.log("passive");
      setActive(false);
    } else {
      console.log("active");
      setActive(true);
    }
  };
  return (
    <li
      className={`text-xl font-bold py-2 px-4 text-center rounded hover:bg-secondaryColor ${
        active ? "bg-secondaryColor text-black" : "bg-primaryColorLight"
      } ${className}`}
    >
      <button onClick={() => handleClick(title)}>{title}</button>
    </li>
  );
};
