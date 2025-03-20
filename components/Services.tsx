import Image from "@/node_modules/next/image";
import React from "react";

const Services = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full top-0 right-0 left-0 bottom-0 py-1 space-y-5 gap-7">
      <h2 className="flex font-serif font-bold text-2xl">Our Services</h2>
      <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-7 pb-7 md:px-16 lg:px-24">
        <div className="flex flex-col gap-3 bg-[#f8f8f8] p-5 rounded-xl">
          <Image src="/software.png" alt="software" width={70} height={70} />
          <h4 className="flex text-1xl font-serif font-semibold">
            Software Development
          </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            ducimus laudantium minima quod dicta cum!
          </p>
          <div>
            <button className="flex rounded-full bg-blue-500 text-white px-3 py-1">
              Know More
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-[#f8f8f8] p-5 rounded-xl">
          <Image src="/software.png" alt="software" width={70} height={70} />
          <h4 className="flex text-1xl font-serif font-semibold">
            Software Development
          </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            ducimus laudantium minima quod dicta cum!
          </p>
          <div>
            <button className="flex rounded-full bg-blue-500 text-white px-3 py-1">
              Know More
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-[#f8f8f8] p-5 rounded-xl">
          <Image src="/software.png" alt="software" width={70} height={70} />
          <h4 className="flex text-1xl font-serif font-semibold">
            Software Development
          </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            ducimus laudantium minima quod dicta cum!
          </p>
          <div>
            <button className="flex rounded-full bg-blue-500 text-white px-3 py-1">
              Know More
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-[#f8f8f8] p-5 rounded-xl">
          <Image src="/software.png" alt="software" width={70} height={70} />
          <h4 className="flex text-1xl font-serif font-semibold">
            Software Development
          </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            ducimus laudantium minima quod dicta cum!
          </p>
          <div>
            <button className="flex rounded-full bg-blue-500 text-white px-3 py-1">
              Know More
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-[#f8f8f8] p-5 rounded-xl">
          <Image src="/software.png" alt="software" width={70} height={70} />
          <h4 className="flex text-1xl font-serif font-semibold">
            Software Development
          </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            ducimus laudantium minima quod dicta cum!
          </p>
          <div>
            <button className="flex rounded-full bg-blue-500 text-white px-3 py-1">
              Know More
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-[#f8f8f8] p-5 rounded-xl">
          <Image src="/software.png" alt="software" width={70} height={70} />
          <h4 className="flex text-1xl font-serif font-semibold">
            Software Development
          </h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            ducimus laudantium minima quod dicta cum!
          </p>
          <div>
            <button className="flex rounded-full bg-blue-500 text-white px-3 py-1">
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
