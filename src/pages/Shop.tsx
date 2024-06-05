import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/shared/ProductCard";
import { IFlower } from "../interface/common";

const Shop = () => {
  const [flowers, setFlowers] = useState<IFlower[] | null>([]);
  const [search, setSearch] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        search
          ? `https://flower-hut-backend.vercel.app/api/v1/product/all?search=${search}`
          : "https://flower-hut-backend.vercel.app/api/v1/product/all"
      );
      setFlowers(data?.data);
    })();
  }, [search]);
  return (
    <section className="container mx-auto">
      <div className="flex justify-center">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="lg:grid grid-cols-3 mt-10">
        {flowers?.map((flower) => (
          <ProductCard key={flower.id} flower={flower} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
