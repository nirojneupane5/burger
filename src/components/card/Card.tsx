import Image, { StaticImageData } from "next/image";
import Link from "next/link";
type TCardProps = {
  title: string;
  desc: string;
  method: string;
  img: StaticImageData;
  className: string;
};
const Card = ({ title, desc, method, img, className }: TCardProps) => {
  return (
    <div
      className={`flex items-center rounded-md overflow-hidden mx-5 gap-4 ${className}`}
    >
      <div className="basis-1/3 px-2">
        <Image
          src={img}
          alt={title}
          className="object-cover h-20 w-20"
          priority
        />
      </div>
      <div>
        <h4 className="text-xl font-bold uppercase">{title}</h4>
        <p className="text-lg font-semibold">{desc}</p>
        <Link href="/" className="cursor-pointer">
          {method}
        </Link>
      </div>
    </div>
  );
};

export default Card;
