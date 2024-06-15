import MenuItem from "./Menu";
import MenuCard from "./MenuCard";
import { beverageData, burgerData, snackData } from "./MenuData";
const Menu = () => {
  return (
    <div className="mx-5">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold uppercase">Our best menu</h1>
        <div className="seperator mx-auto"></div>
        <p className="paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
          recusandae quam nisi ipsa autem quos!
        </p>
        <MenuItem />
      </div>
      {/* Burger */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
        {burgerData &&
          burgerData.map((info, index) => (
            <MenuCard
              title={info.title}
              img={info.img}
              desc={info.desc}
              price={info.price}
              key={index}
            />
          ))}
      </div>
      {/* Snack */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
        {snackData &&
          snackData.map((info, index) => (
            <MenuCard
              title={info.title}
              img={info.img}
              desc={info.desc}
              price={info.price}
              key={index}
            />
          ))}
      </div>
      {/* Beverage */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
        {beverageData &&
          beverageData.map((info, index) => (
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
