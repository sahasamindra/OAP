import React, { useState } from "react";
import style from "../registrationPage/Registration.module.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Container,
    Row,
    Col,
    Form,
    Card,
    Image,
    Button,
    FloatingLabel
} from "react-bootstrap";
import profileImage from "../../assets/images/default-img.jpg";
import OnlyField from "../registrationPage/OnlyField/OnlyField";
import LabelField from "../registrationPage/labelField/LabelField";

export default function CIC() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <div className={style.body}>
            <div className={style.container}>
                <div className={style.topnav}>
                <Link to="/">হোম</Link>
                </div>
                {/* body of the content */}
                <Container className="mt-3">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>    
                <Card>
                    <Card.Header
                    className="text-light text-center"
                    style={{ backgroundColor: "indigo" }}
                    >
                    <h4 class="card-title">PART – A: APPLICATION DETAIL</h4>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                        <Col sm={7} md={7}>
                            <FloatingLabel controlId="floatingSelect" label="Type of pass">
                                <Form.Select aria-label="Floating label select example">
                                    <option>Select a Pass Type</option>
                                    <option value="Permanent">Permanent</option>
                                    <option value="Temporary">Temporary</option>
                                </Form.Select>
                            </FloatingLabel>

                            <FloatingLabel className="mt-2" controlId="floatingSelect" label="Type of Issue">
                                <Form.Select aria-label="Floating label select example">
                                    <option>Select a Issue Type</option>
                                    <option value="Initial">Initial</option>
                                    <option value="Re-issue (expired)">Re-issue (expired)</option>
                                    <option value="Re-issue (lost / stolen)">Re-issue (lost / stolen)</option>
                                    <option value="Re-issue (company change)">Re-issue (company change)</option>
                                    <option value="Re-issue (designation change)">Re-issue (designation change)</option>
                                </Form.Select>
                            </FloatingLabel>

                            <Row className="mt-2">
                                <Col sm={6} md={6}>
                                    <OnlyField type={"text"} name={"Pass number"}/>
                                </Col>
                                <Col sm={6} md={6}>
                                    <OnlyField type={"text"} name={"Color of card"}/>
                                </Col>
                            </Row>

                            <Row className="mt-2">
                                <Col sm={6} md={6}>
                                    <OnlyField type={"text"} name={"GD number"}/>
                                </Col>
                                <Col sm={6} md={6}>
                                    <OnlyField type={"date"} name={"Date of entry"}/>
                                </Col>
                                <Col>
                                    <OnlyField type={"text"} name={"Police station name"}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={5} md={5} className="text-center">
                            <Image src={profileImage} className="rounded" thumbnail />
                        </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="mt-3">
                    <Card.Header
                    className="text-light text-center"
                    style={{ backgroundColor: "indigo" }}
                    >
                    <h4 class="card-title">PART – B: APPLICANTS INFORMATION</h4>
                    </Card.Header>
                    <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <LabelField type={"email"} name={"Email"}/>
                        <LabelField type={"text"} name={"Mobile Number"}/>
                        <LabelField type={"text"} name={"Full Name"}/>
                        <LabelField type={"text"} name={"Father’s Name"}/>
                        <LabelField type={"text"} name={"Mother’s Name"}/>
                        <LabelField type={"text"} name={"Spouse Name"}/>

                        <LabelField type={"text"} name={"Nationality"}/>
                        <LabelField type={"text"} name={"National ID Number"}/>
                        <LabelField type={"date"} name={"Date of birth"}/>
                        <LabelField type={"text"} name={"Blood Group"}/>

                        <Row className="mt-2">
                        <Col sm={5} md={5} className="mt-2">
                            <Form.Label className="fw-bold">Gender:</Form.Label>
                        </Col>
                        <Col
                            sm={6}
                            md={6}
                            className="text-center d-flex justify-content-evenly"
                        >
                            <Form.Check
                            type="radio"
                            name="gender"
                            id="gender1"
                            value="Male"
                            label="Male"
                            required
                            />
                            <Form.Check
                            type="radio"
                            name="gender"
                            id="gender2"
                            value="Female"
                            label="Female"
                            required
                            />
                            <Form.Check
                            type="radio"
                            name="gender"
                            id="gender3"
                            value="Other"
                            label="Other"
                            required
                            />
                        </Col>
                        </Row>

                        <Row className="mt-4">
                        <Col sm={6} md={6}>
                            <Card>
                            <Card.Header
                                className="text-light"
                                style={{ backgroundColor: "indigo" }}
                            >
                                <h4 class="card-title">Permanent Address</h4>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                <Col sm={12} md={12}>
                                    <OnlyField type={"text"} name={"House No"}/>
                                    <OnlyField type={"text"} name={"Street/Road No"}/>
                                    <OnlyField type={"text"} name={"City/Town"}/>
                                    <OnlyField type={"text"} name={"Police Station"}/>
                                    <OnlyField type={"text"} name={"District"}/>
                                    <OnlyField type={"text"} name={"Post Code"}/>
                                </Col>
                                </Row>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={6}>
                            <Card>
                            <Card.Header
                                className="text-light"
                                style={{ backgroundColor: "rgba(67,145,233,.6)" }}
                            >
                                <h4 class="card-title">Present Address</h4>
                                <p class="card-subtitle text-light">
                                <Form.Group className="mt-4">
                                    <Form.Check
                                    required
                                    label="Similar To Permanent Address"
                                    feedback="Your Need to check this button."
                                    feedbackType="invalid"
                                    />
                                </Form.Group>
                                </p>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                <Col sm={12} md={12}>
                                    <OnlyField type={"text"} name={"House No"}/>
                                    <OnlyField type={"text"} name={"Street/Road No"}/>
                                    <OnlyField type={"text"} name={"City/Town"}/>
                                    <OnlyField type={"text"} name={"Police Station"}/>
                                    <OnlyField type={"text"} name={"District"}/>
                                    <OnlyField type={"text"} name={"Post Code"}/>
                                </Col>
                                </Row>
                            </Card.Body>
                            </Card>
                        </Col>
                        </Row>
                    </Form>
                    </Card.Body>
                </Card>

                <Card className="mt-3">
                    <Card.Header
                    className="text-light text-center"
                    style={{ backgroundColor: "indigo" }}
                    >
                    <h4 class="card-title">PART – C: DETAILS OF EMPLOYMENT</h4>
                    </Card.Header>
                    <Card.Body>
                        <LabelField type={"text"} name={"Organization Name"}/>
                        <Row className="mb-3">
                            <Col sm={5} md={5} className="mt-2">
                                <Form.Label className="fw-bold text-start">Nature of Organization:</Form.Label>
                            </Col>
                            <Col sm={6} md={6} className="text-center">
                                <FloatingLabel controlId="floatingSelect" label="Nature of organization">
                                    <Form.Select aria-label="Floating label select example">
                                        <option>Select a Nature of organization</option>
                                        <option value="Commercial Air Transport ">Commercial Air Transport </option>
                                        <option value="General Aviation">General Aviation</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <LabelField type={"text"} name={"Designation"}/>
                        <LabelField type={"text"} name={"Current Position"}/>

                        <Row className="mb-3">
                            <Col sm={5} md={5} className="mt-2">
                                <Form.Label className="fw-bold text-start">Type of Employment:</Form.Label>
                            </Col>
                            <Col sm={6} md={6} className="text-center">
                                <FloatingLabel controlId="floatingSelect" label="Type of Employment">
                                    <Form.Select aria-label="Floating label select example">
                                        <option>Select a Type of Employment</option>
                                        <option value="Permanent">Permanent</option>
                                        <option value="Contractual">Contractual</option>
                                        <option value="Other (specify)">Other (specify)</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col sm={5} md={5} className="mt-2">
                                <Form.Label className="fw-bold text-start">Scope of Operation:</Form.Label>
                            </Col>
                            <Col sm={6} md={6} className="text-center">
                                <FloatingLabel controlId="floatingSelect" label="Scope of Operation">
                                    <Form.Select aria-label="Floating label select example">
                                        <option>Select a Scope of Operation</option>
                                        <option value="Domestic">Domestic</option>
                                        <option value="International and Domestic">International and Domestic</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <Card className="mt-3 mb-4">
                    <Card.Header
                    className="text-light text-center"
                    style={{ backgroundColor: "indigo" }}
                    >
                    <h4 class="card-title">PART – D: ADDITIONAL INFORMATION OF FOREIGN NATIONAL</h4>
                    </Card.Header>
                    <Card.Body>
                        <LabelField type={"text"} name={"Nationality"}/>
                        <Row>
                            <Col sm={5} md={5}>
                                <Form.Label className="fw-bold">Passport / Travel Document:</Form.Label>
                            </Col>
                            <Col sm={6} md={6}></Col>
                        </Row>
                        <Row>
                            <Col sm={4} md={4}>
                                <OnlyField type={"text"} name={"Number"}/>
                            </Col>
                            <Col sm={4} md={4}>
                                <OnlyField type={"date"} name={"Place of Issue"}/>
                            </Col>
                            <Col sm={4} md={4}>
                                <OnlyField type={"date"} name={"Expiry Date"}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={5} md={5}>
                                <Form.Label className="fw-bold">Visa:</Form.Label>
                            </Col>
                            <Col sm={6} md={6}></Col>
                        </Row>
                        <Row>
                            <Col sm={4} md={4}>
                                <OnlyField type={"text"} name={"Type of visa"}/>
                            </Col>
                            <Col sm={4} md={4}>
                                <OnlyField type={"date"} name={"Validity of Visa (Expiry Date)"}/>
                            </Col>
                            <Col sm={4} md={4}>
                                <OnlyField type={"text"} name={"Visa Number"}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={5} md={5}>
                                <Form.Label className="fw-bold">Work Permit:</Form.Label>
                            </Col>
                            <Col sm={6} md={6}></Col>
                        </Row>
                        <Row>
                            <Col sm={6} md={6}>
                                <OnlyField type={"text"} name={"Number"}/>
                            </Col>
                            <Col sm={6} md={6}>
                                <OnlyField type={"text"} name={"Validity of Work Permit"}/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <hr />
                <Row>
                    <Col sm={6} md={6}>
                        <Form.Group className="mt-4">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                        </Form.Group>
                    </Col>
                    <Col sm={6} md={6}>
                        <Button
                        type="submit"
                        variant="success"
                        className="btn float-end mt-4"
                        >
                        Submit
                        </Button>
                    </Col>
                </Row>
                </Form>
                </Container>
            </div>
        </div>
    );
}
