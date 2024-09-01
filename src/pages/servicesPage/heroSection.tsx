import AnimateToTop from "../../components/animationComponents/AnimateToTop";
import cargoLorry from "../../assets/cargo_lorry.webp";
function HeroSection() {
  return (
    <div
      className={`w-full min-h-[24rem]  lg:h-[30rem]  relative bg-cover bg-no-repeat bg-center grid overflow-hidden`}
      style={{ backgroundImage: "url(" + "'" + cargoLorry + "'" + ")" }}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-primaryBlue to-[#11111170] grid px-4 lg:px-8  xl:px-0  ">
        <div className="self-end   text-white space-y-6 mb-12 xl:w-[1280px] xl:mx-auto xl:px-8">
          <AnimateToTop>
            <section className="md:w-[400px] lg:w-[700px] space-y-6">
              <h1 className="text-white font-bold text-xl text-shadow shadow-black md:text-2xl lg:text-4xl">
                Efficient and Secure Transport Solutions
              </h1>
              <p className="text-sm text-shadow shadow-black  md:text-base lg:text-lg">
                Experience personalized solutions and cutting-edge services to
                optimize your logistics with a partner you can trust.
              </p>
            </section>
          </AnimateToTop>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
