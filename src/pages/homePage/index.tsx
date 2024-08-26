import FeaturesSection from "./featuresSection";
import HeroSection from "./heroSection";
import WhyChooseUs from "./whyChooseUs";

const HomePage = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>
      <section >
        <WhyChooseUs />
      </section>
      <section>
        <FeaturesSection />
      </section>
    </>
  );
};

export default HomePage;
