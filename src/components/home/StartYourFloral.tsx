import banner from "../../assets/start-floral-banner.png";

const StartYourFloral = () => {
  return (
    <section className="container mx-auto mt-[120px] px-5 lg:px-0">
      <div className="lg:grid grid-cols-2 flex flex-col-reverse gap-x-16">
        <div>
          <h3
            style={{ lineHeight: "78px" }}
            className="font-bold text-5xl lg:text-[64px] text-white mb-5"
          >
            Start Your Floral Journey Today
          </h3>
          <p className="mb-[30px] text-[25px] text-[#FFFFFF99]">
            Ready to experience the enchanting world of flowers? Browse our
            collections, and let nature's beauty inspire your moments of joy,
            love, and celebration.
          </p>
          <button className="btn bg-fh-primary rounded-full text-white lg:w-[180px] py-4 w-full">
            Shop Now
          </button>
        </div>
        <div className="mb-10 lg:mb-0">
          <img className="rounded-[30px]" src={banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default StartYourFloral;
