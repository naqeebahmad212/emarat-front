import { useEffect, useState } from "react";
import Item from "./Item";
import { backend_url } from "../context/ShopContext";

const PopularProducts = () => {
  const [popular_products, setPopular_products] = useState([]);

  useEffect(() => {
    fetch(backend_url + "/popularproducts")
      .then((response) => response.json())
      .then((data) => setPopular_products(data));
  }, []);

  return (
    <section className="max-padd-container bg-primary p-12 xl:py-28">
      {/* title */}
      <div className="text-center max-w-xl mx-auto">
        <h3 className="h3">Popular Products</h3>
        <p>
          Our best-selling products combines exceptional quality and innovative
          design, making it the top choice for construction professionals.
        </p>
      </div>
      {/* container */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1 gap-y-4 mt-12">
        {popular_products.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            description={item.description}
            unit={item.unit}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
