import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

const Banner = () => {
  return (
    <section className="container mx-auto lg:h-screen flex items-center px-5 lg:px-0">
      <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse gap-x-14">
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl lg:text-7xl font-bold uppercase text-white mb-5 ">
            welcome to flower hut
          </h2>
          <p className="text-fh-primary font-bold text-2xl mb-[10px]">
            Discover the Beauty of Nature in Every Petal
          </p>
          <p className="mb-[50px] text-justify">
            At Flower Hut, we're passionate about bringing the natural beauty
            and elegance of flowers into your life. Whether you're celebrating a
            special occasion, expressing your love and affection, or simply
            looking to brighten someone's day, our handcrafted floral
            arrangements are the perfect choice.
          </p>
          <button className="btn bg-fh-primary rounded-full text-white lg:w-[180px] py-4">
            Shop Now
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="lg:w-[260px] lg:h-[255px] w-full my-10 lg:my-0 lg:mb-0">
            <img
              src={banner1}
              alt="Flower"
              className="w-full h-auto lg:h-full lg:rounded-l-[20px] lg:rounded-t-[20px] border border-white rounded-lg"
            />
          </div>
          <div className="lg:w-[330px] h-auto lg:h-[255px] w-[150px] hidden lg:block">
            <img
              src={banner2}
              alt="Flower"
              className="w-full h-auto lg:h-full rounded-r-[20px] rounded-t-[20px] border border-white"
            />
          </div>
          <div className="lg:w-[330px] lg:h-[255px] w-[150px] hidden lg:block">
            <img
              src={banner3}
              alt="Flower"
              className="w-full  h-auto lg:h-full rounded-l-[20px] rounded-b-[20px] border border-white"
            />
          </div>
          <div className="lg:w-[260px] h-auto lg:h-[255px] w-[150px] hidden lg:block">
            <img
              src={banner1}
              alt="Flower"
              className="w-full h-auto lg:h-full rounded-r-[20px] rounded-b-[20px] border border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
