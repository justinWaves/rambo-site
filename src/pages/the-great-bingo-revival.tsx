import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import VideoBackground from "@/components/VideoBackground";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import React from "react";

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

function theGreatBingoRevival() {
  return (
    <div className="relative min-h-screen  body-font font-orbitron">
      <Header />
      <div className="pb-60 pt-20 md:pt-36">
        <div className="mx-auto bg-black bg-filter backdrop-blur-xl bg-opacity-70 p-5 max-w-7xl text-white px-10  relative z-10 rounded-xl">
          <h1 className="text-3xl text-white mb-10 text-center font-extrabold underline decoration-rambo-red ">
            The Great Bingo Revival
          </h1>
          <div className="flex flex-col">
            <p className="max-w-xl  mx-auto">
              The Great Bingo Revival is a rhythm and funk soul explosion
              captivating festivals, corporate events and private parties across
              the world! ​Reminiscent of a 1970&apos;s game show, The Great
              Bingo Revival harkens back to an era of wide bottom pants, big
              hair and funky dance moves.
            </p>
            <a
              href="https://www.thegreatbingorevival.com/"
              className="bg-rambo-red  mt-10 mb-10 text-xl cursor-pointer mx-auto p-4  rounded-xl hover:bg-red-400"
            >
              {" "}
              <DoubleArrowIcon className="mb-1 text-3xl animate-pulse" />
              Visit The Great Bingo Revival
            </a>

            <ImageSlider images={images} />
          </div>
        </div>
      </div>
      <Footer />
      <VideoBackground />
    </div>
  );
}

export default theGreatBingoRevival;
