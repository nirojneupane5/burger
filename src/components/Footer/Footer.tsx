import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { CiLocationOn } from "react-icons/ci";
import { AiFillPhone } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mx-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        <div>
          <Link href="/" className="text-4xl font-bold uppercase">
            Bur<span className="text-secondaryColor">ger</span>
          </Link>
          <p className="text-sm py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            laudantium magni rerum illo nihil sed ab quis aperiam maxime animi?
          </p>
        </div>
        <div>
          <h1 className="text-3xl">Support</h1>
          <ul className="">
            <li className="hover:text-secondaryColor hover:cursor-pointer group">
              <span className="text-base font-bold capitalize group-hover:underline underline-offset-2">
                {" "}
                FAQ
              </span>
            </li>
            <li className="hover:text-secondaryColor hover:cursor-pointer group">
              <span className="text-base font-bold capitalize group-hover:underline underline-offset-2">
                Privacy policy
              </span>
            </li>
            <li className="hover:text-secondaryColor hover:cursor-pointer group">
              <span className="text-base font-bold capitalize group-hover:underline underline-offset-2">
                Terms and condition
              </span>
            </li>
            <li className="hover:text-secondaryColor hover:cursor-pointer group">
              <span className="text-base font-bold capitalize group-hover:underline underline-offset-2">
                Contact
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-bold uppercase">Phone</h1>
          <p className="flex items-center gap-2">
            <AiFillPhone className="text-secondaryColor" /> +977 9810283620
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold uppercase">Address</h1>
          <p className="flex items-center gap-2">
            <ImLocation2 className="text-secondaryColor" />
            Suryabinayak 01 Bhaktapur
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold uppercase">Email</h1>
          <p className="flex items-center gap-2">
            <MdEmail className="text-secondaryColor" />
            burger-patletar@gmail.com
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold uppercase">Follow Us</h1>
          <i className="flex items-center gap-2">
            <AiFillFacebook className="text-xl" />
            <BsInstagram className="text-xl" />
            <AiOutlineTwitter className="text-xl" />
          </i>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center py-10 text-3xl font-bold uppercase">
        <div>
          <h1 className="flex items-center gap-2">
            <AiOutlineCopyrightCircle />
            All right reserved {new Date().getFullYear()}
          </h1>
        </div>
        <div>
          <h1> Build by Niroj Neupane</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
