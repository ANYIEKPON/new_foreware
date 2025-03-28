"use client";

import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { CiLocationOn, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./contpage.module.scss";

const page = () => {
  return (
    <div className="flex flex-col space-y-5 relative justify-center items-center">
      <section className={styles.bck}>
        <section className="flex gap-3 flex-col text-white items-center justify-center h-[300px] top-0 bottom-0 left-0 right-0  bg-gradient-to-b from-black from-40% to-gray-800 to-100% opacity-75 p-20 ">
          <span className="flex text-[28px] font-extrabold text-center sm:text-4xl md:text-5xl">
            Contact Us
          </span>
          <p className="flex w-full text-[14px] text-center justify-center sm:text-[18px]">
            Foreware is ready to provide the right solution according to your
            needs
          </p>
        </section>
      </section>
      <section className="flex flex-col lg:flex-row-reverse w-4/5 gap-7 bg-white md:flex-row-reverse">
        <div className="flex flex-col w-full lg:w-full bg-[#fff] py-10 space-y-5 border-20 shadow-xl">
          <h2 className="flex font-bold text-2xl w-full text-center justify-center">
            Send us a message
          </h2>
          <form className=" flex flex-col gap-4 px-5 w-full">
            <div className="flex flex-col gap-3">
              <label>Company's Name *</label>
              <input
                type="text"
                placeholder="Name *"
                name="name"
                className="flex rounded-lg p-2 outline-none text-black bg-[#f3f2f2]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Company's Email *</label>
              <input
                type="email"
                placeholder="Email *"
                name="email"
                className="flex rounded-lg p-2 outline-none text-black bg-[#f3f2f2]"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Type your Message Here *</label>
              <textarea
                placeholder="Message"
                name="message"
                rows={3}
                cols={30}
                className="flex rounded-xl p-2 outline-none text-black bg-[#f3f2f2]"
              />
            </div>
            <div className="">
              <button className="flex items-start justify-start bg-orange-600 text-white rounded-full py-2 px-3">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col lg:block items-start justify-start w-full px-5 mt-5  bg-[#f3f2f2] shadow-xl space-y-5 py-10 border-10">
          <h2 className="flex font-bold text-2xl w-full justify-start -mt-4">
            Get in Touch
          </h2>
          <div className="flex flex-col items-start gap-2 justify-start w-1/2">
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="flex text-orange-500">
                <IoCallOutline size={35} />
              </div>
              <span className="flex text-2xl">Call Us</span>
            </div>
            <span className="flex ml-10 w-full ">+234 816 4699 021</span>
          </div>
          <div className="flex flex-col items-start gap-2 justify-start w-full">
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="flex text-orange-500 justify-center items-center">
                <CiLocationOn size={35} />
              </div>
              <span className="flex text-2xl">Location</span>
            </div>
            <span className="flex pl-10">
              Nurudeen Street, Anifowoshe, Ikeja, Lagos, Nigeria
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 justify-start w-full">
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="flex text-orange-500">
                <IoMdTime size={35} />
              </div>
              <span className="flex text-2xl">Business Hours</span>
            </div>
            <span className="flex pl-10">
              Mon - Fri .... 8am - 5pm, Sat, Sun .... Closed{" "}
            </span>
          </div>
          <hr className="bg-[#4e4d4d] w-full" />
          <div className=" flex flex-col gap-3 ml-5">
            <span>Follow our social media</span>
            <div className="flex flex-row gap-3 ml-5">
              <div className="flex text-orange-500">
                <CiLinkedin size={25} />
              </div>
              <div className="flex text-orange-500">
                <FaXTwitter size={25} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full">
        <div className="flex w-full pt-10 justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3860680047305!2d3.3357322743598465!3d6.598849322284459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b918808ce5f6b%3A0xc544a50deb432eb6!2sNurudeen%20St%2C%20Ikeja%2C%20Anifowoshe%2FIkeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1743040295929!5m2!1sen!2sng"
            width="600"
            height="450"
            style={{
              border: 0,
              width: "90%",
            }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default page;
