import TestimonialCard from "../../components/TestimonialCard";
import Slider, { Settings } from "react-slick";
import { TestimonialData } from "../../types/testimonial_types";
import AnimateToTop from "../../components/animationComponents/AnimateToTop";

const TestimonialSection = () => {
  const sliderConfig: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    autoplay: true,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className=" bg-gray-100 w-full py-8 overflow-hidden">
        <AnimateToTop>
          <h5 className="text-center text-primaryBlue text-lg  font-bold mb-2 md:text-xl">
            <span className="text-sm text-secondary-color">WHAT THEY SAY</span>
            <br /> Client's Testimonial
          </h5>
        </AnimateToTop>
        <AnimateToTop>
          <div className=" px-8 h-full xl:px-10 xl:w-[1280px]  xl:mx-auto ">
            <Slider {...sliderConfig}>
              {TestimonialData.map((item, index) => (
                <TestimonialCard
                  companyTitle={item.companyTitle}
                  content={item.content}
                  imgUrl={item.imgUrl}
                  repName={item.repName}
                  key={index}
                />
              ))}
            </Slider>
          </div>
        </AnimateToTop>
        {/*  */}
      </div>
    </>
  );
};

export default TestimonialSection;
