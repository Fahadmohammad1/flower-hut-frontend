import Banner from "../components/home/Banner";
import CommunityBanner from "../components/home/CommunityBanner";
import FloralSelection from "../components/home/FloralSelection";
import ShopFeatures from "../components/home/ShopFeatures";
import UniqueServices from "../components/home/UniqueServices";

const Home = () => {
  return (
    <div>
      <Banner />
      <FloralSelection />
      <ShopFeatures />
      <CommunityBanner />
      <UniqueServices />
    </div>
  );
};

export default Home;
