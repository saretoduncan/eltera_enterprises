import { IconType } from "react-icons";

type TFooterAddress = {
  name: string;
  icon: IconType;
};
const FooterAddressComponent: React.FC<TFooterAddress> = ({
  icon: Icon,
  name,
}) => {
  return (
    <>
      <div className="flex items-center font-bold space-x-2">
        <Icon className="text-secondary-color" />

        <p>{name}</p>
      </div>
    </>
  );
};

export default FooterAddressComponent;
