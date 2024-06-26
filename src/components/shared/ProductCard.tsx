import { IFlower } from "../../interface/common";
import flower1 from "../../assets/flower1.png";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ flower }: { flower: IFlower }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`flower/${flower.id}`)}
      className="card card-compact w-full bg-white rounded-[11px] cursor-pointer mb-10 lg:mb-0"
    >
      <figure>
        <img className="w-full rounded-none" src={flower1} alt="flower" />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-[28px] text-fh-secondary text-center">
          {flower?.name.slice(0, 9)}
        </h2>
        <p className="font-medium text-[13px] text-center text-black">
          From ${flower?.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
