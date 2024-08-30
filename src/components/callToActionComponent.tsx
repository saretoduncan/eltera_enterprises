import { NavLinks } from "../types/navigation_types";
import SecondaryLinkButton from "./Buttons/SecondaryLinkButton";

const CallToActionComponent = () => {
  return (
    <>
      <div className=" p-4">
        <div className="bg-gradient-to-r from-primaryBlue to-secondary-color p-6 rounded-lg text-gray-200 space-y-4  2xl:w-[1280px] xl:mx-auto xl:px-0 ">
          <section className="md:w-3/4 lg:w-1/2  md:mx-auto">
            <p className="text-center font-bold md:text-lg">
              Interested in Discovering How Eltera Transport Enterprises Can
              Enhance Your Logistics and Transportation Needs?
            </p>
          </section>
          <section className="flex justify-center">
            <SecondaryLinkButton
              name="Contact Us Now"
              to={NavLinks.contactPage.to}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default CallToActionComponent;
