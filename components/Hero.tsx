import Image from "@/node_modules/next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative flex flex-col flex-grow h-0 pt-[66.64%] bg-[url('/hero.jpg')] w-full overflow-hidden bg-no-repeat bg-contain md:bg-cover md:pt-[35%]">
      <div className="text-white items-start justify-start flex flex-row absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-black from-40% to-gray-500 to-100% opacity-75 p-20">
        <div>Moment</div>
      </div>
    </section>
  );
};

export default Hero;
