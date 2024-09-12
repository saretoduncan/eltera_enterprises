import logo from "../../assets/eltera_logo.webp";
import { NavLinks } from "../../types/navigation_types";
import NavLinkComponent from "./NavLinkComponent";
import CallLinkComponent from "./CallLinkComponent";
import { FaBars } from "react-icons/fa6";
import { useContext } from "react";
import { NavBarContext } from "../../contexts/context";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const openNav = useContext(NavBarContext);
  
  return (
    <>
      <nav className="w-full  py-4 xl:w-[1280px] mx-auto">
        <div className="w-full  flex items-center justify-between text-white px-4  2xl:px-0">
          <section>
            <img
              src={logo}
              className="w-[80px] lg:w-[130px]"
              alt="company logo"
            />
          </section>
          <section className="hidden lg:flex lg:space-x-4  ">
            <NavLinkComponent
              to={NavLinks.homePage.to}
              name={NavLinks.homePage.name}
            />
            <NavLinkComponent
              to={NavLinks.aboutPage.to}
              name={NavLinks.aboutPage.name}
            />
            <NavLinkComponent
              to={NavLinks.servicesPage.to}
              name={NavLinks.servicesPage.name}
            />
            <NavLinkComponent
              to={NavLinks.contactPage.to}
              name={NavLinks.contactPage.name}
            />
          </section>
          <section className="hidden lg:block">
            <CallLinkComponent />
          </section>
          <section className="lg:hidden">
            <button
              onClick={() => openNav?.setIsSideNavOpen(!openNav.isSideNavOpen)}
              className="text-2xl"
            >
              {openNav?.isSideNavOpen ? <IoClose /> : <FaBars />}
            </button>
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
