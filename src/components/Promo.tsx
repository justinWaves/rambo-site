import React from "react";
import { UpcomingEventProps } from "typings";
import { client, urlFor } from "client";
import MailingListComponent from "./MailingListComponent";
import UpcomingEvents from "./UpcomingEvents";
import VideoBackground from "./VideoBackground";

function Promo({ upcomingEvents }: any, { promoPost }: any) {
  console.log(promoPost);
  return (
    <div
      className="relative w-screen  pb-60 flex flex-col overflow-x-hidden z-0
     "
    >
      <VideoBackground />
      <div className="h-screen mt-40">
        {/* <img src={urlFor(promoPost.promoImage).url()!} alt="" /> */}
        <div className="mx-auto  p-5 w-fit z-10 bg-black bg-filter backdrop-blur-xl bg-opacity-70  rounded-xl ">
          <h1 className="text-xl text-white mb-5 z-1 text-center">
            Stay up to date with all the eXtreme action
          </h1>
          <MailingListComponent />
        </div>
      </div>

      <UpcomingEvents upcomingEvents={upcomingEvents} />
    </div>
  );
}

export default Promo;

export const getServerSideProps = async () => {
  const query = `*[_type == "promoPage"]{

    caption,
 promoImage,

  }`;

  const promoPost = await client.fetch(query);

  return {
    props: {
      promoPost,
    },
  };
};
