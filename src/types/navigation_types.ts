type TNavData = {
  [key: string]: {
    name: string;
    to: string;
  };
};
type TConstants = {
  phoneNumber: string;
};

export const NavLinks: TNavData = {
  homePage: { name: "Home", to: "/" },
  aboutPage: { name: "About Us", to: "/aboutus" },
  servicesPage: { name: "Services", to: "/services" },
  contactPage: { name: "Contact Us", to: "/contactus" },
};

export const Constants: TConstants = {
  phoneNumber: "+254 715 691 186",
};
