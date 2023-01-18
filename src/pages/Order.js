import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import '../stylepages/Order.css';
import con from "../image/con 6 1.png";
import Google1 from "../image/google play 1.png";
import Google2 from "../image/google play 2.png";
import cap from "../image/Capture.PNG";
import Arrow from "../image/arrow.png";
import Footer from './Footer';

function Order() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [altmobile, setAltMobile] = useState("");
    const [ypassing, setYpassing] = useState("");
    const [graduation, setGraduation] = useState("");
    const [course, setCourse] = useState("");

    const handleSubmit = (e) => {
        // const payment = {
        //     name: name,
        //     email: email,
        //     mobile: mobile,
        //     altmobile: altmobile,
        //     ypassing: ypassing,
        //     graduation: graduation,
        //     course: course
        // }
        // console.log(payment);
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
        <>
            <div style={{ height: '340px' }}>

            </div>
            <div className='Order'>


                <div className='Order-Contant'>
                    <Row>
                        <Col md={6}>
                            <img src={con} width={370} height={345} className='conimg1' />
                        </Col>
                        <Col md={6} style={{ padding: '2rem' }}>
                            <h1 className='h-s'>Get Ready To Start</h1>

                            <Button type='button' className='order-btn' onClick={handleShow} >Enroll Now</Button>
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
                                            <Form.Control type="taxt" value={mobile} required={true}
                                                pattern="[6789][0-9]{9}"
                                                onChange={(event) => setMobile(event.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><b> Alternate Mobile Number</b></Form.Label>
                                            <Form.Control type="taxt" value={altmobile} required={true}
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
                                        <Button className='sumbit-btn' type='submit' >Submit</Button>
                                    </Form>
                                </Modal.Body>

                            </Modal>
                        </Col>
                    </Row>
                </div>
                <div className='Mobileapp'>
                    <div className='image'>
                        <h1 className='hs'>Try Learning Free<br></br>
                            on <span className='hs1'>Mobile App</span>
                        </h1>
                        <div className='image2'>
                            <img src={Google1} width={150} height={70} className='Googleimg' />
                            <img src={Google2} width={150} height={70} className='Googleimg' />
                        </div>
                        <img src={cap} className='cap' />

                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Order