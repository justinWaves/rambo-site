import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ImageSlider = ({ images }: any) => {
  const [index, setIndex] = useState(0);

  const handlePrevClick = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const handleNextClick = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="relative mb-36  max-w-7xl md:w-4/6 mx-auto ">
      <img
        src={images[index].src}
        alt={images[index].alt}
        className="w-full h-full  object-cover mx-auto "
      />
      <p className="text-center md:text-2xl text-lg text-zinc-400">
        {images[index].caption}
      </p>

      <button
        className="absolute left-0 top-50%  p-4 text-zinc-600 hover:text-rambo-red "
        onClick={handlePrevClick}
      >
        <ArrowBackIosIcon className="text-6xl animate-pulse" />
      </button>
      <button
        className="absolute right-0 top-50% p-4 text-3xl  text-zinc-600 hover:text-rambo-red"
        onClick={handleNextClick}
      >
        <ArrowForwardIosIcon className="text-6xl animate-pulse" />
      </button>
    </div>
  );
};

export default ImageSlider;
