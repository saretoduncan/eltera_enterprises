import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLinks } from "../../types/navigation_types";

const FooterNavlink = () => {
  return (
    <div className=" flex items-center space-x-1 border-b pb-1">
      <FaArrowRight className="" />
      <Link to={NavLinks.homePage.to} className="font-bold">
        {NavLinks.homePage.name}
      </Link>
    </div>
  );
};

export default FooterNavlink;
