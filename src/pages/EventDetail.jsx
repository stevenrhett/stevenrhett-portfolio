import React from 'react';
import {useParams} from "react-router-dom";

function EventDetail()  {
    const params= useParams();

    return (
        <>
            <h1>event detail</h1>
            <p>Event ID: {params.eventId}</p>
        </>
    );
};

export default EventDetail;