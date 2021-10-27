import React from 'react';
import './Footer.css';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
    const icon1 = <FontAwesomeIcon icon={faFacebookF} />
    const icon2 = <FontAwesomeIcon icon={faTwitter} />
    const icon3 = <FontAwesomeIcon icon={faInstagram} />
    return (
        <div className = "footer">
            <div className="footer-section">

            <div className="footer-section1">
        <h1>Ahmed Pharma</h1>
        <h4>Your complete package for<br></br> medical suppliance.</h4>
        <span className = "icon">{icon1}</span>
        <span className = "icon">{icon2}</span>
        <span className = "icon">{icon3}</span>
            </div>

            <div className="footer-section2">
        <h2>Subscribe</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className="form-sector" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Button className = "btn-reg" variant="light" type="submit">
    Submit
  </Button>
        </Form>
            </div>
            </div>
            
            <div className="footer-bottom">
        <p>© 2021 Ahmed Sulaiman, All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;