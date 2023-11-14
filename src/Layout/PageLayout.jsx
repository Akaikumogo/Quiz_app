import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Layout() {
  return (
    <>
      <header className="sticky top-0 bg-white z-50">
        <Navbar />
      </header>
      <main className="w-full mx-auto max-w-[800px] mt-[50px]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
