import Image from "@/node_modules/next/image";
import React from "react";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full top-0 right-0 left-0 bottom-0 py-10 bg-white">
      <h2 className="flex font-serif font-bold text-22xl">About Us</h2>
      <div className=" flex flex-col-reverse px-7 items-center md:px-16 lg:px-24 justify-center p-7 w-full space-y-5  md:flex-row gap-8 md:gap-6 md:justify-start md:items-start">
        <div className="flex md:w-1/2 ">
          <Image src="/hero.jpg" alt="company" width={700} height={40} />
        </div>
        <div className="flex flex-col gap-6 items-start justify-start font-serif font-[14px] md:w-1/2">
          <p className="flex font-serif ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            deleniti harum accusantium aspernatur placeat incidunt? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Fuga deleniti harum
            accusantium aspernatur placeat incidunt? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fuga deleniti harum accusantium
            aspernatur placeat incidunt?
          </p>
          <div className="flex rounded-full bg-blue-500 text-white p-3">
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
