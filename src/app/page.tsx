import { AiOutlineDown } from "react-icons/ai";
import { FaLeaf } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import Image from "next/image";
import burger from "../../public/img/home-image.png";
import Link from "next/link";
import Card from "@/components/card/Card";
import burger1 from "../../public/img/burger-1.png";
import snack from "../../public/img/snack-1.png";
import beverage from "../../public/img/beverage-2.png";
import PromoCard from "@/components/card/PromoCard";
import promo1 from "../../public/img/promo-1.png";
import promo2 from "../../public/img/promo-2.png";
import About from "./about/page";
export default function Home() {
  return (
    <main>
      <section className="py-16 md:py-10">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-0 px-2 md:px-0 ">
          <div className="mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY">
            <Image
              src={burger}
              alt="burger"
              className="object-cover w-full h-80 md:h-auto"
              priority
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
      {/* Category */}
      <section className="max-w-[1320px] mx-auto py-5 space-y-5 md:space-y-0 flex flex-col md:flex-row">
        <Card
          title="Food"
          img={burger1}
          desc="Lorem ipsum dolor sit"
          method="Buy online"
          className="bg-secondaryColor flex-1"
        />
        <Card
          title="Snack"
          img={snack}
          desc="Lorem ipsum dolor sit"
          method="Buy online"
          className="bg-greenColor flex-1"
        />
        <Card
          title="Beverage"
          img={beverage}
          desc="Lorem ipsum dolor sit"
          method="Buy online"
          className="bg-redColor flex-1"
        />
      </section>
      {/* Promo */}
      <section className="max-w-[1320px] mx-auto py-5 space-y-5 md:space-y-0 flex flex-col md:flex-row ">
        <PromoCard
          title="Payday promo"
          promo="Get a 10% discount on a payday week"
          img={promo1}
          desc="Lorem ipsum dolor sit"
          method="Buy online"
          className="bg-primaryColorLight flex-1"
        />
        <PromoCard
          title="Payday promo"
          promo="Get a 10% discount on a payday week "
          img={promo2}
          desc="Lorem ipsum dolor sit"
          method="Buy online"
          className="bg-primaryColorLight flex-1"
        />
      </section>
      <section className="max-w-[1320px] mx-auto">
        <About />
      </section>
    </main>
  );
}
