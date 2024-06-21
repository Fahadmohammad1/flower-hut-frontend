import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import { GoClock, GoLocation } from "react-icons/go";

const FeaturedBlogs = () => {
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
  ];
  return (
    <section className="container mx-auto lg:mt-[120px] px-5 lg:px-0">
      <h2 className="lg:text-6xl text-4xl font-bold text-white text-center mb-[60px]">
        Our Latest Blog
      </h2>
      <div className="lg:grid grid-cols-3 gap-x-5">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="card card-compact w-full bg-white rounded-[10px] mb-10 lg:mb-0"
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

export default FeaturedBlogs;
