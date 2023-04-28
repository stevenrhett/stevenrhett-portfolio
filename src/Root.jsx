import { Outlet } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";


function RootLayout() {
  return (
    <>

      <Navigation />

      <Outlet />

      <Footer />
    </>
  );
}


export default RootLayout;
