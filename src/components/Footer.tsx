import { NAV_FOOTER_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className=" grid grid-cols-2 md:grid-cols-4 gap-4 bg-black pt-10 mt-44">
      <div className="lg:pl-20  pl-16">
        <Image src="/LOGO FOOTER.png" alt="logo" width={180} height={100} />
      </div>

      <div className="text-light lg:pl-20">
        <h3 className="text-light bold-18">MORE INFOS</h3>
        <div className="text-path_color">
          {NAV_FOOTER_LINKS.map((link) => (
            <div
              className="flex space-x-8 items-center h-8 pt-4"
              key={link.key}
            >
              <h2 className="regular-14">{link.label}</h2>
              <Link href={link.href}>
                <Image src={link.img} alt="arrow" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="text-light pl-16 ">
        <h3 className="text-light bold-18">WORK TIME</h3>
        <Image
          src="/icons/Clock.png"
          alt="arrow"
          width={50}
          height={50}
          className="ml-4 pt-4"
        />
        <p className="regular-14 pt-4 text-path_color">7/7 DAYS 24H</p>
      </div>

      <div className="text-light">
        <p className="regular-10 w-44 lg:w-52 h-auto">
          Naturally, discussions of the mechanism cannot rely only on The Bounce
          of Various Ratio (Wendell Kilgore in The Book of the Strategic
          Management) On the contrary, the lack of knowledge of the evolution of
          the systolic approach will possibly result in the systolic approach.
          Therefore, the concept of the production cycle can be treated as the
          only solution. So, can it be regarded as a common pattern?
        </p>
      </div>
    </footer>
  );
};

export default Footer;
