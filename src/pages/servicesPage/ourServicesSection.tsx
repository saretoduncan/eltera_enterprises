import AnimateToLeft from "../../components/animationComponents/AnimateToLeft";
import lightTruck from "../../assets/lightruck_highway.webp";
import trapezium from "../../assets/trapezium.svg";
import delivery_truck from "../../assets/delivery_img.webp";
import hino_truck from "../../assets/hino_truck.webp";
import contractors_img from "../../assets/contractors_img.webp";
import blured_driver_img from "../../assets/blured_driver.webp";
import cargoLorry from "../../assets/cargo_lorry.webp";
import AnimateToTop from "../../components/animationComponents/AnimateToTop";
const OurServicesSection = () => {
  return (
    <>
      <div className="text-gray-800 p-4">
        <div>
          <div>
            <h5 className="text-center font-bold text-xl text-secondary-color my-2">
              What We Do
            </h5>
            <p className="text-center text-sm lg:text-base">
              Explore our professional services at Eltera Enterprises
            </p>
          </div>
          <div className="grid my-6">
            <div className=" grid  gap-10 lg:gap-14 2xl:w-[1280px] 2xl:mx-auto">
              <div className="grid gap-8 md:gap-4 md:grid-cols-2 lg:gap-10 ">
                <div className=" md:self-center overflow-x-hidden">
                  {" "}
                  <AnimateToLeft>
                    <h3 className="font-bold text-xl capitalize text-secondary-color my-2 lg:text-2xl">
                      Temperature-Controlled Transport
                    </h3>
                    <p className="text-sm lg:text-base">
                      Providing services for transporting goods that require
                      temperature control or protection from extreme weather,
                      such as food products, pharmaceuticals, or sensitive
                      materials.
                    </p>{" "}
                  </AnimateToLeft>
                </div>{" "}
                <div className="relative ">
                  <div className="absolute  rounded left-0  w-[100%] ">
                    <img
                      src={trapezium}
                      alt=""
                      className="h-[300px] relative top-6"
                    />
                  </div>
                  <AnimateToTop>
                    <div
                      className="min-h-[300px] w-[90%] mx-auto bg-no-repeat bg-cover bg-center relative rounded"
                      style={{
                        backgroundImage: "url(" + "'" + lightTruck + "'" + ")",
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-primaryBlue to-transparent rounded"></div>
                    </div>
                  </AnimateToTop>
                </div>
              </div>
              <div className="grid gap-8 md:gap-4 md:grid-cols-2 lg:gap-10 ">
                <div className=" md:self-center overflow-x-hidden md:order-2">
                  {" "}
                  <AnimateToLeft>
                    <h3 className="font-bold text-xl capitalize text-secondary-color my-2 lg:text-2xl">
                      Secure Freight and Cargo Transportation
                    </h3>
                    <p className="text-sm lg:text-base">
                      Transporting goods that require protection from the
                      elements, such as electronics, furniture, and packaged
                      consumer goods, ensuring they reach their destination
                      safely and securely.
                    </p>{" "}
                  </AnimateToLeft>
                </div>{" "}
                <div className="relative ">
                  <div className="absolute  rounded left-0  w-[100%] ">
                    <img
                      src={trapezium}
                      alt=""
                      className="h-[300px] relative top-6"
                    />
                  </div>
                  <AnimateToTop>
                    <div
                      className="min-h-[300px] w-[90%] mx-auto bg-no-repeat bg-cover bg-center relative rounded"
                      style={{
                        backgroundImage:
                          "url(" + "'" + blured_driver_img + "'" + ")",
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-primaryBlue to-transparent rounded"></div>
                    </div>
                  </AnimateToTop>
                </div>
              </div>
              <div className="grid gap-8 md:gap-4 md:grid-cols-2 lg:gap-10 ">
                <div className=" md:self-center overflow-x-hidden">
                  {" "}
                  <AnimateToLeft>
                    <h3 className="font-bold text-xl capitalize text-secondary-color my-2 lg:text-2xl">
                      E-commerce and Retail Distribution
                    </h3>
                    <p className="text-sm lg:text-base">
                      Offering delivery services for online retailers and
                      stores, including transporting large volumes of packaged
                      goods from warehouses to distribution centers or directly
                      to customers.
                    </p>{" "}
                  </AnimateToLeft>
                </div>{" "}
                <div className="relative ">
                  <div className="absolute  rounded left-0  w-[100%] ">
                    <img
                      src={trapezium}
                      alt=""
                      className="h-[300px] relative top-6"
                    />
                  </div>
                  <AnimateToTop>
                    <div
                      className="min-h-[300px] w-[90%] mx-auto bg-no-repeat bg-cover bg-center relative rounded"
                      style={{
                        backgroundImage: "url(" + "'" + cargoLorry + "'" + ")",
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-primaryBlue to-transparent rounded"></div>
                    </div>
                  </AnimateToTop>
                </div>
              </div>
              <div className="grid gap-8 md:gap-4 md:grid-cols-2 lg:gap-10 ">
                <div className=" md:self-center overflow-x-hidden md:order-2">
                  {" "}
                  <AnimateToLeft>
                    <h3 className="font-bold text-xl capitalize text-secondary-color my-2 lg:text-2xl">
                      Office and Industrial Relocation
                    </h3>
                    <p className="text-sm lg:text-base">
                      Assisting businesses with moving office equipment,
                      industrial machinery, and other sensitive items during
                      relocations, ensuring secure and efficient transport.
                    </p>{" "}
                  </AnimateToLeft>
                </div>{" "}
                <div className="relative ">
                  <div className="absolute  rounded left-0  w-[100%] ">
                    <img
                      src={trapezium}
                      alt=""
                      className="h-[300px] relative top-6"
                    />
                  </div>
                  <AnimateToTop>
                    <div
                      className="min-h-[300px] w-[90%] mx-auto bg-no-repeat bg-cover bg-center relative rounded"
                      style={{
                        backgroundImage:
                          "url(" + "'" + delivery_truck + "'" + ")",
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-primaryBlue to-transparent rounded"></div>
                    </div>
                  </AnimateToTop>
                </div>
              </div>
              <div className="grid gap-8 md:gap-4 md:grid-cols-2 lg:gap-10 ">
                <div className=" md:self-center overflow-x-hidden">
                  {" "}
                  <AnimateToLeft>
                    <h3 className="font-bold text-xl capitalize text-secondary-color my-2 lg:text-2xl">
                      High-Value Goods Transport
                    </h3>
                    <p className="text-sm lg:text-base">
                      Specializing in the transport of valuable or delicate
                      items such as artwork, antiques, or high-end electronics,
                      offering enhanced security and protection during transit.
                    </p>{" "}
                  </AnimateToLeft>
                </div>{" "}
                <div className="relative ">
                  <div className="absolute  rounded left-0  w-[100%] ">
                    <img
                      src={trapezium}
                      alt=""
                      className="h-[300px] relative top-6"
                    />
                  </div>
                  <AnimateToTop>
                    <div
                      className="min-h-[300px] w-[90%] mx-auto bg-no-repeat bg-cover bg-center relative rounded"
                      style={{
                        backgroundImage: "url(" + "'" + hino_truck + "'" + ")",
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-primaryBlue to-transparent rounded"></div>
                    </div>
                  </AnimateToTop>
                </div>
              </div>
              <div className="grid gap-8 md:gap-4 md:grid-cols-2 lg:gap-10">
                <div className=" md:self-center overflow-x-hidden md:order-2">
                  {" "}
                  <AnimateToLeft>
                    <h3 className="font-bold text-xl capitalize text-secondary-color my-2 lg:text-2xl">
                      Contracted Supply Chain Services
                    </h3>
                    <p className="text-sm lg:text-base">
                      Partnering with businesses to provide regular, contracted
                      transportation services for their supply chain needs,
                      including scheduled deliveries and pickups of
                      closed-container goods.
                    </p>{" "}
                  </AnimateToLeft>
                </div>{" "}
                <div className="relative ">
                  <div className="absolute  rounded left-0  w-[100%] ">
                    <img
                      src={trapezium}
                      alt=""
                      className="h-[300px] relative top-6"
                    />
                  </div>
                  <AnimateToTop>
                  <div
                    className="min-h-[300px] w-[90%] mx-auto bg-no-repeat bg-cover bg-center relative rounded"
                    style={{
                      backgroundImage:
                        "url(" + "'" + contractors_img + "'" + ")",
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-primaryBlue to-transparent rounded"></div>
                  </div></AnimateToTop>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServicesSection;
