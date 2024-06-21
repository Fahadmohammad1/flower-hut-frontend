import { GoClock, GoLocation } from "react-icons/go";
import DynamicBanner from "../components/shared/DynamicBanner";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const Blog = () => {
  const blogData = [
    {
      id: "1",
      title: "Name of this blog like flower hut goes big",
      location: "Dhaka, Bangladesh",
      date: "10 Sep, 2023",
      image: blog1,
    },
    {
      id: "2",
      title: "Name of this blog like flower hut goes big",
      location: "Dhaka, Bangladesh",
      date: "10 Sep, 2023",
      image: blog2,
    },
    {
      id: "3",
      title: "Name of this blog like flower hut goes big",
      location: "Dhaka, Bangladesh",
      date: "10 Sep, 2023",
      image: blog3,
    },
    {
      id: "4",
      title: "Name of this blog like flower hut goes big",
      location: "Dhaka, Bangladesh",
      date: "10 Sep, 2023",
      image: blog2,
    },
    {
      id: "5",
      title: "Name of this blog like flower hut goes big",
      location: "Dhaka, Bangladesh",
      date: "10 Sep, 2023",
      image: blog1,
    },
  ];
  const bannerInfo = {
    title: "Blogs",
    description:
      "Shop for the freshest flowers and bouquets online at Flower Hut. We have a huge range of flowers to choose from online but if you prefer why not pop into our shop based at Surry Hills and we'll customise a bouquet of flowers for that special occasion. From unique flowers crafted with love each day by our florist team to a huge selection of market-fresh flowers that we collect every morning, we’re your expert local florists in Haymarket and Surry Hills area. And, the best part is, you will get same-day delivery when you shop online - this is our guarantee to you - fast, fresh flowers delivered directly to your home or office.",
  };
  return (
    <section className="container mx-auto">
      <DynamicBanner bannerInfo={bannerInfo} />
      <div className="lg:grid grid-cols-3 gap-5">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="card card-compact w-full bg-white rounded-[10px]"
          >
            <figure>
              <img
                className="rounded-none w-full lg:h-[343px]"
                src={blog.image}
                alt="flower shop"
              />
            </figure>
            <div className="card-body">
              <div className="text-fh-secondary flex">
                <p className="flex items-center gap-x-1">
                  <GoLocation className="text-fh-primary text-[16px]" />
                  {blog.location}
                </p>
                <p className="flex items-center gap-x-1">
                  <GoClock className="text-fh-primary text-[16px]" />
                  {blog.date}
                </p>
              </div>
              <p className="font-bold text-[18px] text-black">{blog.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
