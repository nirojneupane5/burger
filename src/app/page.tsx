import { AiOutlineDown } from "react-icons/ai";
import { FaLeaf } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import Image from "next/image";
import burger from "../../public/img/home-image.png";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <section className="py-10">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-0 px-2 md:px-0 ">
          <div className="mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY">
            <Image
              src={burger}
              alt="burger"
              className="object-cover w-full h-80 md:h-auto"
            />
          </div>
          <div className="text-center md:basis-1/2 md:text-start lg:basis-3/5">
            <h1 className="home_title">happy tommy with testy burger</h1>
            <div className="seperator mx-auto"></div>
            <p className="paragraph md:text-lg md:font-semibold text-justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              magnam consectetur dicta esse, excepturi harum sint nostrum sed
              nam recusandae! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Saepe, tempore.
            </p>
            <div className="text-base flex justify-center items-center gap-5 py-10 md:gap-20">
              <div className="flex flex-col items-center">
                <i className="text-4xl text-secondaryColor">
                  <ImSpoonKnife />
                </i>
                <br />
                <span className="text-xl font-semibold uppercase">
                  {" "}
                  Delicious
                </span>
              </div>
              <div className="flex flex-col items-center">
                <i className="text-4xl text-secondaryColor">
                  <GiFruitBowl />
                </i>
                <br />
                <span className="text-xl font-semibold uppercase">Fresh</span>
              </div>
              <div className="flex flex-col items-center">
                <i className="text-4xl text-secondaryColor">
                  <FaLeaf />
                </i>
                <br />
                <span className="text-xl font-semibold uppercase">Organic</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Link
                href="/"
                className="bg-secondaryColor text-xl font-bold text-black px-3 py-2 rounded-md  capitalize border-2 border-solid border-secondaryColor hover:bg-primaryColor hover:text-whiteColor ease duration-300
              flex items-center gap-1"
              >
                Learn more <AiOutlineDown />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
