import React, { useState } from 'react'
import { Button, Col, Container, Form, Modal, Nav, Navbar, Row } from 'react-bootstrap'
import Group from "../image/Group 9.png";
import Rect from "../image/Rectangle 2.png";
import Vector from "../image/Vector 8.png";
import Vect from "../image/Vector 6.png";
import design from "../image/design.png";
import Arrow from "../image/arrow.png";
import yellow from "../image/Mento.png";
import logo from "../image/logo.jpg";
import right from "../image/banner design (1).png";
import '../stylepages/HomeBanner.css'
import { Link } from "react-scroll";

function HomeBanner() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='HomeBanner'>
            <div className='FirstBanner'>
                <div className='Header'>
                    <div className='leftpart'>
                        <img src={yellow} className='yellow' />
                    </div>
                    <div className='rightpart'>
                        <Navbar expand="lg" style={{ paddingTop: '0rem' }}>
                            <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#home"
                                        >
                                            <Link
                                                to=" Home"
                                                spy={true}
                                                smooth={true}
                                                duration={100}
                                                delay={1000}
                                            >
                                                Home
                                            </Link>

                                        </Nav.Link>
                                        <Nav.Link href="#course"
                                        >
                                            <Link
                                                to="Popular"
                                                spy={true}
                                                smooth={true}
                                                duration={100}
                                                delay={1000}
                                            >
                                                Course
                                            </Link>
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
                <div className='Contant'>
                    <Row>
                        <Col md={6} >
                            <img
                                src={Group}
                                className="group-img"

                            />
                            <img
                                src={Vector}
                                className='Vector-img'


                            />

                        </Col>
                        <Col md={6} mt-2rem>
                            <div className='right'>
                                <p className='pera'>Kick start your career in IT by learning the skills that<br></br>
                                    Can help you get your first job easier and faster .</p>
                                <Button type='button' className='Enroll-btn' onClick={handleShow} >Enroll Now<img src={Arrow} className="arrow" /></Button>
                                <Modal show={show} onHide={handleClose} >
                                    <Modal.Header closeButton>
                                        <Modal.Title>
                                            {/* <img src={logo} width={60} height={35}
                                            style={{ borderRadius: '40%', objectFit: 'contain' }} /> */}
                                            Register your Interest</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label><b>Name</b></Form.Label>
                                                <Form.Control type="name" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label><b>Email address</b></Form.Label>
                                                <Form.Control type="email" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label><b>Mobile Number</b></Form.Label>
                                                <Form.Control type="taxt" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label><b> Alternate Mobile Number</b></Form.Label>
                                                <Form.Control type="taxt" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label><b> Year of Passing</b></Form.Label>
                                                <Form.Control type="taxt" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label> <b>Graduation</b></Form.Label>
                                                <Form.Control type="taxt" />
                                            </Form.Group>
                                            <Form.Label><b>Course of your choice</b></Form.Label>

                                            <Form.Select aria-label="Default select example">
                                                <option value="1"></option>
                                                <option value="1">Front End Developer</option>
                                                <option value="2">React Developer</option>
                                                <option value="3"> Microsoft Office</option>
                                                <option value="1">Angular Developer</option>
                                                <option value="2">Software Testing</option>
                                                <option value="3"> .Net</option>
                                                <option value="1">Full Stack Developer (MERN)</option>
                                                <option value="2">Full Stack Developer (MEAN)</option>
                                                <option value="3"> Core Java</option>
                                                <option value="1">Visual Design</option>
                                                <option value="2">Mobile Application Developer (Android)</option>
                                                <option value="3"> Mobile Application Developer</option>
                                            </Form.Select>
                                            <Button type='submit' className='sumbit-btn'>Submit</Button>
                                        </Form>
                                    </Modal.Body>

                                </Modal>
                            </div>
                        </Col>
                        <Col md={2}>
                            <img
                                src={design}
                                className="design-img"

                            />
                        </Col>
                        <Col md={10} sm={12}>
                            <img
                                src={Rect}
                                className="Rect-img"

                            />
                            <img
                                src={Vect}
                                className="Vector-img1"

                            />
                            <img
                                src={right}
                                className="right-img"

                            />


                        </Col>
                    </Row>
                </div>
            </div>
            <div className='SecondBanner'>
                <Row style={{ justifyContent: 'center' }}>
                    <Col md={2} xs={6}>
                        <h1 className='hsize'>
                            4.5
                        </h1>
                        <p className='pera-size'>
                            80k reviews
                        </p>
                    </Col>
                    <Col md={1} xs={0}>
                        <p className='line'>|</p>
                    </Col>
                    <Col md={2} xs={6}>
                        <h1 className='hsize'>
                            30M
                        </h1>
                        <p className='pera-size'>

                            Enrollments
                        </p>
                    </Col>
                    <Col md={1} xs={0}>
                        <p className='line'>|</p>
                    </Col>
                    <Col md={2} xs={6}>
                        <h1 className='hsize'>
                            2m+
                        </h1>
                        <p className='pera-size'>
                            Learners
                        </p>
                    </Col>
                    <Col md={1} xs={0}>
                        <p className='line'>|</p>
                    </Col>
                    <Col md={2} xs={6}>
                        <h1 className='hsize'>
                            8+
                        </h1>
                        <p className='pera-size'>

                            Popular Coures
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default HomeBanner