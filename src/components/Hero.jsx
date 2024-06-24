import { Link } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";
import BackgroundVideoSection from "./BackgrounVideo";

const Hero = () => {
  return (
    <section className="z-[999]">
      <div className="max-padd-container relative bg-hero bg-cover bg-center bg-no-repeat lg:pb-10 w-full overflow-hidden">
        <div className="relative top-5 lg:top-24 xs:top-32">
          <h2 className="text-2xl lg:h1 capitalize max-w-[40rem] text-white">
            Building excellence with innovation and integrity,{" "}
            <span className="text-secondary">
              transforms visions into reality.
            </span>
          </h2>

          {/* buttons */}
          <div className="inline-flex items-center justify-center gap-1 lg:gap-4 p-1 my-5 md:my-2 lg:p-2 bg-white rounded-xl">
            <div className="text-center regular-14 leading-tight pl-5">
              <h5 className="uppercase font-bold">Find Savings,</h5>
              <p className="regular-14">Shop With Us!
</p>
            </div>
            <Link
              to={"/gray-structure"}
              className="btn-dark rounded-xl flexCenter py-1 md:!py-5"
            >
              Shop now
            </Link>
          </div>
          {/* NewCollections */}
          <div className=" lg:mt-16">
            <RelatedProducts />
          </div>
        </div>

        {/* background */}
        <BackgroundVideoSection />
        <div className="overlay w-full h-full bg-gray-50 absolute top-0 left-0 pb-5 opacity-60 pointer-events-none -z-[90]"></div>
      </div>
    </section>
  );
};

export default Hero;
