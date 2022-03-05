import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/strong.jpg";

import freeForm from "../../Assets/freeform.png";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
      
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello, 
                {/* <span className="wave" role="img" aria-labelledby="wave">👋🏻</span> */}
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SHAILENDRA KUMAR</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={freeForm} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
