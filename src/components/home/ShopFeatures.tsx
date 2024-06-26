"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { IFlower } from "../../interface/common";
import ProductCard from "../shared/ProductCard";

const ShopFeatures = () => {
  const [flowers, setFlowers] = useState<IFlower[] | null>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://flower-hut-backend.vercel.app/api/v1/product/all"
      );
      setFlowers(data?.data);
    })();
  }, []);
  return (
    <section className="container mx-auto px-5 lg:px-0">
      <h2 className="text-4xl lg:text-6xl font-bold text-white text-center mb-[60px] mt-10 lg:mt-0">
        Featured Flowers
      </h2>
      <div className="lg:grid grid-cols-3 mt-10 gap-[10px]">
        {flowers?.map((flower) => (
          <ProductCard key={flower.id} flower={flower} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn bg-fh-primary rounded-full text-white lg:w-[180px] w-full py-4 mt-[50px]">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default ShopFeatures;
