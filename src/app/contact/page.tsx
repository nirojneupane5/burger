import { BiPaperPlane } from "react-icons/bi";
import { RiMessage2Line } from "react-icons/ri";
const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-4 bg-secondaryColor py-12">
      <div className="w-full md:w-0 md:basis-1/2">
        <h1 className="text-4xl font-bold text-black uppercase">
          Get Exclusive update
        </h1>
        <p className="py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
      </div>
      <div className="w-full md:w-0 flex flex-col gap-3 items-center md:flex-row md:basis-1/2">
        <div className="w-full py-3 relative">
          <input
            type="text"
            placeholder="Email Address"
            className="w-full py-3 px-2 rounded-md"
          />
          <RiMessage2Line className="text-red-500 absolute right-2 bottom-5 text-2xl" />
        </div>
        <div className=" bg-black w-full flex flex-row items-center justify-center gap-3">
          <BiPaperPlane className="text-xl" />
          <button className="text-center py-3  rounded-md">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
