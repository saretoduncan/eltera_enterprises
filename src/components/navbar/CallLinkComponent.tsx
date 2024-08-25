import { Constants } from "../../types/navigation_types";
import { BiSolidPhoneCall } from "react-icons/bi";
import useHoverHook from "../customHooks/useHoverHook";
const CallLinkComponent = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverHook(false);

  return (
    <>
      <div className=" lg:text-lg font-bold">
        <a
          href={`tel:${Constants.phoneNumber}`}
          className="flex items-center space-x-2 lg:space-x-1 "
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
        >
          <div
            className={`rounded-full p-1 transition-all duration-500 ease-in-out ${
              isHovered ? "bg-orange-500" : "bg-slate-50 bg-opacity-50 "
            }`}
          >
            <div
              className={`rounded-full p-1 transition-all duration-500 ease-in-out ${
                isHovered ? "bg-orange-500" : "bg-slate-50 bg-opacity-50 "
              }`}
            >
              <BiSolidPhoneCall className="" />
            </div>
          </div>
          <p>{Constants.phoneNumber}</p>
        </a>
      </div>
    </>
  );
};

export default CallLinkComponent;
