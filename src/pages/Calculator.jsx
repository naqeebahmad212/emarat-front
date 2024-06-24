import React, { useEffect, useState } from "react";
// import axios from "axios";
import BuildingVideo2 from "../videos/video2.mp4";
import Lahore from "../images/Lahore Fort.jpeg";
import Karachi from "../images/Mazar-e-Quaid.jpeg";
import Multan from "../images/multan.jpeg";
import Islamabad from "../images/Islamabad.jpg";
import Faislabad from "../images/Faisalabad.jpeg";
import Rawalpindi from "../images/Rawalpindi.jpeg";
import { Link } from "react-router-dom";
import { backend_url } from "../context/ShopContext";
const cities = [
  { name: "Lahore", image: Lahore },
  { name: "Karachi", image: Karachi },
  { name: "Islamabad", image: Islamabad },
  { name: "Multan", image: Multan },
  { name: "Rawalpindi", image: Rawalpindi },
  { name: "Faisalabad", image: Faislabad },
];

const Calculator = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  // area floar
  const [uniqueProducts, setUniqueProducts] = useState([]);
  const [size, setSize] = useState(1);
  const [unit, setUnit] = useState("Marla");
  const [floors, setFloors] = useState(1);
  const [budget, setBudget] = useState("");
  const [products, setProducts] = useState([]);
  const [brickQty, setBrickQty] = useState(0);
  const [cementQty, setCementQty] = useState(0);
  const [steelQty, setSteelQty] = useState(0);
  const [sandChenabQty, setSandChenabQty] = useState(0);
  const [sandRaviQty, setSandRaviQty] = useState(0);
  const [crushMargallaQty, setCrushMargallaQty] = useState(0);
  const [crushSargodaQty, setCrushSargodaQty] = useState(0);
  const [brickAplsPrice, setBrickAplsPrice] = useState(0);
  const [cementAplsPrice, setCementAplsPrice] = useState(0);
  const [steelAplsPrice, setSteelAplsPrice] = useState(0);
  const [sandChenabAplsPrice, setSandChenabAplsPrice] = useState(0);
  const [sandRaviAplsPrice, setSandRaviAplsPrice] = useState(0);
  const [crushMargallaAplsPrice, setCrushMargallaAplsPrice] = useState(0);
  const [crushSargodaAplsPrice, setCrushSargodaAplsPrice] = useState(0);
  const [brickAPrice, setBrickAPrice] = useState(0);
  const [cementAPrice, setCementAPrice] = useState(0);
  const [steelAPrice, setSteelAPrice] = useState(0);
  const [sandChenabAPrice, setSandChenabAPrice] = useState(0);
  const [sandRaviAPrice, setSandRaviAPrice] = useState(0);
  const [crushMargallaAPrice, setCrushMargallaAPrice] = useState(0);
  const [crushSargodaAPrice, setCrushSargodaAPrice] = useState(0);
  const [brickBPrice, setBrickBPrice] = useState(0);
  const [cementBPrice, setCementBPrice] = useState(0);
  const [steelBPrice, setSteelBPrice] = useState(0);
  const [sandChenabBPrice, setSandChenabBPrice] = useState(0);
  const [sandRaviBPrice, setSandRaviBPrice] = useState(0);
  const [crushMargallaBPrice, setCrushMargallaBPrice] = useState(0);
  const [crushSargodaBPrice, setCrushSargodaBPrice] = useState(0);

  useEffect(() => {
    fetch(backend_url + "/allproducts")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const productNames = new Set();
    const unique = products.filter((product) => {
      if (productNames.has(product.name)) {
        return false;
      } else {
        productNames.add(product.name);
        return true;
      }
    });

    setUniqueProducts(unique);
  }, [products]);

  useEffect(() => {
    if (selectedCity) {
      const city = cities.find((city) => city.name === selectedCity);
      setSelectedCity(city);
    }
  }, [selectedCity]);

  useEffect(() => {
    products.forEach((product) => {
      switch (product.name) {
        case "Brick":
          setBrickQty(size * 5555);
          setBrickAplsPrice(brickQty * product.new_price);
          setBrickAPrice(brickQty * product.aGradePrice);
          setBrickBPrice(brickQty * product.bGradePrice);
          break;
        case "Cement":
          setCementQty(size * 58);
          setCementAplsPrice(cementQty * product.new_price);
          setCementAPrice(cementQty * product.aGradePrice);
          setCementBPrice(cementQty * product.bGradePrice);
          break;
        case "Steel":
          setSteelQty(size * 333);
          setSteelAplsPrice(steelQty * product.new_price);
          setSteelAPrice(steelQty * product.aGradePrice);
          setSteelBPrice(steelQty * product.bGradePrice);
          break;
        case "Sand Chenab":
          setSandChenabQty(size * 77);
          setSandChenabAplsPrice(sandChenabQty * product.new_price);
          setSandChenabAPrice(sandChenabQty * product.aGradePrice);
          setSandChenabBPrice(sandChenabQty * product.bGradePrice);
          break;
        case "Sand Ravi":
          setSandRaviQty(size * 350);
          setSandRaviAplsPrice(sandRaviQty * product.new_price);
          setSandRaviAPrice(sandRaviQty * product.aGradePrice);
          setSandRaviBPrice(sandRaviQty * product.bGradePrice);
          break;
        case "Crush Margalla":
          setCrushMargallaQty(size * 100);
          setCrushMargallaAplsPrice(crushMargallaQty * product.new_price);
          setCrushMargallaAPrice(crushMargallaQty * product.aGradePrice);
          setCrushMargallaBPrice(crushMargallaQty * product.bGradePrice);
          break;
        case "Crush Sargoda":
          setCrushSargodaQty(size * 66);
          setCrushSargodaAplsPrice(crushSargodaQty * product.new_price);
          setCrushSargodaAPrice(crushSargodaQty * product.aGradePrice);
          setCrushSargodaBPrice(crushSargodaQty * product.bGradePrice);
          break;
      }
    });
  }, [
    brickQty,
    cementQty,
    steelQty,
    sandChenabQty,
    sandRaviQty,
    crushMargallaQty,
    crushSargodaQty,
    size,
    products,
  ]);

  const handleSubmit = async () => {
    setIsActive(true);
    window.scrollY(-100);
  };

  const calculationProducts = uniqueProducts.filter(
    (item) =>
      item.name === "Brick" ||
      item.name === "Cement" ||
      item.name === "Crush Sargoda" ||
      item.name === "Crush Margalla" ||
      item.name === "Sand Ravi" ||
      item.name === "Sand Chenab" ||
      item.name === "Steel"
  );

  return (
    <>
      <div className="relative flex flex-col items-center mx-auto space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8 lg:max-w-7xl lg:mt-12 xl:max-w-7xl">
        {/* Content Section */}
        <div className="w-full lg:w-2/5 bg-white shadow-lg p-12 text-center lg:text-left">
          <h2 className="text-2xl font-medium uppercase font-bold text-black lg:text-4xl">
            Cost Calculator
          </h2>
          <p className="mt-4">
            Plan your construction costs with ease! Pick your city, plot size,
            and number of stories, and get quick estimates for bricks, cement,
            steel, and more, personalized to your project's needs.
          </p>
          <div className="mt-8">
            <a
              href="#calculation"
              className="inline-block w-full lg:w-auto text-center text-lg font-medium text-gray-100 bg-[#005F93] border-2 border-gray-600 rounded-full py-4 px-10 hover:bg-[#005173] hover:shadow-md"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full h-64 lg:w-3/5 lg:h-auto">
          <video
            className="h-full rounded-lg w-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src={BuildingVideo2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <br />
      {/* Responsive City Selection Section */}
      <div className="w-full max-w-7xl mx-auto mt-8 px-4" id="calculation">
        <h2 className="text-3xl mb-4 font-bold text-center">
          Select your city
        </h2>
        <br />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className={`w-full h-40 cursor-pointer flex flex-col items-center ${
                selectedCity === city.name ? "ring-4 ring-[#005F93]" : ""
              }`}
              onClick={() => setSelectedCity(city.name)}
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-32 object-cover"
              />
              <p className="text-center mt-2">{city.name}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      {/* Area floor select */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg mt-4">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          {/* Area Section */}
          <div className="flex-1">
            <h2 className="font-bold text-lg mb-3">Area</h2>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="1"
                max="100"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full"
              />
              <input
                type="number"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-20 p-2 border-gray-300 border rounded text-center"
              />
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="border-gray-300 border rounded p-2"
              >
                <option value="Marla">Marla</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Budget (Optional)"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="mt-3 border-gray-300 border rounded p-2 w-full"
            />
          </div>

          {/* Floor Section */}
          <div className="flex-1">
            <h2 className="font-bold text-lg mb-3">Floor</h2>
            <div className="flex">
              {[1, 2, 3, 4, 5, 6].map((floor) => (
                <button
                  key={floor}
                  onClick={() => setFloors(floor)}
                  className={`w-12 h-12 flex items-center justify-center rounded-full border-2 ${
                    floors === floor
                      ? "border-[#0051733] bg-[#005F93] text-white"
                      : "border-gray-300"
                  }`}
                >
                  {floor}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 bg-[#005F93] hover:bg-[#005173] text-white font-bold py-2 px-4 rounded w-full"
        >
          Calculate
        </button>
      </div>

      <br />
      <br />

      {/* Result Section */}
      {isActive && size > 0 && (
        <div
          id="result"
          className="max-w-4xl mx-auto p-6 bg-white shadow-lg mt-4"
        >
          {/* <p className="text-lg">Total Cost: {totalCost}</p> */}
          <div className="p-2 box-border bg-white mb-0 rounded-sm w-full mt-5 lg:ml-5">
            <h4 className="bold-22 p-5 uppercase">Result List</h4>
            <div className="max-h-[77vh] overflow-auto px-4 text-center">
              <table className="w-full mx-auto">
                <thead>
                  <tr className="bg-primary text-sm sm:regular-22 text-start py-12">
                    <th className="p-2 text-sm text-start">Item</th>
                    <th className="p-2 text-sm text-start">Quantity</th>
                    <th className="p-2 text-sm text-start">A+- Category</th>
                    <th className="p-2 text-sm text-start">A- Category</th>
                    <th className="p-2 text-sm text-start">B Category</th>
                    <th className="p-2 text-sm text-center">Product</th>
                  </tr>
                </thead>
                <tbody>
                  {calculationProducts.map((product, i) => {
                    return (
                      <tr
                        key={i}
                        className="border-b border-slate-900/20 text-gray-20 p-6 medium-14"
                      >
                        <td className="flexCenter my-2">
                          <div className="line-clamp-3 text-start w-full font-bold">
                            {product.name === "Brick"
                              ? product.name + "(numbers)"
                              : product.name === "Cement"
                              ? product.name + "(numbers of Bags)"
                              : product.name === "Steel"
                              ? product.name + "(Kg)"
                              : product.name === "Sand Chenab"
                              ? product.name + "(Sq.ft)"
                              : product.name === "Sand Ravi"
                              ? product.name + "(Sq.ft)"
                              : product.name === "Crush Margalla"
                              ? product.name + "(Sq.ft)"
                              : product.name === "Crush Sargoda"
                              ? product.name + "(Sq.ft)"
                              : ""}
                          </div>
                        </td>
                        <td>
                          <div className="line-clamp-3">
                            {product.name === "Brick"
                              ? brickQty * floors
                              : product.name === "Cement"
                              ? cementQty * floors
                              : product.name === "Steel"
                              ? steelQty * floors
                              : product.name === "Sand Chenab"
                              ? sandChenabQty * floors
                              : product.name === "Sand Ravi"
                              ? sandRaviQty * floors
                              : product.name === "Crush Margalla"
                              ? crushMargallaQty * floors
                              : product.name === "Crush Sargoda"
                              ? crushSargodaQty * floors
                              : ""}
                          </div>
                        </td>
                        <td>
                          {product.name === "Brick"
                            ? "Rs." + brickAplsPrice * floors
                            : product.name === "Cement"
                            ? "Rs." + cementAplsPrice * floors
                            : product.name === "Steel"
                            ? "Rs." + steelAplsPrice * floors
                            : product.name === "Sand Chenab"
                            ? "Rs." + sandChenabAplsPrice * floors
                            : product.name === "Sand Ravi"
                            ? "Rs." + sandRaviAplsPrice * floors
                            : product.name === "Crush Margalla"
                            ? "Rs." + crushMargallaAplsPrice * floors
                            : product.name === "Crush Sargoda"
                            ? "Rs." + crushSargodaAplsPrice * floors
                            : ""}
                        </td>
                        <td>
                          {product.name === "Brick"
                            ? "Rs." + brickAPrice * floors
                            : product.name === "Cement"
                            ? "Rs." + cementAPrice * floors
                            : product.name === "Steel"
                            ? "Rs." + steelAPrice * floors
                            : product.name === "Sand Chenab"
                            ? "Rs." + sandChenabAPrice * floors
                            : product.name === "Sand Ravi"
                            ? "Rs." + sandRaviAPrice * floors
                            : product.name === "Crush Margalla"
                            ? "Rs." + crushMargallaAPrice * floors
                            : product.name === "Crush Sargoda"
                            ? "Rs." + crushSargodaAPrice * floors
                            : ""}
                        </td>
                        <td>
                          {product.name === "Brick"
                            ? "Rs." + brickBPrice * floors
                            : product.name === "Cement"
                            ? "Rs." + cementBPrice * floors
                            : product.name === "Steel"
                            ? "Rs." + steelBPrice * floors
                            : product.name === "Sand Chenab"
                            ? "Rs." + sandChenabBPrice * floors
                            : product.name === "Sand Ravi"
                            ? "Rs." + sandRaviBPrice * floors
                            : product.name === "Crush Margalla"
                            ? "Rs." + crushMargallaBPrice * floors
                            : product.name === "Crush Sargoda"
                            ? "Rs." + crushSargodaBPrice * floors
                            : ""}
                        </td>
                        <td>
                          <div className=" pl-6 sm:pl-14">
                            <Link
                              className="link hover:underline hover:text-[#005F93]"
                              to={`/product/${product.id}`}
                            >
                              View Product
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  <td>Total:</td>
                  <td></td>
                  <td>
                    {(crushMargallaAplsPrice +
                      crushSargodaAplsPrice +
                      sandRaviAplsPrice +
                      sandChenabAplsPrice +
                      steelAplsPrice +
                      cementAplsPrice +
                      brickAplsPrice) *
                      floors}
                  </td>

                  <td>
                    {(crushMargallaAPrice +
                      crushSargodaAPrice +
                      sandRaviAPrice +
                      sandChenabAPrice +
                      steelAPrice +
                      cementAPrice +
                      brickAPrice) *
                      floors}
                  </td>

                  <td>
                    {(crushMargallaBPrice +
                      crushSargodaBPrice +
                      sandRaviBPrice +
                      sandChenabBPrice +
                      steelBPrice +
                      cementBPrice +
                      brickBPrice) *
                      floors}
                  </td>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Calculator;
