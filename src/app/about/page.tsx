import { AiOutlineCheck } from "react-icons/ai";
import Image from "next/image";
import about from "../../../public/img/about.jpg";
import Link from "next/link";
const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 mx-5">
      <div className="flex-1">
        <Image
          src={about}
          alt="about iamge"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold uppercase">
          FIND FOOD AND DRINKS, ALL-IN-ONE PLACE FOR YOUR BEST TESTE
        </h2>
        <div className="seperator mx-auto"></div>
        <p className="paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ipsum
          laborum id, aspernatur dolores quisquam atque incidunt obcaecati quia
          doloribus, optio expedita rem quo quam, aliquid placeat. Natus, sequi
          expedita.
        </p>
        <ul className="grid grid-cols-2 py-5 space-y-5">
          <li className="flex items-center gap-2">
            <AiOutlineCheck className="text-secondaryColor" />
            Best Price
          </li>
          <li className="flex items-center gap-2">
            <AiOutlineCheck className="text-secondaryColor" />
            Fresh Ingredient
          </li>
          <li className="flex items-center gap-2">
            <AiOutlineCheck className="text-secondaryColor" />
            Best Service
          </li>
          <li className="flex items-center gap-2">
            <AiOutlineCheck className="text-secondaryColor" />
            Health Protocol
          </li>
        </ul>
        <div className="flex justify-center items-center">
          <Link
            href="/about"
            className="text-xl font-bold text-black bg-secondaryColor px-4 py-2 text-center rounded-md border-2 border-solid border-secondaryColor hover:bg-primaryColor hover:text-white"
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
