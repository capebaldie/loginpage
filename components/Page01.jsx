import React, { useState } from "react";
import AlmostThere from "./AlmostThere";
import ChooseInterest from "./ChooseInterest";
import MoreStep from "./MoreStep";
import GetOtp from "./GetOtp";
import CreateAccount from "./CreateAccount";

const Page01 = () => {
  //
  const [newAccount, setNewAccount] = useState(true);

  const [EnterOtp, setEnterOtp] = useState(false);

  const [almostThere, setAlmostThere] = useState(false);

  const [moreStep, setMoreStep] = useState(false);

  const [intrst, setIntrst] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setNewAccount(false);
    setEnterOtp(true);
    setAlmostThere(false);
  };

  const onClick = () => {
    setNewAccount(false);
    setEnterOtp(false);
    setAlmostThere(true);
    setMoreStep(false);
  };

  const anotherClick = () => {
    setNewAccount(true);
    setEnterOtp(false);
    setAlmostThere(false);
  };

  const nextClick = () => {
    setNewAccount(false);
    setEnterOtp(false);
    setAlmostThere(false);
    setMoreStep(true);
    setIntrst(false);
    setShowModal(!showModal);
  };

  const intrstClick = () => {
    setNewAccount(false);
    setEnterOtp(false);
    setAlmostThere(false);
    setMoreStep(false);
    setIntrst(true);
  };

  return (
    <div className="">
      <main className="flex sm:flex-row flex-col w-full">
        <div className="bg-[#ececed] h-[640px] sm:h-screen flex items-center justify-center relative sm:w-1/2">
          {newAccount && (
            <img
              className="mb-[10rem] sm:mb-0 sm:px-12 w-[75%]"
              src="../images/account.svg"
              alt=""
            />
          )}
          {EnterOtp && (
            <img
              className="mb-[10rem] sm:mb-0 sm:px-12 w-[75%]"
              src="../images/mail.svg"
              alt=""
            />
          )}
          {almostThere && (
            <img
              className="mb-[10rem] sm:mb-0 sm:px-12 w-[75%]"
              src="../images/mail.svg"
              alt=""
            />
          )}
          {moreStep && (
            <img
              className="mb-[10rem] sm:mb-0 sm:px-12 w-[75%]"
              src="../images/mail.svg"
              alt=""
            />
          )}
          {intrst && (
            <img
              className="mb-[10rem] sm:mb-0 sm:px-12 w-[75%]"
              src="../images/tokyo-heart.svg"
              alt=""
            />
          )}

          <img
            className="absolute top-10 sm:left-10 right-10 w-16 h-auto"
            src="../images/logo.svg"
            alt=""
          />
        </div>
        <div className="w-1/2">
          {newAccount && <CreateAccount handleClick={handleClick} />}
          {EnterOtp && <GetOtp onClick={onClick} anotherClick={anotherClick} />}
          {almostThere && (
            <AlmostThere nextClick={nextClick} handleClick={handleClick} />
          )}
          {moreStep && <MoreStep intrstClick={intrstClick} onClick={onClick} />}
          {intrst && <ChooseInterest nextClick={nextClick} />}
        </div>
      </main>
      {/*     modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none h-full mx-10 sm:mx-[30rem]">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="rounded-sm shadow-lg relative flex flex-col bg-white items-end">
                <button
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                  className="border px-2 m-2"
                >
                  X
                </button>
                <div className="relative p-6 flex flex-col items-center gap-2 px-12">
                  <img
                    src="../images/Vector.svg"
                    className="text-[#32a693] w-12 h-auto"
                  />
                  <p className="font-bold text-lg">Account Confirmed</p>
                  <p className="text-center text-xs text-[#88888c]">
                    Your Account has been successfully created
                  </p>
                  <p className="text-center text-xs text-[#88888c]">
                    We have sent you a login link to your given email. Kindly
                    click on the link to login and start predicting!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Page01;
