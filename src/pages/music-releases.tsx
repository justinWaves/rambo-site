import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VideoBackground from "@/components/VideoBackground";
import React from "react";

function musicReleases() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="pb-60 pt-20 md:pt-36">
        <div className="mx-auto bg-black bg-filter backdrop-blur-xl bg-opacity-70 p-5 max-w-7xl text-white px-10  relative z-10 rounded-xl">
          <h1 className="text-6xl text-white mb-10 text-center font-extrabold underline decoration-rambo-red ">
            Music Releases
          </h1>
        </div>
      </div>
      <Footer />
      <VideoBackground />
    </div>
  );
}

export default musicReleases;
