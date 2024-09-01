import lightTruck from "../../assets/lightruck_highway.webp";
import AnimateToLeft from "../../components/animationComponents/AnimateToLeft";
import trapezium from "../../assets/trapezium.svg";
import AnimateToRight from "../../components/animationComponents/AnimateToRight";
const WhoAreWeSection = () => {
  return (
    <>
      <div className="text-gray-800 my-12  ">
        <div className="px-4  2xl:w-[1280px] 2xl:mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 ">
            <div className="relative hidden lg:block">
              <div className="absolute  rounded left-0  w-[100%] ">
                <img
                  src={trapezium}
                  alt=""
                  className="h-[300px] relative top-6"
                />
              </div>
              <div
                className="min-h-[300px] w-[90%] mx-auto bg-no-repeat bg-cover bg-center relative rounded"
                style={{
                  backgroundImage: "url(" + "'" + lightTruck + "'" + ")",
                }}
              >
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-primaryBlue to-transparent rounded"></div>
              </div>
            </div>

            <div className=" lg:self-center overflow-x-hidden">
              {" "}
              <AnimateToLeft>
                <h3 className="font-bold text-xl capitalize text-secondary-color my-2 lg:text-2xl">
                  Who are we?
                </h3>
                <p className="text-sm lg:text-base">
                  Eltera Enterprises is a leading provider of premium transport
                  services within Kenya, boasting over 20 years of experience in
                  the industry. Our fleet of heavy-duty lorries is equipped to
                  handle a wide range of cargo, ensuring safe and timely
                  delivery of your goods. We are committed to delivering
                  reliable logistics solutions that meet your specific needs,
                  whether you require domestic transportation or local
                  distribution. With a focus on efficiency, safety, and customer
                  satisfaction, Eltera Enterprises is your trusted partner for
                  all your transportation requirements within Kenya.
                </p>{" "}
              </AnimateToLeft>
            </div>
          </div>
          <div className="my-8 lg:m-10 overflow-hidden">
            <AnimateToRight>
              <h3 className="font-bold text-xl capitalize text-secondary-color my-2 lg:text-2xl">
                Our mission
              </h3>
              <p className="text-sm lg:text-base">
                Eltera Enterprises is committed to providing exceptional
                transportation solutions that connect businesses and communities
                across Kenya, while fostering a culture of excellence,
                innovation, and sustainability.
              </p>
            </AnimateToRight>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoAreWeSection;
