import logo from "/eltera_logo.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Constants, NavLinks } from "../../types/navigation_types";
import NavLinkComponent from "./NavLinkComponent";

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-primaryBlue bg-opacity-90 py-4  lg:px-4 2xl:px-0 ">
        <div className="xl:container mx-auto lg:flex lg:items-center lg:justify-between text-white">
          <section>
            <img src={logo} className="w-[150px]" alt="company logo" />
          </section>
          <section className="lg:flex lg:space-x-4 ">
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
          <section>
            <div className=" lg:text-xl lg:font-bold">
              <a
                href={`tel:${Constants.phoneNumber}`}
                className="lg:flex lg:items-center lg:space-x-1"
              >
                <div className="rounded-full p-2 bg-slate-50 bg-opacity-35">
                  <div className="rounded-full p-2 bg-slate-50 bg-opacity-50">
                    <BiSolidPhoneCall className="" />
                  </div>
                </div>
                <p>{Constants.phoneNumber}</p>
              </a>
            </div>
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
