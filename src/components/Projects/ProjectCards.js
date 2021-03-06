import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div>Techstack : <br/>{props.techStacks}</div>
       <div className="card-button-div">
       <Button variant="primary" href={props.link[0]} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "Code"}
        </Button> 
        <Button variant="primary" href={props.link[1]} target="_blank">
          <BiLinkExternal /> &nbsp;
          Live Demo
        </Button> 
       </div>
       <br/> 
      </Card.Body>
      
    </Card>
    
  );
}
export default ProjectCards;
