import CallToActionComponent from "../../components/callToActionComponent";
import OurMission from "./OurMission";
import HeroSection from "./heroSection";
import OurVisionAndCore from "./ourVisionAndCore";
import WhoAreWeSection from "./whoAreWeSection";

const AboutPage = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section>
        <WhoAreWeSection />
      </section>
      <section>
        {/* <OurMission /> */}
        <OurVisionAndCore/>
      </section>
      <section>
        <CallToActionComponent/>
      </section>
    </>
  );
};

export default AboutPage;
