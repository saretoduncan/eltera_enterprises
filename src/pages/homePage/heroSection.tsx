import { Link } from "react-router-dom";
import roadLorries from "../../assets/road_lorries.webp";
import { NavLinks } from "../../types/navigation_types";
import SecondaryLinkButton from "../../components/Buttons/SecondaryLinkButton";
import TertiaryLinkButton from "../../components/Buttons/TertiaryLinkButton";
const HeroSection = () => {
  return (
    <div
      className={`w-full h-[32rem] md:h-[34rem] lg:h-[30rem] xl:h-[34rem] relative bg-cover bg-no-repeat bg-center grid`}
      style={{ backgroundImage: "url(" + "'" + roadLorries + "'" + ")" }}
    >
      <div className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-primaryBlue to-[#11111170] grid px-4 lg:px-8 ">
        <div className="self-end   text-white space-y-6 mb-12 lg:w-[1280px] xl:mx-auto">
          <section className="md:w-[400px] lg:w-[700px] space-y-6">
            <h1 className="text-white font-bold text-xl text-shadow shadow-black md:text-2xl lg:text-4xl">
              Efficient Goods Transportation Across Kenya with Reliable
              Heavy-Duty Lorries
            </h1>
            <p className="text-sm text-shadow shadow-black  md:text-base lg:text-lg">
              Eltera Enterprises provides premium transport services across
              Kenya with a fleet of heavy-duty lorries. We ensure safe, timely
              delivery of your goods with reliable logistics solutions
            </p>
          </section>

          <section className="flex space-x-4">
            <SecondaryLinkButton to={NavLinks.aboutPage.to} name="Learn More" />
            <TertiaryLinkButton
              to={NavLinks.contactPage.to}
              name={"Contact Us"}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
