import React, { useState } from 'react'
import { Button, Col, Container, Form, Modal, Nav, Navbar, NavLink, Row } from 'react-bootstrap'
import Group from "../image/Group 9.png";
import Rect from "../image/Rectangle 2.png";
import Vector from "../image/Vector 8.png";
import Vect from "../image/Vector 6.png";
import design from "../image/design.png";
import Arrow from "../image/arrow.png";
import yellow from "../image/Mento.jpg";
import logo from "../image/logo.jpg";
import right from "../image/banner design (1).png";
import '../stylepages/HomeBanner.css'
import { Link } from 'react-scroll';


function HomeBanner() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [None, setNone] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [altmobile, setAltMobile] = useState("");
    const [ypassing, setYpassing] = useState("");
    const [graduation, setGraduation] = useState("");
    const [course, setCourse] = useState("");


    const handleSubmit = (e) => {

        // const details = {
        //     Name: name,
        //     Email: email,
        //     Mobile: mobile,
        //     AltMobile: altmobile,
        //     YearOfPassing: ypassing,
        //     Graduation: graduation,
        //     Course: course
        // }
        // console.log(details);

        const webhookURL = 'https://chat.googleapis.com/v1/spaces/AAAATFjjny4/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=qnNSG08dhWk0onOFV6O41M8-Ji9SQ-M_7CvP9rtiIPg%3D'

        const data = JSON.stringify({


            "text": `Name:${name}\nEmail:${name}\nMobile:${mobile}\nAltMobile:${altmobile}\nYearOfPassing:${ypassing}\nGraduation:${graduation}\nCourse:${course}`

        });
        let resp;
        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: data,
        }).then((response) => {
            resp = response;
            console.log(response);
        });

    }


    return (
        <div className='HomeBanner'>
            <div className='FirstBanner'>
                <div className='Header'>

                    <Navbar collapseOnSelect expand="md">
                        <Container fluid>
                            <Navbar.Brand>
                                <img src={yellow} className="yellow" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse
                                id="responsive-navbar-nav"
                            >
                                <Nav className="me-auto">

                                </Nav>
                                <Nav style={{ cursor: "pointer" }}>
                                    <Nav.Link>

                                        Home
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link
                                            to="Popular"
                                            spy={true}
                                            smooth={true}
                                            offset={40}
                                            duration={200}
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
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label><b>Name</b></Form.Label>
                                                <Form.Control type="name" value={name} required={true}
                                                    onChange={(event) => setName(event.target.value)} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label><b>Email address</b></Form.Label>
                                                <Form.Control type="email" value={email} required={true}
                                                    onChange={(event) => setEmail(event.target.value)} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label><b>Mobile Number</b></Form.Label>
                                                <Form.Control type="text" value={mobile} required
                                                    pattern="[6789][0-9]{9}"
                                                    onChange={(event) => setMobile(event.target.value)} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label><b> Alternate Mobile Number</b></Form.Label>
                                                <Form.Control type="text" value={altmobile} required
                                                    pattern="[6789][0-9]{9}"
                                                    onChange={(event) => setAltMobile(event.target.value)} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label><b> Year of Passing</b></Form.Label>
                                                <Form.Control type="taxt" value={ypassing} required={true}
                                                    onChange={(event) => setYpassing(event.target.value)} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label> <b>Graduation</b></Form.Label>
                                                <Form.Control type="taxt" value={graduation} required={true}
                                                    onChange={(event) => setGraduation(event.target.value)} />
                                            </Form.Group>
                                            <Form.Label><b>Course of your choice</b></Form.Label>

                                            <Form.Select aria-label="Default select example" value={course} required={true}
                                                onChange={(event) => setCourse(event.target.value)} >
                                                <option value="1">Course of your choice</option>
                                                <option value="Front End Developer"
                                                >Front End Developer</option>
                                                <option value="React Developer"
                                                >React Developer</option>
                                                <option value="Microsoft Office"
                                                > Microsoft Office</option>
                                                <option value="Angular Developer"
                                                >Angular Developer</option>
                                                <option value="Software Testing"
                                                >Software Testing</option>
                                                <option value=".Net"
                                                > .Net</option>
                                                <option value="Full Stack Developer (MERN)"
                                                >Full Stack Developer (MERN)</option>
                                                <option value="Full Stack Developer (MEAN)"
                                                >Full Stack Developer (MEAN)</option>
                                                <option value="Core Java"
                                                > Core Java</option>
                                                <option value="Visual Design"
                                                >Visual Design</option>
                                                <option value="Mobile Application Developer (Android)"
                                                >Mobile Application Developer (Android)</option>
                                                <option value="Mobile Application Developer"
                                                > Mobile Application Developer</option>
                                            </Form.Select>
                                            <Button className='sumbit-btn' type='submit'>Submit</Button>
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
                            10+
                        </h1>
                        <p className='pera-size'>
                            Technical Courses
                        </p>
                    </Col>
                    <Col md={1} xs={0}>
                        <p className='line'>|</p>
                    </Col>
                    <Col md={2} xs={6}>
                        <h1 className='hsize'>
                            15+
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
                            4+
                        </h1>
                        <p className='pera-size'>
                            Industry Tie-Ups
                        </p>
                    </Col>
                    <Col md={1} xs={0}>
                        <p className='line'>|</p>
                    </Col>
                    <Col md={2} xs={6}>
                        <h1 className='hsize'>
                            4.8
                        </h1>
                        <p className='pera-size'>
                            Rating
                        </p>
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default HomeBanner