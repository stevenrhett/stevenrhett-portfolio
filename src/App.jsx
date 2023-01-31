import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import SignIn from "./SignIn.jsx";
import Projects from "./pages/Projects.jsx";
import RootLayout from "./Root.jsx";
import ErrorElement from "./ErrorElement.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";

const routeDefinitions = createRoutesFromElements(
    <Route>
        <Route path="/" element={<RootLayout/>}/>,
        children[
        <Route path="/signin" element={<SignIn/>}/>,
        <Route path="projects" element={<Projects/>}/>,
        <Route path="projects/:id" element={<ProjectDetails/>}/>,
        <Route path="*" element={<ErrorElement/>}/>,
        ]

    </Route>);
const router = createBrowserRouter(routeDefinitions);

function App() {

    return (<RouterProvider router={router}/>)
}

export default App;




