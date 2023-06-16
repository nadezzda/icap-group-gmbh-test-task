import React from "react";
import {Modal, Row, Col} from 'react-bootstrap';
import './modal.scss';

export default function ProjectDetails(props) {
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <h2>{props.project.title}</h2>
                <hr />
                <Row>
                    <Col>
                        <img src={props.project.img} width="350px" alt="project"/>
                        <h6>Technologies</h6>
                        <ul>
                            {props.project.technologies.map(technology => (
                                <li>{technology}</li>
                            )
                            )}
                        </ul>
                    </Col>
                    <Col>
                        <p>{props.project.description}</p>
                    </Col>
                </Row>
                <hr />
                <p>{props.project.description}</p>
            </Modal.Body>
        </Modal>
    );
}
