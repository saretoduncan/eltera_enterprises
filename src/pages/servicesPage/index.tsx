import CallToActionComponent from "../../components/callToActionComponent";
import HeroSection from "./heroSection";
import OurServicesSection from "./ourServicesSection";

const servicesPage = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section>
        <OurServicesSection/>
      </section>
      <section>
        <CallToActionComponent/>
      </section>
    </>
  );
};

export default servicesPage;
