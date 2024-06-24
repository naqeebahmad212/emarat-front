import { NavLink } from "react-router-dom";
import plimberImg from "../assets/plumb.png";
import { useEffect, useState } from "react";
import Item from "../components/Item";
import { backend_url } from "../context/ShopContext";
const PlumbingMaterial = () => {
  const [products, setProducts] = useState([]);

  const [pulmbingProducts, setPlumbingProducts] = useState([]);

  useEffect(() => {
    fetch(backend_url + "/allproducts")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    products.map((item) => {
      if (item.category === "Plumbing Material") {
        setPlumbingProducts((prev) => [...prev, item]);
      }
    });
  }, [products]);

  return (
    <section className="gray-structure p-3 md:p-10  xl:p-20 min-h-screen w-full">
      <h1 className="text-3xl font-bold py-10">Plumbing Material</h1>
      <div className="flex justify-between gap-5 flex-col lg:flex-row">
        <img src={plimberImg} alt="" className="w-full lg:w-[80%]" />

        <div className="w-full text-center lg:text-start py-3 lg:w-[16%]">
          <h2 className="text-xl font-bold pb-3">Categories</h2>
          <ul className="flex flex-col gap-3">
            <li>
              <NavLink to="/gray-structure" className="hover:active-link">
                Gray Structure
              </NavLink>
            </li>
            <li>
              <NavLink to="/plumbing-material" className="active-link">
                Plumbing Material
              </NavLink>
            </li>
            <li>
              <NavLink to="/electrical-material" className="hover:active-link">
                Electrical Material
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {pulmbingProducts.length > 0 && (
        <div className="related-products p-3 md:p-10  xl:p-20 bg-gray-10">
          <h1 className="text-xl lg:text-3xl font-bold text-center mt-5 mb-[20px] xl:mb-[50px]">
            Plumbing
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pulmbingProducts.map((item) => (
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

export default PlumbingMaterial;
