import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../stylepages/Footer.css'

function Footer() {
    return (
        <div className='Footer'>
            <div className='top'>

                <Row style={{ justifyContent: 'center' }}>
                    <Col md={2}>

                    </Col>
                    <Col md={3} style={{ justifyContent: 'center' }}>
                        <h1 className='hs-footer'>Company</h1>
                        <p className='Pera-footer'>About Us</p>
                        <p className='Pera-footer'>Careers
                        </p>

                    </Col>
                    <Col md={3} style={{ justifyContent: 'center' }}>
                        <h1 className='hs-footer'>Resources</h1>
                        <p className='Pera-footer'>Blog</p>
                        <p className='Pera-footer'>Help centre
                        </p>

                    </Col>
                    <Col md={3} style={{ justifyContent: 'center' }}>
                        <h1 className='hs-footer'>Product</h1>
                        <p className='Pera-footer'>Pricing</p>
                        <p className='Pera-footer'>Enterprise</p>

                    </Col>
                    <Col md={1}>

                    </Col>
                </Row>

            </div >

        </div >
    )
}

export default Footer