import "./index.css";
//
import Footer from "./footer.tsx";
//
import SignIn from "./signIn.tsx";
//
import Dashboard from "./Dashboard.tsx";
//
import React from "react";
export default function App() {
  //
  return (
    <div className="App">
      <Dashboard />
      <SignIn />
      <Footer />
    </div>
  );
}
