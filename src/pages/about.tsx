import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VideoBackground from "@/components/VideoBackground";
import React from "react";

function about() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="pb-60">
        <div className="relative pt-20 md:pt-36 pb-10 max-w-7xl  mx-auto z-10 flex lg:flex-row flex-col ">
          <div className="lg:w-1/3 lg:rounded-l-xl overflow-hidden flex lg:flex-col flex-row w-screen overflow-x-scroll justify-around">
            <img src="about-1.webp" alt="" className="w-full" />
            <img src="about-2.webp" alt="" className="w-full" />
            <img src="about-3.webp" alt="" className="w-full" />
            <img src="about-4.webp" alt="" className="w-full" />
          </div>
          <div className="bg-black bg-filter backdrop-blur-xl bg-opacity-70 p-5 lg:rounded-r-xl text-white px-10 lg:w-2/3 ">
            <h1 className="text-6xl text-white mb-10 text-center font-extrabold  ">
              About Rambo
              <img src="rambo-party.svg" className=" w-2/3 mx-auto" />
              Productions
            </h1>
            <p>
              Rambo Party Productions goal is to bring people together in a
              positive way by means of the DANCE PARTY.
            </p>
            <br />
            <p>
              We strive to produce weird, funky, and wild parties that bring
              people together to DANCE and express themselves uniquely.
            </p>
            <br />
            <p>
              Our goal is to bring LOCAL musicians and DJ&apos;s together, along
              with high quality artists from all over the world, to create an
              interactive, participatory dance party experience where people can
              lose themselves on the dance floor.
            </p>
            <br />
            <p>
              Additionally, our Great bingo revival game - hosted by the Rev.
              rusty reams - infuses funk, comedy, fabulous prizes, and a
              gameshow style format dripping in gold decor that&apos;s been
              making BINGO dreams come true since 2012.
            </p>
            <br />
            <p>
              Rambo Party Productions was officially born in September of 2012
              when, as legend has it, infrared lasers (undetectable by the human
              eye) crossed paths over Jake&apos;s on the Lake in Tahoe City.
              Rusty (aka Red Lion) smashed into Rambo via a comedic lightning
              storm while hard at work serving the finest patrons from the San
              Francisco Bay Area and beyond.
            </p>
            <br />
            <p>
              It was that time when Tight and Bright on Bikes, an infamous Time
              Travel bicycle pub crawl of debauchery, set Rambo Party
              Productions on a party starting bonanza.
            </p>
            <br />
            <p>
              Party enlightenment soon came to fruition as infrared lazers soon
              manifested themselves in the visible spectrum by means of the
              LAZER LABORATORY Halloween party. From this point forward, lazers
              have been the guiding force in all of the decision making
              processes by Rambo Party Productions.
            </p>
            <br />
            <p>
              Through extensive spiritual lazer retreats in the wilderness
              riding mountain bikes and meditating on lazer forces, cleansing on
              a diet of only water and lazers for months on end, and speaking
              with mystical lazer gurus, the Rambo Party Productions team now
              has finally reached true oneness with the universe by the use of
              multicolored neon beamz.
            </p>
            <br />
            <p>
              Step out of the infrared - open your eyes to the lazers that can
              be seen and felt. Bathe in the neon lazer spa that we call life.
              PARTY.
            </p>
            <br />
            <p>
              It is why we, Rambo Party Productions, proudly shout at every
              show: ONE LOVE - ONE LAZER!
            </p>

            <br />
            <h2 className="text-3xl font-bold text-rambo-red">THE TEAM:</h2>
            <br />
            <p>
              <span className="font-bold text-xl">Ryan Rambo</span>- Founder,
              DJ, Artist, Party scientist, professional vibe curator
            </p>
            <p>(530) 205-FUNK </p>

            <p> rambopartyproductions@gmail.com</p>

            <br />
            <p>
              <span className="font-bold text-xl">
                The Reverend Rusty Reams
              </span>
              - World&apos;s premiere Bingo Caller The great bingo revival
            </p>
            <p>(408)69-BINGO</p>
            <p>BINGO@thegreatbingorevival.com</p>
            <p>www.thegreatbingorevival.com</p>

            <h3 className="text-3xl text-rambo-red text-center mt-10">
              ONE LOVE - ONE LAZER!
            </h3>
          </div>
        </div>
      </div>
      <Footer />
      <VideoBackground />
    </div>
  );
}

export default about;
