import React from "react";
import { Carousel } from "react-bootstrap/Carousel";
import CarouselBox from "../Components/CarouselBox";
import { Row,Container,Col } from "react-bootstrap";
import backgr from "../Components/image.png";
import heal from "../Components/xf94cce6390b34857c6e814cd19ea8d23.jpg.pagespeed.ic.bpxIFP9gM0.jpg";
import { Link } from "react-router-dom";

export const Home = () => (
    <>
        <div class="image">
            <img src={backgr} height={650} width={1588}></img>
        </div>
        <h2 style={{ padding: '50px' }}> О нашей клинике </h2>

        <Container style={{ marginBottom: '100px' }}>

            <Row>
                <Col mr={7}>
                    <img src={heal}
                     height={400} />
                </Col>
                <Col>

                    <div style={{ padding: '80px' }}>
                    В "Белой ромашке" вы получите квалифицированных врачей с большим опытом работы, которые участвуют в научных конференциях и семинарах и постоянно повышают свой профессиональный уровень. 
                    Также большой выбор лабораторных и инструментальных методов диагностики, индивидуальный подход к каждому пациенту, возможность пройти сразу несколько обследований в течение одного дня и удобный график.

                    </div>

                </Col>
            </Row>
        </Container>

        <div class="p-5 mb-4 bg-secondary rounded-3">
            <div class="container-fluid py-5">
                <h3 class="display-7 fw-bold text-white">Миссия поликлиники</h3>
                <p class="col-md-6 fs-4 text-white">Нам доверяют самое ценное!</p>
                <Link to="/doctors"><button type="button" class="btn btn-light">Записаться на прием</button></Link>
            </div>
        </div>
    </>
);


