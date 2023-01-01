import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Con from "../image/con_images.png";
import '../stylepages/Course.css'

function Course() {
    return (
        <div className='course'>
            <div className='course-page'>
                <Row>
                    <Col md={7}>
                        <img src={Con}
                            className='Con-img' />
                    </Col>
                    <Col md={5}>
                        <h1 className='hs'>We Provide <span className='hs1'>Courses</span>
                            Online </h1>
                        <p className='ps'>Learn from anywhere and at your comfort.
                            Just an laptop with internet connectivity is
                            all that is need and we will take care of the rest.
                            Courses and deliverables as customised so as to
                            eanble elarning things by doing</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Course