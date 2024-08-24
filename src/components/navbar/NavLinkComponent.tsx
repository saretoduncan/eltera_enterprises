import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

type TNavLink = {
  to: string;
  name: string;
};
const NavLinkComponent: React.FC<TNavLink> = ({ to, name }) => {
  const currentPathLocation = useLocation().pathname;
  const [isHovered, setIsHovered] = useState(false);
  const handleOnMouseEnter = () => {
    setIsHovered(() => true);
  };
  const handleOnMouseLeave = () => {
    setIsHovered(() => false);
  };

  return (
    <>
      <div className="text-lg font-bold relative">
        <Link
          to={to}
          onMouseEnter={() => handleOnMouseEnter()}
          onMouseLeave={() => handleOnMouseLeave()}
        >
          {name}
        </Link>
        <div
          className={`absolute h-[2px] w-full bg-white transition-all duration-500 ease-in-out ${
            isHovered || currentPathLocation === to
              ? "opacity-100"
              : "opacity-0"
          }`}
        ></div>
      </div>
    </>
  );
};
export default NavLinkComponent;
