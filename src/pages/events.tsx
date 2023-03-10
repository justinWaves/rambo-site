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
      <div className="pb-60 pt-20 md:pt-36 ">
        <div className="mx-auto bg-black bg-filter backdrop-blur-xl bg-opacity-70  max-w-7xl text-white md:px-10  relative z-10 rounded-xl pt-10 ">
          <div className="relative overflow-x-hidden">
            <UpcomingEvents upcomingEvents={upcomingEvents} />
          </div>
          <a
            href="https://www.facebook.com/RamboPartyProductions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cursor-pointer  text-center mx-auto w-3/6 md:w-1/4 mb-10 bg-black hover:bg-rambo-red p-5 hover:p-1 transition-all duration-500 rounded-xl ">
              <img src="partybook-rambo.png" alt="" />

              <h1 className="text-2xl animate-bounce mt-5">
                Follow on facebook for maXimum party potential
              </h1>
            </div>
          </a>
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
