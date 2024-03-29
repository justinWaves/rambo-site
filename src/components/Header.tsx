import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Transition } from "@headlessui/react";
import Link from "next/link";

function Header({ ramboHeadActivate }: any) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [show, handleShow] = useState(true);

  const openMobileMenu = () => {
    setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen);
  };

  const transitionHeader = () => {
    if (window.scrollY < 200) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionHeader);
    return () => window.removeEventListener("scroll", transitionHeader);
  }, []);

  // if (show) {
  //   setTimeout(() => {
  //     handleShow(false);
  //   }, 4000);
  // }

  return (
    <>
      <div
        className="flex justify-center h-20 fixed
    p-3  mx-auto  max-w-7xl  bg-black w-screen left-0 right-0 bg-filter backdrop-blur-xl bg-opacity-50 z-20 "
      >
        <button
          className="cursor-pointer absolute left-2 md:left-4  w-10 h-10 block md:hidden "
          onClick={openMobileMenu}
        >
          <MenuIcon className="  text-4xl text-zinc-100 " />
        </button>
        <div>
          <Link href="/" className="cursor-pointer">
            <div className="flex flex-row  justify-center  ">
              <h1 className="text-md md:text-lg mr-1 mt-2 text-white">Rambo</h1>
              <img src="rambo-party.svg" className="w-1/3 " />
              <h1 className="text-md md:text-lg  mt-2 text-white">
                Productions
              </h1>
            </div>
          </Link>
          <h1 className="text-rambo-red text-2xl text-center relative right-8">
            パーティ
          </h1>
        </div>
        <Link href="/">
          <button className="cursor-pointer absolute top-0 right-2 md:right-4  w-10 h-10 hidden md:block">
            <img
              src="rambo-head.png"
              className=" w-8 mt-1 md:mt-0 md:w-10 "
              onClick={() => ramboHeadActivate()}
            />
          </button>
        </Link>
      </div>
      {/* Desktop Menu */}
      <div
        className={` ${
          show && "md:flex bg-black bg-filter backdrop-blur-xl bg-opacity-50"
        } hover:md:flex hidden fixed top-20 w-screen flex-row  max-w-7xl mx-auto left-0 right-0   z-20 rounded-b-xl transition ease-in-out duration-1000`}
      >
        <Link
          href="/about"
          className="text-white text-sm  mb-1 cursor-pointer w-full hover:bg-zinc-800 p-1 rounded-xl text-center transition-all duration-200"
        >
          <h1>About</h1>
        </Link>
        <Link
          href="/music-releases"
          className="text-white text-sm  mb-1 cursor-pointer w-full hover:bg-zinc-800 p-1 rounded-xl text-center transition-all duration-200"
        >
          <h1>Music Releases</h1>
        </Link>
        <Link
          href="/events"
          className="text-white text-sm  mb-1 cursor-pointer w-full hover:bg-zinc-800 p-1 rounded-xl text-center transition-all duration-200"
        >
          <h1>Events</h1>
        </Link>
        <Link
          href="/equipment-rental"
          className="text-white text-sm  mb-1 cursor-pointer w-full hover:bg-zinc-800 p-1 rounded-xl text-center transition-all duration-200"
        >
          <h1>Equipment Rental</h1>
        </Link>

        <Link
          href="/gallery"
          className="text-white text-sm  mb-1 cursor-pointer w-full hover:bg-zinc-800 p-1 rounded-xl text-center transition-all duration-200"
        >
          <h1>Gallery</h1>
        </Link>
        <Link
          href="/the-great-bingo-revival"
          className="text-white text-sm  mb-1 cursor-pointer w-full hover:bg-zinc-800 p-1 rounded-xl text-center transition-all duration-200"
        >
          <h1>Great Bingo Revival</h1>
        </Link>
        <Link
          href="/contact"
          className="text-white text-sm  mb-1 cursor-pointer w-full hover:bg-zinc-800 p-1 rounded-xl text-center transition-all duration-200"
        >
          <h1>Contact</h1>
        </Link>
        <a
          href="https://www.rambopartyproductions.com/shop"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm  mb-1 cursor-pointer w-full hover:bg-zinc-800 p-1 rounded-xl text-center transition-all duration-200"
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
        <div className="fixed top-16 w-screen flex flex-col md:hidden   bg-black bg-filter backdrop-blur-xl bg-opacity-50 z-20 p-5 rounded-b-lg">
          <Link href="/about">
            <h1 className="text-zinc-100 text-lg mt-3 mb-3 cursor-pointer w-full hover:bg-rambo-red p-2 rounded-xl pl-5">
              About
            </h1>
          </Link>
          <Link href="/music-releases">
            <h1 className="text-zinc-100 text-lg mt-3 mb-3 cursor-pointer w-full hover:bg-rambo-red p-2 rounded-xl pl-5">
              Music Releases
            </h1>
          </Link>
          <Link href="/events">
            <h1 className="text-zinc-100 text-lg mt-3 mb-3 cursor-pointer w-full hover:bg-rambo-red p-2 rounded-xl pl-5">
              Events
            </h1>
          </Link>
          <Link href="/equipment-rental">
            <h1 className="text-zinc-100 text-lg mt-3 mb-3 cursor-pointer w-full hover:bg-rambo-red p-2 rounded-xl pl-5">
              Equipment Rental
            </h1>
          </Link>
          <Link href="/the-great-bingo-revival">
            <h1 className="text-zinc-100 text-lg mt-3 mb-3 cursor-pointer w-full hover:bg-rambo-red p-2 rounded-xl pl-5">
              The Great Bingo Revival
            </h1>
          </Link>
          <Link href="/gallery">
            <h1 className="text-zinc-100 text-lg mt-3 mb-3 cursor-pointer w-full hover:bg-rambo-red p-2 rounded-xl pl-5">
              Gallery
            </h1>
          </Link>
          <Link href="/contact">
            <h1 className="text-zinc-100 text-lg mt-3 mb-3 cursor-pointer w-full hover:bg-rambo-red p-2 rounded-xl pl-5">
              Contact
            </h1>
          </Link>
          <a
            href="https://www.rambopartyproductions.com/shop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-zinc-100 text-lg mt-3 mb-3 cursor-pointer w-full hover:bg-rambo-red p-2 rounded-xl pl-5">
              Shop
            </h1>
          </a>
        </div>
      </Transition>
    </>
  );
}

export default Header;
