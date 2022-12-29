import React from "react";

const ChooseInterest = ({ nextClick }) => {
  return (
    <>
      <div className="flex flex-col items-start border sm:border-none p-4 mx-5 mr-2 sm:p-0 sm:mx-20 mt-8 absolute w-[90%] sm:w-auto sm:relative top-[23rem] sm:top-auto bg-white">
        <div className="flex justify-between items-center w-full">
          <img
            onClick={nextClick}
            className="hidden sm:block w-8 h-auto"
            src="../icons/Back.svg"
            alt=""
          />
          <img
            onClick={nextClick}
            className="absolute -top-[22.5rem] left-0 sm:hidden w-8 h-auto"
            src="../icons/Back.svg"
            alt=""
          />
          <p className="text-[#88888c] text-sm hidden sm:block ">Skip</p>
        </div>
        <h1 className="font-semibold text-2xl mt-2">Choose Your Interest</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 grid-flow-row-dense gap-3 my-6 w-full sm:w-auto">
          <button className="flex flex-col p-4 items-center hover:bg-[#eaf6f4] bg-[#f7f7f8] focus:outline-none focus:ring-1 focus:ring-[#32a693]">
            <img className="w-8 h-auto" src="../images/courthouse.svg" alt="" />
            <p className="text-[#88888c] text-sm mt-2">Politics</p>
          </button>
          <button className="flex flex-col p-4 items-center  hover:bg-[#eaf6f4] bg-[#f7f7f8] focus:outline-none focus:ring-1 focus:ring-[#32a693]">
            <img className="w-8 h-auto" src="../images/dribbble.svg" alt="" />
            <p className="text-[#88888c] text-sm mt-2">Sports</p>
          </button>
          <button className="flex flex-col p-4 items-center hover:bg-[#eaf6f4] bg-[#f7f7f8] focus:outline-none focus:ring-1 focus:ring-[#32a693]">
            <img
              className="w-8 h-auto"
              src="../images/monitor-mobbile.svg"
              alt=""
            />
            <p className="text-[#88888c] text-sm mt-2">Entertainment</p>
          </button>
          <button className="flex flex-col p-4 items-center hover:bg-[#eaf6f4] bg-[#f7f7f8] focus:outline-none focus:ring-1 focus:ring-[#32a693]">
            <img className="w-8 h-auto" src="../images/camera.svg" alt="" />
            <p className="text-[#88888c] text-sm mt-2">Photography</p>
          </button>
          <button className="flex flex-col p-4 items-center hover:bg-[#eaf6f4] bg-[#f7f7f8] focus:outline-none focus:ring-1 focus:ring-[#32a693]">
            <img className="w-8 h-auto" src="../images/microscope.svg" alt="" />
            <p className="text-[#88888c] text-sm mt-2">Sci-Fi</p>
          </button>
          <button className="flex flex-col p-4 items-center hover:bg-[#eaf6f4] bg-[#f7f7f8] focus:outline-none focus:ring-1 focus:ring-[#32a693]">
            <img
              className="w-8 h-auto"
              src="../images/dollar-circle.svg"
              alt=""
            />
            <p className="text-[#88888c] text-sm mt-2">Economy</p>
          </button>
        </div>
        <button
          type="submit"
          className="bg-[#32a693] text-white my-2 py-3 w-full sm:mt-[5rem] sm:w-[80%] hover:text-[#32a693] hover:bg-transparent transition ease-out duration-300 border border-[#32a693]"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default ChooseInterest;
