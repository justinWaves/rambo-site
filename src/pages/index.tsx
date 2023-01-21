import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Promo from "@/components/Promo";
import { useState } from "react";
import useSound from "use-sound";
import { Transition } from "@headlessui/react";

export default function Home() {
  const [playAudio] = useSound("party-drop-web.mp3");
  const [ramboHeadIsActivated, setRamboHeadIsActivated] = useState(true);
  const [partyExplosionActivate, setPartyExplosionActivate] = useState(false);

  const ramboHeadClickHandler = () => {
    // setTimeout(() => {
    setPartyExplosionActivate(true);
    // }, 20);
    playAudio();
    setRamboHeadIsActivated(!ramboHeadIsActivated);
    setTimeout(() => {
      setPartyExplosionActivate(false);
    }, 3000);
  };

  const ramboHeadClickHandlerNoAudio = () => {
    setRamboHeadIsActivated(!ramboHeadIsActivated);
  };

  return (
    <>
      <Head>
        <title>Rambo Party Productions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {ramboHeadIsActivated ? (
        <div
          className={`bg-black w-screen h-screen absolute z-20 flex justify-center text-center`}
        >
          <div className="my-auto cursor-pointer">
            <h1 className="text-white text-3xl animate-pulse">
              click to enter
            </h1>
            <img
              src="rambo-head.png"
              className="  mx-auto"
              onClick={ramboHeadClickHandler}
            />
          </div>
        </div>
      ) : (
        <></>
      )}

      <Transition
        show={partyExplosionActivate}
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <img
          src="explosion.gif"
          className="absolute mx-auto left-0 right-0 top-0 bottom-0 my-auto w-full z-19"
        />
      </Transition>

      <Transition
        show={partyExplosionActivate}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <img
          src="rambo-keytar.png"
          className="absolute mx-auto left-0 right-0 top-0 bottom-0 my-auto w-full md:w-1/3 z-20 "
        />
      </Transition>

      <main>
        <Header ramboHeadActivate={ramboHeadClickHandlerNoAudio} />
        <Promo />
        {ramboHeadIsActivated ? <></> : <Footer />}
      </main>
    </>
  );
}
