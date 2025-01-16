import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
      {/* <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div> */}
      <ul className="flex gap-4">
        <li>
          <Link href={"/sing-in"}>Sign in</Link>
        </li>
        <li className="hidden sm:block">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hidden sm:block">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
      <div className=" flex gap-4 items-center">
        <DarkModeSwitch />
        <Link href={"/"} className="flex gap-1  items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDb
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
}
