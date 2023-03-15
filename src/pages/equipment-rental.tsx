import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VideoBackground from "@/components/VideoBackground";
import ImageSlider from "@/components/ImageSlider";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Link from "next/link";

const images = [
  {
    src: "/equiptment-pics/cdj3000.jpg",
    alt: "Pioneer CDJ 3000",
    caption: "Pioneer CDJ 3000",
  },
  {
    src: "/equiptment-pics/dj-setup.jpg",
    alt: "2x CDJ 3000 + Pioneer DJM-900nxs2 Mixer",
    caption: "2x CDJ 3000 + Pioneer DJM-900nxs2 Mixer",
  },
  {
    src: "/equiptment-pics/yamaha-main.jpg",
    alt: "Yamaha DZR-12 2000w Powered Loudspeakers ",
    caption: "Yamaha DZR-12 2000w Powered Loudspeakers ",
  },
  {
    src: "/equiptment-pics/yamaha-sub.jpg",
    alt: "Yamaha DXS-18 1020w Powered subwoofer",
    caption: "Yamaha DXS-18 1020w Powered subwoofer",
  },
];

function equipmentRental() {
  return (
    <div className="relative min-h-screen  body-font font-orbitron">
      <Header />
      <div className="pb-60 pt-20 md:pt-36">
        <div className="mx-auto bg-black bg-filter backdrop-blur-xl bg-opacity-70 p-5 max-w-7xl text-white px-10  relative z-10 rounded-xl ">
          <h1 className="text-3xl text-white mb-10 text-center font-extrabold underline decoration-rambo-red ">
            Equipment Rental
          </h1>
          <h1 className="text-2xl text-center mb-5">
            Need sound and DJ gear for your next event? We rent out following
            gear:
          </h1>

          <ul className="list-disc w-fit mb-10 mx-auto text-lg">
            <li>Pioneer CDJ-3000 (x3)</li>
            <li>Pioneer DJM-900nxs2 Mixer</li>
            <li>Yamaha DZR-12&quot; 2000w Powered Loudspeakers (x4)</li>
            <li>Yamaha DXS-18&quot; 1020w Powered subwoofer (X2)</li>
          </ul>
          <h1 className="text-2xl text-center mb-10">
            <Link
              href="/contact"
              className="bg-rambo-red rounded-xl py-2 px-10 mr-2 "
            >
              <DoubleArrowIcon className="mb-1 text-3xl animate-pulse" />
              Contact
            </Link>
            for a quote
          </h1>

          <ImageSlider images={images} />
        </div>
      </div>
      <Footer />
      <VideoBackground />
    </div>
  );
}

export default equipmentRental;
