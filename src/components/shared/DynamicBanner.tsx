type IInfo = {
  title: string;
  description: string;
};

const DynamicBanner = ({ bannerInfo }: { bannerInfo: IInfo }) => {
  return (
    <section className="mt-[60px] mb-[110px]">
      <h3 className="font-bold text-[48px] text-white">{bannerInfo?.title}</h3>
      <p className="text-[24px] text-justify text-[#FFFFFF99]">
        {bannerInfo.description}
      </p>
    </section>
  );
};

export default DynamicBanner;
