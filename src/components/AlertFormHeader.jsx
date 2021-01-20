import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap"

function AlertFormHeader() {
    return (
        <Alert variant="success">
            <Alert.Heading className="text-center text text-dark">İletişim Kayıt Formu</Alert.Heading>
        </Alert>
    );
}

export default AlertFormHeader