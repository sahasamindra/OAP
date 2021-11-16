import React from 'react'

export default function OnlyField() {

    return (
        <div>
            <Form.Floating className="mb-3">
                <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Person House No"
                required
                />
                <label htmlFor="floatingInputCustom">House No</label>
            </Form.Floating>
        </div>
    )
}
