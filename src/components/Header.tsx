import React from "react";
import Party from "public/rambo-party.svg";
import MenuIcon from "@mui/icons-material/Menu";

function Header({ ramboHeadActivate }: any) {
  return (
    <div
      className="flex justify-center h-16 fixed
    p-3  mx-auto max-w-7xl  bg-black w-screen z-10 left-0 right-0 bg-filter backdrop-blur-xl bg-opacity-80 z-15 "
    >
      <button className="cursor-pointer absolute left-2 md:left-4  w-10 h-10 ">
        <MenuIcon className="  text-4xl text-white" />
      </button>

      <div className="flex flex-row w-64 md:w-80 ml-5  ">
        <h1 className="text-md md:text-lg mr-1 mt-2 text-white" text-white>
          Rambo
        </h1>
        <Party className="" />
        <h1 className="text-md md:text-lg  mt-2 text-white">Productions</h1>
      </div>
      <button className="cursor-pointer absolute top-0 right-2 md:right-4  w-10 h-10 ">
        <img
          src="rambo-head.png"
          className=" w-10"
          onClick={() => ramboHeadActivate()}
        />
      </button>
    </div>
  );
}

export default Header;
