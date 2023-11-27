import Image from "next/image";

const LocationRestaurant = () => {
  return (
    <div className="h-auto shadow-xl w-full sm:w-8/12 bg-white">
      <div className="flexCenter pb-5 pt-5">
        <Image
          src="/icons/Restaurant.png"
          alt="restaurant"
          width={40}
          height={40}
          className="w-10 h-10"
        />
        <h2 className="text-center text-lg font-extrabold text-title_color ">
          OUR RESTAURANTS
        </h2>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 pb-5 px-4">
        <div className="flexCenter relative group pr-5">
          <Image src="/icons/Region.png" alt="region" width={50} height={50} />
          <div className="flex flex-col">
            <p className="text-title_color regular-15">
              25 Place du Salin 31 000 <br /> Toulouse
            </p>
          </div>

          {/* Vertical line - Hide on small devices (phones) */}
          <div className="vertical-line hidden sm:block"></div>

        </div>

        <div className="flexCenter relative group">
          <Image src="/icons/Region.png" alt="region" width={50} height={50} />
          <div className="flex flex-col">
            <p className="text-title_color regular-15">
              73 Champs-Élysées 30 000 <br /> Paris
            </p>
          </div>

          {/* Vertical line - Hide on small devices (phones) */}
          <div className="vertical-line hidden sm:block"></div>

        </div>

        <div className="flexCenter">
          <Image src="/icons/Region.png" alt="region" width={50} height={50} />
          <div className="flex flex-col">
            <p className="text-title_color regular-15">
              101 Champs-Élysées 30 000 <br /> Paris
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationRestaurant;
