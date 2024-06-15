"use client";
import { useState } from "react";

const MenuItem = () => {
  const [activeItem, setActiveItem] = useState<string>("ALL");
  const item: string[] = ["ALL", "Food", "Snack", "Beverage"];

  const handleClick = (info: string) => {
    setActiveItem(info);
  };
  return (
    <ul className="flex flex-wrap items-center gap-4 py-10">
      {item.map((info, index) => (
        <li
          className={`text-xl font-bold cursor-pointer py-2 px-4 text-center rounded hover:bg-secondaryColor ${
            info === activeItem ? " bg-secondaryColor" : "bg-primaryColorLight"
          }`}
          key={index}
          onClick={() => handleClick(info)}
        >
          {info}
        </li>
      ))}
    </ul>
  );
};

export default MenuItem;
