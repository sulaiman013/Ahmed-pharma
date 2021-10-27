import React from 'react';
import { Card } from 'react-bootstrap';
import './Testimonials.css';
const Testimonials = (props) => {
  //console.log(props.service);
    const {Image, Text, Name} = props.testimonial;
    return (
        <div>
            <Card className = "container container-fluid single-card-3">
            <Card.Img className = "card-pic-3" variant="top" src={Image} />
            <Card.Body>
                <Card.Text className = "card-text">
                {Text}
                </Card.Text>
                <Card.Text className = "card-text">
                <small>--{Name}</small>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Testimonials;