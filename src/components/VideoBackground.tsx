import React from "react";

const VideoBackground = () => {
  return (
    <>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="space-wallpaper.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
    </>
  );
};

export default VideoBackground;
