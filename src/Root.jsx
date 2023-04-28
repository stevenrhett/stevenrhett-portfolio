import { Outlet } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";

function RootLayout() {
  return (
    <>
      <nav className="nav">
        <Navigation />
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}


export default RootLayout;
