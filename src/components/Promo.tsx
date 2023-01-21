import React from "react";
import MailingListComponent from "./MailingListComponent";
import UpcomingEvents from "./UpcomingEvents";

function Promo() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-x-hidden  ">
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 h-full w-screen object-cover overflow-x-clip "
      >
        <source src="space-wallpaper.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="mx-auto mt-40 p-10 bg-zinc-800 rounded-lg z-10">
        <h1 className="text-xl text-white mb-5 z-1">
          Stay up to date with all the eXtreme action
        </h1>
        <MailingListComponent />
      </div>
      <UpcomingEvents />
    </div>
  );
}

export default Promo;
