import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './Details.css';

const Details = () => {
    
    const {id} = useParams();
    const [dataServices] = useServices();
    console.log(dataServices);
    const selectedService = dataServices.find((service) => service.key === (id));

    return (
        <div className = "info">
          <Card className = "single-card-2">
            <Card.Img className = "card-pic-2" variant="top" src={selectedService?.Image} />
            <Card.Body>
                <Card.Title>{selectedService?.Title}</Card.Title>
                <Card.Text className = "card-text-2">
                {selectedService?.Description}
                </Card.Text>
                <Card.Text className = "card-text">
                {selectedService?.MainText}
                </Card.Text>
            </Card.Body>
        </Card> 
        </div>
    );
};

export default Details;





