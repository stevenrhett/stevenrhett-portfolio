import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Body from "./Body.jsx";
import Teams from "./Teams.jsx";
import RootLayout from "./Root";
import Projects from "./Projects";
import Calendar from "./Calendar";


const router = createBrowserRouter([

    {
        path: "/",
        element: <RootLayout/>,
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

