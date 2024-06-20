import banner from "../../assets/start-floral-banner.png";

const StartYourFloral = () => {
  return (
    <section className="container mx-auto mt-[120px]">
      <div className="lg:grid grid-cols-2 gap-x-16">
        <div>
          <h3
            style={{ lineHeight: "78px" }}
            className="font-bold text-[64px] text-white mb-5"
          >
            Start Your Floral Journey Today
          </h3>
          <p className="mb-[30px] text-[25px] text-[#FFFFFF99]">
            Ready to experience the enchanting world of flowers? Browse our
            collections, and let nature's beauty inspire your moments of joy,
            love, and celebration.
          </p>
          <button className="btn bg-fh-primary rounded-full text-white lg:w-[180px] py-4">
            Shop Now
          </button>
        </div>
        <div>
          <img className="rounded-[30px]" src={banner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default StartYourFloral;
