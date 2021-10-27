import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Services.css';
const Services = (props) => {
  //console.log(props.service);
    const {key, Title, Image, Description} = props.service;
    return (
        <div>
            <Card className = "single-card">
            <Card.Img className = "card-pic" variant="top" src={Image} />
            <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text className = "card-text">
                {Description}
                </Card.Text>
                <NavLink to = {`home/${key}`} className = "btn btn-primary">Learn More</NavLink>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Services;