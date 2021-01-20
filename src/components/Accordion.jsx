import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Card, Col, Button, ListGroup } from "react-bootstrap"

function AccordionComponent(props) {
    return (
        <Col sm={4} key={props.k}>
            <Accordion >
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={props.k + 1}>
                            {props.k + 1}  .Mesaj
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={props.k + 1}>
                        <Card.Body>
                            <ListGroup className="mb-3">
                                <ListGroup.Item active>
                                    {props.k + 1}. Mesaj
                                </ListGroup.Item>
                                <ListGroup.Item>Adınız : {props.dt.nameData}</ListGroup.Item>
                                <ListGroup.Item>Soyadınız :  {props.dt.surnameData} </ListGroup.Item>
                                <ListGroup.Item>E-Mail :   {props.dt.emailData} </ListGroup.Item>
                                <ListGroup.Item>Mesaj : {props.dt.messageData} </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button className="btn btn-danger" onClick={() => props.mr(props.k)}>Sil</Button>
                                    <Button className="btn btn-warning" onClick={() => props.me(props.k)}>Düzenle</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Col>
    );
}

export default AccordionComponent;