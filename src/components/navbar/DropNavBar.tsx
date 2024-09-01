import { useContext } from "react";
import { NavBarContext } from "../../contexts/context";
import { NavLinks } from "../../types/navigation_types";
import CallLinkComponent from "./CallLinkComponent";
import NavLinkComponent from "./NavLinkComponent";
import useNavChangeHook from "../customHooks/useNavChangeHook";

const DropNavBar = () => {
  const openNav = useContext(NavBarContext);
  const { isNavFull } = useNavChangeHook();
  return (
    <>
      <nav
        className={`w-full fixed top-[77px] p-4 text-white space-y-4 ${
          isNavFull ? "bg-opacity-100" : "bg-opacity-80"
        }  bg-primaryBlue rounded-b-lg z-10 transition-all duration-700 ease-in-out ${
          openNav?.isSideNavOpen ? "translate-x-0" : "translate-x-[-150%]"
        } lg:hidden`}
      >
        <section className="space-y-4">
          <div>
            <NavLinkComponent
              to={NavLinks.homePage.to}
              name={NavLinks.homePage.name}
            />
          </div>
          <div>
            <NavLinkComponent
              to={NavLinks.aboutPage.to}
              name={NavLinks.aboutPage.name}
            />
          </div>
          <div>
            <NavLinkComponent
              to={NavLinks.servicesPage.to}
              name={NavLinks.servicesPage.name}
            />
          </div>
          <div>
            <NavLinkComponent
              to={NavLinks.contactPage.to}
              name={NavLinks.contactPage.name}
            />
          </div>
        </section>
        <section className=" bg-orange-500 p-1 rounded-lg">
          <CallLinkComponent />
        </section>
      </nav>
    </>
  );
};
export default DropNavBar;
