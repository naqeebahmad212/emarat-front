import Hero from "../components/Hero";
import About from "../components/About";
import PopularProducts from "../components/PopularProducts";
// import NewArrivals from "../components/NewArrivals";
// import Offer from "../components/Offer";
import Growth from "../components/Growth";
import Chatbot from "../components/Chatbot";
import HowWeWorks from "../components/HowWeWorks";
import Benifits from "../components/Benifits";
import OurServices from "../components/OurServices";


const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <PopularProducts />
      <Chatbot />
      
      <Growth />
      <HowWeWorks />
      <Benifits />
      <OurServices />
    </>
  );
};

export default Home;
