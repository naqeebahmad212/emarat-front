import { useRef, useEffect, useState } from 'react';
import { MdApartment, MdPublic, MdReceiptLong, MdTimer } from 'react-icons/md';
import CountUp from 'react-countup';
import { motion, useInView } from 'framer-motion';

const Growth = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    if (isInView && !hasCounted) {
      setHasCounted(true); // Ensures CountUp runs only once when in view
    }
  }, [isInView, hasCounted]);

  return (
    <section className="max-padd-container bg-primary p-12 xl:py-28" ref={ref}>
      <div className="text-center pb-5 mx-auto">
        <h3 className="h3">Enabling Growth, Increasing Throughput</h3>
      </div>
      <motion.div
        className="flex flex-col lg:flex-row justify-around lg:mt-10 gap-8 lg:gap-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center items-center">
          <MdApartment size={100} />
          <div>
            <p className="font-bold text-xl text-black">
              {hasCounted ? <CountUp end={500} prefix="$" suffix="K+" /> : "$0K+"}
              <br />
              <span className="text-black text-lg font-semibold">
                Cost Saved <br /> for clients
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <MdTimer size={100} />
          <div>
            <p className="font-bold text-xl text-black">
              {hasCounted ? <CountUp end={48} suffix="hrs" /> : "0hrs"}
              <br />
              <span className="text-black text-lg font-semibold">
                Time Saved <br /> per delivery
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <MdPublic size={100} />
          <div>
            <p className="font-bold text-xl text-black">
              {hasCounted ? <CountUp end={10} suffix="+" /> : "0+"}
              <br />
              <span className="text-black text-lg font-semibold">
                Cities <br /> Reached
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <MdReceiptLong size={100} />
          <div>
            <p className="font-bold text-xl text-black">
              {hasCounted ? <CountUp end={5000} suffix="+" /> : "0+"}
              <br />
              <span className="text-black text-lg font-semibold">
                Transactions <br /> Processed
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Growth;
