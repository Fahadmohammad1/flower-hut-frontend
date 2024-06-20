import floralBg from "../../assets/floral-bg.png";
import floralBg2 from "../../assets/floral-bg2.png";

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
    <section className="container mx-auto lg:mt-[120px]">
      <h2 className="text-6xl font-bold text-white text-center mb-[60px]">
        Our Floral Selection
      </h2>
      <div className="lg:grid grid-cols-3 gap-x-8">
        {data.map((obj) => (
          <div
            style={{
              backgroundImage: `url(${floralBg}), url(${floralBg2})`,
              backgroundPosition: "top right, bottom left",
              backgroundRepeat: "no-repeat, no-repeat",
            }}
            key={obj.id}
            className="bg-white rounded-b-[60px]"
          >
            <div className="px-[48px]">
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
    </section>
  );
};

export default FloralSelection;
