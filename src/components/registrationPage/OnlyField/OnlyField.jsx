import React from 'react'
import {
        Form
    } from "react-bootstrap";
    
export default function OnlyField(props) {
    const {type, name} = props;
    return (
        <div>
            <Form.Floating className="mb-3">
                <Form.Control
                id="floatingInputCustom"
                type={type}
                placeholder={`Person ${name}`}
                required
                />
                <label htmlFor="floatingInputCustom">{name}</label>
            </Form.Floating>
        </div>
    )
}
