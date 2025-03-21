import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import styles from "./navbar.module.scss";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-5 bg-[#242424] justify-around py-5 text-white">
      <div className=" flex flex-col flex-start px-4 gap-6 lg:flex-row lg:px-4 lg:gap-4 lg:p-3">
        {/* Logo */}
        <div className="flex flex-col items-start justify-start px-2 lg:px-0 lg:w-5/12">
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
          <span className="flex w-3/4 text-[#a8a7a7] lg:w-full">
            Foreware Technologies is a dedicated team of experienced IT
            professionals driven by a passion for delivering innovative
            solutions that ensure maximum productivity for organizations.
          </span>
        </div>
        {/* Navigation */}
        <div className="flex flex-col gap-4 px-3 lg:w-2/12 lg:ml-12 mt-5">
          <span>Navigation</span>
          <div className="flex border bg-[#f7f7f7] w-1/4 lg:w-2/4"></div>
          <ul className="flex flex-col text-[#e0e0e0] gap-3 pl-2 lg:pl-0">
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4 px-3 lg:w-3/12 mt-5">
          <span>Services</span>
          <div className="flex border bg-[#f7f7f7] w-1/4"></div>
          <ul className="flex flex-col text-[#e0e0e0] gap-3 pl-2 lg:pl-0">
            <li>Software Development</li>
            <li>Cloud Deployment</li>
            <li>Enterprise Solutions</li>
            <li>Data Management</li>
            <li>Consulting and Training</li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-4 px-3 lg:w-4/12 mt-5">
          <span>Contact Details</span>
          <div className="flex border bg-[#f7f7f7] w-1/4 lg:w-2/4"></div>
          <ul className="flex flex-col text-[#c5c5c5] gap-3 pl-2 lg:pl-0">
            <li className="flex flex-row items-center gap-2">
              <CiLocationOn size={30} />{" "}
              <span>Nurudeen Street, Anifowoshe, Ikeja, Lagos, Nigeria</span>
            </li>
            <li className="flex flex-row items-center gap-2">
              <IoCallOutline /> <span>+234 816 4699 021</span>
            </li>
            <li className="flex flex-row items-center gap-2">
              <IoMailOpenOutline /> <span>info@forwaretechnologies.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex border bg-white w-full"></div>
      <div className="flex items-center justify-center">
        <span>@ 2024 Foreware Technologies - All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
