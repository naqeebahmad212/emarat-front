import { NavLink } from "react-router-dom";
import electricImg from "../assets/elect.png";
import { useEffect, useState } from "react";
import Item from "../components/Item";
import { backend_url } from "../context/ShopContext";
const ElectricalMaterial = () => {
  const [products, setProducts] = useState([]);

  const [grayProducts, setGrayProducts] = useState([]);

  useEffect(() => {
    fetch(backend_url + "/allproducts")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    products.map((item) => {
      if (item.category === "Electrical Material") {
        setGrayProducts((prev) => [...prev, item]);
      }
    });
  }, [products]);
  console.log("products", products);

  return (
    <section className="electrical-material p-3 md:p-10  xl:p-20 min-h-screen w-full">
      <h1 className="text-3xl font-bold py-10">Electrical Material</h1>
      <div className="flex justify-between gap-5 flex-col lg:flex-row">
        <img src={electricImg} alt="" className="w-full lg:w-[80%]" />

        <div className="w-full text-center lg:text-start py-3 lg:w-[16%]">
          <h2 className="text-xl font-bold pb-3">Categories</h2>
          <ul className="flex flex-col gap-3">
            <li>
              <NavLink to="/gray-structure" className="hover:active-link">
                Gray Structure
              </NavLink>
            </li>
            <li>
              <NavLink to="/plumbing-material" className="hover:active-link">
                Plumbing Material
              </NavLink>
            </li>
            <li>
              <NavLink to="/electrical-material" className="active-link">
                Electrical Material
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {grayProducts.length > 0 && (
        <div className="related-products p-3 md:p-10  xl:p-20 bg-gray-10">
          <h1 className="text-xl lg:text-3xl font-bold text-center mt-5 mb-[20px] xl:mb-[50px]">
            Electrical
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grayProducts.map((item) => (
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
        </div>
      )}
    </section>
  );
};

export default ElectricalMaterial;
