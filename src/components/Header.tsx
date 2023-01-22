import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Transition } from "@headlessui/react";
import Link from "next/link";

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
          <MenuIcon className="  text-4xl text-white md:hidden" />
        </button>
        <Link href="/" className="cursor-pointer">
          <div className="flex flex-row  justify-center  ">
            <h1 className="text-md md:text-lg mr-1 mt-2 text-white" text-white>
              Rambo
            </h1>
            <img src="rambo-party.svg" className="w-1/3 " />
            <h1 className="text-md md:text-lg  mt-2 text-white">Productions</h1>
          </div>
        </Link>
        <button className="cursor-pointer absolute top-0 right-2 md:right-4  w-10 h-10 ">
          <img
            src="rambo-head.png"
            className=" w-8 mt-1 md:mt-0 md:w-10 "
            onClick={() => ramboHeadActivate()}
          />
        </button>
      </div>
      {/* Desktop Menu */}
      <div className=" hidden md:flex fixed top-16 w-screen flex-row  max-w-7xl mx-auto left-0 right-0  bg-black bg-filter backdrop-blur-xl bg-opacity-80 z-20 rounded-b-xl p-2">
        <Link
          href="/about"
          className="text-zinc-100 text-lg  mb-1 cursor-pointer w-full hover:bg-rambo-red p-1 rounded-xl text-center transition-all duration-500"
        >
          <h1>About</h1>
        </Link>
        <Link
          href="/events"
          className="text-zinc-100 text-lg  mb-1 cursor-pointer w-full hover:bg-rambo-red p-1 rounded-xl text-center transition-all duration-500"
        >
          <h1>Events</h1>
        </Link>
        <Link
          href="/services"
          className="text-zinc-100 text-lg  mb-1 cursor-pointer w-full hover:bg-rambo-red p-1 rounded-xl text-center transition-all duration-500"
        >
          <h1>Services</h1>
        </Link>
        <Link
          href="/gallery"
          className="text-zinc-100 text-lg  mb-1 cursor-pointer w-full hover:bg-rambo-red p-1 rounded-xl text-center transition-all duration-500"
        >
          <h1>Gallery</h1>
        </Link>
        <Link
          href="/contact"
          className="text-zinc-100 text-lg  mb-1 cursor-pointer w-full hover:bg-rambo-red p-1 rounded-xl text-center transition-all duration-500"
        >
          <h1>Contact</h1>
        </Link>
        <a
          href=""
          className="text-zinc-100 text-lg  mb-1 cursor-pointer w-full hover:bg-rambo-red p-1 rounded-xl text-center transition-all duration-500"
        >
          <h1>Shop</h1>
        </a>
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
        <div className="fixed top-16 w-screen flex flex-col md:hidden   bg-black bg-filter backdrop-blur-xl bg-opacity-80 z-20 p-5 rounded-b-lg">
          <h1 className="text-zinc-100 text-lg mt-3 mb-3 cursor-pointer w-full hover:bg-rambo-red p-2 rounded-xl pl-5">
            About
          </h1>
          <h1 className="text-zinc-100 text-lg mt-3 mb-3 cursor-pointer w-full hover:bg-rambo-red p-2 rounded-xl pl-5">
            Events
          </h1>
          <h1 className="text-zinc-100 text-lg mt-3 mb-3 cursor-pointer w-full hover:bg-rambo-red p-2 rounded-xl pl-5">
            Services
          </h1>
          <h1 className="text-zinc-100 text-lg mt-3 mb-3 cursor-pointer w-full hover:bg-rambo-red p-2 rounded-xl pl-5">
            Gallery
          </h1>
          <h1 className="text-zinc-100 text-lg mt-3 mb-3 cursor-pointer w-full hover:bg-rambo-red p-2 rounded-xl pl-5">
            Contact
          </h1>
          <h1 className="text-zinc-100 text-lg mt-3 mb-3 cursor-pointer w-full hover:bg-rambo-red p-2 rounded-xl pl-5">
            Shop
          </h1>
        </div>
      </Transition>
    </>
  );
}

export default Header;
