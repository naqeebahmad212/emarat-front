import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import BecomeVendor from "./pages/BecomeVendor";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Hireworker from "./pages/Hireworker";
import Calculator from "./pages/Calculator";
import Aboutus from "./pages/Aboutus";
import GrayStructure from "./pages/Gray-structure";
import ElectricalMaterial from "./pages/electrical-material";
import PlumbingMaterial from "./pages/plumbing-material";
import PostWork from "./pages/PostWork";
import { Toaster } from "react-hot-toast";
import FindWork from "./pages/FindWork";
import ProjectDetails from "./pages/ProjectDetails";
import MyProjects from "./pages/My-projects";
import Proposals from "./pages/Proposals";
export default function App() {
  return (
    <main className="text-tertiary">
      <Toaster position="bottom-center" />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hireworker" element={<Hireworker />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/gray-structure" element={<GrayStructure />} />
          <Route path="/electrical-material" element={<ElectricalMaterial />} />
          <Route path="/plumbing-material" element={<PlumbingMaterial />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/postwork" element={<PostWork />} />
          <Route path="/findwork" element={<FindWork />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/submit-proposal/:id" element={<ProjectDetails />} />
          <Route path="/proposals/:id" element={<Proposals />} />
          <Route path="/becomevendor" element={<BecomeVendor />} />
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
