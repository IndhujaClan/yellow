import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import img11 from "../image/img11.png";
import Star from "../image/Star 3.png";

function VisualDesign() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Card>
                <img variant="top" src={img11}
                    className='Group-img2' width={150} height={130} style={{ marginLeft: "1rem" }} />
                <Card.Body>
                    <p className='p-img'><img src={Star} width={10} height={10}
                        style={{
                            marginRight: '7px',
                            marginBottom: '4px'
                        }} />4.9( 430 Reviews)</p>
                    <Card.Text style={{ fontWeight: 'bold', fontSize: '16px' }}>
                        Visual Design
                    </Card.Text>
                </Card.Body>
                <Button type='button' className='View-btn' onClick={handleShow}>View Course</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> Visual Design</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><b>Duration</b><br></br>
                        90 days <br></br><br></br>

                        <b>Batches</b><br></br>
                        2 hours per day / 8 hours on the weekends<br></br><br></br>

                        <b>Topics</b><br></br>
                        Wireframe<br></br>
                        Visual Design using Figma<br></br><br></br>

                        <b>Internship</b> <br></br>
                        NA</Modal.Body>

                </Modal>
            </Card>

        </div>
    )
}

export default VisualDesign