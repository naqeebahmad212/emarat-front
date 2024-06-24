import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, new_price, description, unit }) => {
  return (
    <Link
      onClick={window.scrollTo(0, 0)}
      to={`/product/${id}`}
      className="bg-white p-4 my-[30px]  md:mx-5 md:my-[50px] rounded-xl relative"
    >
      <div className="flexCenter">
        <img
          src={image}
          alt=""
          height={211}
          width={211}
          className="rounded-lg drop-shadow-xl w-full h-[170px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 pt-6">
        <h4 className="line-clamp-2 medium-16">{name}</h4>

        <div className="flexBetween">
          <div className="flex gap-x-4 medium-16">
            <span>
              PKR: {new_price}.00/{unit}
            </span>
          </div>
          <RiShoppingCart2Line className="p-2 h-10 w-10 hover:text-secondary" />
        </div>
      </div>
    </Link>
  );
};

export default Item;
