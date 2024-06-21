import vase from "../../assets/flower-vase-1.png";
import delivery from "../../assets/delivery-image.png";
import customer from "../../assets/customer.png";
import floralBg3 from "../../assets/floral-bg3.png";
import floralBg4 from "../../assets/floral-bg4.png";

const UniqueServices = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${floralBg3}), url(${floralBg4})`,
        backgroundPosition: "top left, bottom right",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
      className="px-5 lg:px-0"
    >
      <div className="container mx-auto lg:mt-[120px]">
        <h2 className="lg:text-6xl text-4xl mt-10 lg:mt-0 font-bold text-white text-center mb-[60px]">
          What Makes Us Unique
        </h2>
        <div className="mb-[50px]">
          <div className="lg:flex gap-x-[50px]">
            <div className="w-full">
              <img
                src={vase}
                className="rounded-[30px] w-full lg:h-[330px]"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center w-full mt-10 lg:mt-0">
              <h4 className="font-bold text-5xl text-fh-primary mb-5">
                Customization
              </h4>
              <p className="font-normal text-[28px]">
                Create a personalized bouquet with our "Build Your Own" feature.
                Select your favorite flowers, colors, and design elements to
                make a one-of-a-kind arrangement.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-[50px]">
          <div className="lg:flex gap-x-[50px] flex-row-reverse">
            <div className="w-full">
              <img
                src={delivery}
                className="rounded-[30px] lg:w-full lg:h-[330px]"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center items-end w-full mt-10 lg:mt-0">
              <h4 className="font-bold text-5xl text-fh-primary mb-5">
                Same-Day Delivery
              </h4>
              <p className="font-normal text-[28px] text-end">
                Need a last-minute gift? We offer same-day delivery, ensuring
                your blooms arrive fresh and on time.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-[50px]">
          <div className="lg:flex gap-x-[50px]">
            <div className="w-full">
              <img
                src={customer}
                className="rounded-[30px] w-full lg:h-[330px]"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center mt-10 lg:mt-0">
              <h4 className="font-bold text-5xl text-fh-primary mb-5">
                Customer Satisfaction
              </h4>
              <p className="font-normal text-[28px]">
                We take pride in our top-notch customer service. Your happiness
                is our priority, and we guarantee your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueServices;
