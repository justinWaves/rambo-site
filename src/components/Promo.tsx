import React from "react";
import MailingListComponent from "./MailingListComponent";
import UpcomingEvents from "./UpcomingEvents";

function Promo() {
  return (
    <div className="w-screen h-screen flex flex-col  bg-zinc-900">
      <div className="mx-auto mt-40 p-10 bg-zinc-800 rounded-lg">
        <h1 className="text-xl text-white mb-5">
          Stay up to date with all the eXtreme action
        </h1>
        <MailingListComponent />
      </div>
      <UpcomingEvents />
    </div>
  );
}

export default Promo;
