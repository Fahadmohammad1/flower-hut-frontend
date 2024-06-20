import { useParams } from "react-router-dom";
import DynamicBanner from "../components/shared/DynamicBanner";
import { useEffect, useState } from "react";
import { IFlower } from "../interface/common";
import axios from "axios";

const FlowerDetails = () => {
  const { id } = useParams();

  const [flower, setFlower] = useState<IFlower | null>();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://flower-hut-backend.vercel.app/api/v1/product/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setFlower(data?.data);
    })();
  }, [id]);

  console.log(flower);

  const categories = [
    "Small",
    "Standard",
    "Medium",
    "Large",
    "Lavish",
    "Opulent",
    "Extravagant",
  ];
  const bannerInfo = {
    title: "Flower",
    description:
      "Shop for the freshest flowers and bouquets online at Flower Hut. We have a huge range of flowers to choose from online but if you prefer why not pop into our shop based at Surry Hills and we'll customise a bouquet of flowers for that special occasion. From unique flowers crafted with love each day by our florist team to a huge selection of market-fresh flowers that we collect every morning, we’re your expert local florists in Haymarket and Surry Hills area. And, the best part is, you will get same-day delivery when you shop online - this is our guarantee to you - fast, fresh flowers delivered directly to your home or office.",
  };
  return (
    <section className="container mx-auto">
      <DynamicBanner bannerInfo={bannerInfo} />
      <div>
        <h5 className="text-fh-primary text-[30px] font-bold mb-[30px]">
          VIOLETA FLORAL ARRANGEMENT: FRESH SEASONAL PURPLE ELEGANCE
        </h5>
        <div className="lg:flex gap-x-[30px]">
          <div className="lg:max-w-[550px]">
            <div>
              <p className="font-medium text-[30px] text-white mb-[20px]">
                Size Option:
              </p>
              <div className="border p-5 flex flex-wrap gap-[15px] rounded-[10px]">
                {categories.map((category, i) => (
                  <button
                    className="btn bg-transparent text-white text-[12px] font-medium border-[#FFFFFF] px-[30px] py-[13px] rounded-[4px]"
                    key={i}
                  >
                    $95.00 {category}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-medium text-[30px] text-white mb-[20px] mt-[30px]">
                Presentation:
              </p>
              <div className="flex flex-wrap gap-[15px]">
                <button className="btn bg-transparent text-white text-[12px] font-medium border-[#FFFFFF] px-[30px] py-[13px] rounded-[4px]">
                  Wrapped
                </button>
                <button className="btn bg-transparent text-white text-[12px] font-medium border-[#FFFFFF] px-[30px] py-[13px] rounded-[4px]">
                  In Vase
                </button>
              </div>
            </div>
            <div>
              <p className="text-[32px] font-bold text-white mt-[30px]">
                Total: $95.00
              </p>
              <button className="py-[17px] w-full my-[40px] rounded-md bg-white text-fh-secondary text-[32px] font-bold">
                Buy Now
              </button>
            </div>
          </div>
          <div>
            <img
              className="lg:w-full rounded-[10px] "
              src="https://s3-alpha-sig.figma.com/img/7ec4/6dd7/16a1bac43d4039836f01dce021061ca9?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kxjUtcBDS4IRb3BoLyX-nid45T08zlDpa3cUn184C9oHYGdg-soZ97hB7jvXaRyVZs1FPyqMO1K6OpraxlkdOgMO44xBYCfes7PQ6PoPHO5RnCk9R6~KHq-TRqmGGubETXwwSWkFfW8Bq8dlgphb5Ih55J0JdxQYfLW3GX0dEFLcC9w6f-7KTLgApKTs9G6DyWC0RDLAMkiaeOGdJcPfv26iluY5q9nYvnEzfA1OwlUk2AVwSDE-ByHLx~cVd5XAZreb-isru-0~2J8Y3Q27xzq7Ce33gOdx90q0bZke0m8uhMuYgSg851wLHyEU4NJQ1z~3AaQBa8JWG~hcVWC6MQ__"
              alt=""
            />
          </div>
        </div>
        <p className="font-medium text-[40px] text-white">Description</p>
        <hr className="my-5" />
        <p className="text-[22px]">
          Elevate your space with the enchanting beauty of our "Violeta" floral
          arrangement. This carefully curated collection showcases the finest
          selection of fresh seasonal flowers, predominantly in shades of
          purple, violet, and pink. The Lavish size, displayed here, exemplifies
          the grandeur and sophistication this arrangement brings to any space.
          Please note that flower varieties may vary due to climate and grower
          availability, ensuring a unique touch that mirrors the changing
          seasons. Rest assured, our expert florists will craft a similar
          arrangement, using the freshest seasonal products. For an added touch
          of luxury, Orchids are gracefully included in our arrangements
          starting from the large size. Should you have specific preferences or
          requirements, please feel free to contact our store directly. Immerse
          yourself in the elegance of "Violeta" and let each bloom create a
          symphony of beauty in your surroundings.
        </p>
      </div>
    </section>
  );
};

export default FlowerDetails;
