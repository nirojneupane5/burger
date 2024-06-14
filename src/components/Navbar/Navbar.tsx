import Link from "next/link";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <header className="bg-primaryColor fixed top-0 left-0 w-full z-50">
      <nav className="max-w-[1320px] mx-auto p-2 h-14 flex justify-between items-center">
        <div>
          <Link href="/" className="text-2xl uppercase">
            Bur<span className="text-secondaryColor">ger</span>
          </Link>
        </div>
        <Nav />
      </nav>
    </header>
  );
};

export default Navbar;
