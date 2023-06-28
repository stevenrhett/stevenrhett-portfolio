import {Outlet} from "react-router-dom";
import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";
import ComingSoon from "./Coming-soon.jsx";
import './index.css';
function RootLayout() {
    return (<>
        <ComingSoon/>

        {/*<nav>*/}
        {/*    <Navigation/>*/}
        {/*</nav>*/}
        {/*<main>*/}
        {/*    <Outlet/>*/}
        {/*</main>*/}


        {/*<footer>*/}
        {/*    <Footer/>*/}
        {/*</footer>*/}

    </>);
}


export default RootLayout;
