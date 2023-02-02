import EventDetail, {loader as eventDetailsLoader} from "./pages/EventDetail.jsx";
import EditEvent from "./pages/EditEvent.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import Root from "./Root.jsx";
import EventsRoot from "./pages/EventsRoot.jsx";
import Error from "./pages/Error.jsx";
import "./components/MainNavigation.module.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Events, {loader as eventsloader} from "./pages/Events.jsx";


const router = createBrowserRouter([{
    path: "/", element: <Root/>, errorElement: <Error/>, children: [

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
                    path: ":event-id", element: <EventDetail/>, loader: eventDetailsLoader,
                }, {
                    path: ":id/edit", element: <EditEvent/>
                }]
        },]


},]);


const App = () => {
    return (
        <RouterProvider router={router}/>)
}


export default App;
