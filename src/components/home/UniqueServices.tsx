import vase from "../../assets/flower-vase-1.png";
const UniqueServices = () => {
  const data = [
    {
      id: "1",
      title: "Customization",
      image: "",
      description:
        "Create a personalized bouquet with our Build Your Own feature. Select your favorite flowers, colors, and design elements to make a one-of-a-kind arrangement.",
    },
  ];
  return (
    <section className="container mx-auto lg:mt-[120px]">
      <h2 className="text-6xl font-bold text-white text-center mb-[60px]">
        What Makes Us Unique
      </h2>
      <div className="mb-[50px]">
        <div className="flex gap-x-[50px]">
          <div className="w-full">
            <img
              src={vase}
              className="rounded-[30px] w-full lg:h-[330px]"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="font-bold text-5xl text-fh-primary mb-5">
              Customization
            </h4>
            <p className="font-normal text-[28px]">
              Create a personalized bouquet with our "Build Your Own" feature.
              Select your favorite flowers, colors, and design elements to make
              a one-of-a-kind arrangement.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-[50px]">
        <div className="flex gap-x-[50px] flex-row-reverse">
          <div className="w-full">
            <img
              src={vase}
              className="rounded-[30px] lg:w-full lg:h-[330px]"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-end w-full">
            <h4 className="font-bold text-5xl text-fh-primary mb-5">
              Same-Day Delivery
            </h4>
            <p className="font-normal text-[28px] text-end">
              Need a last-minute gift? We offer same-day delivery, ensuring your
              blooms arrive fresh and on time.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-[50px]">
        <div className="flex gap-x-[50px]">
          <div className="w-full">
            <img
              src={vase}
              className="rounded-[30px] w-full lg:h-[330px]"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="font-bold text-5xl text-fh-primary mb-5">
              Customer Satisfaction
            </h4>
            <p className="font-normal text-[28px]">
              We take pride in our top-notch customer service. Your happiness is
              our priority, and we guarantee your satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueServices;
