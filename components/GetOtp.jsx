import React from "react";

const GetOtp = ({ onClick, anotherClick }) => {
  return (
    <>
      <div className="flex flex-col items-start mx-4 border sm:border-none p-4 sm:p-0 sm:mx-20 mt-10 absolute sm:relative top-[23rem] sm:top-auto bg-white">
        <img
          onClick={anotherClick}
          className="hidden sm:block w-8 h-auto"
          src="../icons/Back.svg"
          alt=""
        />
        <img
          onClick={anotherClick}
          className="absolute -top-[22.5rem] left-0 sm:hidden w-8 h-auto"
          src="../icons/Back.svg"
          alt=""
        />
        <h1 className="font-semibold text-2xl mt-2">Enter OTP</h1>
        <p className="text-[#88888c] text-sm sm:w-[80%] my-2">
          Please enter the OTP we’ve sent to your phone number 91******02
        </p>
        <form className="flex my-2 gap-4 w-full sm:w-auto" action="">
          <input
            className="px-3 py-2 text-xl w-full sm:w-[50px] focus:outline-none border focus:border-[#32a693] text-center"
            type="text"
            placeholder="*"
          />
          <input
            className="px-3 py-2 text-xl w-full sm:w-[50px] focus:outline-none border focus:border-[#32a693] text-center"
            type="text"
            placeholder="*"
          />
          <input
            className="px-3 py-2 text-xl w-full sm:w-[50px] focus:outline-none border focus:border-[#32a693] text-center"
            type="text"
            placeholder="*"
          />
          <input
            className="px-3 py-2 text-xl w-full sm:w-[50px] focus:outline-none border focus:border-[#32a693] text-center"
            type="text"
            placeholder="*"
          />
        </form>
        <button
          onClick={onClick}
          type="submit"
          className="bg-[#32a693] text-white my-2 py-3 sm:w-[370px] hover:text-[#32a693] hover:bg-transparent transition ease-out duration-300 border border-[#32a693] w-full"
        >
          Verify and Proceed
        </button>
      </div>
    </>
  );
};

export default GetOtp;
