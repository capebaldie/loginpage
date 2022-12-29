import React, { useState } from "react";

const CreateAccount = ({ handleClick }) => {
  //
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col items-start mx-4 border sm:border-none p-4 sm:p-0 sm:mx-20 sm:mt-5 mt-10  absolute sm:relative top-[23rem] sm:top-auto bg-white">
        <img
          className="hidden sm:block w-8 h-auto"
          src="../icons/Back.svg"
          alt=""
        />
        <img
          className="absolute -top-[22.5rem] left-0 sm:hidden w-8 h-auto"
          src="../icons/Back.svg"
          alt=""
        />
        <h1 className="font-semibold text-2xl mt-2">Create New Account</h1>
        <p className="text-[#88888c] text-sm sm:w-[80%] my-2">
          Your Investment with a twist starts here! To start predicting, Create
          Your Account
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col my-2 gap-4 w-full sm:w-auto relative"
          action=""
        >
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
              Legal First Name
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
              Legal Last Name
            </label>
          </div>
          <span className="absolute w-16 bottom-[14.6rem] left-2 sm:right-[18.5rem]">
            <img src="../images/india.svg" alt="" />
          </span>
          <label className="text-[#88888c] text-[0.70rem] bg-white px-1 left-7 absolute top-[8.2rem]">
            Enter Your Number
          </label>
          <input
            className="px-3 pl-[5rem] py-4 text-sm w-full sm:w-[370px] focus:outline-none border focus:border-[#32a693]"
            type="text"
            placeholder="02255 36987"
          />
          <span className="text-[0.60rem] text-[#88888c]">
            A verification OTP will be sent to this number.{" "}
          </span>
          <div className="outline outline-1 outline-gray-300 relative ">
            <input
              type="text"
              placeholder=" "
              className="block px-3 py-4 w-full text-sm sm:w-[370px] appearance-none focus:outline-none bg-transparent  border focus:border-[#32a693]"
            />
            <label
              for="email"
              className="absolute top-1 text-sm bg-white p-3 -z-1 duration-300 origin-0 text-[#88888c]"
            >
              Email ID
            </label>
          </div>
          <button
            onClick={handleClick}
            type="submit"
            className="bg-[#32a693] text-white my-2 py-3 hover:text-[#32a693] hover:bg-transparent transition ease-out duration-300 border border-[#32a693] w-full"
          >
            Get OTP
          </button>
          <p className="text-sm text-center text-[#88888c]">
            Already have an account?{" "}
            <span className="text-[#32a693] cursor-pointer">Log in</span>
          </p>
        </form>
      </div>
    </>
  );
};

export default CreateAccount;
