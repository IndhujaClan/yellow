import React, { useState } from 'react'
import { Button, Card, CarouselItem, Col, Modal, Row } from 'react-bootstrap'
import Star from "../image/Star 3.png";
import '../stylepages/PopularCourse.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Item from '../Item';
import MsOffice from '../CoursePopup/MsOffice';
import FEDeveloper from '../CoursePopup/FEDeveloper';
import ReactDeveloper from '../CoursePopup/ReactDeveloper';
import AngularDep from '../CoursePopup/AngularDep';
import SoftwareTesting from '../CoursePopup/SoftwareTesting';
import FulllDep from '../CoursePopup/FulllDep';
import FullMEAN from '../CoursePopup/FullMEAN';
import Corejava from '../CoursePopup/Corejava';
import Net from '../CoursePopup/Net';
import VisualDesign from '../CoursePopup/VisualDesign';
import MobileAndroid from '../CoursePopup/MobileAndroid';
import MobileiOS from '../CoursePopup/MobileiOS';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
function PopularCourse() {

    return (

        <div className='Popular'>
            <div className='popular-card'>
                <h1 className='popu-hs'>
                    Popular<span className='popu-span'>Courses</span>
                </h1>
                <div>
                    <Carousel responsive={responsive}>
                        <div>
                            <MsOffice />
                        </div>
                        <div>
                            <FEDeveloper />
                        </div>
                        <div>
                            <ReactDeveloper />
                        </div>
                        <div>
                            <AngularDep />
                        </div>
                        <div>
                            <SoftwareTesting />
                        </div>
                        <div>
                            <FulllDep />
                        </div>
                    </Carousel>
                    <Carousel responsive={responsive}>
                        <div>
                            <FullMEAN />
                        </div>
                        <div>
                            <Corejava />
                        </div>
                        <div>
                            <Net />
                        </div>
                        <div>
                            <VisualDesign />
                        </div>
                        <div>
                            <MobileAndroid />
                        </div>
                        <div>
                            <MobileiOS />
                        </div>
                    </Carousel>
                </div>
            </div>

        </div >
    )
}

export default PopularCourse