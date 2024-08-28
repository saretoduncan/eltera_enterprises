import { Link } from "react-router-dom";
export type TLinkuttonType = {
  to: string;
  name: string;
};
const TertiaryLinkButton: React.FC<TLinkuttonType> = ({ to, name }) => {
  return (
    <>
      <Link
        to={to}
        className="bg-orange-500  text-slate-100 rounded  px-4 py-2 font-bold hover:bg-slate-100 hover:text-primaryBlue transition-all ease-in-out duration-500"
      >
        {name}
      </Link>
    </>
  );
};

export default TertiaryLinkButton;
