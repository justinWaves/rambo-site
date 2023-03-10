import React from "react";
import { UpcomingEventProps } from "typings";
import { client, urlFor } from "client";
import MailingListComponent from "./MailingListComponent";
import UpcomingEvents from "./UpcomingEvents";
import VideoBackground from "./VideoBackground";
import { PropsForFeatures } from "@headlessui/react/dist/utils/render";

// interface Props {
//   upcomingEvents: UpcomingEventProps;
//   promoPost: any;
// }

function Promo({ promoPage }: any) {
  console.log(promoPage);
  return (
    <div className="relative w-screen  pb-60 flex flex-col overflow-x-hidden z-0">
      <VideoBackground />
      <div className="h-screen mt-36 ">
        {promoPage.map((promoPost: any) => {
          return (
            <div className="w-screen md:w-1/2 absolute mx-auto left-0 right-0 mt-10">
              <h1 className="text-white text-center text-3xl mb-5">
                {promoPost.caption}
              </h1>
              <img
                src={urlFor(promoPost.promoImage).url()!}
                alt=""
                className=""
              />
            </div>
          );
        })}
      </div>
      {/* <div className="mx-auto  p-5 w-fit z-10 bg-black bg-filter backdrop-blur-xl bg-opacity-70  rounded-xl mb-40 ">
        <h1 className="text-xl text-white mb-5 z-1 text-center">
          Stay up to date with all the eXtreme action
        </h1>
        <MailingListComponent />
      </div> */}

      {/* <UpcomingEvents upcomingEvents={sanityData} /> */}
    </div>
  );
}

export default Promo;

// export const getServerSideProp = async () => {
//   const query = `*[_type == "promoPage"]{

//     caption,
//  promoImage,

//   }`;

//   const promoPost = await client.fetch(query);

//   return {
//     props: {
//       promoPost,
//     },
//   };
// };
