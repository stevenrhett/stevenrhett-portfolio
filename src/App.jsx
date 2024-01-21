import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Body from "./Body.jsx";
import Teams from "./Teams.jsx";
import Root from "./Root";
import Projects from "./Projects";
import Calendar from "./Calendar";
import login from "./login";

const router = createBrowserRouter([

    {
        path: "/",
        element: <login />,
        children: [
            {path: "/", element: <Body/>},
            {path: "/teams", element: <Teams/>},
            {path: "/projects", element: <Projects/>},
            {path: "/calendar", element: <Calendar/>},

        ]
    }
]);
const App = () => {
    return (<RouterProvider router={router}/>);
};


export default App;

