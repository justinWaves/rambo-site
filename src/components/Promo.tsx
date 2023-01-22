import React from "react";
import { UpcomingEventProps } from "typings";
import MailingListComponent from "./MailingListComponent";
import UpcomingEvents from "./UpcomingEvents";

function Promo({ upcomingEvents }: UpcomingEventProps) {
  return (
    <div className="relative w-screen  pb-60 flex flex-col overflow-x-hidden z-0  ">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 h-full w-screen object-cover"
      >
        <source src="space-wallpaper.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="mx-auto mt-40 p-10  z-10 bg-black bg-filter backdrop-blur-xl bg-opacity-50  rounded-xl ">
        <h1 className="text-xl text-white mb-5 z-1">
          Stay up to date with all the eXtreme action
        </h1>
        <MailingListComponent />
      </div>

      <UpcomingEvents upcomingEvents={upcomingEvents} />
    </div>
  );
}

export default Promo;
