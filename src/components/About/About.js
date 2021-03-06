import React from "react";
import './About.css';
import { Container, Row, Col, Form } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
const About = () => {
  return (
    <div className="py-5">
      <Container>
        <Zoom>
          <h2 className="text-center mb-4">
            WELCOME TO AHMED PHARMACEUTICAL SOLUTIONS
          </h2>
        </Zoom>
        <Row>
          <Col md className="pe-3 mt-3">
            <Bounce bottom>
              <h5 className="fw-bold fs-3">About Us</h5>
              <p className="text-muted left">
                There are countless online pharmacies on the
                internet. And there’s us. We are not the biggest. We are not the
                cheapest. But we are the fastest growing. We have the highest
                delivery completion rate in the pharmaceutical industry.
              </p>
              <p className="text-muted left">
                And the reason is, we don’t give up. When a patient commits for a
                medicine, we commit to the patient. We are not going to sugar coat
                it - we will make you complete, come what may. You may not have
                given much thought to what you are signing up for, but we
                believe you are signing up for knowledge that is useful and
                complete. We are ridiculously committed to our patients. Be it
                constant reminders, relentless masters or 24 x 7 online support
                - we will absolutely make sure that you run out of excuses to
                not complete the course.
              </p>
            </Bounce>
          </Col>
          <Col md className="pe-3 mt-3">
            <Bounce bottom>
              <h5 className="fw-bold fs-3">Our Vision</h5>
              <p className="text-muted right">
                To become the largest online pharmaceutical ecosystem for continuing
                business, in partnership with corporates and hospitals.
              </p>
              <h5 className="fw-bold fs-3">Our Mission</h5>
              <p className="text-muted right">
                To create an alternate platform for patients who wish to
                continue and complete their medicinal practices by attending live online therapies,
                using a team of ridiculously committed expers who will stop
                at nothing to impart education, helped by a 24 x 7 support
                system. By deploying our world class team of industry experts,
                we aim to educate our learners with the skills they need to
                advance their professional life to the next level.
              </p>
            </Bounce>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            <Bounce bottom>
              <h5 className="fw-bold fs-5">Sign up for our monthly newsletter</h5>
              <p className="text-muted left">
                Be the first to know about news and updates.We never share you
                mail with others. Trust us!
              </p>
            </Bounce>
          </Col>
          <Col md className="d-flex justify-content-center">
            <Bounce bottom>
              <Form className="w-100">
                <Form.Label className="fw-bold fs-5">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    className="py-2 rounded-2"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "120px" }}
                    className="btn rounded-2 btn-warning fw-bold"
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;