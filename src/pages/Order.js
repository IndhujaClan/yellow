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
                            <h1 className='h-s'>Get Ready To Started</h1>

                            <Button type='button' className='order-btn' onClick={handleShow} >Enroll Now</Button>
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