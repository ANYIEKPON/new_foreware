"use client";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import blogPost from "../../public/data/data.json";
import { useState } from "react";
import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";

const page = () => {
  const [openCat, setOpencat] = useState(false);

  const handleOpenCat = () => {
    setOpencat((prev) => !prev);
  };

  type Datwel = {
    welTxt: string;
  };

  type Desdata = {
    id: string;
    img1: string;
    title: string;
    desc: Datwel;
  };

  return (
    <div className="flex flex-col lg:flex-row p-8 w-full lg:px-28">
      <section className="flex flex-row lg:flex-col items-start justify-start w-full lg:w-1/3 gap-3 md:gap-5">
        <div
          className="flex px-3 rounded-lg w-2/5 bg-[#f5f5f5] justify-between items-center gap-3 md:w-4/5
        "
        >
          <input
            type="text"
            placeholder="Search..."
            className="flex  w-full outline-none p-2 rounded-md bg-[#f5f5f5] font-bold"
          />
          <CiLocationOn />
        </div>
        <div className="flex flex-col gap-4 bg-[#f5f4f4] w-3/6 py-1 px-3 items-start rounded-lg md:w-4/5">
          <div
            onClick={handleOpenCat}
            className="flex flex-row items-center justify-between rounded-sm gap-2 w-full"
          >
            <h2 className="flex w-full text-[19px]">Categories</h2>
            <CiLocationOn className="flex md:hidden" />
          </div>
          <div className="hidden top-40 right-6 bottom-0 p-2 flex item-start justify-start lg:block w-[250px] rounded-md">
            <ul className="flex flex-col gap-3 items-start py-3 w-full">
              <li className="flex flex-col gap-2 w-3/5">
                <span>AI Advancement</span>
                <hr className="flex w-full bg-[#cac9c9]" />
              </li>
              <li className="flex flex-col w-3/5">
                <span>AI Advancement</span>
                <hr className="flex w-full bg-[#cac9c9]" />
              </li>
              <li className="flex flex-col w-3/5">
                <span>AI Advancement</span>
                <hr className="flex w-full bg-[#cac9c9]" />
              </li>
            </ul>
          </div>
          {openCat && (
            <div className="absolute top-40 right-6 bottom-0 p-2 h-fit bg-[#f5f4f4] flex item-start justify-start lg:hidden w-[250px] rounded-md">
              <ul className="flex flex-col gap-3 items-start py-3 w-full">
                <li className="flex flex-col gap-2 w-3/5">
                  <span>AI Advancement</span>
                  <hr className="flex w-full bg-[#cac9c9]" />
                </li>
                <li className="flex flex-col w-3/5">
                  <span>AI Advancement</span>
                  <hr className="flex w-full bg-[#cac9c9]" />
                </li>
                <li className="flex flex-col w-3/5">
                  <span>AI Advancement</span>
                  <hr className="flex w-full bg-[#cac9c9]" />
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-7 items-center justify-center lg:mt-0">
        {blogPost.map((blog: Desdata) => (
          <div
            key={blog.id}
            className="flex bg-white rounded-xl shadow-xl flex-col gap-2 pb-4 rounded-xl overflow-hidden "
          >
            <div className="flex overflow-hidden">
              <Image
                src={blog.img1}
                width="1600"
                height="200"
                alt={blog.title}
              />
            </div>
            <h3 className="flex px-5 py-2 font-bold text-[15px]">
              {blog.title}
            </h3>
            <p className="flex px-5 flex-col gap-2">
              {blog.desc.welTxt.slice(0, 200)}...{" "}
              <Link href={`/blog/${blog.id}`} className="flex">
                <span className="flex text-blue-600">Continue reading</span>
              </Link>
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default page;
