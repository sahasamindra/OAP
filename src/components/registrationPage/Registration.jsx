import React, { useState } from "react";
import style from "./Registration.module.css";
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
} from "react-bootstrap";
import profileImage from "../../assets/images/default-img.jpg";
import OnlyField from "./OnlyField/OnlyField";
import LabelField from "./labelField/LabelField";

export default function Registration() {
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
          <Link to="/login">প্রবেশ করুন</Link>
        </div>
        {/* body of the content */}
        <Container className="mt-3">
          <Card>
            <Card.Header
              className="text-light text-center"
              style={{ backgroundColor: "indigo" }}
            >
              <h4 class="card-title">Please fill up your Application</h4>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col sm={7} md={7}>
                    <h5 className="text-danger">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolores eum earum fuga deleniti form(s).
                    </h5>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Facilis veniam quasi dignissimos cum sapiente veritatis,
                      nihil, perspiciatis assumenda, facere et quidem inventore
                      praesentium molestias accusamus. Magnam nihil tenetur
                      harum minima!
                    </p>
                  </Col>
                  <Col sm={5} md={5} className="text-center">
                    <Image src={profileImage} className="rounded" thumbnail />
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          <Card className="mt-5">
            <Card.Header
              className="text-light text-center"
              style={{ backgroundColor: "indigo" }}
            >
              <h4 class="card-title">Registration</h4>
            </Card.Header>
            <Card.Body>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <LabelField type={"text"} name={"Full Name"}/>
                <LabelField type={"email"} name={"Email"}/>
                <LabelField type={"text"} name={"Mobile Number"}/>

                <Row className="mt-2">
                  <Col sm={3} md={3} className="mt-2">
                    <Form.Label className="fw-bold">Password:</Form.Label>
                  </Col>
                  <Col sm={4} md={4} className="text-center">
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="floatingInputCustom"
                        type="password"
                        placeholder="Person Password"
                        required
                      />
                      <label htmlFor="floatingInputCustom">Password</label>
                    </Form.Floating>
                  </Col>
                  <Col sm={4} md={4} className="text-center">
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="floatingInputCustom"
                        type="password"
                        placeholder="Person Password Confirm"
                        required
                      />
                      <label htmlFor="floatingInputCustom">
                        Password Confirm
                      </label>
                    </Form.Floating>
                  </Col>
                </Row>

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
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}
