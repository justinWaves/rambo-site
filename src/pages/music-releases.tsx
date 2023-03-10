import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VideoBackground from "@/components/VideoBackground";
import { client, urlFor } from "client";
import React from "react";

interface Release {
  _id: string;
  caption: string;
  trackURL: string;
  trackImage: {
    asset: {
      url: string;
    };
  };
}

interface ReleasesProps {
  musicReleases: [Release];
}

function musicReleases({ musicReleases }: ReleasesProps) {
  console.log(musicReleases);
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      <div className="pb-60 pt-20 md:pt-36">
        <div className="mx-auto bg-black bg-filter backdrop-blur-xl bg-opacity-70 md:p-5 max-w-7xl text-white md:px-10  relative z-10 rounded-xl">
          <h1 className="text-6xl text-white mb-10 pt-10 text-center font-extrabold underline decoration-rambo-red ">
            Music Releases
          </h1>

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center ">
            {musicReleases.map((release: Release) => {
              return (
                <a
                  href={release.trackURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    key={release._id}
                    className="w-screen sm:w-[16rem] mt-10 cursor-pointer mb-5"
                  >
                    <h1 className="text-white text-center text-xl mb-2 ">
                      {release.caption}
                    </h1>
                    <img
                      src={urlFor(release.trackImage).url()!}
                      alt=""
                      className="w-screen"
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
      <VideoBackground />
    </div>
  );
}

export default musicReleases;

export const getServerSideProps = async () => {
  const query = `*[_type == "musicReleases"]{
      _id,
  caption,
  trackURL,
  trackImage,
    }`;

  const musicReleases = await client.fetch(query);

  return {
    props: {
      musicReleases,
    },
  };
};
