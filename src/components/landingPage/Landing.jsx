import React from "react";
import style from "./Landing.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import coverImage from "../../assets/images/cover-image-1.jpg";
import coverImage2 from "../../assets/images/cover-image-2.jpg";
import coverImage3 from "../../assets/images/cover-image-3.jpg";
import bodyImage from "../../assets/images/body-image-1.PNG";
import { Link } from "react-router-dom";
import "./LandingStyle.css";
// import Login from "../login/Login";

export default function Landing() {
  return (
    <div className={style.body}>
      <div className={style.container}>
        <div className={style.topnav}>
          <Link to="/registration">নিবন্ধন</Link>
          <Link to="/login">প্রবেশ করুন</Link>
          {/* <a href="#"> নিবন্ধন</a>
          <a href="#login"> */}
          {/* <a className={style.active} href="#home"> */}
          {/* প্রবেশ করুন
          </a> */}
        </div>
        <Container>
          <Row>
            <Col>
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={coverImage}
                    alt="First slide"
                  />
                  {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={coverImage2}
                    alt="Second slide"
                  />

                  {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={coverImage3}
                    alt="Third slide"
                  />

                  {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
        {/* <img className={style.image} src={coverImage} alt="image1" /> */}
        <img className={style.image} src={bodyImage} alt="image2" />
      </div>

      {/* <div className={style.another}>
        another div
        <marquee style={{ color: "red", fontSize: "3em" }}>Test</marquee>
      </div> */}
    </div>
  );
}
