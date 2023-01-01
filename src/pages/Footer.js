import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../stylepages/Footer.css'

function Footer() {
    return (
        <div className='Footer'>
            <div className='top'>
                <Row>
                    <Col md={5}>
                        <p className='Pera-footer1'>
                            Speed up the still acquistiton process by<br></br>
                            finding unlimited courses that matches<br></br> your
                            niche.
                        </p>
                    </Col>
                    <Col md={7}>
                        <Row>
                            <Col md={4}>
                                <h1 className='hs-footer'>Company</h1>
                                <p className='Pera-footer'>About Us</p>
                                <p className='Pera-footer'>Careers
                                </p>
                                <p className='Pera-footer'>Press Kit</p>
                            </Col>
                            <Col md={4}>
                                <h1 className='hs-footer'>Resources</h1>
                                <p className='Pera-footer'>Blog</p>
                                <p className='Pera-footer'>Help centre
                                </p>
                                <p className='Pera-footer'>UX Research Guide</p>
                            </Col>
                            <Col md={4}>
                                <h1 className='hs-footer'>Product</h1>
                                <p className='Pera-footer'>Pricing</p>
                                <p className='Pera-footer'>Enterprise</p>
                                <p className='Pera-footer'>Intergrate</p>
                            </Col>
                        </Row>


                    </Col>
                </Row>

            </div>
            <div className='Bottom'>
                <p className='Pera-footer'>@ Musemind  2022 | All right reserved </p>
                <p className='Pera-footer'>Terms & Privacy policy</p>
            </div>
        </div>
    )
}

export default Footer