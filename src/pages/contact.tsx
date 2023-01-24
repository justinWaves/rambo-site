import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VideoBackground from "@/components/VideoBackground";

function contact() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="pb-60 pt-40">
        <div className="mx-auto bg-black bg-filter backdrop-blur-xl bg-opacity-70 p-5 max-w-7xl text-white px-10  relative z-10 rounded-xl">
          <h1 className="text-5xl text-rambo-red text-center mb-5 ">Contact</h1>
        </div>
      </div>
      <Footer />
      <VideoBackground />
    </div>
  );
}

export default contact;
