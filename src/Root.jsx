import {Outlet} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Footer from "./Footer.jsx";
import classes from "./Root.module.css";

function RootLayout() {
    return (<>
        <Dashboard/>
        <Footer/>
        <main className={classes.content}>
            <Outlet/>
        </main>


    </>);
}

export default RootLayout;