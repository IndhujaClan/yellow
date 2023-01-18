import React, { useState } from 'react'
import img8 from "../image/img8.png";
import Star from "../image/Star 3.png";
import { Button, Card, Form, Modal } from 'react-bootstrap'
import Arrow from "../image/arrow.png";
function Corejava() {
    const [handleshow, sethandleShow] = useState(false);
    const [Clickshow, setClickShow] = useState(false);
    const ClickClose = () => setClickShow(false);
    const ClickShow = () => setClickShow(true);
    const handleClose = () => sethandleShow(false);
    const handleShow = () => sethandleShow(true);
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
        <div>
            <Card>
                <img variant="top" src={img8}
                    className='Group-img2' width={150} height={130} />
                <Card.Body>
                    <p className='p-img'><img src={Star} width={10} height={10}
                        style={{
                            marginRight: '7px',
                            marginBottom: '4px'
                        }} />4.9( 430 Reviews)</p>
                    <Card.Text style={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center' }}>
                        Core Java
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='btn-footer'>
                    <Button type='button' className='View-btn' onClick={handleShow}>View Course</Button>
                    <Button type='button' className='View-btn' onClick={ClickShow} >Enroll Now<img src={Arrow} className="arrow" /></Button>
                </Card.Footer>
                <Modal show={handleshow} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> Core Java</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><b>Duration</b><br></br>
                        90 days <br></br><br></br>

                        <b>Batches</b><br></br>
                        2 hours per day / 8 hours on the weekends<br></br><br></br>

                        <b>Topics</b><br></br>
                        OOPs<br></br>
                        Core Java<br></br><br></br>

                        <b>Internship</b> <br></br>
                        NA</Modal.Body>
                </Modal>
                <Modal show={Clickshow} onHide={ClickClose} >
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

                            <Form.Select aria-label="Default select example" value={course}
                                onChange={(event) => setCourse(event.target.value)} required={true}>
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
                            <Button type='submit' className='sumbit-btn'>Submit</Button>
                        </Form>
                    </Modal.Body>

                </Modal>
            </Card>

        </div>
    )
}

export default Corejava