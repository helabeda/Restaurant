import Image from "next/image";
import Link from "next/link";

const Specialities = () => {
  return (
    <section className="flex relative py-10 lg:h-[20rem] 0 w-ful bg-color_bg" id="specialities">
        <div className="flex-1 relative">
          <div>
            <div className="pl-12 flex items-center">
                <Image
                  src="/branch with leaves WHITE.png"
                  alt="arrow"
                  width={40}
                  height={40}
                />
              <h2 className="regular-24 text-light pt-2 pl-2">EXPLORE</h2>
            </div>
            <div className="pl-12">
              <h1 className="text-xl bold-25 pl-2 text-title_color pb-2">
                Our Specialities
              </h1>
              <p className="text-justify pl-4 regular-12 text-light w-8/12 hidden md:block">
                To sort everything out, it is worth mentioning that a significant
                portion of the internal policy contributes to the capabilities of
                The Survey of Accessible Enhancement (Gilberto Montague in The
                Book of the Structured Technology)
              </p>
            </div>
          </div>

          <div className="absolute xl:top-[9.5rem] right-[-50px] z-20">
            <Image
              className="xl:w-full xl:h-full"
              src="/img 1 speciality.jpg"
              alt="rata"
              width={500}
              height={500}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to top left, #435334, #CEDEBD, white), linear-gradient(to top right, lightgray, white)",
                mixBlendMode: "multiply",
                opacity: 1,
              }}
            ></div>
            <div className="absolute top-[85%] left-[5%] transform -translate-x-3/2 -translate-y-1/2 "
              style={{
                zIndex: 1,
              }}
            >
              <div className="flex flex-col">
                <h1 className="lg:bold-60 text-gray_dark">Rata</h1>
                <div className="flex flex-row space-x-4 lg:space-y-1 space-y-0">
                  <h2 className="bold-20 text-title_color lg:pt-2 pt-1">Explore</h2>
                  <Link href="/notFoundPage">
                  <Image
                      src="/arrow gray2.png"
                      alt="arrow"
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="flex-1 relative">
        <div className="absolute left-0 z-20">
          <Image
            className="xl:w-full xl:h-full"
            src="/img 2 speciality.jpg"
            alt="pasta"
            width={500}
            height={500}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to left, #2B2B2B, lightgray, white)",
              mixBlendMode: "multiply",
              opacity: "1",
            }}
          ></div>

          <div
            className="absolute top-[40%] right-[13.5%] transform -translate-x-3/2 -translate-y-1/2 "
            style={{
              zIndex: 1,
            }}
          >
            <div className="flex flex-col">
              <h1 className="lg:bold-60 text-light bold-52">Pasta</h1>
              <div className="flex flex-row space-x-4 space-y-4">
                <h2 className="bold-20 text-light pt-4">Explore</h2>
                <Link href="/notFoundPage">
                  <Image
                    src="/arrow gray2.png"
                    alt="arrow"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialities;
