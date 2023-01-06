import React, { useState } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import img4 from "../image/img4.png";
import Arrow from "../image/arrow.png";
import Star from "../image/Star 3.png";

function AngularDep() {
    const [handleshow, sethandleShow] = useState(false);
    const [Clickshow, setClickShow] = useState(false);
    const ClickClose = () => setClickShow(false);
    const ClickShow = () => setClickShow(true);
    const handleClose = () => sethandleShow(false);
    const handleShow = () => sethandleShow(true);

    return (
        <div>
            <Card>
                <img variant="top" src={img4}
                    className='Group-img2' width={150} height={130} />
                <Card.Body>
                    <p className='p-img'>
                        <img src={Star} width={10} height={10}
                            style={{
                                marginRight: '7px',
                                marginBottom: '4px'
                            }} />4.9( 430 Reviews)</p>
                    <Card.Text style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>
                        Angular Developer
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button type='button' className='View-btn' onClick={handleShow}>View Course</Button>
                    <Button type='button' className='View-btn' onClick={ClickShow} >Enroll Now<img src={Arrow} className="arrow" /></Button>
                </Card.Footer>

                <Modal show={handleshow} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Angular Developer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><b>Duration</b><br></br>
                        90 days<br></br><br></br>

                        <b>Batches</b><br></br>
                        2 hours per day / 8 hours on the weekends<br></br><br></br>

                        <b>Topics</b><br></br>
                        HTML<br></br>
                        CSS<br></br>
                        Bootstrap<br></br>
                        Angular<br></br>
                        JavaScript<br></br><br></br>

                        <b>Internship</b> <br></br>
                        2-4 months</Modal.Body>

                </Modal>
                <Modal show={Clickshow} onHide={ClickClose} >
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

            </Card>
        </div>
    )
}

export default AngularDep