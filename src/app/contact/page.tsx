"use client";
import React from "react";
import { ImLocation2 } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import { HiMail } from "react-icons/hi";


const Contact = () => {
  return (
    <section className="text-center  px-6 ">
      {/* Section heading */}
      <h1 className="lg:text-5xl text-4xl lg:leading-tight basis-1/2 font-bold mb-8 content-center">
        Contact us
      </h1>
      {/* Section description */}
      <p className="text-center w-full md:w-2/3 mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </p>

      <div className="flex py-3 flex-col md:flex-row gap-12 justify-evenly ">
        {" "}
        {/* Center the content */}
        {/* Form */}
        <form className="text-start">
          <div className="grid md:grid-cols-2 md:gap-6 ">
            <div className="relative z-0 w-full mb-6 group ">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Last name
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <textarea
              name="message"
              id="message"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required></textarea>
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Message
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2 hover:text-purple-400 ">
            Submit
          </button>
        </form>
        {/* Phone number and location */}
        <div className="md:w-1/3 text-center">
          <ul className="list-unstyled mb-0">
            <li className="mb-4">
              <i className="text-white hover:text-purple-400 cursor-pointer flex justify-center ">
                <ImLocation2 size={40} className=" my-3" />{" "}
              </i>
              <p className="hover:text-purple-400">
                <strong>Modal Town, H-Block 126, LHR</strong>{" "}
              </p>
            </li>

            <li className="mb-4">
              <i className=" flex justify-center  hover:text-purple-400 cursor-pointer">
                <FiPhone size={40} />{" "}
              </i>
              <p className="hover:text-purple-400">
                <strong>+92 301 6519293</strong>
              </p>
            </li>

            <li>
              <i className=" flex justify-center  hover:text-purple-400 cursor-pointer ">
                <HiMail size={40} />{" "}
              </i>
              <p className="hover:text-purple-400 hover:underline cursor-pointer">
                <strong>rizwanrizrose@gamil.com</strong>{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className=" mx-7 max-md:mx-0 border-2 border-gray-500 border-double  mt-20 rounded-sm  flex justify-center  items-center p-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.612058308516!2d74.3587198151318!3d31.549710758502224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391902e14cd09a6b%3A0xd1c62a25e76b449!2sModa%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1624523797308!5m2!1sen!2sus"
          className="w-full h-64 max-md:h-full "
          style={{ border: "0" }}
          // allowFullScreen=""
          loading="lazy"></iframe>
      </div>
    </section>
  );
};

export default Contact;
