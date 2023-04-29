import RootLayout from "./Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About.jsx";
import Body from "./Body.jsx";
import Teams from "./Teams.jsx";
import Calendar from "./Calendar.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Policy from "./Policy.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "about", element: <About /> },
      { path: "teams", element: <Teams /> },
      { path: "projects", element: <Projects /> },
      { path: "calendar", element: <Calendar /> },
      { path: "contact", element: <Contact /> },
      { path: "policy", element: <Policy /> }

    ]
  }
]);

const App = () => {
  return (<RouterProvider router={router} />);
};


export default App;

