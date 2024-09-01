import { NavLinks } from "../types/navigation_types";
import SecondaryLinkButton from "./Buttons/SecondaryLinkButton";
import AnimateToRight from "./animationComponents/AnimateToRight";
import AnimateToTop from "./animationComponents/AnimateToTop";

const CallToActionComponent = () => {
  return (
    <>
      <div className=" p-4 ">
        <div className="bg-gradient-to-r from-primaryBlue to-secondary-color px-6 py-8 lg:py-12 rounded-lg text-gray-200 space-y-4  2xl:w-[1280px] xl:mx-auto xl:px-0 ">
          <section className="md:w-3/4 lg:w-1/2  md:mx-auto">
            <AnimateToTop>
              <p className="text-center font-bold md:text-lg">
                Interested in Discovering How Eltera Transport Enterprises Can
                Enhance Your Logistics and Transportation Needs?
              </p>
            </AnimateToTop>
          </section>
          <section className="flex justify-center">
            <AnimateToRight>
              <SecondaryLinkButton
                name="Contact Us Now"
                to={NavLinks.contactPage.to}
              />
            </AnimateToRight>
          </section>
        </div>
      </div>
    </>
  );
};

export default CallToActionComponent;
