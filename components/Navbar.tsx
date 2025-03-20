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
    <nav className="static max-container w-full mt-4 flex flex-row px-2 sm:px-3 items-center justify-between md:px-11">
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
        <div className=" right-0 absolute max-container z-20 flex items-center px-5 w-full top-[75px] max-h-full lg:hidden ">
          <ul className="flex flex-col w-full gap-10 font-montserrat h-full px-5 py-5 items-start justify-start  bg-white text-gray-500">
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
