import React from 'react';
import {Link} from "react-router-dom";

const PROJECTS = [{
    id: 1,
    name: "Project 1",
    description: "This is a project 1",
    image: "https://i.imgur.com/w777777.png",
    link: "https://github.com"
}, {
    id: 2,
    name: "Project 2",
    description: "This is a project 2",
    image: "https://i.imgur.com/w777777.png",
    link: "https://github.com"
}, {
    id: 3,
    name: "Project 3",
    description: "This is a project 3",
    image: "https://i.imgur.com/w777777.png",
    link: "https://github.com"
}];

export default function Projects() {
    return (<>
            <h1>Recent projects here</h1>

            <ul>
                {PROJECTS.map(project => (<li key={project.id}>
                    <Link to={`/projects/${project.id}`}>
                        <img src={project.image} alt={project.name}/>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <Link to={`/projects/${project.id}`}>See more</Link>
                    </Link>
                </li>))}
                <li>
                    <Link to="/projects/new">
                        <button className="btn btn-primary">Add a new project</button>
                    </Link>
                </li>
            </ul>
        </>
    )
}







