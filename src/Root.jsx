import {Outlet} from "react-router-dom";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";


function RootLayout() {
    return (<>

        <nav>
            <Navigation/>
        </nav>
        <main>
            <Outlet/>
        </main>


        <footer>
            <Footer/>
        </footer>

    </>);
}


export default RootLayout;
