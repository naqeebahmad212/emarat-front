import React, { useContext, useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa6";
import { ShopContext } from "../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [productQuantity, setProductQuantity] = useState(200);

  const increaseQuantity = () => {
    setProductQuantity(Number(productQuantity) + Number(1));
  };
  const decreaseQuantity = () => {
    if (productQuantity <= 0) return;
    setProductQuantity(Number(productQuantity) - Number(1));
  };

  return (
    <section className="max-padd-container flex flex-col gap-14 mx-auto justify-around items-center xl:flex-row bg-primary py-4">
      {/* left side */}
      <div
        className=" w-[320px] md:w-[450px] xl:w-[450px] flex bg-no-repeat bg-cover object-cover"
        // style={{
        //   backgroundImage: `url(${product.image})`,
        // }}
      >
        <img
          src={product.image}
          alt="bigImg"
          className="rounded-xl h-full w-full bg-gray-10"
        />
      </div>
      {/* right side */}
      <div className="flex-col flex h-[355px]  rounded-xl">
        <h3 className="h3 sm:line-clamp-1">{product.name}</h3>
        <div className="flex items-start gap-x-2 pb-3 medium-16">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <p>(223)</p>
        </div>
        <p>
          <span className="medium-16 text-tertiary py-4">Brand :</span>{" "}
          {product.brand}
        </p>
        <p className="py-3">
          <span className="medium-16 text-tertiary my-4">Unit :</span>{" "}
          {product.unit}
        </p>
        <div className="flex items-baseline gap-x-6 bold-28 sm:bold-32 mt-4">
          <div>Rs. {product.new_price}.00</div>
        </div>
        <div>
          {/* product colors , icons buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-x-10 gap-y-3 my-6">
            <div>
              <h4 className="bold-16">Select Size:</h4>
              <div className="flex gap-3 my-3">
                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">
                  S
                </div>
                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">
                  M
                </div>
                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">
                  L
                </div>
                <div className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer rounded-md">
                  XL
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex gap-3 my-8 max-w-[555px]">
            <div className="relative">
              <input
                type="number"
                value={productQuantity}
                defaultValue={200}
                onChange={(e) => setProductQuantity(e.target.value)}
                className="border px-2 py-2 w-28 rounded-xl pl-10 "
                name=""
                id=""
              />
              <span
                className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer"
                onClick={decreaseQuantity}
              >
                -
              </span>
              <span
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                onClick={increaseQuantity}
              >
                +
              </span>
            </div>
            <button
              onClick={() => {
                addToCart(product?.id, productQuantity);
              }}
              className="btn-dark rounded-md"
            >
              Add to cart
            </button>
            <button className="btn-secondary rounded-md !px-4">
              <FaHeart />
            </button>
          </div>
          <p>
            <span className="medium-16 text-tertiary">Category :</span>{" "}
            {product.category}
          </p>
          {/* <p>
            <span className="medium-16 text-tertiary">Tags :</span> Modern | New
            Arrivals
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
