"use client";

import { useState } from "react";
import Contact from "@/components/Contact";
import Sponsors from "@/components/Sponsors";
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
          <span className="flex md:w-5/5 md:text-[35px] md:items-end md:justify-end text-[#f1c7a4] md:leading-tight">
            Your Reliable Technology Partner for Business Success
          </span>
        </div>
        <div className="flex md:ml-[17rem] md1:ml-[21rem] xlg:ml-[35rem] xl1:ml-[40rem] xl:ml-[44rem] lg1:ml-[27rem] md:absolute md:w-3/5 border-10 sm:items-start sm:justify-start h-[300px] overflow-hidden md:h-[300px] md:w-[450px]">
          <Image
            src="/abbt.webp"
            className="flex border-10"
            alt="company"
            width={600}
            height={300}
          />
        </div>
      </section>
      <section className="flex mt-16 items-center justify-center">
        <Sponsors />
      </section>
      <section className="flex flex-col px-5 py-10 lg:flex-row w-full lg:px-20 lg:py-10 items-center justify-center gap-5">
        <div className="flex w-full lg:w-1/2 flex-col ">
          <h2 className="flex text-[40px] w-full">Why Businesses Choose Us</h2>
          <div>
            <Image src="/needd.png" height={200} width={950} alt="why Us" />
          </div>
        </div>
        <div className="flex gap-5 lg:w-1/2 flex-col mt-12 items-center justify-center w-full">
          <div className="flex gap-5 flex-col w-full">
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="flex text-[30px] font-sans">Innovation</h3>
              </div>
              <hr className="flex bg-black" />
            </div>
            <span className="flex text-[18px]">
              Our solutions leverage the latest advancements in AI, cloud
              computing, and cybersecurity to drive business transformation.
            </span>
          </div>
          <div className="flex gap-5 flex-col w-full">
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="flex text-[30px] font-sans">
                  Value without compromise
                </h3>
              </div>
              <hr className="flex bg-black" />
            </div>
            <span className="flex text-[18px]">
              Our customers are at the heart of everything we do, we deliver
              solutions that align with your business goals.
            </span>
          </div>
          <div className="flex gap-5 flex-col w-full">
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="flex text-[30px] font-sans">
                  Trusted Partnership
                </h3>
              </div>
              <hr className="flex bg-black" />
            </div>
            <span className="flex text-[18px]">
              Leveraging our global partnerships, we tailor our solutions to
              your unique needs
            </span>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col md:p-16">
        <h2 className="flex w-full text-start text-[35px] p-5">
          Let&apos;s connect and work together to achieve excellence.
        </h2>
        <Contact />
      </section>
    </div>
  );
};

export default page;
