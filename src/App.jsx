import RootLayout from "./Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About.jsx";
import Body from "./Body.jsx";
import Teams from "./Teams.jsx";
import Calendar from "./Calendar.jsx";
import Projects from "./Projects.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/teams", element: <Teams /> },
      { path: "/projects", element: <Projects /> },
      { path: "/calendar", element: <Calendar /> },
      // { path: "*", element: <NotFound /> }




    ]
  }


]);

const App = () => {
  return (<RouterProvider router={router} />);
};


export default App;

