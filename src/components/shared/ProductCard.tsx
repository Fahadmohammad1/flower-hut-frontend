import { IFlower } from "../../interface/common";
import flower1 from "../../assets/flower1.png";

const ProductCard = ({ flower }: { flower: IFlower }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={flower1} alt="flower" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{flower?.name.slice(0, 9)}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
