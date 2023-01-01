import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import '../stylepages/Order.css';
import con from "../image/con 6 1.png";
import Google1 from "../image/google play 1.png";
import Google2 from "../image/google play 2.png";
import cap from "../image/Capture.PNG";
import Arrow from "../image/arrow.png";
import Footer from './Footer';

function Order() {
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
                            <p className='pera-s'>After A Good Dinner One Can Forgive Anybody<br></br>
                                Even One’s Own Relations.</p>
                            <Button type='button' className='order-btn'>Order Now <img src={Arrow} className="arrow" /></Button>
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