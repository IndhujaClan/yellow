import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import Con8 from "../image/con_8.png";
import Star from "../image/Star 3.png";


function MobileAndroid() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Card>
                <img variant="top" src={Con8}
                    className='Group-img2' width={180} height={130} style={{ paddingLeft: "3rem" }} />
                <Card.Body>
                    <p className='p-img'><img src={Star} width={10} height={10}
                        style={{
                            marginRight: '7px',
                            marginBottom: '4px'
                        }} />4.9( 430 Reviews)</p>
                    <Card.Text style={{ fontWeight: 'bold', fontSize: '14px' }}>
                        Mobile Application Developer (Android)
                    </Card.Text>
                </Card.Body>
                <Button type='button' className='View-btn' onClick={handleShow}>View Course</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> Mobile Application Developer (Android)</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><b>Duration</b><br></br>
                        90 days <br></br><br></br>

                        <b>Batches</b><br></br>
                        2 hours per day / 8 hours on the weekends<br></br><br></br>

                        <b>Topics</b><br></br>
                        Native Android<br></br><br></br>

                        <b>Internship</b> <br></br>
                        NA


                    </Modal.Body>

                </Modal>
            </Card>
        </div>
    )
}

export default MobileAndroid