import React from 'react'
import {
    Row,
    Col,
    Form
} from "react-bootstrap";
    
export default function LabelField(props) {
    const {type, name} = props;
    return (
        <div>
            <Row className="">
                <Col sm={5} md={5} className="mt-2">
                    <Form.Label className="fw-bold">{name}:</Form.Label>
                </Col>
                <Col sm={6} md={6} className="text-center">
                    <Form.Floating className="mb-3">
                        <Form.Control
                        id="floatingInputCustom"
                        type={type}
                        placeholder={`Person ${name}`}
                        required
                        />
                        <label htmlFor="floatingInputCustom">{name}</label>
                    </Form.Floating>
                </Col>
            </Row>
        </div>
    )
}
