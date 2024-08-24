import { useState } from "react";

type THoverHookProp = {
  initialValue: boolean;
};
const useHoverHook = ({ initialValue }: THoverHookProp) => {
  const [isHovered, setIsHovered] = useState(initialValue);
  const handleMouseEnter = () => {
    setIsHovered(() => true);
  };
  const handleMouseLeave = () => {
    setIsHovered(() => false);
  };
  return [isHovered, handleMouseEnter, handleMouseLeave] as const;
};

export default useHoverHook;
