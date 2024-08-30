import CallToActionComponent from "../../components/callToActionComponent";
import FeaturesSection from "./featuresSection";
import HeroSection from "./heroSection";
import TestimonialSection from "./testimonialSection";
import WhyChooseUs from "./whyChooseUs";

const HomePage = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <section>
        <FeaturesSection />
      </section>
      <section>
        <TestimonialSection />
      </section>
      <section>
        <CallToActionComponent />
      </section>
    </>
  );
};

export default HomePage;
