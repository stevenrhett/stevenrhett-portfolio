import EventDetail from "./pages/EventDetail.jsx";
import EditEvent from "./pages/EditEvent.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import Root from "./Root.jsx";
import EventsRoot from "./pages/EventsRoot.jsx";
import ErrorElement from "./ErrorElement.jsx";
import "./components/MainNavigation.module.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Events, {loader as eventsloader} from "./pages/Events.jsx";


const router = createBrowserRouter([{
    path: "/", element: <Root/>, children: [

        {
            index: true, element: <Dashboard/>
        },

        {
            path: "events", element: <EventsRoot/>, children: [

                {
                    index: true, element: <Events/>, loader: eventsloader,
                },

                {
                    path: "create", element: <CreateEvent/>
                },

                {
                    path: ":id", element: <EventDetail/>
                }, {
                    path: ":id/edit", element: <EditEvent/>
                }]
        }, {
            path: "*", element: <ErrorElement/>
        }]


},]);


const App = () => {
    return (
        <RouterProvider router={router}/>)
}


export default App;
