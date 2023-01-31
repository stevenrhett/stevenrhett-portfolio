import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import SignIn from "./SignIn.jsx";
import Projects from "./pages/Projects.jsx";
import RootLayout from "./Root.jsx";

const routeDefinitions = createRoutesFromElements(
    <Route>
        <Route path="/" element={<RootLayout/>}/>,
        children:[
        <Route path="/landingpage" element={<LandingPage/>}/>
        <Route path="/signin" element={<SignIn/>}/>,
        <Route path="/projects" element={<Projects/>}/>,

        ]
    </Route>
);
const router = createBrowserRouter(routeDefinitions);

function App() {

    return (<RouterProvider router={router}/>)
}

export default App;




