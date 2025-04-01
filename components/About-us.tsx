import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import React from "react";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full top-0 right-0 left-0 bottom-0 py-10 bg-white">
      <h2 className="flex font-serif font-bold text-2xl">About Us</h2>
      <div className=" flex flex-col-reverse px-7 items-center md:px-16 lg:px-24 justify-center p-7 w-full space-y-5  md:flex-row gap-8 md:gap-6 md:justify-start md:items-start">
        <div className="flex md:w-1/2 ">
          <Image src="/abt_us.jpeg" alt="company" width={700} height={40} />
        </div>
        <div className="flex flex-col gap-6 items-start justify-start font-serif font-[14px] md:w-1/2">
          <p className="flex font-sans ">
            Foreware Technologies is committed to driving business
            transformation through innovation and technology. We empower
            organizations with cutting-edge solutions that enhance efficiency,
            scalability, and long-term success. Our expertise ensures tailored
            strategies that align with evolving industry demands. With a focus
            on excellence, we help businesses stay ahead in the digital era
          </p>
          <Link href="/contact">
            <div className="flex rounded-full bg-blue-500 text-white p-3 py-2">
              <button>Contact Us</button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
