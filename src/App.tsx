import MainRouters from "./MainRoutes";
import DropNavBar from "./components/navbar/DropNavBar";
import Navbar from "./components/navbar/Navbar";
import NavBarContextWrapper from "./contexts/NavBarContextWrapper";

function App() {
  return (
    <>
      {" "}
      <header className="relative">
        <NavBarContextWrapper>
          <section className="bg-primaryBlue bg-opacity-80 w-full fixed z-20 h-[77px] lg:h-[100px] ">
            <Navbar />
          </section>
          <DropNavBar />
        </NavBarContextWrapper>
      </header>
      <main>
        <MainRouters />
      </main>
    </>
  );
}

export default App;
