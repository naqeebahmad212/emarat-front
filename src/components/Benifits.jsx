import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Benifits = () => {
  const ref = useRef();
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [view, setView] = useState("");
  const handleResize = () => {
    setWindowInnerWidth(window.innerWidth);

    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setView("mobile");
    } else {
      setView("desktop");
    }
  };

  useEffect(() => {
    window.innerWidth < 768 ? setView("mobile") : setView("desktop");
    window.addEventListener("resize", handleResize);
  }, [windowInnerWidth]);
  return (
    <section ref={ref} className="py-10">
      <h2 className="text-2xl lg:text-4xl text-center font-bold py-14">
        Benefits for Buyers & Suppliers
      </h2>
      <div className="w-full  items-center justify-around py-10 flex gap-6 flex-col lg:flex-row">
        <motion.div
          className="benifitCard flex flex-col justify-center  p-10"
          whileInView={{
            x: [view === "desktop" ? -450 : -50, 0],
            opacity: [0, 1],
            transition: {
              duration: 1,
            },
          }}
        >
          <h2 className="text-2xl font-bold py-3 mx-auto">Buyers</h2>
          <ul className="mx-auto">
            <li className=" py-3 text-xl font-semibold flex items-center gap-2">
              <span className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              Inventory management
            </li>
            <li className=" py-3 text-xl font-semibold flex items-center gap-2">
              <span className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              Grow your Business
            </li>
            <li className=" py-3 text-xl font-semibold flex items-center gap-2">
              <span className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              Transparency
            </li>
            <li className=" py-3 text-xl font-semibold flex items-center gap-2">
              <span className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              Flexible Payment Options
            </li>
          </ul>
        </motion.div>
        <motion.div
          whileInView={{
            x: [view === "desktop" ? 450 : 50, 0],
            opacity: [0, 1],
            transition: {
              duration: 1,
            },
          }}
          className=" benifitCard flex flex-col justify-center   p-10 px-16"
        >
          <h2 className="text-2xl font-bold py-3 mx-auto">Supplier</h2>
          <ul className="mx-auto">
            <li className=" py-3 flex items-center gap-2 text-xl font-semibold">
              <span className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              Advance Payments
            </li>
            <li className=" py-3 flex items-center gap-2 text-xl font-semibold">
              <span className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              High Order Volume
            </li>
            <li className=" py-3 flex items-center gap-2 text-xl font-semibold">
              <span className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              Bigger Client Base
            </li>
            <li className=" py-3 flex items-center gap-2 text-xl font-semibold">
              <span className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              Pan Pak Orders
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
export default Benifits;
