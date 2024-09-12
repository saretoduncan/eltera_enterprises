import MainRouters from "./MainRoutes";
import DropNavBar from "./components/navbar/DropNavBar";
import Navbar from "./components/navbar/Navbar";
import NavBarContextWrapper from "./contexts/NavBarContextWrapper";
import useNavChangeHook from "./components/customHooks/useNavChangeHook";
import FooterComponent from "./components/FooterComponent";
import WhatsAppComponent from "./components/WhatsAppComponent";
function App() {
  const { isNavFull } = useNavChangeHook();
  return (
    <>
      {" "}
      <div className=" flex flex-col justify-between min-h-screen ">
        <section>
          <header className="relative">
            <NavBarContextWrapper>
              <section
                className={`bg-primaryBlue transition-all duration-500 ease-in-out ${
                  isNavFull ? "bg-opacity-100" : "bg-opacity-80"
                }  w-full fixed z-20 h-[77px] lg:h-[100px] `}
              >
                <Navbar />
              </section>
              <DropNavBar />
            </NavBarContextWrapper>
          </header>
          <main className="w-full">
            <MainRouters />
          </main>{" "}
        </section>
        <section>
          <FooterComponent />
        </section>
        <WhatsAppComponent />
      </div>
    </>
  );
}

export default App;
