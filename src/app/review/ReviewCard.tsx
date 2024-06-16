import { ImQuotesRight } from "react-icons/im";
import Image, { StaticImageData } from "next/image";

export type TReviewCardProps = {
  img: StaticImageData;
  name: string;
  desg: string;
};

const ReviewCard = ({ img, name, desg }: TReviewCardProps) => {
  return (
    <div className="py-10">
      <div className="flex flex-col bg-primaryColor gap-5 rounded-lg p-6">
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit
          cumque dolorum dolore eaque sapiente rerum distinctio!
        </p>
        <div className="flex items-center">
          <Image src={img} alt={name} className="w-12 h-12 rounded-full" />
          <div className="ml-2">
            <p className="uppercase">{name}</p>
            <p className="paragraph">{desg}</p>
          </div>
          <i className="text-4xl text-secondaryColor ml-auto">
            <ImQuotesRight />
          </i>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
