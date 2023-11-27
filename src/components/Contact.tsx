import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section
      className="flex flex-col relative w-full h-96 pt-10"
      id="contact_us"
    >
      <div className="relative">
        <Image
          src="/branch with leaves.png"
          alt="Image 1"
          className="absolute right-[10%] w-72 h-auto"
          width={100}
          height={100}
        />
      </div>

      <div className="relative">
        <Image
          src="/Image.jpg"
          alt="Image 2"
          className="lg:w-[59.4rem] w-full lg:h-auto h-52 absolute lg:left-[6%] lg:top-28"
          width={600}
          height={300}
        />
      </div>

      <div className="relative flex">
        <div className="absolute lg:right-20 right-0 top-52 lg:w-[35%] w-full bg-color_bg lg:p-[2rem] p-2">
          <h1 className="py-4 bold-30 text-light">Contact</h1>

          <div className="flex flex-col xl:flex-row  gap-10">
            <div className="flex items-center">
              <Image
                src="/icons/Phone 2.png"
                alt="arrow"
                width={50}
                height={50}
              />
              <div className="flex-row pl-4 regular-14 text-path_color">
                <p>05 234 567 89</p>
                <p>05 234 567 89</p>
              </div>
            </div>
            <div className="flex items-center xl:pl-6">
              <Image
                src="/icons/Email.png"
                alt="arrow"
                width={50}
                height={50}
              />
              <p className="pl-4 regular-14 text-white">
                greenrata@contact.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
