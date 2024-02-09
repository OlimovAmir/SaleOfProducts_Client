import React from 'react'
import { Carousel } from 'react-bootstrap';
import slide1 from '../assets/1.jpg'
import slide2 from '../assets/2.jpg'
import slide3 from '../assets/3.jpg'

import '../styles/App.css';
function CarouselBox() {
    return (
        <Carousel>
            <Carousel.Item className="my-slider">
                <img
                    className="d-block w-100 "
                    src={slide1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Slide 1</h3>
                    <p>Some description for slide 1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="my-slider">
                <img
                    className="d-block w-100 "
                    src={slide2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Slide 2</h3>
                    <p>Some description for slide 2</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="my-slider">
                <img
                    className="d-block w-100 "
                    src={slide3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Slide 3</h3>
                    <p>Some description for slide 3</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselBox