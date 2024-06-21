import instagram from "../../assets/Instagram.png";
import twitter from "../../assets/Twitter.png";
import linkedin from "../../assets/Linkedin.png";
import facebook from "../../assets/Facebook.png";

const CommunityBanner = () => {
  return (
    <section className="mt-[80px] container mx-auto px-5 lg:px-0">
      <div className="w-full bg-white rounded-[40px] p-5 lg:p-0">
        <div className="lg:py-[70px] lg:px-[70px]">
          <h2 className="font-bold text-4xl lg:text-[64px] text-black text-center">
            Join Our Floral Community
          </h2>
          <p className="font-normal text-[17px] lg:mt-10 mt-8 lg:text-[34px] text-center text-fh-secondary">
            Follow us on social media to stay updated on our latest creations,
            special promotions, and to share your love for flowers with
            like-minded enthusiasts.
          </p>
          <div className="flex gap-x-3 justify-center mt-[26px]">
            <img src={instagram} className="w-[66px]" alt="logo" />
            <img src={twitter} className="w-[66px]" alt="logo" />
            <img src={linkedin} className="w-[66px]" alt="logo" />
            <img src={facebook} className="w-[66px]" alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityBanner;
