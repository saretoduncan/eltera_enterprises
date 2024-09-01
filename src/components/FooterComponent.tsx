import { Link } from "react-router-dom";
import { NavLinks } from "../types/navigation_types";
import logo from "/eltera_logo.webp";
import NavLinkComponent from "./navbar/NavLinkComponent";
import FooterAddressComponent from "./FooterAddressComponent";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="w-full bg-primaryBlue px-4 py-8 text-gray-100 ">
      <div className=" 2xl:w-[1280px] 2xl:mx-auto">
        <section className="grid gap-4 md:grid-cols-3">
          <section className=" space-y-2 md:flex  md:flex-col-reverse ">
            <div>
              <Link to={NavLinks.homePage.to}>
                <img src={logo} alt="logo" className="md:w-[200px] w-[150px]" />
              </Link>
            </div>
            <div>
              <p className="text-sm font-bold md:text-base">
                <Link
                  to={NavLinks.homePage.to}
                  className="text-secondary-color"
                >
                  {" "}
                  Eltera Enterprises
                </Link>{" "}
                provides premium transport services across Kenya with a fleet of
                heavy-duty lorries. We ensure safe, timely delivery of your
                goods with reliable logistics solutions
              </p>
            </div>
          </section>
          <section className="space-y-2 md:justify-self-center">
            <div>
              <h4 className="text-secondary-color font-bold">
                Quick Navigation
              </h4>
            </div>
            <div className="space-y-2 text-sm  md:text-md">
              <div className="">
                <NavLinkComponent
                  to={NavLinks.homePage.to}
                  name={NavLinks.homePage.name}
                />
              </div>
              <div className="">
                <NavLinkComponent
                  to={NavLinks.aboutPage.to}
                  name={NavLinks.aboutPage.name}
                />
              </div>
              <div className="">
                <NavLinkComponent
                  to={NavLinks.servicesPage.to}
                  name={NavLinks.servicesPage.name}
                />
              </div>
              <div className="">
                <NavLinkComponent
                  to={NavLinks.contactPage.to}
                  name={NavLinks.contactPage.name}
                />
              </div>
            </div>
          </section>
          <section className="space-y-2 md:justify-self-end">
            <h4 className="text-secondary-color font-bold capitalize">
              Get in touch
            </h4>
            <div className="space-y-2 text-sm  md:text-md">
              <FooterAddressComponent
                name="Nairobi, Kenya"
                icon={FaLocationDot}
              />
              <FooterAddressComponent
                name="info@elteraenterprises.co.ke"
                icon={MdEmail}
              />
              <FooterAddressComponent
                name="+254 721 594 969"
                icon={FaPhoneAlt}
              />
            </div>
          </section>
        </section>
        <section>
          <div className="h-2 w-full bg-secondary-color mt-4"></div>
          <div>
            <small className="font-bold">
              &copy; 2024 ELTERA ENTERPRISES.{" "}
              <span className="text-secondary-color ">All rights reserved</span>
            </small>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default FooterComponent;
