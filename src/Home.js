import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeBanner from './pages/HomeBanner';
import Course from './pages/Course';
import OurFeature from './pages/OurFeature';
import PopularCourse from './pages/PopularCourse';
import Order from './pages/Order';


function Home() {
    return (
        <div>
            <HomeBanner />
            <Course />
            <OurFeature />
            <PopularCourse />
            <Order />
        </div>
    )
}

export default Home