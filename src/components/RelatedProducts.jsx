import { Link } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { useEffect, useState } from "react";
import { backend_url } from "../context/ShopContext";

const RelatedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(backend_url + "/allproducts")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h4 className="border-l-4 pl-2 border-secondary bold-20 text-white">
        Related Products
      </h4>
      {/* container */}
      <div className="mx-auto max-w-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 800, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="h-[188px] mt-5"
        >
          {products.map((item, i) => (
            <SwiperSlide key={i}>
              <Link
                onClick={window.scrollTo(0, 0)}
                to={`/product/${item.id}`}
                className="flexCenter gap-x-5 bg-white p-4 rounded-xl"
              >
                <img
                  src={item.image}
                  height={77}
                  width={77}
                  className="rounded-lg drop-shadow-xl"
                />
                <div className="flex flex-col gap-y-1">
                  <h4 className="line-clamp-1 medium-16">{item.name}</h4>
                  <p className="line-clamp-1">
                    {item.description.slice(0, 50)}
                  </p>
                  <div className="flexBetween">
                    <div className="flexBetween gap-x-2 medium-16 ">
                      <span>PKR: {item.new_price}.00</span>
                      <span className="line-through text-secondary"></span>
                    </div>
                    <RiShoppingCart2Line className="text-xl hover:text-secondary" />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedProducts;
