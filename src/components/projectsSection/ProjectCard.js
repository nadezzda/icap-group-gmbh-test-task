import React, {useState, useRef} from "react";
import {Button, Card} from 'react-bootstrap';
import ProjectDetails from "./ProjectDetails";

export default function ProjectCard({project}) {
    const [show, setShow] = useState(false);
  const target = useRef(null);
    return(
        <Card>
            <Card.Img variant="top" src={project.img} width="300px"/>
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.shortDescription}</Card.Text>
                <Button variant="primary" ref={target} onClick={() => setShow(!show)}>Mehr erfahren &gt; &gt; </Button>
            </Card.Body>
            <ProjectDetails project={project} show={show} onHide={() => setShow(false)}/>
        </Card>
    );
}