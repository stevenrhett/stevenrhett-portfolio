import "./index.css";
// @ts-ignore
import Footer from "./footer.tsx";
// @ts-ignore
import SignIn from "./signIn.tsx";
// @ts-ignore
import Dashboard from "./Dashboard.tsx";
// @ts-ignore
import React from "react";
export default function App() {
  // @ts-ignore
  return (
    <div className="App">
      <Dashboard />
      <SignIn />
      <Footer />
    </div>
  );
}
