import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows,
  SiVisualstudiocode,
  SiNetlify,
  SiPostman,
  SiHeroku,
  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <h6>Windows OS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>Vs Code</h6>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h6>Postman</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h6>Heroku</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h6>Netlify</h6>
      </Col>
      
    </Row>
  );
}

export default Toolstack;
