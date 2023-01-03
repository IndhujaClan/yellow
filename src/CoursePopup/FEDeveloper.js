import React, { useState } from 'react'
import img2 from "../image/img2.png";
import Star from "../image/Star 3.png";
import { Button, Card, Modal } from 'react-bootstrap'

function FEDeveloper() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card>
        <img variant="top" src={img2}
          className='Group-img2' width={200} height={130} />
        <Card.Body>
          <p className='p-img'><img src={Star} width={10} height={10}
            style={{
              marginRight: '7px',
              marginBottom: '4px'
            }} />4.9( 430 Reviews)</p>
          <Card.Text style={{ fontWeight: 'bold', fontSize: '14px' }}>
            Front-End Developer
          </Card.Text>
        </Card.Body>
        <Button type='button' className='View-btn' onClick={handleShow}>View Course</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title><b>Front End Developer</b></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <b>Duration</b><br></br>
            40 days
            <br></br><br></br>
            <b>Batches</b><br></br>
            2 hours per day / 8 hours on the weekends
            <br></br><br></br>
            <b>Topics</b><br></br>
            HTML<br></br>
            CSS<br></br>
            Bootstrap<br></br><br></br>
            <b>Internship</b><br></br>
            2-4 months</Modal.Body>

        </Modal>
      </Card>
    </div>
  )
}

export default FEDeveloper