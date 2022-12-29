import React, { useState } from "react";

const AlmostThere = ({ nextClick, handleClick }) => {
  return (
    <>
      <div className="flex flex-col items-start mx-4 border sm:border-none p-4 sm:p-0 sm:mx-20 mt-10 absolute sm:relative top-[23rem] sm:top-auto bg-white">
        <img
          onClick={handleClick}
          className="hidden sm:block w-8 h-auto"
          src="../icons/Back.svg"
          alt=""
        />
        <img
          onClick={handleClick}
          className="absolute -top-[22.5rem] left-0 sm:hidden w-8 h-auto"
          src="../icons/Back.svg"
          alt=""
        />
        <h1 className="font-semibold text-2xl my-2">You Are Almost There...</h1>

        <form
          className="flex flex-col my-2 gap-4 w-full sm:w-[370px]"
          action=""
        >
          <select className="px-3 py-4 text-sm w-full sm:w-[370px] focus:outline-none border focus:border-[#32a693]">
            <option value="">India</option>
            <option value="">Japan</option>
            <option value="">Indonesia</option>
          </select>
          <label className="text-[#88888c] text-[0.70rem] bg-white px-1 left-6 absolute top-16 sm:top-20">
            Nationality
          </label>
          <select className="px-3 py-4 text-sm w-full sm:w-[370px] focus:outline-none border focus:border-[#32a693]">
            <option value="">India</option>
            <option value="">Japan</option>
            <option value="">Indonesia</option>
          </select>
          <label className="text-[#88888c] text-[0.70rem] bg-white px-1 left-6 absolute top-[8.2rem] sm:top-[9.2rem]">
            Country of Residency
          </label>
          <p className="text-sm text-[#88888c]">
            Add an extra layer of security to keep your account safe.{" "}
            <span className="text-sm text-black font-semibold">
              Create a password
            </span>{" "}
            to log in to your account.
          </p>
          <div className="outline outline-1 outline-gray-300 relative ">
            <input
              type="text"
              placeholder=" "
              className="block px-3 py-4 w-full text-sm sm:w-[370px] appearance-none focus:outline-none bg-transparent border focus:border-[#32a693]"
            />
            <label
              for="email"
              className="absolute top-1 text-sm bg-white p-3 -z-1 duration-300 origin-0 text-[#88888c]"
            >
              New Password
            </label>
          </div>
          <div className="outline outline-1 outline-gray-300 relative ">
            <input
              type="text"
              placeholder=" "
              className="block px-3 py-4 w-full text-sm sm:w-[370px] appearance-none focus:outline-none bg-transparent border focus:border-[#32a693]"
            />
            <label
              for="email"
              className="absolute top-1 text-sm bg-white p-3 -z-1 duration-300 origin-0 text-[#88888c]"
            >
              Confirm Password
            </label>
          </div>
          <div className="grid grid-cols-3">
            <p className="text-[0.60rem] text-green-500">
              Minimum of 8 characters
            </p>
            <p className="text-[0.60rem] text-green-500">
              Atleast 1 capital letter
            </p>
            <p className="text-[0.60rem] text-green-500">
              Atleast 1 small letter
            </p>
            <p className="text-[0.60rem] text-green-500">Atleast 1 number</p>
            <p className="text-[0.60rem] text-green-500">
              Atleast 1 special character
            </p>
            <p className="text-[0.60rem] text-green-500">
              No 3 similar characters together.
            </p>
          </div>
          <button
            onClick={nextClick}
            type="submit"
            className="bg-[#32a693] text-white my-0 py-3 hover:text-[#32a693] hover:bg-transparent transition ease-out duration-300 border border-[#32a693]"
          >
            Finish
          </button>
        </form>
      </div>
    </>
  );
};

export default AlmostThere;
