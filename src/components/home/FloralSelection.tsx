import floralBg from "../../assets/floral-bg.png";
import floralBg2 from "../../assets/floral-bg2.png";
import floralBg3 from "../../assets/floral-bg3.png";
import floralBg4 from "../../assets/floral-bg4.png";

const FloralSelection = () => {
  const data = [
    {
      id: 1,
      title: "Fresh Blooms",
      description:
        "We source the freshest flowers from local growers and around the world to create stunning arrangements that captivate the senses.",
    },
    {
      id: 2,
      title: "Artisan Designs",
      description:
        "Our talented florists meticulously craft each bouquet, ensuring every petal is in perfect harmony with the next.",
    },
    {
      id: 3,
      title: "Occasion-Oriented",
      description:
        "From romantic roses to cheerful sunflowers, our flower arrangements are designed to suit every occasion, from birthdays to weddings and everything in between.",
    },
  ];
  return (
    <section
      className="lg:h-screen px-5 lg:px-0"
      style={{
        backgroundImage: `url(${floralBg3}), url(${floralBg4})`,
        backgroundPosition: "left,right",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <div className="container mx-auto lg:mt-[120px]">
        <h2 className="text-4xl lg:text-6xl font-bold text-white text-center mb-[60px] mt-10 lg:mt-0">
          Our Floral Selection
        </h2>
        <div className="lg:grid grid-cols-3 gap-8">
          {data.map((obj) => (
            <div
              style={{
                backgroundImage: `url(${floralBg}), url(${floralBg2})`,
                backgroundPosition: "top right, bottom left",
                backgroundRepeat: "no-repeat, no-repeat",
              }}
              key={obj.id}
              className="bg-white rounded-b-[60px] mb-10 lg:mb-0"
            >
              <div className="px-[48px] py-5 lg:py-0">
                <h2 className="text-center text-[#120727] text-3xl font-bold mt-[60px] mb-9">
                  {obj.title}
                </h2>
                <p className="text-black text-justify mb-[77px]">
                  {obj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloralSelection;
