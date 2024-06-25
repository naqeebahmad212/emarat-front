import { useEffect, useState } from "react";
import { TbTruckReturn } from "react-icons/tb";
import about from "/assets/pasted image 0.png";
import { motion } from "framer-motion";

const About = () => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [view, setView] = useState("desktop");
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
    window.addEventListener("resize", handleResize);
    window.innerWidth < 768 ? setView("mobile") : setView("desktop");
  }, [windowInnerWidth]);

  return (
    <section className="max-padd-container py-12 xl:py-32 overflow-hidden">
      {/* container */}
      <div className="flex flex-col gap-1 xl:gap-8 xl:flex-row">
        {/* left */}
        <motion.div
          className="flex-1"
          whileInView={{
            x: [view === "desktop" ? -450 : -50, 0],
            opacity: [0, 1],
            transition: {
              duration: 1,
            },
          }}
        >
          <h3 className="text-2xl font-bold lg:h3 capitalize ">
            Unveiling Our Product's key features!
          </h3>
          <p className="py-5">
            Experience unparalleled durability and performance with our expertly
            crafted construction goods, designed to meet the highest industry
            standards and exceed your expectations.
          </p>
          <div className="flex flex-col items-start gap-y-4">
            <div className="flexCenter gap-x-4">
              <div className="h-16 min-w-16 bg-secondary flexCenter rounded-md ">
                <TbTruckReturn className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="medium-18">Easy Returns Process</h4>
                <p>
                  Enjoy hassle-free returns with our straightforward and
                  customer-friendly return policy.
                </p>
              </div>
            </div>
            <div className="flexCenter gap-x-4">
              <div className="h-16 min-w-16 bg-secondary flexCenter rounded-md ">
                <TbTruckReturn className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="medium-18">Secure Payment Options</h4>
                <p>
                  Shop confidently with our robust, encrypted payment system
                  ensuring complete security.
                </p>
              </div>
            </div>
            <div className="flexCenter gap-x-4">
              <div className="h-16 min-w-16 bg-secondary flexCenter rounded-md ">
                <TbTruckReturn className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="medium-18">Live Customer Support</h4>
                <p>
                  Receive immediate assistance and expert advice from our
                  dedicated live customer support team.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* right */}
        <div className="flex-1 flexCenter">
          <motion.div
            whileInView={{
              x: [view === "desktop" ? 450 : 50, 0],
              opacity: [0, 1],
              transition: {
                duration: 1,
              },
            }}
          >
            <img src={about} alt="" height={488} width={488} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
