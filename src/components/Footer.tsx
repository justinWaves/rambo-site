import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="absolute bottom-0 flex w-screen h-60 bg-black z-20 ">
      <img src="rambo-keytar.png" alt="" className=" cursor-pointer  ml-2" />
      <div className="absolute bottom-10 right-5 md:right-8 flex md:flex-row flex-col text-white text-lg">
        <Link
          href="/about"
          className="  cursor-pointer  hover:text-rambo-red  transition-all duration-200 border-l-2 pr-2 hover:border-rambo-red pl-2"
        >
          <h1>About</h1>
        </Link>
        <a
          href="https://www.facebook.com/RamboPartyProductions/events/"
          target="_blank"
          rel="noopener noreferrer"
          className="  cursor-pointer  hover:text-rambo-red  transition-all duration-200 border-l-2 pr-2 hover:border-rambo-red pl-2"
        >
          <h1>Events</h1>
        </a>
        <Link
          href="/services"
          className="  cursor-pointer  hover:text-rambo-red  transition-all duration-200 border-l-2 pr-2 hover:border-rambo-red pl-2"
        >
          <h1>Services</h1>
        </Link>
        <Link
          href="/gallery"
          className="  cursor-pointer  hover:text-rambo-red  transition-all duration-200 border-l-2 pr-2 hover:border-rambo-red pl-2"
        >
          <h1>Gallery</h1>
        </Link>
        <Link
          href="/contact"
          className="  cursor-pointer  hover:text-rambo-red  transition-all duration-200 border-l-2 pr-2 hover:border-rambo-red pl-2"
        >
          <h1>Contact</h1>
        </Link>
        <a
          href="https://www.rambopartyproductions.com/shop"
          target="_blank"
          rel="noopener noreferrer"
          className="  cursor-pointer  hover:text-rambo-red  transition-all duration-200 border-l-2 pr-2 hover:border-rambo-red pl-2"
        >
          <h1>Shop</h1>
        </a>
      </div>
      <p className=" absolute bottom-1 right-2   mx-auto text-zinc-700 text-sm">
        Site Designed and Built by{" "}
        <a
          href="https://justinwaves.github.io/jw-portfolio-2021/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500"
        >
          Justin Weisberg
        </a>{" "}
        in 2023
      </p>
    </div>
  );
}

export default Footer;
