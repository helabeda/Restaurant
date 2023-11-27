"use client";
import Image from "next/image";
import { useState } from "react";

const Story = () => {
  const images = [
    "/img carousel.jpg",
    "/Tasty and piquant appetizer Mask.jpg",
    "/img carousel.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="relative py-10 border-b-4 border-#BDBDBD h-[850px] overflow-hidden">
      <div className="story-map" />
      <div className="lg:mt-[23.5%] mt-[30%] mb-6 z-20">
        <div className="flex flex-col transform translate-x-[1rem] lg:translate-x-[3rem]">
          <div className="flex items-center">
            <Image
              src="/branch-with-leaves.png"
              alt="arrow"
              width={50}
              height={50}
            />
            <h2 className="bold-19 text-subtitle pt-2">GREENRATA</h2>
          </div>
          <h1 className="text-xl bold-30 text-title_color">
            Our Restaurant Story
          </h1>
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute top-1/2 left-[2rem] md:left-[6rem] sm:left-[2rem] transform -translate-y-1/2 cursor-pointer z-20"
          onClick={prevSlide}
        >
          <Image
            src="/icons/arrow carousel.png"
            alt="arrow"
            height={50}
            width={80}
          />
        </div>

        <div className="relative flex items-center justify-center">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            width={600}
            height={500}
            className="transform -translate-x-0 lg:-translate-x-[15rem] w-92"
          />

          <div className="absolute top-[20rem] lg:top-1/2 left-3/4 transform -translate-x-[22rem] -translate-y-[7rem] bg-color_bg px-12 pt-12 pb-4 text-white text-star z-10">
            <div className="lg:w-[30rem] w-72">
              <h2 className="bold-30 font-bold mb-4">1999</h2>
              <h2 className="bold-30 mb-4">Opening Of the First Restaurant</h2>
              <p className="regular-12 mb-4">
                It turns out that the layout of the essential component manages
                to obtain The Knowledge of Preliminary Probability (Jude
                Applegate in The Book of the Grand Strategy)
              </p>
              <p className="regular-12 mb-4">
                Surprisingly, the framework of the arguments and claims has
                proved to be reliable in the scope of The Limitation of
                Deliberate Consequence (Abraham Guillory in The Book of the
                Linguistic Approach)
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute top-1/2 right-[2rem] md:right-[3rem] sm:right-[2rem] transform -translate-y-1/2 cursor-pointer z-20"
          onClick={nextSlide}
        >
          <Image
            src="/icons/arrow next.png"
            alt="arrow"
            height={50}
            width={80}
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
