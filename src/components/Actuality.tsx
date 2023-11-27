"use client";
import { features } from "@/constants";
import Image from "next/image";
import React, { useState, CSSProperties } from "react";

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
  descrp: string;
  bg: string;
  cardBg: string;
  link: string;
  color: string;
};

const FeatureItemComponent = ({
  title,
  icon,
  description,
  descrp,
  bg,
  cardBg,
  color,
  link,
}: FeatureItem) => {
  const [isHovered, setHovered] = useState(false);

  const cardStyle = {
    backgroundColor: cardBg,
  };
  const textStyles = {
    color: color,
  };
  const linearGradientStyle: CSSProperties = {
    backgroundImage: `linear-gradient(to top left, #435334, white), linear-gradient(to top right, lightgray, white)`,
    mixBlendMode: "multiply",
    opacity: 1,
    position: "absolute",
    inset: 0,
  };
  return (
    <div
      className="relative w-full md:w-1/3 sm:w-full p-6 md:flex-col mb-4 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      id="actuality"
    >
      <div className="relative">
        <div
          className={`w-full h-80 object-cover mb-2 group-hover:opacity-80 transition-opacity duration-300 ${
            isHovered &&
            "sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity duration-300"
          } sm:opacity-100`}
          style={{ ...linearGradientStyle, position: "absolute", inset: 0 }}
        />
        <Image
          src={bg}
          alt={title}
          className="w-full h-80 object-cover"
          width={500}
          height={500}
        />
      </div>

      <div
        style={{ ...cardStyle, ...textStyles }}
        className={`absolute z-20 lg:top-[40%] top-16 lg:left-[9.5%] left-0 right-0 text-white w-80 lg:w-[85.5%] h-80 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isHovered &&
          "md:opacity-0 md:group-hover:opacity-100 md:transition-opacity duration-300"
        } sm:opacity-100`}
      >
        <h3 className="bold-30 pb-4 pt-10 px-4">{title}</h3>
        <p className="regular-12 pb-4 px-4">{description}</p>
        <p className="regular-12 px-4">{descrp}</p>
        <div className="flexEnd pt-2 px-4 space-x-4">
          <h2 className="bold-18 pb-2">{link}</h2>
          <Image src={icon} alt="map" width={50} height={50} />
        </div>
      </div>
    </div>
  );
};

const Actuality = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat pt-10 relative">
      <div className="max-container padding-container relative w-full flex justify-end">
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
            Actuality
          </h1>
        </div>
      </div>

      <div className="bg-black w-full h-[15rem] absolute lg:top-[18%] top-[25%] hidden md:block sm:hidden"></div>

      <div className="flex relative py-10 md:flex-row flex-col lg:h-screen">
        {features.map((feature) => (
          <FeatureItemComponent
            key={feature.title}
            title={feature.title}
            icon={feature.icon}
            description={feature.description}
            descrp={feature.descrp}
            link={feature.link}
            bg={feature.bg}
            cardBg={feature.cardBg}
            color={feature.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Actuality;
