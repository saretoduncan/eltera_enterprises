import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useHoverHook from "../customHooks/useHoverHook";
import { NavBarContext } from "../../contexts/context";

type TNavLink = {
  to: string;
  name: string;
};
const NavLinkComponent: React.FC<TNavLink> = ({ to, name }) => {
  const openNav = useContext(NavBarContext);
  const currentPathLocation = useLocation().pathname;
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverHook(false);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <>
      <Link
        to={to}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => {
          openNav?.setIsSideNavOpen(() => false);
          scrollUp();
        }}
        className="lg:text-lg font-semibold lg:font-bold relative"
      >
        <p>{name}</p>
        <div
          className={`absolute h-[2px]  bg-white transition-all duration-500 ease-in-out ${
            isHovered || currentPathLocation === to ? "w-full" : "w-0"
          }`}
        ></div>
      </Link>
    </>
  );
};
export default NavLinkComponent;
