"use client";
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
      <section className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col">
          <div>
            <div></div>
            <h3>OUR STORY</h3>
          </div>
          <span>Your Reliable Technology Partner for Business Success</span>
        </div>
      </section>
    </div>
  );
};

export default page;
