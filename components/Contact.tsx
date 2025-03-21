"use client";
import { IoCallOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.bck}>
      <div className="text-white items-start justify-start flex flex-col top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-black from-40% to-gray-500 to-100% opacity-75 p-12 w-full min-h-full gap-4">
        <h2 className="flex text-3xl flex-start">Contact Us</h2>
        <div className="flex flex-row w-full lg:flex-row-reverse items-start justify-start lg:justify-around">
          <div className="flex w-full lg:w-full">
            <form className=" flex flex-col gap-4 px-5 w-full">
              <div className="flex flex-col gap-3">
                <label>Enter Your Name *</label>
                <input
                  type="text"
                  placeholder="Name *"
                  name="name"
                  className="flex rounded-lg p-2"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label>Enter Your Email *</label>
                <input
                  type="email"
                  placeholder="Email *"
                  name="email"
                  className="flex rounded-lg p-2"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label>Type your Message Here *</label>
                <textarea
                  placeholder="Message"
                  name="message"
                  rows={3}
                  cols={30}
                  className="flex rounded-xl p-2"
                />
              </div>
              <div className="">
                <button className="flex items-start justify-start bg-orange-600 text-white rounded-full py-2 px-3">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col hidden lg:block items-start justify-start w-full px-5 mt-5 space-y-8">
            <div className="flex flex-col items-start gap-2 justify-start w-1/2">
              <div className="flex flex-row items-center justify-center gap-4">
                <div className="flex text-orange-500">
                  <IoCallOutline size={35} />
                </div>
                <span className="flex text-2xl">Call Us</span>
              </div>
              <span className="flex pl-10">+234 816 4699 021</span>
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
                Mon - Fri .... 10am - 8pm, Sat, Sun .... Closed{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
