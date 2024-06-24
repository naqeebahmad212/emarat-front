import { useEffect, useState } from "react";
import Item from "./Item";
import { backend_url } from "../../../admin/src/components/Navbar";

const SimilarProducts = ({ category, productId }) => {
  const [products, setProducts] = useState([]);
  const [related_products, setRelated_products] = useState([]);
  useEffect(() => {
    fetch(backend_url + "/allproducts")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    products &&
      products.map((item) => {
        if (
          item.category.toString() === category.toString() &&
          item.id.toString() !== productId.toString()
        ) {
          setRelated_products((prev) => [...prev, item]);
        }
      });
  }, [category, products, productId]);

  return (
    <div className="related-products p-3 md:p-10  xl:p-20 bg-gray-10">
      <h1 className="text-xl lg:text-3xl font-bold text-center ">
        Related Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {related_products.slice(0, 3).map(
          (item, i) => {
            const ifRelated =
              item.category.toString() === category.toString() &&
              item.id.toString() !== productId.toString();
            return (
              <>
                {ifRelated && (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    description={item.description}
                    unit={item.unit}
                  />
                )}
              </>
            );
          }
          // )
        )}
      </div>
    </div>
  );
};

export default SimilarProducts;
