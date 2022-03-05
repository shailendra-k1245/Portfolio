import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import mytheresa from "../../Assets/Projects/mytheresa.png";
import vedix from "../../Assets/Projects/vedix.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import Button from "react-bootstrap/Button";
import aEagle from "../../Assets/Projects/american.png"
import vrbo from "../../Assets/Projects/vrbo-home.PNG"
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiGit,
  DiCss3,
} from "react-icons/di";

function Projects() {
  return (
    <Container fluid className="project-section">
   
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{  paddingBottom: "10px" }}>
        
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aEagle}
              isBlog={false}
              title="American Eagle"
              description="An American lifestyle, clothing, and accessories retailer.
              Since this was a team project me and my collegues have used HTML and CSS
             for the looks and aesthetics aspects
              of the website and for the logic and functionality part I've used JavaScript.
              "
              link={["https://github.com/shailendra-k1245/proj-n","https://american-eagle.vercel.app/ae%20home.html"]}
              techStacks={"HTML | CSS | JavaScript"}
            />
            
          </Col>
         
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vedix}
              isBlog={false}
              title="Vedix"
              description="Vedix is an Ayurvedic hair care and skin care
              regimen.
              This was also a team project and here we have used
              JavaScript frameworks such as Express, Mongoose,EJS.
              Also we have used Databse-MongoDb for storing and retrieving the data.      
               "
              link={["https://github.com/shailendra-k1245/vedix-clone-backend-express",
              "https://vedix-clone-backend.herokuapp.com/"]}
              techStacks={"CSS | Express | MongoDB | EJS"}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mytheresa}
              isBlog={false}
              title="MyTheresa"
              description="Mytheresa is a German e-commerce luxury fashion company.
              This was a solo project of mine. Here I've used HTML and CSS for frontend
              and JavaScript for the backend. Here I've made use of LocalStorage technology
              of the browser. 
              "
              techStacks={"HTML | CSS | JavaScript"}
              link={["https://github.com/shailendra-k1245/Solo-project-ft-web13",
            "https://solo-project-ft-web13.vercel.app/home2.html"]}
            
            />
            
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vrbo}
              isBlog={false}
              title="Vrbo"
              description="Vrbo is an american rental online marketplace.
              This project was executed in 5 days. This was a group project.
              Me and my team members have used React.js as a frontend framework.
              For the backend we are using Heroku server.
              We have made our own api for using search bar and booking hotel 
              according to the location "
              link={["https://github.com/shailendra-k1245/proj-n","https://american-eagle.vercel.app/ae%20home.html"]}
              techStacks={"HTML | CSS | JavaScript | React.js"}
            />
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
