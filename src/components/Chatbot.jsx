
import { motion } from "framer-motion";
import CustomerSupportChatbot from "./CotumerSupportChatbot";
import { useEffect, useState } from "react";

const Chatbot = () => {
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
    window.addEventListener("resize", handleResize);
    window.innerWidth < 768 ? setView("mobile") : setView("desktop");
  }, [windowInnerWidth]);
  return (
    <div className="w-full  items-center   justify-around py-10 flex gap-6 flex-col lg:flex-row">
      <motion.div
        className="w-full px-10 l:px-2 xl:w-[40%]"
        whileInView={{
          x: [view === "desktop" ? -450 : -50, 0],
          opacity: [0, 1],
          transition: {
            duration: 1,
          },
        }}
      >
        <h2>What sets us Apart...</h2>
        <h2 className="text-4xl font-bold py-5">
          Get Multiple Quotes, For your Construction needs
        </h2>
        <h3 className="text-lg">
          Our goal is to build your success by delivering exceptional results
          and meeting all your unique construction needs.
        </h3>
      </motion.div>
      <motion.div
        whileInView={{
          x: [view === "desktop" ? 150 : 50, 0],
          opacity: [0, 1],
          transition: {
            duration: 1,
          },
        }}
        className="px-10 lg:px-2"
      >
        <CustomerSupportChatbot />
      </motion.div>
      {/* <ChatWithBot /> */}
    </div>
  );
};

export default Chatbot;
