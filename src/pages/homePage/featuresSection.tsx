import lightBgSvg from "../../assets/light_networking_bg copy.svg";
import savana_lorry from "../../assets/savana_lorry.webp";
import driver_pic from "../../assets/lorry_driver.webp";
import TertiaryLinkButton from "../../components/Buttons/TertiaryLinkButton";
import { NavLinks } from "../../types/navigation_types";
import AnimateToRight from "../../components/animationComponents/AnimateToRight";
import AnimateToLeft from "../../components/animationComponents/AnimateToLeft";
const FeaturesSection = () => {
  return (
    <>
      <div className="my-6 overflow-x-hidden">
        <div className="grid px-4  md:grid-cols-2 xl:w-[1280px] mx-auto">
          {" "}
          <section
            className="min-h-[300px] w-full bg-cover bg-no-repeat bg-center relative hidden md:block"
            style={{
              backgroundImage: "url(" + "'" + savana_lorry + "'" + ")",
            }}
          >
            <div className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-primaryBlue to-[#11111170]"></div>
          </section>
          <section className="bg-primaryBlue ">
            <div
              className="bg-cover bg-no-repeat  text-gray-200 px-6  py-4  h-full lg:p-10 md:items-center"
              style={{ backgroundImage: "url(" + "'" + lightBgSvg + "'" + ")" }}
            >
              <AnimateToRight>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold lg:text-3xl ">
                    We Are Efficient and Dependable Transport Service
                  </h3>
                  <article className=" text-sm md:text-base">
                    At Eltera Enterprises, we are committed to delivering
                    dependable and efficient transport services you can count
                    on. Our fleet of heavy duty lorries is equipped to ensure
                    your goods are transported securely and punctually. Whether
                    your shipment needs to travel within Kenya or reach
                    destinations across the country, you can rely on us to
                    deliver every time.
                  </article>
                </div>
              </AnimateToRight>
            </div>
          </section>
        </div>
        <div className="grid px-4  md:grid-cols-2 xl:w-[1280px] mx-auto grid-cols-reverse">
          {" "}
          <section className="bg-white ">
            <div
              className="bg-cover bg-no-repeat  text-gray-700 px-6  py-4  h-full lg:p-10"
              style={{ backgroundImage: "url(" + "'" + lightBgSvg + "'" + ")" }}
            >
              <AnimateToLeft>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold lg:text-3xl ">
                    Extensive Coverage Area Across Kenya
                  </h3>
                  <article className=" text-sm md:text-base">
                    At Eltera Enterprises, we offer transportation servicea all
                    over Kenya with our fleet of heavy-duty lorries. Our
                    extensive coverage area ensures that we reach even the most
                    remote locations.
                  </article>{" "}
                  <div>
                    <TertiaryLinkButton
                      name="More Details"
                      to={NavLinks.aboutPage.to}
                    />
                  </div>{" "}
                </div>
              </AnimateToLeft>
            </div>
          </section>
          <section
            className="min-h-[300px] w-full bg-cover bg-no-repeat bg-center relative hidden md:block"
            style={{
              backgroundImage: "url(" + "'" + driver_pic + "'" + ")",
            }}
          >
            <div className="absolute top-0 bottom-0 w-full bg-gradient-to-r from-primaryBlue to-[#11111170]"></div>
          </section>
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default FeaturesSection;
