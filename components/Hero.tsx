import Image from "@/node_modules/next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative flex flex-col flex-grow h-0 pt-[66.64%] bg-[url('/hero.jpg')] w-full overflow-hidden bg-no-repeat bg-contain md:bg-cover md:pt-[35%]">
      <div className="text-white pb-10 items-center justify-start flex flex-row absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-black from-40% to-gray-500 to-100% opacity-75 p-7 lg:p-20 md:p-10">
        <h1 className="flex text-white font-bold text-[20px] sm:text-[30px] md:text-[35px] md1:text-[40px] xl1:text-[43px] w-full sm:w-4/5">
          We specialize in driving business transformation with innovative
          technology solutions
        </h1>
      </div>
    </section>
  );
};

export default Hero;
