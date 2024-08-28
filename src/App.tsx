import MainRouters from "./MainRoutes";
import DropNavBar from "./components/navbar/DropNavBar";
import Navbar from "./components/navbar/Navbar";
import NavBarContextWrapper from "./contexts/NavBarContextWrapper";
import useNavChangeHook from "./components/customHooks/useNavChangeHook";
function App() {
  const { isNavFull } = useNavChangeHook();
  return (
    <>
      {" "}
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
      </main>
    </>
  );
}

export default App;
