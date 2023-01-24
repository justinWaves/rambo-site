import React from "react";
import { UpcomingEventProps } from "typings";
import { PortableText } from "@portabletext/react";
import { urlFor } from "client";

function UpcomingEvents({ upcomingEvents }: UpcomingEventProps) {
  return (
    <div className=" flex flex-col  z-10 w-screen md:p-20 ">
      <h1 className="text-6xl text-black mb-10 text-center font-extrabold underline decoration-rambo-red ">
        Upcoming Events
      </h1>
      {upcomingEvents.map((event) => {
        return (
          <div
            key={event._id}
            className="max-w-7xl w-5/8 mx-auto bg-black bg-filter backdrop-blur-xl bg-opacity-70 mt-10 p-5 rounded-xl "
          >
            <h1 className="text-white font-bold text-3xl md:text-5xl  mb-3 p-3">
              {event.title}
            </h1>
            <img src={urlFor(event.image).url()!} alt="" />
            <div className="flex  relative ">
              <span className="text-white text-md p-5 md:w-3/4 mb-20 ">
                <PortableText value={event.body} />
              </span>
              <a href={event.url} target="_blank" rel="noreferrer">
                <img
                  src="baby-keytar.png"
                  className="absolute bottom-12 right-0 hidden md:block w-1/4"
                />
                <button className="cursor-pointer text-lg p-1 font-bold text-slate-100 bg-rambo-red h-15 w-full md:w-1/4  rounded-md absolute bottom-5 right-0 ">
                  <p className="animate-pulse"> Go To Event Page</p>
                </button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UpcomingEvents;
