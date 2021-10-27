import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css';
const Product = (props) => {

    const {Title, Image, Type, Company, Price } = props.product;
    
    return (
       
        <div>
           <Card className = "single-card">
            <Card.Img variant="top" src={Image} />
            <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text className = "card-text fw-bold">
                <small>{Type}</small>
                </Card.Text>
                <Card.Text>
                <p className= "fst-italic">{Company}</p>
                </Card.Text>
                <Card.Text>
                <h3 className= "fs-5 fw-bolder">Price: {Price}</h3>
                </Card.Text>
                <button className = "btn btn-danger btn-modify">Buy Now</button>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Product;