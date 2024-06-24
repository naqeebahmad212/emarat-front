import howWeWrok from "../assets/weworks.png";
const HowWeWorks = () => {
  return (
    <section className="max-padd-container bg-[#0E1F3D] p-12 max-lg:hidden ">
      {/* title */}

      {/* container */}
      <div className="flex flex-col justify-center lg:mt-10 gap-8 lg:gap-0">
        <div
          className="flex justify-center h-screen w-full overflow-hidden"
          style={{
            backgroundImage: `url(${howWeWrok})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center  mx-auto text-white">
            <h3 className="h3">How Emarat Works</h3>
          </div>
          {/* <img src={howWeWrok} alt="How we work" className="w-full " /> */}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorks;
