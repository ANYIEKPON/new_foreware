"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import styles from "./about.module.scss";

const page = () => {
  return (
    <div>
      <section className={styles.bck}>
        <section className="flex gap-3 flex-col text-white items-center justify-center top-0 bottom-0 left-0 right-0  bg-gradient-to-b from-black from-40% to-gray-800 to-100% opacity-75 p-20 ">
          <span className="flex text-[28px] font-extrabold text-center sm:text-4xl md:text-5xl">
            About Us
          </span>
        </section>
      </section>
      <section className="flex flex-col w-full md:flex-row p-7 bg-[#e7e7e7] md:w-[70%] mb-5 items-center md:items-start md:justify-start justify-center gap-8 md:gap-10 md:px-10">
        <div className="flex sm:px-5 md:h-[320px]  text-3xl sm:justify-center lg:w-3/5 sm:items-center md:w-3/5 md:item-end md:justify-end md:text-[25px] md:py-5">
          <span className="flex md:w-5/5 lg:w-[50%] md:text-[35px] md:items-end md:justify-end text-orange-400 md:leading-tight">
            Your Reliable Technology Partner for Business Success
          </span>
        </div>
        <div className="flex md:ml-[17rem] md:absolute md:w-3/5 border-10 sm:items-start sm:justify-start h-[300px] overflow-hidden md:h-[300px] md:w-[450px]">
          <Image
            src="/abbt.webp"
            className="flex border-10"
            alt="company"
            width={600}
            height={300}
          />
        </div>
      </section>
    </div>
  );
};

export default page;
