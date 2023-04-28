import { Outlet } from "react-router-dom";
import MainNavigation from "./components/MainNavigation.jsx";
import { useNavigation } from "react-router-dom";
import Footer from "./Footer.jsx";

function Root() {
  const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading...
          <progress className="progress w-56"></progress></p>

        }
        {navigation.state === "error" && <p>Error!</p>}

        <Outlet />
      </main>
      <Footer />
    </>
  );
}


export default Root;
