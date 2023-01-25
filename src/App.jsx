import { useState } from "react";
import "./App.css";
import "./index.css";
import Navigation from "./navigation.jsx";
import Body from "./body.jsx";
import Footer from "./footer.jsx";
import Dashboard from "./dashboard.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
