import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import ProductCard from "../components/shared/ProductCard";
import { IFlower } from "../interface/common";
import DynamicBanner from "../components/shared/DynamicBanner";

const Shop = () => {
  const [flowers, setFlowers] = useState<IFlower[] | null>([]);
  const [search, setSearch] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const handleCategorySelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value === "All" ? null : event.target.value);
  };

  const handleMinPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(event.target.value ? parseFloat(event.target.value) : null);
  };

  const handleMaxPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(event.target.value ? parseFloat(event.target.value) : null);
  };

  useEffect(() => {
    const baseURL = "https://flower-hut-backend.vercel.app/api/v1/product/all";

    const params = new URLSearchParams();
    if (search) {
      params.append("search", search);
    }
    if (category) {
      params.append("category", category);
    }
    if (minPrice !== null) {
      params.append("minPrice", minPrice.toString());
    }
    if (maxPrice !== null) {
      params.append("maxPrice", maxPrice.toString());
    }

    const url = `${baseURL}?${params.toString()}`;

    (async () => {
      const { data } = await axios.get(url);
      setFlowers(data?.data);
    })();
  }, [search, category, minPrice, maxPrice]);

  const bannerInfo = {
    title: "All Flowers",
    description:
      "Shop for the freshest flowers and bouquets online at Flower Hut. We have a huge range of flowers to choose from online but if you prefer why not pop into our shop based at Surry Hills and we'll customise a bouquet of flowers for that special occasion. From unique flowers crafted with love each day by our florist team to a huge selection of market-fresh flowers that we collect every morning, we’re your expert local florists in Haymarket and Surry Hills area. And, the best part is, you will get same-day delivery when you shop online - this is our guarantee to you - fast, fresh flowers delivered directly to your home or office.",
  };

  return (
    <section className="container mx-auto px-5 lg:px-0">
      <DynamicBanner bannerInfo={bannerInfo} />
      <div className="flex flex-col lg:flex-row justify-center gap-10">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="grow"
            placeholder="Search By Name"
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
        <select
          onChange={handleCategorySelect}
          className="select select-bordered w-full"
        >
          <option>All</option>
          <option>Small</option>
          <option>Standard</option>
          <option>Medium</option>
          <option>Large</option>
          <option>Lavish</option>
          <option>Opulent</option>
          <option>Extravagant</option>
        </select>
        <input
          type="number"
          placeholder="Min price"
          value={minPrice ?? ""}
          onChange={handleMinPriceChange}
          className="input input-bordered w-full"
        />

        <input
          type="number"
          placeholder="Max price"
          value={maxPrice ?? ""}
          onChange={handleMaxPriceChange}
          className="input input-bordered w-full"
        />
      </div>
      <div className="lg:grid grid-cols-3 mt-10 gap-[10px]">
        {flowers?.map((flower) => (
          <ProductCard key={flower.id} flower={flower} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
