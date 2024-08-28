import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import ServicesPage from "./pages/servicesPage";
import ContactUsPage from "./pages/contactusPage";
import { NavLinks } from "./types/navigation_types";

const MainRouters = () => {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path={NavLinks.homePage.to} />
        <Route element={<AboutPage />} path={NavLinks.aboutPage.to} />
        <Route element={<ServicesPage />} path={NavLinks.servicesPage.to} />
        <Route element={<ContactUsPage />} path={NavLinks.contactPage.to} />
      </Routes>
    </>
  );
};

export default MainRouters;
