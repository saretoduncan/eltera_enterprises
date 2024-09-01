import WhyUsCards from "../../components/whyUsCards";
import intergity_img from "../../assets/handshake.svg";
import customer_service_img from "../../assets/customer_service.svg";
import inovation_img from "../../assets/inovation.svg";
import safety_img from "../../assets/safe_shield.svg";
import AnimateToRight from "../../components/animationComponents/AnimateToRight";
import AnimateToLeft from "../../components/animationComponents/AnimateToLeft";
import AnimateToTop from "../../components/animationComponents/AnimateToTop";
const OurVisionAndCore = () => {
  return (
    <>
      <div className="w-full bg-gray-50 text-gray-800 p-4  ">
        <div className="2xl:w-[1280px] 2xl:mx-auto">
          <div className="space-y-4 my-4 overflow-hidden">
            <AnimateToRight>
              <h3
                className="text-xl font-bold text-secondary-color capitalize text-center
            my-4 lg:text-3xl md:w-[500px] md:mx-auto "
              >
                Our Vision and core values
              </h3>
            </AnimateToRight>
            <AnimateToLeft>
              <p className="text-sm lg:text-base">
                <span className="text-secondary-color font-bold">
                  Eltera Enterprises
                </span>{" "}
                envisions a future where we are the leading provider of
                innovative and sustainable transportation solutions, connecting
                businesses and communities across Kenya while driving economic
                growth and environmental stewardship.
              </p>
            </AnimateToLeft>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 overflow-hidden">
            <AnimateToTop>
              <WhyUsCards
                icon={intergity_img}
                title="Intergrity"
                caption="We uphold the highest ethical standards in all our operations, ensuring transparency, honesty, and fairness in our dealings."
              />
            </AnimateToTop>
            <AnimateToTop>
              <WhyUsCards
                icon={customer_service_img}
                title="Customer Focus"
                caption="Our clients are at the heart of everything we do. We are committed to providing exceptional service, exceeding their expectations, and building long-lasting relationships."
              />{" "}
            </AnimateToTop>
            <AnimateToTop>
              <WhyUsCards
                icon={inovation_img}
                title="Innovation"
                caption="We embrace innovation and continuously seek to improve our services, processes, and technology to stay ahead of industry trends and deliver the best possible value to our clients."
              />
            </AnimateToTop>
            <AnimateToTop>
              <WhyUsCards
                icon={safety_img}
                title="Safety"
                caption="The safety of our employees, customers, and the public is our top priority. We adhere to strict safety standards and invest in training and equipment to prevent accidents and ensure a safe working environment."
              />
            </AnimateToTop>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVisionAndCore;
