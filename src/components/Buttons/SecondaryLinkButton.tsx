import { Link } from "react-router-dom";
import { TLinkuttonType } from "./TertiaryLinkButton";

const SecondaryLinkButton: React.FC<TLinkuttonType> = ({ to, name }) => {
  return (
    <>
      <Link
        to={to}
        className="bg-slate-100 text-primaryBlue rounded  px-4 py-2 font-bold hover:bg-secondary-color hover:text-slate-100 transition-all ease-in-out duration-500  "
      >
        {name}
      </Link>
    </>
  );
};

export default SecondaryLinkButton;
