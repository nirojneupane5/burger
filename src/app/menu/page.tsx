"use client";
import { useState } from "react";
import MenuItem from "./Menu";
import MenuCard, { TMenuProps } from "./MenuCard";
import { beverageData, burgerData, snackData } from "./MenuData";

const Menu = () => {
  const initialData: TMenuProps[] = [
    ...burgerData,
    ...snackData,
    ...beverageData,
  ];
  const [filterData, setFilterData] = useState<TMenuProps[]>(initialData);

  const handleCategroyChange = (category: string) => {
    if (category === "Food") {
      setFilterData(burgerData);
    } else if (category === "Snack") {
      setFilterData(snackData);
    } else if (category === "Beverage") {
      setFilterData(beverageData);
    } else {
      setFilterData([...burgerData, ...snackData, ...beverageData]);
    }
  };

  return (
    <div className="mx-5">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold uppercase">Our best menu</h1>
        <div className="seperator mx-auto"></div>
        <p className="paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
          recusandae quam nisi ipsa autem quos!
        </p>
        <MenuItem handleCategroyChange={handleCategroyChange} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
        {filterData &&
          filterData.map((info, index) => (
            <MenuCard
              title={info.title}
              img={info.img}
              desc={info.desc}
              price={info.price}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default Menu;
