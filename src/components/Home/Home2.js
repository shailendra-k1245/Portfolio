import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/freeform.png";
import bikePhoto from "../../Assets/bike-photo.jpeg"
import Tilt from "react-parallax-tilt";
import homeLogo from "../../Assets/strong.jpg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             I am a Creative person
              <br />
              <br />I like to solve problems
              <i>
                <b className="purple"> I have worked dilligently on JavaScript </b>
              </i>
              <br />
              <br />
              I have also a little knowledge of C and C++ since I dealt with them in college &nbsp;
              <i>
                I have worked on projects related to 
                <b className="purple">
                  Web Development
                </b>
              </i>
              <br />
              <br />
              I would love to have an oppurtunity working with technologies like
               {/* <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i> */}
              &nbsp; like
              <i>
                <b className="purple"> React.js , Node.js and Express</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* <img src={bikePhoto} /> */}
            </Tilt>
            <img src={''} />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <p>iwilldofine@gmail.com</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shailendra-k1245"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Shailen20351388"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shailedra-kumar-82b062217/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
