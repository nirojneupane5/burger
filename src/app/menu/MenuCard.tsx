import Image, { StaticImageData } from "next/image";
export type TMenuProps = {
  title: string;
  img: StaticImageData;
  desc: string;
  price: number;
};
const MenuCard = ({ title, img, desc, price }: TMenuProps) => {
  return (
    <div>
      <div className="h-56 lg:h-40 bg-primaryColorLight grid place-content-center rounded-3xl hover:bg-secondaryColor ease-linear duration-200">
        <Image
          src={img}
          alt={title}
          className="object-cover w-40 hover:scale-110 ease-linear duration-300 md:w-48 lg:w-24"
          priority
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold py-2">{title}</h2>
        <p className="paragraph">{desc}</p>
        <p className="text-secondaryColor"> Rs. {price}</p>
      </div>
    </div>
  );
};

export default MenuCard;
