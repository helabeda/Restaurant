import Image from "next/image";
import Explore from "./Explore";

const About = () => {
  return (
    <div className="flex items-start flex-col md:flex-row relative pt-0 lg:pt-16 gap-4" id="about">
      <div className="sm:w-full relative">
        <div className="relative w-full lg:h-full h-96">
          <Image
            src="/img section desc.jpg"
            alt="about"
            width={500}
            height={500}
            className="w-full object-cover h-full"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to left, #2B2B2B, gray, lightgray)",
              mixBlendMode: "multiply",
              opacity: "1",
            }}
          ></div>
          <div
            className="absolute bottom-0 right-0"
            style={{
              zIndex: 1,
            }}
          >
            <Image
              src="/branch with leaves.png"
              alt="img"
              width={200}
              height={100}
              className="xl:w-72 w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full sm:w-full lg:pl-8 pl-0 lg:pt-4">
        <div className="overflow-auto">
          <div className="flex items-center">
            <Image
              src="/branch-with-leaves.png"
              alt="arrow"
              width={50}
              height={50}
            />
            <h2 className="bold-20 text-subtitle pt-2">ABOUT US</h2>
          </div>
          <h1 className="text-xl bold-32 pl-2 text-title_color pb-2">
            Our Indonisien Speciality
          </h1>
          <p className="text-justify pl-4 pt-4 medium-12 xl:h-full xl:w-10/12 text-gray_dark h-32 md:overflow-auto w-11/12">
            Though, the objectives of the development of the prominent landmarks
            can be neglected in most cases, it should be realized that after the
            completion of the strategic decision gives rise to The Expertise of
            Regular Program (Carlton Cartwright in The Book of the Key Factor)
            <br />
            A number of key issues arise from the belief that the explicit
            examination of strategic management should correlate with the
            conceptual design.
            <br />
            By all means, the unification of the reliably developed techniques
            indicates the importance of the ultimate advantage of episodic skill
            over alternate practices.
            <br />
            Let&apos;s consider, that the portion of the continuing support can
            be regarded as relentlessly insignificant. The hardware maintenance
            focuses our attention on the structure absorption. The real reason
            of the permanent growth drastically the preliminary action plan the
            ultimate advantage of useful probability over alternate practices.
            <br />
            Let it not be said that a section of the essential component
            discards the principle of the more interconnection of critical
            thinking with productivity boosting of the referential arguments.
            One should, however, not forget that concentration of violations of
            the strategic management requires urgent actions to be taken towards
            the comprehensive set of policy statements. Therefore, the concept
            of the design aspects can be treated as the only solution.
          </p>
        </div>
        <Explore />
      </div>
    </div>
  );
};

export default About;
