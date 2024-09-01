import { FaQuoteLeft } from "react-icons/fa";
import { TTestimonialType } from "../types/testimonial_types";
const TestimonialCard: React.FC<TTestimonialType> = ({
  companyTitle,
  content,
  imgUrl,
  repName,
}) => {
  return (
    <>
      <div className="bg-white px-4 py-4 grid m-4 text-center  min-h-[550px] rounded text-gray-800 space-y-4 shadow shadow-secondary-color">
        <div className=" flex justify-center">
          <FaQuoteLeft className="text-secondary-color text-4xl" />
        </div>
        <div>
          <div className=" space-y-4">
            <p className="text:sm xl:text-base">{content}</p>
            <div>
              <figure className="grid space-y-2">
                <img
                  src={imgUrl}
                  alt="maisha magic ltd logo"
                  className="w-[80px] justify-self-center"
                />
                <figcaption className="w-[200px] mx-auto">
                  <p className="text-center text-sm">
                    {repName} -{" "}
                    <span className="text-secondary-color">{companyTitle}</span>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
