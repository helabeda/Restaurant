import Image from "next/image";
import LocationRestaurant from "./LocationRestaurant";
import Link from "next/link";
const Hero = () => {
  return (
    <section
      className="max-container padding-container flex flex-col 
    gap-20 py-12 pb-32 md:gap-28 lg:py-6 xl:flex-row "
    id="home">
      <div className="hero-map overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom left, black, #2B2B2B, gray, lightgray), linear-gradient(to bottom right, #2B2B2B, gray, lightgray)",
            backgroundSize: "100% 100%, 100% 100%",
            backgroundPosition: "100% 100%, 100% 100%",
            backgroundRepeat: "no-repeat",
            mixBlendMode: "multiply",
            opacity: "1",
          }}
        ></div>
      </div>

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/branch with leaves.png"
          alt="branch"
          width={260}
          height={50}
          className="absolute left-[-20px] w-72"
        />
        <div className="flex justify-end z-20">
          <div className="w-full max-w-2xl pt-8 pl-5">
            <h1 className="bold-52 lg:bold-70 text-light pb-2">
              Discover the Special <br /> Flavors of
            </h1>
            <h2 className="bold-45 lg:bold-65 font-great italic text-light">
              Indonisien Cuisine
            </h2>

            <div className="flex items-center pt-10">
              <Image
                src="/branch with leaves WHITE.png"
                alt="arrow"
                width={50}
                height={50}
              />
              <h2 className="bold-20 text-light px-2 pt-5">Contact Us</h2>
              <Link href="/notFoundPage" className="pt-5">
                <Image
                  src="/arrow green.png"
                  alt="arrow"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flexCenter pt-24 z-20">
          <LocationRestaurant />
        </div>
      </div>
    </section>
  );
};

export default Hero;
