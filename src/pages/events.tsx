import Footer from "@/components/Footer";
import Header from "@/components/Header";
import UpcomingEvents from "@/components/UpcomingEvents";
import VideoBackground from "@/components/VideoBackground";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { client, urlFor } from "client";
import React from "react";
import { UpcomingEventProps } from "typings";

function Events({ upcomingEvents }: UpcomingEventProps) {
  return (
    <div className="relative min-h-screen   mx-auto overflow-hidden ">
      <Header />
      <div className="pb-60 pt-20 md:pt-40">
        <div className="mx-auto bg-black bg-filter backdrop-blur-xl bg-opacity-70  max-w-7xl text-white md:px-10  relative z-10 rounded-xl pt-10">
          <a
            href="https://www.facebook.com/RamboPartyProductions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cursor-pointer  text-center mx-auto w-5/6 md:w-1/2 mb-10 bg-zinc-900 hover:bg-zinc-800 p-5 hover:p-1 transition-all duration-300 rounded-xl">
              <img src="partybook-rambo.png" alt="" />

              <h1 className="text-2xl animate-bounce mt-5">
                Follow on facebook for maXimum party potential
              </h1>
            </div>
          </a>
          <div className="relative overflow-x-hidden">
            <UpcomingEvents upcomingEvents={upcomingEvents} />
          </div>
        </div>
      </div>
      <Footer />
      <VideoBackground />
    </div>
  );
}

export default Events;

export const getServerSideProps = async () => {
  const query = `*[_type == "upcomingEvents"]{
      _id,
      _createdAt,
      title,
      author -> {
      name,
      image
    },
        url,
        eventDate,
    image,
    body,
    slug
    }`;

  const upcomingEvents = await client.fetch(query);

  return {
    props: {
      upcomingEvents,
    },
  };
};
