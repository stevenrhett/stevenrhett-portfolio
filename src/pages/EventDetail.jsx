import React from 'react';
import EventItem from "../components/EventItem.jsx";
import {useLoaderData, json} from "react-router-dom";

function EventDetail()  {
const data = useLoaderData()
    return (
        <>
          <EventItem event={data.event}/>
        </>
    );
};

export default EventDetail;

export  async function loader({req,params}) {
    const id = params.event;
    const response = await fetch(`https://localhost:8080/events/` + id);

    if (!response.ok) {
        throw json({message: 'could not fetch'}, {
            status: 500
        });
    } else {

        return response;
    }
}
