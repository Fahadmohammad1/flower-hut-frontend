import { GoLocation } from "react-icons/go";
import DynamicBanner from "../components/shared/DynamicBanner";
import { FiPhoneCall } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import map from "../assets/map.png";

const ContactUs = () => {
  const bannerInfo = {
    title: "Contact Us",
    description:
      "Shop for the freshest flowers and bouquets online at Flower Hut. We have a huge range of flowers to choose from online but if you prefer why not pop into our shop based at Surry Hills and we'll customise a bouquet of flowers for that special occasion. From unique flowers crafted with love each day by our florist team to a huge selection of market-fresh flowers that we collect every morning, we’re your expert local florists in Haymarket and Surry Hills area. And, the best part is, you will get same-day delivery when you shop online - this is our guarantee to you - fast, fresh flowers delivered directly to your home or office.",
  };
  return (
    <section className="container mx-auto">
      <DynamicBanner bannerInfo={bannerInfo} />
      <div className="lg:grid grid-cols-2 gap-x-[40px]">
        <form className="flex flex-col gap-y-5 text-[#FFFFFF66]">
          <input
            className="px-[30px] py-[28px] rounded border border-[#FFFFFF66]"
            type="text"
            name=""
            id=""
            placeholder="* Name"
          />
          <input
            className="px-[30px] py-[28px] rounded border border-[#FFFFFF66]"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
          <input
            className="px-[30px] py-[28px] rounded border border-[#FFFFFF66]"
            type="text"
            name=""
            id=""
            placeholder="Phone"
          />
          <textarea
            className="px-[30px] py-[28px] rounded border border-[#FFFFFF66]"
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <input
            className="btn bg-fh-primary rounded-full text-white lg:w-[180px] py-4"
            type="button"
            value="Send Now"
          />
        </form>
        <div className="py-[30px] px-[40px] bg-white rounded-[10px]">
          <h3 className="font-bold text-[34px] text-black mb-5">
            Contact Details
          </h3>
          <div className="border border-black"></div>
          <p className="flex items-center gap-x-1 text-black mt-[40px]">
            <GoLocation className="text-black text-[20px] mr-[10px]" />
            Shop 28 Central station, Dhaka, Bangladesh
          </p>
          <p className="flex items-center gap-x-1 text-black mt-[40px]">
            <FiPhoneCall className="text-black text-[20px] mr-[10px]" />
            0416 455 090
          </p>
          <p className="flex items-center gap-x-1 text-black mt-[40px]">
            <MdMailOutline className="text-black text-[20px] mr-[10px]" />
            info@flowerhut.com
          </p>
          <img
            className="mt-[30px] rounded-[10px] lg:h-[150px] w-full"
            src={map}
            alt="map"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
