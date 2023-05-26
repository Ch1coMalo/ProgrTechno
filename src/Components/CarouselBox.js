import React from "react";
import { Carousel } from "react-bootstrap";
import man from "../Components/8417765.jpg";
import med1 from "../images/medcial.jpg";
import med2 from "../images/prodvizhenie-chastnoj-kliniki-v-instagram (2).jpg";

export default function CarouselBox() {
    return (
        <Carousel>
           <Carousel.Item style={{ 'height': '700px' }} >
            <img
                className="d-block w-100 p-3 "
                src={med1}
                alt="First"
            />
            <Carousel.Caption>
                    <h3>    </h3>
                <p>
                    
                </p>
            </Carousel.Caption>
           </Carousel.Item>

           <Carousel.Item style={{ 'height': '700px' }} >
            <img
                className="d-block w-100 p-3"
                src={med2}
                alt="Second"
            />
            <Carousel.Caption>
                    <h3>    </h3>
                <p>
                    
                </p>
            </Carousel.Caption>
           </Carousel.Item>
        </Carousel>
    );
}

