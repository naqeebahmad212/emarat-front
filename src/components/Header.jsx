import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
// import Navbar from "./Navbar";
// import images / icons / svgs
import logo from "../assets/logo.png";
import user from "../assets/user.svg";
import logout from "../assets/logout.svg";
import { MdClose, MdMenu } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";
import { navLinks } from "../../constants";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const { getTotalCartItems } = useContext(ShopContext);
  const [isHovered, setIsHovered] = useState("");
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Close them menu if open when scrolling occurs
        if (menuOpened) {
          setMenuOpened(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    // clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpened]); // Dependency array ensures that the effect runs when menuOpened changes

  return (
    <header className="max-padd-container w-full z-[9999] sticky top-0 bg-white">
      <div className="flexBetween items-center flex py-3">
        {/* logo */}
        <Link to={"/"} className="flex items-center gap-x-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <span className="bold-24 hidden xs:flex mt-2">Eemarat</span>
        </Link>
        {/* Navbar & Buttons */}
        <div className="flexCenter gap-x-4">
          {/* Desktop Navbar */}
          <div className="hidden xl:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  className={`px-4 cursor-pointer relative z-[999] ${
                    isActive ? "text-secondary border-b-black" : ""
                  }`}
                  key={link.label}
                  to={link.path}
                  onMouseEnter={() => setIsHovered(link.label)}
                  onMouseLeave={() => setIsHovered("")}
                >
                  {link.label}

                  {isHovered === link.label && link.subLinks?.length > 0 && (
                    <div className="absolute bottom-2  left-0 w-full h-1">
                      <div className="bg-secondary h-[2px] w-[80%] mx-auto mt-2"></div>
                      <div className="bg-white absolute min-w-40  rounded-sm mx-auto p-4 ">
                        {" "}
                        {link.subLinks.map((subLink) => (
                          <NavLink
                            to={subLink.path}
                            key={subLink.label}
                            className="  hover:text-secondary pt-3  flex flex-col text-sm "
                          >
                            {subLink.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </NavLink>
              );
            })}
          </div>
          {/* Mobile Navbar */}
          <div
            className={` ${
              menuOpened
                ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12  bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50"
                : "flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50 -right-[100%]"
            }`}
          >
            {/* <Navbar containerStyles={`${menuOpened ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50" : "flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50 -right-[100%]"}`} /> */}
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <NavLink
                  className={`px-4 cursor-pointer relative ${
                    isActive ? "text-secondary border-b-black" : ""
                  }`}
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setIsHovered(link.label)}
                  onMouseLeave={() => setIsHovered("")}
                >
                  {link.label}

                  {isHovered === link.label && link.subLinks?.length > 0 && (
                    <div className="absolute bottom-0  right-0 w-full h-1">
                      <div className="bg-secondary h-[2px] w-[80%] mx-auto mt-2"></div>
                      <div className="bg-white z-[9999] absolute left-[100%]  rounded-sm mx-auto p-4 ">
                        {" "}
                        {link.subLinks.map((subLink) => (
                          <NavLink
                            to={subLink.path}
                            key={subLink.path}
                            className="  hover:text-secondary pt-3  flex flex-col text-sm "
                          >
                            {subLink.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </NavLink>
              );
            })}
          </div>
          {/* buttons */}
          <div className="flexBetween gap-x-3 sm:gap-x-2 bold-16">
            {!menuOpened ? (
              <MdMenu
                className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
                onClick={toggleMenu}
              />
            ) : (
              <MdClose
                className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
                onClick={toggleMenu}
              />
            )}
            <div className="flexBetween sm:gap-x-6">
              <NavLink to={"/cart-page"} className={"flex"}>
                <RiShoppingCart2Line className="p-2 h-10 w-10 hover:text-secondary" />
                <span className="relative flexCenter  rounded-full   medium-14 -top-4 right-3">
                  {getTotalCartItems()}
                </span>
              </NavLink>
              {localStorage.getItem("auth-token") ? (
                <NavLink
                  onClick={() => {
                    localStorage.removeItem("auth-token");
                    window.location.replace("/");
                  }}
                  className={
                    "btn-secondary flexCenter gap-x-2 medium-16 rounded-xl"
                  }
                >
                  <img src={logout} alt="" height={19} width={19} />
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  to={"/login"}
                  className={
                    "btn-secondary flexCenter gap-x-2 medium-16 rounded-xl"
                  }
                >
                  <img src={user} alt="" height={19} width={19} />
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
