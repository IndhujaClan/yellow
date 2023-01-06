import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Group from "../image/Group 10.png";
import Group1 from "../image/Group 30.png";
import Group2 from "../image/Group 31.png";
import Group3 from "../image/Group 32.png";
import Group4 from "../image/Group 33.png";
import '../stylepages/OurFeature.css';
import Arrow from "../image/arrow.png";

function OurFeature() {
  return (

    <div className='OurFeature'>
      <div className='Top'>

      </div>
      <div className='Feature'>
        <div className='cardpart'>
          <Row>
            <Col md={8}>
              <div className='BlackPart'>
                <img src={Group}
                  className='Group-img1' />
                <Button type="button" className='Feature-btn'>See All Feature<img src={Arrow} className="arrow" /></Button>
              </div>

            </Col>
            <Col md={4}>
              <Card style={{
                marginLeft: '2rem',
                marginTop: '0',
                marginRight: '2rem',

              }}>
                <img variant="top" src={Group1}
                  className='Group-img2' width={90} height={75} style={{ margin: '20px 0px 0px 20px' }} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Get Certificate</Card.Title>
                  <Card.Text><p className='Card-pera'>Get a certificate but we ensure
                    you get more than just a certificate.
                    You actually get the skills menationed
                    in your certificate.</p>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card>
                <img variant="top" src={Group2}
                  className='Group-img2' width={94} height={70} style
                  ={{ margin: '20px 0px 0px 20px' }} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Amazing Instructor</Card.Title>
                  <Card.Text><p className='Card-pera'>Our amazing Instructor are industry experts who bring along  Experience. Knowledge And Fun
                    On The Table</p>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <img variant="top" src={Group3}
                  className='Group-img2' width={95} height={70} style
                  ={{ margin: '20px 0px 0px 20px' }} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Internship Experience</Card.Title>
                  <Card.Text><p className='Card-pera'>Get internship  from industry post your completion of courses that will add credit and experience to your portfolio</p>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <img variant="top" src={Group4}
                  className='Group-img2' width={110} height={75} style
                  ={{ margin: '20px 0px 0px 20px' }} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>Live Classes</Card.Title>
                  <Card.Text><p className='Card-pera'>
                    Online doesn’t mean recorded video.
                    Our online course will be live classes
                    tuned by Industry edperts.
                  </p>

                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>


        </div>

      </div>
    </div>
  )
}

export default OurFeature