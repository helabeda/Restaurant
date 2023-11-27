"use client";
import { foods, foods2 } from "@/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <section className="flex-col flexCenter relative">
      <div className="max-container padding-container relative w-full flex justify-end pb-2">
        <div className="z-20 flex w-full flex-col lg:w-[55%]">
          <div className="flex items-center relative">
            <Image
              src="/branch-with-leaves.png"
              alt="arrow"
              width={50}
              height={50}
            />
            <h2 className="bold-20 text-subtitle pt-2">EXPLORE</h2>
          </div>
          <h1 className="text-xl bold-32 pl-2 text-title_color pb-2">
            Our Gallery
          </h1>
        </div>
      </div>

      <Marquee autoFill pauseOnClick className="pb-8">
        <div className="m-1 space-x-8 flex cursor-pointer">
          {foods.map((img) => (
            <div key={img.title} className="relative">
              <div className="image-container relative">
                <Image
                  src={img.bg}
                  alt="food"
                  width={400}
                  height={400}
                  className="hover-effect"
                />
                <div className="title-overlay bold-30 text-light absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-2.5 opacity-0 transition-opacity duration-300">
                  <h1>{img.title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>

      <Marquee autoFill pauseOnClick direction="right">
        <div className="m-1 space-x-8 flex cursor-pointer">
          {foods2.map((img) => (
            <div key={img.title} className="relative">
              <div className="image-container relative">
                <Image
                  src={img.bg}
                  alt="food"
                  width={400}
                  height={400}
                  className="hover-effect"
                />
                <div className="title-overlay bold-30 text-light absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-2.5 opacity-0 transition-opacity duration-300">
                  <h1>{img.title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default Gallery;
