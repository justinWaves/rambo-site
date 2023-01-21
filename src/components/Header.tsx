import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Transition } from "@headlessui/react";

function Header({ ramboHeadActivate }: any) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen);
  };

  return (
    <>
      <div
        className="flex justify-center h-16 fixed
    p-3  mx-auto max-w-7xl  bg-black w-screen left-0 right-0 bg-filter backdrop-blur-xl bg-opacity-80 z-20 "
      >
        <button
          className="cursor-pointer absolute left-2 md:left-4  w-10 h-10 "
          onClick={openMobileMenu}
        >
          <MenuIcon className="  text-4xl text-white" />
        </button>

        <div className="flex flex-row  justify-center  ">
          <h1 className="text-md md:text-lg mr-1 mt-2 text-white" text-white>
            Rambo
          </h1>
          <img src="rambo-party.svg" className="w-1/3 " />
          <h1 className="text-md md:text-lg  mt-2 text-white">Productions</h1>
        </div>
        <button className="cursor-pointer absolute top-0 right-2 md:right-4  w-10 h-10 ">
          <img
            src="rambo-head.png"
            className=" w-8 mt-1 md:mt-0 md:w-10 "
            onClick={() => ramboHeadActivate()}
          />
        </button>
      </div>
      {/* Mobile Menu */}
      <Transition
        show={isMobileMenuOpen}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute top-16 w-screen md:w-1/3    bg-black bg-filter backdrop-blur-xl bg-opacity-80 z-20 p-5">
          <h1 className="text-zinc-100 text-lg mt-3 mb-3 hover:text-rambo-red  w-full hover:bg-zinc-900 p-2 rounded-xl pl-5">
            About Us
          </h1>
          <h1 className="text-zinc-100 text-lg mt-3 mb-3 hover:text-rambo-red  w-full hover:bg-zinc-900 p-2 rounded-xl pl-5">
            Events
          </h1>
          <h1 className="text-zinc-100 text-lg mt-3 mb-3 hover:text-rambo-red  w-full hover:bg-zinc-900 p-2 rounded-xl pl-5">
            Services
          </h1>
          <h1 className="text-zinc-100 text-lg mt-3 mb-3 hover:text-rambo-red  w-full hover:bg-zinc-900 p-2 rounded-xl pl-5">
            Gallery
          </h1>
          <h1 className="text-zinc-100 text-lg mt-3 mb-3 hover:text-rambo-red  w-full hover:bg-zinc-900 p-2 rounded-xl pl-5">
            Contact
          </h1>
          <h1 className="text-zinc-100 text-lg mt-3 mb-3 hover:text-rambo-red  w-full hover:bg-zinc-900 p-2 rounded-xl pl-5">
            Shop
          </h1>
        </div>
      </Transition>
    </>
  );
}

export default Header;
