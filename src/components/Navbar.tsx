"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav
      className=" flexBetween max-container padding-container-nav
    relative z-30 py-5 "
    >
      <Link href="/">
        <Image src="/LOGO HEADER.png" alt="logo" width={180} height={50} />
      </Link>
      <div>
        <div className="flexEnd">
          <Image src="/icons/Phone.png" alt="phone" width={20} height={20} />
          <div className="flex flex-col py-2 pl-1">
            <small className="text-path_color medium-14">05 234 567 89</small>
            <small className="regular-9 text-light">
              greenrata@contact.com
            </small>
          </div>
        </div>
        <div className="flexEnd lg:hidden">
          <button
            className=" text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <Image
                src="/icons/close.svg"
                width={32}
                height={20}
                alt="close"
                className="focus:border-none active:border-none"
              />
            ) : (
              <Image
                src="/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="focus:border-none active:border-none"
              />
            )}
          </button>
        </div>
        <div className="relative">
          <ul
            className={`h-full gap-8 lg:flex ${
              navbar
                ? "flex flex-col md:flex-col items-start absolute w-full py-1 px-4 h-80"
                : "hidden"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-14 flexEnd cursor-pointer pb-1.5 transition-all hover:font-bold text-light"
                onClick={() => setNavbar(navbar)}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
