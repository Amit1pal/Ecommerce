import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './hero.css';
let Hero =()=>{
    return (
        <div className='hero_section_wrapper'>
           <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <div className='slider_content'>
                        <img className="w-90 slider_img"src="https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-1.png"alt="First slide"/>
                        <Carousel.Caption>
                            <h5>Smart Products</h5>
                            <p>Summer Offer Collection 2024</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='slider_content'>
                        <img className="w-90 slider_img" src="https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-hm1-2.png" alt="Second slide"/>
                        <Carousel.Caption>
                            <h5>Smart Products</h5>
                            <p>Winter Offer Collection 2024</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
    </Carousel>
        </div>
    )
}
export default Hero;