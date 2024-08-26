import timeIcon from "../../assets/time_svg.svg";
import safeIcon from "../../assets/safe_shield.svg";
import costIcon from "../../assets/low_cost.svg";
import WhyUsCards from "../../components/whyUsCards";
import AnimateToTop from "../../components/animationComponents/AnimateToTop";
import AnimateToRight from "../../components/animationComponents/AnimateToRight";
import AnimateToLeft from "../../components/animationComponents/AnimateToLeft";
import bgSvg from "../../assets/dark_networking_bg.svg";

const WhyChooseUs = () => {
  return (
    <>
      <div
        className="w-full bg-cover bg-no-repeat bg-center overflow-hidden "
        style={{ backgroundImage: "url(" + "'" + bgSvg + "'" + ")" }}
      >
        <div className=" text-gray-700 px-6   py-4 space-y-6 lg:px-8  xl:w-[1280px] xl:mx-auto   ">
          <AnimateToLeft>
            <section className="space-y-2 ">
              <h3 className="text-xl font-bold text-primaryBlue capitalize text-center lg:text-3xl md:w-[500px] md:mx-auto">
                <span className="text-base ">Reliable </span>
                <br />
                why choose us for your transportation needs
              </h3>
            </section>
          </AnimateToLeft>
          <section className="grid gap-8  md:grid-cols-2 lg:grid-cols-3 lg:gap-2 ">
            <AnimateToRight>
              <WhyUsCards
                icon={timeIcon}
                title="Timeliness"
                caption="We understand the importance of delivering your goods on time.
                Our efficient logistics system ensures that your cargo reaches
                its destination without any delays."
              />
            </AnimateToRight>
            <AnimateToTop>
              <WhyUsCards
                icon={safeIcon}
                title="Safety"
                caption="Safety is our top priority. We have trained drivers and follow strict safety protocols to ensure that your goods are transported securely."
              />
            </AnimateToTop>
            <AnimateToLeft>
              <WhyUsCards
                icon={costIcon}
                title="Cost-effectiveness"
                caption="We offer competitive rates for our transportation services, providing you with cost-effective solutions for your logistics needs."
              />
            </AnimateToLeft>
          </section>
        </div>{" "}
      </div>
    </>
  );
};

export default WhyChooseUs;
