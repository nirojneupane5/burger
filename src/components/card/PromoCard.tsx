import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type TCardProps = {
  title: string;
  desc: string;
  method: string;
  img: StaticImageData;
  promo: string;
  className: string;
};
const PromoCard = ({
  title,
  desc,
  method,
  img,
  className,
  promo,
}: TCardProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center rounded-md  mx-5 ${className}`}
    >
      <div className="basis-1/2 py-5 md:px-5 overflow-hidden">
        <Image
          src={img}
          alt={title}
          className="object-cover h-44 w-44  hover:animate-movingY duration-300"
          priority
        />
      </div>
      <div className="px-4 py-2 md:py-0 basis-1/2">
        <h4 className="text-base text-secondaryColor font-medium capitalize ">
          {title}
        </h4>
        <h2 className="text-3xl font-bold uppercase">{promo}</h2>
        <p className="text-lg font-semibold">{desc}</p>
        <Link href="/" className="cursor-pointer text-secondaryColor">
          {method}
        </Link>
      </div>
    </div>
  );
};

export default PromoCard;
