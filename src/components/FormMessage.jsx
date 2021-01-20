import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Col, Alert } from "react-bootstrap";
import AccordionComponent from "./Accordion"

const DATA = [{
    "nameData": "test1AD",
    "surnameData": "test1SOYAD",
    "emailData": "test1EMAİL@GMAİL.COM",
    "messageData": "test1MESAJ",
}, {
    "nameData": "test2AD",
    "surnameData": "test2SOYAD",
    "emailData": "test2EMAİL@GMAİL.COM",
    "messageData": "test2MESAJ",
}];

const UDATA = [];

function FormMessage() {

    const [dDATA, setTitles] = React.useState(DATA);

    const nameInput = React.useRef();
    const surnameInput = React.useRef();
    const emailInput = React.useRef();
    const messageInput = React.useRef();

    function handleSubmit(event) {

        event.preventDefault();
        let nameData = nameInput.current.value;
        let surnameData = surnameInput.current.value;
        let emailData = emailInput.current.value;
        let messageData = messageInput.current.value;

        if (state.length === 0) {

            let data = {
                nameData, surnameData, emailData, messageData
            }
            dDATA.push(data);

        }
        else {
            let comeIndex = state;
            dDATA[comeIndex].nameData = nameData;
            dDATA[comeIndex].surnameData = surnameData;
            dDATA[comeIndex].emailData = emailData;
            dDATA[comeIndex].messageData = messageData;
            state.pop();
            setState([...state], state);
        }



        setTitles([...dDATA], dDATA);
        nameInput.current.value = ""
        surnameInput.current.value = ""
        emailInput.current.value = ""
        messageInput.current.value = ""
    }

    const [state, setState] = React.useState(UDATA);


    function messageRemove(index) {
        //bu alanda splice ile gelen index değerindeki datayı dizi içerisinden kaldırdık.
        dDATA.splice(index, 1);
        //silme işleminden sonra kalan datayı gördük.
        // console.log(dDATA);
        setTitles([...dDATA], dDATA);
        nameInput.current.value = ""
        surnameInput.current.value = ""
        emailInput.current.value = ""
        messageInput.current.value = ""
        state.pop();
        setState([...state], state);
    }

    function messageEdit(index) {
        state.pop();
        setState([...state], state);
        let data = dDATA[index];
        let idata = index;
        nameInput.current.value = data.nameData;
        surnameInput.current.value = data.surnameData;
        emailInput.current.value = data.emailData;
        messageInput.current.value = data.messageData;
        state.push(idata);
        setState([...state], state);

    }


    const titleCards = dDATA.map((data, index) =>
        <AccordionComponent k={index} dt={data} mr={messageRemove} me={messageEdit} />
    );
    return (
        <>
            <Col sm={12} className="p-5 mb-5 bg-success">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label className="text-center"></Form.Label>
                        <Form.Control ref={nameInput} type="text" placeholder="Adınız" />
                    </Form.Group>
                    <Form.Group controlId="surname">
                        <Form.Label className="text-center"></Form.Label>
                        <Form.Control ref={surnameInput} type="text" placeholder="SoyAdınız" />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label className="text-center"></Form.Label>
                        <Form.Control ref={emailInput} type="text" placeholder="E-Mail" />
                    </Form.Group>
                    <Form.Group controlId="message">
                        <Form.Label>Mesajınız</Form.Label>
                        <Form.Control ref={messageInput} as="textarea" placeholder="Mesajınız" rows={3} />
                    </Form.Group>
                    <Button className="mt-2 btn btn-dark" onClick={handleSubmit}>

                        Kaydet</Button>
                </Form>
            </Col>
            {titleCards}
        </>
    );

}

export default FormMessage