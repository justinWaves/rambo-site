import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VideoBackground from "@/components/VideoBackground";
import ImageSlider from "@/components/ImageSlider";

const images = [
  {
    src: "bingo-2.webp",
    alt: "The Reverend Rusty Reams",
    caption: "The Reverend Rusty Reams",
  },
  {
    src: "bingo-1.webp",
    alt: "Rambo commodering the bingo funk explosion at Electric Forest",
    caption: "Rambo igniting a bingo funk explosion at Electric Forest",
  },

  {
    src: "bingo-4.webp",
    alt: "Yamaha DXS-18 1020w Powered subwoofer",
    caption: "In the beginning there was the word, and the word was Bingo",
  },
];

function Gallery() {
  const [index, setIndex] = useState(0);

  const handlePrevClick = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const handleNextClick = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="pb-60 pt-20 md:pt-40">
        <div className="mx-auto bg-black bg-filter backdrop-blur-xl bg-opacity-70 p-5 max-w-7xl text-white px-10  relative z-10 rounded-xl">
          <h1 className="text-6xl text-white mb-10 text-center font-extrabold underline decoration-rambo-red ">
            Gallery
          </h1>
          <div className="flex items-center justify-center h-screen">
            <ImageSlider images={images} />
          </div>
        </div>
      </div>
      <Footer />
      <VideoBackground />
    </div>
  );
}

export default Gallery;
