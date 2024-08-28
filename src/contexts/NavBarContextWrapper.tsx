import { ReactNode, useState } from "react";
import { NavBarContext } from "./context";
type TNavWrapper = {
  children: ReactNode;
};
const NavBarContextWrapper: React.FC<TNavWrapper> = ({ children }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  return (
    <NavBarContext.Provider value={{ isSideNavOpen, setIsSideNavOpen }}>
      {children}
    </NavBarContext.Provider>
  );
};

export default NavBarContextWrapper;
