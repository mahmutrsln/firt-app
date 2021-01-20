import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row } from "react-bootstrap"
import FormMessage from "./components/FormMessage.jsx"
import AlertFormHeader from "./components/AlertFormHeader.jsx"

function App() {
  return (
    < Container className="mt-5" >
      <Row>
        <AlertFormHeader />
      </Row>
      <Row>
        <FormMessage />
      </Row>
    </Container >
  );
}


export default App;
