"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TCustomLinkProp = {
  title: string;
  ahref: string;
  className?: string;
};
const CustomLink = ({ title, ahref, className }: TCustomLinkProp) => {
  const pathname = usePathname();
  return (
    <li
      className={`relative hover:text-secondaryColor ease-in duration-300 group ${className} `}
    >
      <Link href={ahref}>
        {title}
        <span
          className={`h-[1px] inline-block bg-secondaryColor absolute -bottom-0.5 left-0  group-hover:w-full transition-[width] ease duration-300
            ${ahref === pathname ? "w-full" : "w-0"}`}
        >
          &nbsp;
        </span>
      </Link>
    </li>
  );
};

export default CustomLink;
