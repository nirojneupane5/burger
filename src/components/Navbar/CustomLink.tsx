import Link from "next/link";

type TCustomLinkProp = {
  title: string;
  ahref: string;
};
const CustomLink = ({ title, ahref }: TCustomLinkProp) => {
  return (
    <li className="hover:text-secondaryColor ease-in duration-300">
      <Link href={ahref}>{title}</Link>
    </li>
  );
};

export default CustomLink;
