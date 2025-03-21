"use client";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { CiMenuFries } from "@/node_modules/react-icons/ci";
import { useState } from "react";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [openNav, setOpennav] = useState(false);

  const handleOpenNav = () => {
    setOpennav((prev) => !prev);
  };

  return (
    <nav className="sticky  z-30 bg-white top-0 max-container w-full mt-4 flex flex-row px-2 sm:px-3 items-center justify-between md:px-11">
      {/* Logo */}
      <Link href="/">
        <div className={`${styles.navbar} -ml-[8px]`}>
          <Image
            src="/logo_only.png"
            alt="forewareTech_logo"
            height={24}
            width={60}
            className={`${styles.img} min-h-2`}
          />
          <div className={styles.logoText}>
            <span className="flex text-blue-500 font-serif text-[7px] my-0 sm:text-[10px]">
              FOREWARE
            </span>
            <span className="flex text-orange-400 font-serif text-[7px] my-0 sm:text-[10px]">
              TECHNOLOGIES
            </span>
          </div>
        </div>
      </Link>

      <div className="flex items-center justify-start gap-3 md:gap-8">
        <div className=" hidden lg:flex lg:flex-row lg:space-x-20 lg:items-center lg:justify-center lg:block">
          <ul className="flex flex-row gap-10 font-montserrat text-gray-500">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About us</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/industries">
              <li>Industries</li>
            </Link>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
          </ul>
        </div>
        <div className="flex bg-black text-white py-2 px-3 items-center rounded-full sm:py-2 sm:px-5">
          <button className="flex text-[10px] font-montserrat sm:text-[14px] ">
            Contact us
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div onClick={handleOpenNav} className="flex lg:hidden">
          <CiMenuFries size={30} />
        </div>
      </div>
      {openNav && (
        <div className=" absolute top-[60px] z-70 flex items-center px-0 w-full left-0 bottom-0 right-0 h-full lg:hidden bg-red-300 ">
          <ul className="flex flex-col top-0 left-0 absolute w-full gap-10 font-montserrat px-10 py-5 items-start justify-start text-black bg-white min-h-full">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About us</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/industries">
              <li>Industries</li>
            </Link>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
