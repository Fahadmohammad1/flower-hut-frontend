import FloralSelection from "../components/home/FloralSelection";
import UniqueServices from "../components/home/UniqueServices";
import DynamicBanner from "../components/shared/DynamicBanner";

const AboutUs = () => {
  const bannerInfo = {
    title: "About Us",
    description:
      "Shop for the freshest flowers and bouquets online at Flower Hut. We have a huge range of flowers to choose from online but if you prefer why not pop into our shop based at Surry Hills and we'll customise a bouquet of flowers for that special occasion. From unique flowers crafted with love each day by our florist team to a huge selection of market-fresh flowers that we collect every morning, we’re your expert local florists in Haymarket and Surry Hills area. And, the best part is, you will get same-day delivery when you shop online - this is our guarantee to you - fast, fresh flowers delivered directly to your home or office.",
  };
  return (
    <section>
      <div className="container mx-auto">
        <DynamicBanner bannerInfo={bannerInfo} />
      </div>
      <FloralSelection />
      <UniqueServices />
    </section>
  );
};

export default AboutUs;
