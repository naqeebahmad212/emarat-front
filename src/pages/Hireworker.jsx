
import React, { useState, useRef } from 'react';
import Labour from "../images/labour.jpeg"
import Mason from "../images/mason.jpeg"
import Carpenter from "../images/carpentar.png"
import Plumber from "../images/Plumbers.jpeg"
import Welder from "../images/Welding.avif"
import Electrition from "../images/electrician.jpeg"
import BuildingVideo3 from "../videos/video3.mp4";

const Hireworker = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [showProducts, setShowProducts] = useState(false);
  const productsSectionRef = useRef(null); // Reference to the products section this  useref use for scroll

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setShowProducts(false); // Reset product visibility when city changes
  };

  const handleShowProducts = () => {
    if (selectedCity) {
      setShowProducts(true);
      setTimeout(() => {
        // Scroll to the products section after state update and component re-render
        productsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    } else {
      alert('Please select a city first.');
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6">Hire worker</h1><br/>
        <div className="bg-white shadow-lg rounded-lg p-16 mt-10 flex flex-col md:flex-row items-center max-w-4xl w-full mx-4">
          <div className="space-y-4 md:w-1/2">
            <p className="text-lg text-[#005173] font-bold">Get verified construction workers on your projects</p>
            <p>Access local construction workers in your area today!</p>
            <select className="border border-gray-300 rounded p-2 w-full" onChange={handleCityChange}>
              <option value="">Select City</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
            </select>
            <button className=" bg-[#005F93] hover:bg-[#005173] text-white font-bold py-2 px-4 rounded w-full" onClick={handleShowProducts}>
              General Labour
            </button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
            <video className="h-full rounded-lg w-full object-cover" autoPlay loop muted>
            <source src={BuildingVideo3} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Select City to find Worker</h1>
        <h1 className="text-3xl">General Labour</h1>
      </div>
      
      {showProducts && (
        <section ref={productsSectionRef} id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          
        
        
            {/* <!--   ✅ worker card 1 - Starts Here 👇 --> */}
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="https://wa.me/+923496600825">
                    <img src={Labour}
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                    <div class="px-4 py-3 w-72">
                    <p class="text-lg font-bold text-black truncate block capitalize">Labour</p>
                        <span class="text-gray-400 mr-3 uppercase text-xs">Strong, reliable support for various tasks on site, ensuring smooth progress and safety.</span>
                        
                        <div class="flex items-center">
                            <p class="text-lg font-semibold text-black cursor-auto my-3">Rs.1500</p>
                            
                                <p class="text-sm text-gray-600 cursor-auto ml-2">/day</p>
                            
                           
                        </div>
                    </div>
                </a>
            </div>
           {/* <!--   ✅ worker card 2 - Starts Here 👇 --> */}
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="https://wa.me/+923496600825">
                    <img src={Mason}
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                    <div class="px-4 py-3 w-72">
                    <p class="text-lg font-bold text-black truncate block capitalize">Mason</p>
                        <span class="text-gray-400 mr-3 uppercase text-xs">Expert in building structures using bricks, concrete blocks, or stone, skilled in mortar application and precision alignment.</span>
                        
                        <div class="flex items-center">
                            <p class="text-lg font-semibold text-black cursor-auto my-3">Rs.4000</p>
                           
                                <p class="text-sm text-gray-600 cursor-auto ml-2">/day</p>
                           
                            
                        </div>
                    </div>
                </a>
            </div>
            {/* <!--   🛑 Worker card 2- Ends Here  -->
        
            <!--   ✅ Worker card 3 - Starts Here 👇 --> */}
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="https://wa.me/+923496600825">
                    <img src={Carpenter}
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                    <div class="px-4 py-3 w-72">
                    <p class="text-lg font-bold text-black truncate block capitalize">Carpenter</p>
                        <span class="text-gray-400 mr-3 uppercase text-xs"> Skilled in crafting, installing, and repairing wooden structures, from framing to intricate finishing work.</span>
                        
                        <div class="flex items-center">
                            <p class="text-lg font-semibold text-black cursor-auto my-3">Rs.800</p>
                            
                                <p class="text-sm text-gray-600 cursor-auto ml-2">/sqft</p>
                            
                            
                        </div>
                    </div>
                </a>
            </div>
            {/* <!--   🛑 Worker card 3 - Ends Here  -->
        
            <!--   ✅ Worker card 4 - Starts Here 👇 --> */}
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="https://wa.me/+923496600825">
                    <img src={Electrition}
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                    <div class="px-4 py-3 w-72">
                    <p class="text-lg font-bold text-black truncate block capitalize">Electrician</p>
                        <span class="text-gray-400 mr-3 uppercase text-xs">Proficient in wiring, installation, and maintenance of electrical systems, ensuring safety and functionality on construction sites.</span>
                        
                        <div class="flex items-center">
                            <p class="text-lg font-semibold text-black cursor-auto my-3">Rs.700</p>
                            
                                <p class="text-sm text-gray-600 cursor-auto ml-2">/day</p>
                            
                            
                        </div>
                    </div>
                </a>
            </div>
            {/* <!--   🛑 Worker card 4 - Ends Here  -->
        
            <!--   ✅ Worker card 5 - Starts Here 👇 --> */}
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="https://wa.me/+923496600825">
                    <img src={Plumber}
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                    <div class="px-4 py-3 w-72">
                    <p class="text-lg font-bold text-black truncate block capitalize">Plumber</p>
                        <span class="text-gray-400 mr-3 uppercase text-xs">Specialized in installing and repairing piping systems, fixtures, and appliances to facilitate water supply and drainage in buildings.</span>
                        
                        <div class="flex items-center">
                            <p class="text-lg font-semibold text-black cursor-auto my-3">Rs.700</p>
                            
                                <p class="text-sm text-gray-600 cursor-auto ml-2">/day</p>
                            
                            
                        </div>
                    </div>
                </a>
            </div>
            {/* <!--   🛑 Worker card 5 - Ends Here  -->
        
            <!--   ✅ Worker card 6 - Starts Here 👇 --> */}
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="https://wa.me/+923496600825">
                    <img src={Welder}
                            alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                    <div class="px-4 py-3 w-72">
                    <p class="text-lg font-bold text-black truncate block capitalize">Welder</p>
                        <span class="text-gray-400 mr-3 uppercase text-xs">Proficient in joining metal parts using various welding techniques, ensuring structural integrity and adherence to project specifications.</span>
                        
                        <div class="flex items-center">
                            <p class="text-lg font-semibold text-black cursor-auto my-3">Rs.700</p>
                            
                                <p class="text-sm text-gray-600 cursor-auto ml-2">/day</p>
                            
                           
                        </div>
                    </div>
                </a>
            </div>
            {/* <!--   🛑 Worker card 6 - Ends Here  --> */}
        
        </section>
        
      )}
    </>
  );
};

export default Hireworker;

