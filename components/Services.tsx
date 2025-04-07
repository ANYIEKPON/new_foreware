"use client";

import Image from "@/node_modules/next/image";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnMove: true,
    autoplay: true,
  };
  return (
    <section className="flex flex-col items-center justify-center w-full top-0 right-0 left-0 bottom-0 py-1 space-y-5 gap-7">
      <h2 className="flex font-serif font-bold text-2xl">Our Services</h2>
      <div className=" grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-7 pb-7 md:px-16 lg:px-24">
        <div className="flex flex-col gap-3 bg-[#f8f8f8] p-5 rounded-xl">
          <Image src="/software.png" alt="software" width={70} height={70} />
          <h4 className="flex text-1xl font-serif font-semibold">
            Software Development
          </h4>
          <p className="flex font-sans">
            We develop custom software solutions that enhance efficiency,
            innovation, and business growth.
          </p>
          {/* <div>
            <button className="flex rounded-full bg-blue-500 text-white px-3 py-1">
              Know More
            </button>
          </div> */}
        </div>
        <div className="flex flex-col gap-3 bg-[#f8f8f8] p-5 rounded-xl">
          <Image src="/cloud-depl.svg" alt="software" width={70} height={70} />
          <h4 className="flex text-1xl font-serif font-semibold">
            Cloud Deployment
          </h4>
          <p className="flex font-sans">
            We offer tailored cloud deployment services to enhance business
            scalability and operational efficiency
          </p>
          {/* <div>
            <button className="flex rounded-full bg-blue-500 text-white px-3 py-1">
              Know More
            </button>
          </div> */}
        </div>
        <div className="flex flex-col gap-3 bg-[#f8f8f8] p-5 rounded-xl">
          <Image src="/entrprise.png" alt="software" width={70} height={70} />
          <h4 className="flex text-1xl font-serif font-semibold">
            Enterprise Solutions
          </h4>
          <p className="flex font-sans">
            We implement budget-friendly enterprise systems, partnering with
            global OEMs to streamline and optimize business operations.
          </p>
          {/* <div>
            <button className="flex rounded-full bg-blue-500 text-white px-3 py-1">
              Know More
            </button>
          </div> */}
        </div>
        <div className="flex flex-col gap-3 bg-[#f8f8f8] p-5 rounded-xl">
          <Image src="/data_manage.png" alt="software" width={70} height={70} />
          <h4 className="flex text-1xl font-serif font-semibold">
            Data Management
          </h4>
          <p className="flex font-sans">
            We develop comprehensive data management services, ensuring
            efficient data handling, security, and accessibility
          </p>
          {/* <div>
            <button className="flex rounded-full bg-blue-500 text-white px-3 py-1">
              Know More
            </button>
          </div> */}
        </div>
        <div className="flex flex-col gap-3 bg-[#f8f8f8] p-5 rounded-xl">
          <Image src="/consulting.png" alt="software" width={70} height={70} />
          <h4 className="flex text-1xl font-serif font-semibold">
            Consulting and Training
          </h4>
          <p className="flex font-sans">
            We provide expert training services, empowering individuals and
            corporate organizations with in-demand skills for optimal
            performance.
          </p>
          {/* <div>
            <button className="flex rounded-full bg-blue-500 text-white px-3 py-1">
              Know More
            </button>
          </div> */}
        </div>
      </div>
      <div className="hidden flex top-0 right-0 left-0 bottom-0 flex-row items-center justify-center overflow-hidden w-full h-fit gap-1 px-1 pb-1 bg-red-300 lg:max-w-[60%]">
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Services;
