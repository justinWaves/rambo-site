import React from "react";
import { UpcomingEventProps } from "typings";
import { client, urlFor } from "client";
import MailingListComponent from "./MailingListComponent";
import UpcomingEvents from "./UpcomingEvents";
import VideoBackground from "./VideoBackground";
import { PropsForFeatures } from "@headlessui/react/dist/utils/render";

interface PromoPost {
  _id: string;
  promoImage: {
    asset: {
      url: string;
    };
  };
  caption: string;
}

interface PromoProps {
  promoPage: [PromoPost];
}

function Promo({ promoPage }: PromoProps) {
  console.log(promoPage);
  return (
    <div className="relative w-screen  pb-60   overflow-x-hidden z-0 ">
      <VideoBackground />
      <div className="h-screen  md:mt-36 grid place-items-center ">
        {promoPage.map((promoPost: any) => {
          return (
            <a
              href={promoPost.promoURL}
              target="_blank"
              rel="noopener noreferrer"
              key={promoPost._id}
              className=" absolute mx-auto left-0 right-0 md:pb-64"
            >
              <div className="flex-row cursor-pointer">
                <img
                  src="rambo-head-69.png"
                  alt=""
                  className=" w-40 md:block hidden mb-1 mx-auto"
                />
                <h1 className="text-white text-center text-3xl md:text-2xl mt-2 mb-5 px-3 md:px-5 max-w-3xl mx-auto">
                  {promoPost.caption}
                </h1>
              </div>
              <img
                src={urlFor(promoPost.promoImage).url()!}
                alt=""
                className="w-5/6 md:w-1/3 xl:w-1/4 mx-auto shadow-white shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer "
              />
            </a>
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
