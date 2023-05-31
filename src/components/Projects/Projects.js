import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import jioSaavn from "../../Assets/Projects/jioSaavn.png"
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
              for the looks and aesthetics aspects of the website and for the logic and
               functionality part we've used JavaScript.
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
              regimen. This is basically an E-commerce website/project
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
              imgPath={jioSaavn}
              isBlog={false}
              title="JioSaavn"
              description="This project is made using React.js as a frontend framework.
               For controling songs data we've implemented Redux state management library.
               For authentication we've implemented Node.js and Express based backend application
               which uses MongoDb as database

              "
              techStacks={"React.js | Redux | Express | MongoDb"}
              link={["https://github.com/shailendra-k1245/JioSaavn-clone",
            "https://jiosaavnclone.netlify.app/"]}
            
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
              link={["https://github.com/shailendra-k1245/vrbo-clone","https://vrbo-clone-unit5.netlify.app/"]}
              techStacks={"React.js | Redux | JavaScript | CSS"}
            />
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
