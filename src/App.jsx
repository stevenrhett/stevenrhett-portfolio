import "./index.css";
import Footer from "./footer.jsx";
import SignIn from "./signIn";
import * as React from "react";
import Dashboard from "./Dashboard.jsx";

export default function App() {

    return (<div className="App">


        <Dashboard/>
        <SignIn/>
        <Footer/>
    </div>);
}
